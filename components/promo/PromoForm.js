'use client';
import { useState, useEffect, useRef } from 'react'
import { toast } from 'sonner'

const MANDARINA_AJAX_URL = 'https://mandarinas.10kindependenciadeambato.com/wp-admin/admin-ajax.php'
const MANDARINA_API_KEY  = 'M4nd4r1n4!2025#8K'
const MANDARINA_MAX_FILE_BYTES = 5 * 1024 * 1024 // 5MB

const DOBLE_TAG = ' (2 carreras: 8K + 10K • $40)'

const CATEGORIES = {
  principales: [{ value: 'ELITE',   label: 'ELITE PRO (Menores de 40 años)' + DOBLE_TAG }],
  master:      [
    { value: 'MASTER',  label: 'MASTER (40–59 años)' + DOBLE_TAG },
    { value: 'LEYENDA', label: 'LEYENDA (60+ años)' + DOBLE_TAG }
  ],
  especiales:  [{ value: 'ESPECIALES', label: 'ESPECIALES (Carnet CONADIS)' + DOBLE_TAG }],
}

const CATEGORY_PRICE = { ELITE: 40, MASTER: 40, LEYENDA: 40, ESPECIALES: 40 }

const BANK_INFO = {
  banco: 'Banco Pichincha',
  titular: 'Diego Mantilla',
  cuenta: '3148516004',
  tipo: 'Cuenta Corriente',
  ruc: '1802796829-001',
  celular: '+593995040437',
}

function getCategoryLabel(v){
  for (const group of Object.values(CATEGORIES)) {
    const found = group.find(x => x.value === v)
    if (found) return found.label
  }
  return v || ''
}
function sanitize(s=''){ return String(s).trim().replace(/[\u0000-\u001F]+/g,'') }

async function saveToWP_viaAjax(formState){
  const body = new FormData()
  body.append('action','mandarina_submit_inscripcion')
  body.append('api_key',MANDARINA_API_KEY)
  body.append('nombre',formState.nombre)
  body.append('edad',formState.edad)
  body.append('genero',formState.genero)
  body.append('cedula',formState.cedula)
  body.append('celular',formState.celular)
  body.append('mail',formState.mail)
  body.append('ciudad',formState.ciudad)
  body.append('categoria',formState.categoria)
  body.append('monto',CATEGORY_PRICE[formState.categoria] ?? '')
  if (typeof window!=='undefined') body.append('referer', window.location.href)
  if (formState.comprobante) body.append('comprobante', formState.comprobante)

  const res = await fetch(MANDARINA_AJAX_URL,{method:'POST',body})
  if(!res.ok) throw new Error('Error conexión con WordPress')
  const json = await res.json().catch(()=>{throw new Error('Respuesta no válida del servidor')})
  return json
}

function isIOS(){ if(typeof navigator==='undefined')return false; return /iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1) }
function isAndroid(){ if(typeof navigator==='undefined')return false; return /Android/i.test(navigator.userAgent) }

export default function SectionFormInscripcion(){
  const [step,setStep]=useState(1)
  const formularioRef=useRef(null)
  const fileRef=useRef(null)

  useEffect(()=>{ 
    if(typeof window!=='undefined'){ 
      const h=window.location.hash
      if(h==='#formulario'&&formularioRef.current){
        setTimeout(()=>{ formularioRef.current.scrollIntoView({behavior:'smooth',block:'start'}) },200)
      }
    }
  },[])

  const [form,setForm]=useState({
    nombre:'', edad:'', genero:'', cedula:'', celular:'', mail:'', ciudad:'', categoria:'', comprobante:null
  })
  const [errors,setErrors]=useState({})
  const [isSubmitting,setIsSubmitting]=useState(false)

  const handleChange=(e)=>{
    const {name,value,files,type} = e.target
    setForm(f=>({...f,[name]: type==='file' ? (files?.[0]||null) : value}))
  }

  const validateStep1=()=>{
    const errs={}
    if(!form.nombre.trim()) errs.nombre='Requerido.'
    if(!form.edad||isNaN(+form.edad)) errs.edad='Ingresa una edad válida.'
    if(!form.genero) errs.genero='Selecciona un género.'
    if(!form.cedula.trim()) errs.cedula='Requerido.'
    if(!/^\d{7,15}$/.test(form.celular.replace(/\D/g,''))) errs.celular='Teléfono inválido.'
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.mail)) errs.mail='Correo inválido.'
    if(!form.ciudad.trim()) errs.ciudad='Requerido.'
    setErrors(errs); 
    return Object.keys(errs).length===0
  }
  const validateStep2=()=>{
    const errs={}
    if(!form.categoria) errs.categoria='Selecciona una categoría.'
    if(!form.comprobante) errs.comprobante='Sube tu comprobante de pago.'
    setErrors(errs); 
    return Object.keys(errs).length===0
  }

  const nextStep=()=>{ if(step===1 && validateStep1()) setStep(2) }
  const prevStep=()=>setStep(1)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!validateStep2()) return

    if(form.comprobante){
      const ok=['image/jpeg','image/png','application/pdf']
      if(!ok.includes(form.comprobante.type)){ toast.error('Formato no admitido. Sube JPG, PNG o PDF.'); return }
      if(form.comprobante.size>MANDARINA_MAX_FILE_BYTES){ toast.error('El comprobante supera 5MB.'); return }
    }

    setIsSubmitting(true)
    let mediaUrl=''
    try{
      const wpResp=await saveToWP_viaAjax(form)
      if(!wpResp.success) throw new Error(wpResp.error||'Error servidor')
      mediaUrl = (wpResp.mediaUrl||'').replace(/^http:\/\//,'https://')
    }catch(err){ 
      console.error(err)
      toast.error('No se pudo guardar la inscripción.')
      setIsSubmitting(false)
      return
    }

    const price=CATEGORY_PRICE[form.categoria]??''
    const catLabel=getCategoryLabel(form.categoria)
    const safe={
      nombre:sanitize(form.nombre), edad:sanitize(form.edad), genero:sanitize(form.genero||'-'),
      cedula:sanitize(form.cedula), celular:sanitize(form.celular), mail:sanitize(form.mail), ciudad:sanitize(form.ciudad)
    }

    const msgLines=[
      'Hola, quiero la *Inscripción Doble (8K + 10K)*.',
      'Promoción $40 por 2 carreras.','',
      '*Datos del participante:*',
      `Nombre: ${safe.nombre}`,
      `Edad: ${safe.edad}`,
      `Género: ${safe.genero}`,
      `Cédula/Pasaporte: ${safe.cedula}`,
      `Celular: ${safe.celular}`,
      `Correo: ${safe.mail}`,
      `Ciudad: ${safe.ciudad}`,
      `Categoría: ${catLabel}`,
      price?`Valor transferido: $${price}`:'',
      `Adjunto comprobante${mediaUrl?`: ${mediaUrl}`:'.'}`,
      '¡Gracias!'
    ].filter(Boolean)

    let wa = BANK_INFO.celular.replace(/\D/g,'')
    if(/^09\d{8}$/.test(wa)) wa='593'+wa.slice(1)

    const encoded=encodeURIComponent(msgLines.join('\n'))
    const waNative=`whatsapp://send?phone=${wa}&text=${encoded}`
    const waWeb=`https://wa.me/${wa}?text=${encoded}`

    try{
      if(isIOS()||isAndroid()){
        window.location.href=waNative
        setTimeout(()=>{ if(!document.hidden) window.location.href=waWeb },900)
      } else {
        window.location.href=waWeb
      }
    }catch{
      window.location.href=waWeb
    }

    toast.success('Se abrirá WhatsApp con tus datos.')

    setForm({nombre:'',edad:'',genero:'',cedula:'',celular:'',mail:'',ciudad:'',categoria:'',comprobante:null})
    setStep(1); setErrors({}); setIsSubmitting(false)
    if(fileRef.current) fileRef.current.value=''
  }

  const priceText = form.categoria ? 'Inscripción Doble (8K + 10K): $40.' : ''

  return (
    <section id="formulario" ref={formularioRef}
      className="section-box mandarina-form-wrapper mandarina-compact scroll-offset">
      <div className="container">
        {/* SIN título/intro ni indicadores de pasos */}
        <form className="mandarina-form on-dark" onSubmit={handleSubmit} noValidate>
          {step===1 && (
            <fieldset className="mandarina-form-fieldset">
              <legend>Datos Personales</legend>

              <div className="mandarina-field">
                <label htmlFor="nombre">Nombre Completo *</label>
                <input id="nombre" name="nombre" type="text" placeholder="Ej: María J. Pérez"
                  value={form.nombre} onChange={handleChange} required autoComplete="name"
                  aria-invalid={!!errors.nombre} aria-describedby={errors.nombre?'err-nombre':undefined}/>
                {errors.nombre && <span id="err-nombre" className="mandarina-error">{errors.nombre}</span>}
              </div>

              <div className="mandarina-field-group">
                <div className="mandarina-field">
                  <label htmlFor="edad">Edad *</label>
                  <input id="edad" name="edad" type="number" min="0" max="120" placeholder="Ej: 32"
                    value={form.edad} onChange={handleChange} required inputMode="numeric"
                    aria-invalid={!!errors.edad} aria-describedby={errors.edad?'err-edad':undefined}/>
                  {errors.edad && <span id="err-edad" className="mandarina-error">{errors.edad}</span>}
                </div>

                <div className="mandarina-field">
                  <label htmlFor="genero">Género *</label>
                  <select id="genero" name="genero" value={form.genero} onChange={handleChange} required
                    aria-invalid={!!errors.genero} aria-describedby={errors.genero?'err-genero':undefined}>
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
                <input id="cedula" name="cedula" type="text" placeholder="Solo números, sin guiones"
                  value={form.cedula} onChange={handleChange} required inputMode="numeric"
                  aria-invalid={!!errors.cedula} aria-describedby={errors.cedula?'err-cedula':undefined}/>
                {errors.cedula && <span id="err-cedula" className="mandarina-error">{errors.cedula}</span>}
              </div>

              <div className="mandarina-field">
                <label htmlFor="celular">Celular / WhatsApp *</label>
                <input id="celular" name="celular" type="tel" placeholder="0999999999"
                  value={form.celular} onChange={handleChange} required inputMode="numeric" autoComplete="tel"
                  aria-invalid={!!errors.celular} aria-describedby={errors.celular?'err-celular':undefined}/>
                {errors.celular && <span id="err-celular" className="mandarina-error">{errors.celular}</span>}
              </div>

              <div className="mandarina-field">
                <label htmlFor="mail">Correo Electrónico *</label>
                <input id="mail" name="mail" type="email" placeholder="tu@correo.com"
                  value={form.mail} onChange={handleChange} required autoComplete="email"
                  aria-invalid={!!errors.mail} aria-describedby={errors.mail?'err-mail':undefined}/>
                {errors.mail && <span id="err-mail" className="mandarina-error">{errors.mail}</span>}
              </div>

              <div className="mandarina-field">
                <label htmlFor="ciudad">Ciudad *</label>
                <input id="ciudad" name="ciudad" type="text" placeholder="Ej: Ambato"
                  value={form.ciudad} onChange={handleChange} required autoComplete="address-level2"
                  aria-invalid={!!errors.ciudad} aria-describedby={errors.ciudad?'err-ciudad':undefined}/>
                {errors.ciudad && <span id="err-ciudad" className="mandarina-error">{errors.ciudad}</span>}
              </div>

              <div className="mandarina-form-nav">
                <button type="button" className="mandarina-btn mandarina-btn-next" onClick={nextStep}>
                  Siguiente →
                </button>
              </div>
            </fieldset>
          )}

          {step===2 && (
            <fieldset className="mandarina-form-fieldset">
              <legend>Categoría &amp; Pago</legend>

              <div className="mandarina-field">
                <label htmlFor="categoria">Selecciona tu Categoría *</label>
                <select id="categoria" name="categoria" value={form.categoria} onChange={handleChange} required
                  aria-invalid={!!errors.categoria} aria-describedby={errors.categoria?'err-categoria':undefined}>
                  <option value="">Escoge tu categoría…</option>
                  <optgroup label="Categorías Principales">
                    {CATEGORIES.principales.map(c=>(
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Master & Colegial">
                    {CATEGORIES.master.map(c=>(
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Capacidades Especiales">
                    {CATEGORIES.especiales.map(c=>(
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </optgroup>
                </select>
                {errors.categoria && <span id="err-categoria" className="mandarina-error">{errors.categoria}</span>}
                {priceText && <small className="mandarina-price-hint">{priceText}</small>}
              </div>

              <div className="mandarina-bank-card">
                <h3>03. Realiza la transferencia</h3>
                <ul>
                  <li><strong>Banco:</strong> {BANK_INFO.banco}</li>
                  <li><strong>Titular:</strong> {BANK_INFO.titular}</li>
                  <li><strong>Cuenta:</strong> {BANK_INFO.cuenta} ({BANK_INFO.tipo})</li>
                  <li><strong>RUC:</strong> {BANK_INFO.ruc}</li>
                  <li><strong>Celular:</strong> {BANK_INFO.celular}</li>
                </ul>
              </div>

              <div className="mandarina-field">
                <label htmlFor="comprobante">Sube tu Comprobante (JPG/PNG/PDF) *</label>
                <input id="comprobante" name="comprobante" type="file" accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleChange} ref={fileRef} required
                  aria-invalid={!!errors.comprobante} aria-describedby={errors.comprobante?'err-comprobante':undefined}/>
                {errors.comprobante && <span id="err-comprobante" className="mandarina-error">{errors.comprobante}</span>}
                {form.comprobante && <small className="mandarina-file-name">Archivo: {form.comprobante.name}</small>}
              </div>

              <div className="mandarina-form-nav is-two">
                <button type="button" className="mandarina-btn mandarina-btn-prev" onClick={prevStep}>← Atrás</button>
                <button type="submit" className="mandarina-btn mandarina-btn-submit"
                  disabled={isSubmitting} aria-busy={isSubmitting} aria-disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando…' : '¡Inscríbete ahora!'}
                </button>
              </div>
            </fieldset>
          )}
        </form>
      </div>

      {/* CSS encapsulado SOLO para este componente */}
      <style jsx>{`
        .mandarina-compact { margin: 0; padding: 0; }
        .mandarina-compact :global(.container) { margin: 0; padding: 0; }

        .mandarina-compact :global(.mandarina-form) { display: grid; gap: 10px; }
        .mandarina-compact :global(.mandarina-form-fieldset) { border: 0; margin: 0 0 8px; padding: 6px 0 0; }
        .mandarina-compact :global(.mandarina-field) { margin: 8px 0 10px; }
        .mandarina-compact :global(.mandarina-field-group) {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        @media (max-width: 720px){
          .mandarina-compact :global(.mandarina-field-group){ grid-template-columns: 1fr; }
        }

        .mandarina-compact :global(.mandarina-field label){
          display:block; margin-bottom:6px; font-size:13px; letter-spacing:.02em;
        }

        .mandarina-compact :global(.mandarina-form input[type="text"]),
        .mandarina-compact :global(.mandarina-form input[type="email"]),
        .mandarina-compact :global(.mandarina-form input[type="tel"]),
        .mandarina-compact :global(.mandarina-form input[type="number"]),
        .mandarina-compact :global(.mandarina-form select){
          height:44px; padding:10px 14px; font-size:15px; border-radius:12px;
        }

        /* file input bonito */
        .mandarina-compact :global(.mandarina-form input[type="file"]) {
          width:100%; height:44px; padding:6px 12px; border-radius:12px;
          background:#2a0d43; border:1px solid rgba(255,255,255,.12); color:#e6d7ff;
        }
        .mandarina-compact :global(.mandarina-form input[type="file"]::file-selector-button){
          background:#ff7a00; color:#fff; border:0; border-radius:10px;
          padding:8px 12px; margin-right:12px; font-weight:700; cursor:pointer;
        }
        .mandarina-compact :global(.mandarina-form input[type="file"]::file-selector-button:hover){
          filter:brightness(1.05);
        }

        .mandarina-compact :global(.mandarina-bank-card){
          margin:10px 0 12px; padding:12px 14px; border-radius:12px;
          background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08);
        }
        .mandarina-compact :global(.mandarina-bank-card h3){ margin:0 0 6px; font-size:16px; }
        .mandarina-compact :global(.mandarina-bank-card ul){ margin:6px 0; padding-left:18px; }

        .mandarina-compact :global(.mandarina-form-nav){ margin-top:8px; }
        .mandarina-compact :global(.mandarina-form-nav.is-two){
          display:grid; grid-template-columns:1fr 1fr; gap:10px;
        }
        .mandarina-compact :global(.mandarina-btn){
          height:46px; padding:0 18px; border-radius:14px;
        }
        .mandarina-compact :global(.mandarina-price-hint){ margin-top:8px; display:block; color:#b7ffa7; }

        .mandarina-compact :global(.mandarina-form fieldset:last-child),
        .mandarina-compact :global(.mandarina-form .mandarina-form-nav:last-child){ margin-bottom:0; }
      `}</style>
    </section>
  )
}
