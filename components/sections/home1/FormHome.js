'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // opcional
import { toast } from 'sonner'; // Notificaciones

/* ⏰ DEADLINE: fecha/hora de la CARRERA (hora Ecuador, UTC-5) */
const DEADLINE = new Date('2025-11-23T08:00:00-05:00').getTime();
// ↑ Cambia '2025-11-23T08:00:00-05:00' por tu fecha real de carrera

/* =========================================================
   Configuración integración WordPress (admin-ajax)
   ========================================================= */
const MANDARINA_AJAX_URL = 'https://mandarinas.10kindependenciadeambato.com/wp-admin/admin-ajax.php';
const MANDARINA_API_KEY  = 'M4nd4r1n4!2025#8K';
const MANDARINA_MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB

/* =========================================================
   Opciones de categorías con precios en etiqueta
   ========================================================= */
const CATEGORIES = {
  principales: [
    { value: 'ELITE',   label: 'ELITE PRO 8K (Menores de 40 años) ($23)' }, // sin cambios
  ],
  master: [
    { value: 'MASTER',  label: 'MASTER (40–64 años) ($23)' },               // actualizado
    { value: 'LEYENDA', label: 'LEYENDA (65+ años) ($18)' },                // actualizado
  ],
  especiales: [
    { value: 'ESPECIALES', label: 'ESPECIALES (Abierto) ($18)' },           // actualizado
  ],
};

/* Valor numérico en USD por categoría (sin cambios) */
const CATEGORY_PRICE = {
  ELITE:      23,
  MASTER:     23,
  LEYENDA:    18,
  ESPECIALES: 18,
};

/* Info bancaria (solo display; no se incluye en el mensaje WA) */
const BANK_INFO = {
  banco: 'Banco Pichincha',
  titular: 'Diego Mantilla',
  cuenta: '3148516004',
  tipo: 'Cuenta Corriente',
  ruc: '1802796829-001',
  celular: '+593997241804',
};

/* ============================== Helpers ============================== */
function getCategoryLabel(value) {
  for (const group of Object.values(CATEGORIES)) {
    const found = group.find((c) => c.value === value);
    if (found) return found.label;
  }
  return value || '';
}

function sanitize(str = '') {
  return String(str).trim().replace(/[\u0000-\u001F]+/g, '');
}

/* Teléfono genérico: solo dígitos, 7–15 */
const onlyDigits = (s = '') => s.replace(/\D/g, '');
function normalizePhoneInput(raw = '') {
  return onlyDigits(raw).slice(0, 15);
}
function isValidPhoneGeneric(raw = '') {
  const d = onlyDigits(raw);
  return d.length >= 7 && d.length <= 15;
}

/* Envía los datos del formulario + archivo al plugin Mandarina Inscripciones en WP */
async function saveToWP_viaAjax(formState) {
  const body = new FormData();
  body.append('action', 'mandarina_submit_inscripcion');
  body.append('api_key', MANDARINA_API_KEY);
  body.append('nombre', formState.nombre);
  body.append('edad', formState.edad);
  body.append('genero', formState.genero);
  body.append('cedula', formState.cedula);
  body.append('celular', formState.celular);
  body.append('mail', formState.mail);
  body.append('ciudad', formState.ciudad);
  body.append('categoria', formState.categoria);
  body.append('monto', CATEGORY_PRICE[formState.categoria] ?? '');

  if (typeof window !== 'undefined') {
    body.append('referer', window.location.href);
  }

  if (formState.comprobante) body.append('comprobante', formState.comprobante);

  const res = await fetch(MANDARINA_AJAX_URL, { method: 'POST', body });
  if (!res.ok) throw new Error('Error conexión con WordPress');

  let json;
  try {
    json = await res.json();
  } catch {
    throw new Error('Respuesta no válida del servidor');
  }
  return json;
}

/* Detectores ligeros */
function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}
function isAndroid() {
  if (typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent);
}

export default function SectionFormInscripcion() {
  const [step, setStep] = useState(1);
  const formularioRef = useRef(null);
  const fileRef = useRef(null);
  const submitLockRef = useRef(false); // lock inmediato anti-doble envío

  /* ⏳ Contador seguro para export estático: calcula tras mount */
  const [timeLeft, setTimeLeft] = useState(null);
  useEffect(() => {
    const tick = () => setTimeLeft(DEADLINE - Date.now());
    tick(); // calcula al montar (evita mismatch SSR/CSR)
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const expired = timeLeft !== null && timeLeft <= 0;

  function formatTime(ms) {
    if (ms == null || ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSec / 3600)).padStart(2,'0');
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2,'0');
    const s = String(totalSec % 60).padStart(2,'0');
    return `${h}:${m}:${s}`;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#formulario' && formularioRef.current) {
        setTimeout(() => {
          formularioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    genero: '',
    cedula: '',
    celular: '',
    mail: '',
    ciudad: '',
    categoria: '',
    comprobante: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    const val = type === 'file' ? (files?.[0] || null)
                                : (name === 'celular' ? normalizePhoneInput(value) : value);
    setForm((f) => ({ ...f, [name]: val }));
  };

  const handlePhoneKeyDown = (e) => {
    const allowed = ['Backspace','Delete','ArrowLeft','ArrowRight','Tab','Home','End'];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const handlePhonePaste = (e) => {
    const text = e.clipboardData.getData('text');
    const cleaned = normalizePhoneInput(text);
    e.preventDefault();
    setForm((f) => ({ ...f, celular: cleaned }));
  };

  const validateStep1 = () => {
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = 'Requerido.';
    if (!form.edad || isNaN(+form.edad)) errs.edad = 'Ingresa una edad válida.';
    if (!form.genero) errs.genero = 'Selecciona un género.';
    if (!form.cedula.trim()) errs.cedula = 'Requerido.';
    if (!isValidPhoneGeneric(form.celular)) {
      errs.celular = 'Teléfono inválido. Solo números (7–15 dígitos).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.mail)) errs.mail = 'Correo inválido.';
    if (!form.ciudad.trim()) errs.ciudad = 'Requerido.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!form.categoria) errs.categoria = 'Selecciona una categoría.';
    if (!form.comprobante) errs.comprobante = 'Sube tu comprobante de pago.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => { if (step === 1 && validateStep1()) setStep(2); };
  const prevStep = () => { if (!isSubmitting) setStep(1); };

  /* Redirección a WhatsApp en la MISMA pestaña (iOS/Android: app nativa -> web fallback) */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 🚫 Bloqueo por horario límite */
    if (timeLeft !== null && timeLeft <= 0) {
      toast.error('⛔ Inscripciones cerradas (después de las 14:00 de hoy, hora Ecuador).');
      return;
    }

    // LOCK inmediato para evitar múltiples submits
    if (submitLockRef.current) {
      toast.info('Se están inscribiendo, espere por favor…');
      return;
    }
    submitLockRef.current = true;

    if (!validateStep2()) {
      submitLockRef.current = false;
      return;
    }

    // Validaciones de tipo y tamaño del archivo
    if (form.comprobante) {
      const okTypes = ['image/jpeg','image/png','application/pdf'];
      if (!okTypes.includes(form.comprobante.type)) {
        toast.error('Formato no admitido. Sube JPG, PNG o PDF.');
        submitLockRef.current = false;
        return;
      }
      if (form.comprobante.size > MANDARINA_MAX_FILE_BYTES) {
        toast.error('El comprobante supera 5MB. Súbelo más liviano.');
        submitLockRef.current = false;
        return;
      }
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Se están inscribiendo, espere por favor…');

    let mediaUrl = '';
    try {
      const wpResp = await saveToWP_viaAjax(form);
      if (!wpResp.success) throw new Error(wpResp.error || 'Error servidor');
      mediaUrl = wpResp.mediaUrl || '';
      if (mediaUrl && mediaUrl.startsWith('http://')) {
        mediaUrl = mediaUrl.replace(/^http:\/\//i, 'https://');
      }
    } catch (err) {
      console.error(err);
      toast.dismiss(toastId);
      toast.error('No se pudo guardar la inscripción. Intenta de nuevo.');
      setIsSubmitting(false);
      submitLockRef.current = false;
      return;
    }

    const price = CATEGORY_PRICE[form.categoria] ?? '';
    const catLabel = getCategoryLabel(form.categoria);
    const safe = {
      nombre:  sanitize(form.nombre),
      edad:    sanitize(form.edad),
      genero:  sanitize(form.genero || '-'),
      cedula:  sanitize(form.cedula),
      celular: sanitize(form.celular),
      mail:    sanitize(form.mail),
      ciudad:  sanitize(form.ciudad),
    };

    const msgLines = [
      'Hola, me quiero inscribir en la *10K Independencia de Ambato 2025*.',
      '',
      '*Datos del participante:*',
      `Nombre: ${safe.nombre}`,
      `Edad: ${safe.edad}`,
      `Género: ${safe.genero}`,
      `Cédula/Pasaporte: ${safe.cedula}`,
      `Celular: ${safe.celular}`,
      `Correo: ${safe.mail}`,
      `Ciudad: ${safe.ciudad}`,
      `Categoría: ${catLabel}`,
      price ? `Valor transferido: $${price}` : '',
      `Adjunto foto del comprobante a continuación${mediaUrl ? `: ${mediaUrl}` : '.'}`,
      'Por favor confirma mi inscripción. ¡Gracias!',
    ].filter(Boolean);

    let waNumber = BANK_INFO.celular.replace(/\D/g, '');
    if (/^09\d{8}$/.test(waNumber)) waNumber = '593' + waNumber.slice(1);

    const encoded = encodeURIComponent(msgLines.join('\n'));
    const waNative = `whatsapp://send?phone=${waNumber}&text=${encoded}`;
    const waWeb    = `https://wa.me/${waNumber}?text=${encoded}`;

    try {
      if (isIOS() || isAndroid()) {
        window.location.href = waNative;
        setTimeout(() => {
          if (!document.hidden) window.location.href = waWeb;
        }, 1000);
      } else {
        window.location.href = waWeb;
      }
    } catch {
      window.location.href = waWeb;
    }

    toast.dismiss(toastId);
    toast.success('Se abrirá WhatsApp con tus datos. Si subiste comprobante, ya quedó guardado en el sistema.');

    // Reset seguro
    setForm({
      nombre: '',
      edad: '',
      genero: '',
      cedula: '',
      celular: '',
      mail: '',
      ciudad: '',
      categoria: '',
      comprobante: null,
    });
    setStep(1);
    setErrors({});
    setIsSubmitting(false);
    submitLockRef.current = false;
    if (fileRef.current) fileRef.current.value = '';
  };

  const priceText = (() => {
    if (!form.categoria) return '';
    const price = CATEGORY_PRICE[form.categoria];
    return price ? `Valor de inscripción: $${price}.` : '';
  })();

  return (
    <section
      id="formulario"
      ref={formularioRef}
      className="section-box mandarina-form-wrapper scroll-offset"
    >
      <div className="container">
        <h2 className="mandarina-form-title">Inscripción Oficial 10K Independencia de Ambato 2025</h2>

        {/* ⏳ Contador (con placeholder para evitar hydration) */}
        <div
          className="mandarina-countdown"
          role="status"
          aria-live="polite"
          suppressHydrationWarning={true}
        >
          {timeLeft === null ? (
            <p>⏳ Calculando…</p>
          ) : expired ? (
            <p className="expired">⛔ Inscripciones cerradas</p>
          ) : (
            <p>
              ⏳ Tiempo restante para inscribirse: <strong>{formatTime(timeLeft)}</strong>
            </p>
          )}
        </div>

        <p className="mandarina-form-intro">
          Completa tus datos en 2 pasos y envíalos por WhatsApp. Después de enviar el mensaje,
          adjunta la foto de tu comprobante para validar tu inscripción.
        </p>

        {/* indicador paso */}
        <div className="mandarina-form-steps" role="status" aria-live="polite">
          <span className={step === 1 ? 'is-current' : ''}>Paso 1</span>
          <span className={step === 2 ? 'is-current' : ''}>Paso 2</span>
        </div>

        <form
          className="mandarina-form on-dark"
          onSubmit={handleSubmit}
          noValidate
          onKeyDown={(ev) => { if (isSubmitting && ev.key === 'Enter') ev.preventDefault(); }}
        >
          {step === 1 && (
            <fieldset className="mandarina-form-fieldset" disabled={isSubmitting}>
              <legend>Datos Personales</legend>

              <div className="mandarina-field">
                <label htmlFor="nombre">Nombre Completo *</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ej: María J. Pérez"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'err-nombre' : undefined}
                />
                {errors.nombre && <span id="err-nombre" className="mandarina-error">{errors.nombre}</span>}
              </div>

              <div className="mandarina-field-group">
                <div className="mandarina-field">
                  <label htmlFor="edad">Edad *</label>
                  <input
                    id="edad"
                    name="edad"
                    type="number"
                    min="0"
                    max="120"
                    placeholder="Ej: 32"
                    value={form.edad}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    aria-invalid={!!errors.edad}
                    aria-describedby={errors.edad ? 'err-edad' : undefined}
                  />
                  {errors.edad && <span id="err-edad" className="mandarina-error">{errors.edad}</span>}
                </div>

                <div className="mandarina-field">
                  <label htmlFor="genero">Género *</label>
                  <select
                    id="genero"
                    name="genero"
                    value={form.genero}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.genero}
                    aria-describedby={errors.genero ? 'err-genero' : undefined}
                  >
                    <option value="">Selecciona…</option>
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                    <option value="X">Prefiero no decir</option>
                  </select>
                  {errors.genero && <span id="err-genero" className="mandarina-error">{errors.genero}</span>}
                </div>
              </div>

              <div className="mandarina-field">
                <label htmlFor="cedula">Cédula / Pasaporte *</label>
                <input
                  id="cedula"
                  name="cedula"
                  type="text"
                  placeholder="Solo números, sin guiones"
                  value={form.cedula}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  aria-invalid={!!errors.cedula}
                  aria-describedby={errors.cedula ? 'err-cedula' : undefined}
                />
                {errors.cedula && <span id="err-cedula" className="mandarina-error">{errors.cedula}</span>}
              </div>

              <div className="mandarina-field">
                <label htmlFor="celular">Celular / WhatsApp *</label>
                <input
                  id="celular"
                  name="celular"
                  type="tel"
                  placeholder="0999999999"
                  value={form.celular}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
                  onPaste={handlePhonePaste}
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={15}
                  autoComplete="tel"
                  aria-invalid={!!errors.celular}
                  aria-describedby={errors.celular ? 'err-celular' : 'hint-celular'}
                />
                {errors.celular && (
                  <span id="err-celular" className="mandarina-error">{errors.celular}</span>
                )}
                <small id="hint-celular" className="mandarina-hint">
                  Solo números (7–15 dígitos).
                </small>
              </div>

              <div className="mandarina-field">
                <label htmlFor="mail">Correo Electrónico *</label>
                <input
                  id="mail"
                  name="mail"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.mail}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  aria-invalid={!!errors.mail}
                  aria-describedby={errors.mail ? 'err-mail' : undefined}
                />
                {errors.mail && <span id="err-mail" className="mandarina-error">{errors.mail}</span>}
              </div>

              <div className="mandarina-field">
                <label htmlFor="ciudad">Ciudad *</label>
                <input
                  id="ciudad"
                  name="ciudad"
                  type="text"
                  placeholder="Ej: Ambato"
                  value={form.ciudad}
                  onChange={handleChange}
                  required
                  autoComplete="address-level2"
                  aria-invalid={!!errors.ciudad}
                  aria-describedby={errors.ciudad ? 'err-ciudad' : undefined}
                />
                {errors.ciudad && <span id="err-ciudad" className="mandarina-error">{errors.ciudad}</span>}
              </div>

              <div className="mandarina-form-nav">
                <button
                  type="button"
                  className="mandarina-btn mandarina-btn-next"
                  onClick={nextStep}
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  Siguiente →
                </button>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="mandarina-form-fieldset" disabled={isSubmitting}>
              <legend>Categoría &amp; Pago</legend>

              <div className="mandarina-field">
                <label htmlFor="categoria">Selecciona tu Categoría *</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.categoria}
                  aria-describedby={errors.categoria ? 'err-categoria' : undefined}
                >
                  <option value="">Escoge tu categoría…</option>
                  <optgroup label="Categorías Principales">
                    {CATEGORIES.principales.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Master & Colegial">
                    {CATEGORIES.master.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Capacidades Especiales">
                    {CATEGORIES.especiales.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                </select>
                {errors.categoria && (
                  <span id="err-categoria" className="mandarina-error">{errors.categoria}</span>
                )}

                {priceText && (
                  <small className="mandarina-price-hint">{priceText}</small>
                )}
              </div>

              {/* ----- Info transferencia ----- */}
              <div className="mandarina-bank-card">
                <h3>Realiza la transferencia</h3>
                <p>
                  Una vez inscrito, realiza la transferencia bancaria y sube tu
                  comprobante debajo. Incluye <strong>tu nombre</strong> en la
                  referencia.
                </p>
                <ul>
                  <li><strong>Banco:</strong> {BANK_INFO.banco}</li>
                  <li><strong>Titular:</strong> {BANK_INFO.titular}</li>
                  <li><strong>Cuenta:</strong> {BANK_INFO.cuenta} ({BANK_INFO.tipo})</li>
                  <li><strong>RUC:</strong> {BANK_INFO.ruc}</li>
                  <li><strong>Celular:</strong> {BANK_INFO.celular}</li>
                </ul>
                <p className="mandarina-bank-wa">
                  ¿Pagaste por WhatsApp? Envía la foto del comprobante al mismo chat
                  para confirmar tu participación.
                </p>
              </div>

              <div className="mandarina-field">
                <label htmlFor="comprobante">Sube tu Comprobante (JPG/PNG/PDF) *</label>
                <input
                  id="comprobante"
                  name="comprobante"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleChange}
                  ref={fileRef}
                  required
                  aria-invalid={!!errors.comprobante}
                  aria-describedby={errors.comprobante ? 'err-comprobante' : undefined}
                />
                {errors.comprobante && (
                  <span id="err-comprobante" className="mandarina-error">{errors.comprobante}</span>
                )}
                {form.comprobante && (
                  <small className="mandarina-file-name">
                    Archivo: {form.comprobante.name}
                  </small>
                )}
              </div>

              <div className="mandarina-form-nav is-two">
                <button
                  type="button"
                  className="mandarina-btn mandarina-btn-prev"
                  onClick={prevStep}
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  ← Atrás
                </button>
                <button
                  type="submit"
                  className="mandarina-btn mandarina-btn-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando…' : '¡Inscríbete ahora!'}
                </button>
              </div>
            </fieldset>
          )}
        </form>

        <p className="mandarina-form-privacy">
          Tus datos serán usados solo para la inscripción y comunicaciones oficiales del
          evento. Nunca compartiremos tu información sin permiso. Cada comprobante
          corresponde a <strong>1 inscrito</strong>; montos incorrectos o categoría
          equivocada podrían requerir ajuste y no son reembolsables según políticas del
          evento.
        </p>
      </div>
    </section>
  );
}
