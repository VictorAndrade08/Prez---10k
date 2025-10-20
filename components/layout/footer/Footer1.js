// components/layout/footer/Footer1.js
'use client';

import { useCallback } from 'react';
import { Toaster, toast } from 'sonner';

export default function FooterWireframe({
  // a dónde navega el botón principal
  inscriptionHref = '/inscripcion',
  // teléfono o URL de WhatsApp (acepta 09..., 593..., wa.me..., wa.link..., https://wa.me/...)
  whatsapp = '593997241804',
  // ponlo en true SOLO si NO tienes <Toaster/> global para evitar duplicados
  showToaster = false,
}) {
  const handleInscripcion = useCallback(() => {
    if (!inscriptionHref || inscriptionHref === '#') return;
    if (inscriptionHref.startsWith('#')) {
      const el = document.querySelector(inscriptionHref);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = inscriptionHref;
    }
  }, [inscriptionHref]);

  const handleWhatsapp = useCallback(() => {
    const msg = encodeURIComponent('Quiero inscribirme a la 10K Independencia de Ambato.');
    const isUrl =
      /^https?:\/\//i.test(whatsapp) || /^(wa\.me|wa\.link)/i.test(whatsapp);

    let url = whatsapp;
    if (!isUrl) {
      // normaliza: 09xxxxxxxx -> 5939xxxxxxxx ; deja 593… tal cual
      let digits = (whatsapp || '').replace(/\D/g, '');
      if (/^09\d{8}$/.test(digits)) digits = '593' + digits.slice(1);
      url = `https://wa.me/${digits}?text=${msg}`;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [whatsapp]);

  // Aviso “Próximamente”
  const handleSoon = useCallback(() => {
    toast.info('Próximamente disponible', {
      description: 'Esta sección estará activa en los próximos días.',
      duration: 2500,
    });
  }, []);

  return (
    <footer className="wf-footer" aria-labelledby="wf-title">
      {/* Muestra Toaster aquí solo si NO lo tienes global */}
      {showToaster && <Toaster richColors position="bottom-center" closeButton />}

      <div className="wf-wrap">
        <div className="wf-brand">
          <div className="wf-brand-left">
            <a className="wf-logo" href="/" aria-label="Ir al inicio">
              <img
                src="assets/imgs/template/logo-mandarinas-blanco.svg"
                alt="10K Independencia de Ambato"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </a>

            <div className="wf-meta">
              <h3 id="wf-title" className="wf-title">10K INDEPENDENCIA DE AMBATO</h3>
              <p className="wf-sub">Ambato • Tungurahua • Ecuador</p>
            </div>
          </div>

          <div className="wf-ctas wf-ctas--right" aria-label="Acciones principales">
            <button
              type="button"
              className="wf-btn wf-btn--primary wf-btn--xl"
              onClick={handleInscripcion}
            >
              <span className="wf-btnMain">Inscripción online</span>
              <small className="wf-btnSub">Completar en 2–3 min</small>
            </button>

            <button
              type="button"
              className="wf-btn wf-btn--ghost wf-btn--xl"
              onClick={handleWhatsapp}
            >
              <span className="wf-btnMain">Inscripción WhatsApp</span>
              <small className="wf-btnSub">Respuesta en ~10 min</small>
            </button>
          </div>
        </div>

        {/* Pills deshabilitados con Sonner */}
        <nav className="wf-links" aria-label="Enlaces rápidos" role="navigation">
          <ul className="wf-pills">
            <li><button type="button" className="wf-pill is-disabled" onClick={handleSoon}>Categorías</button></li>
            <li><button type="button" className="wf-pill is-disabled" onClick={handleSoon}>Ruta</button></li>
            <li><button type="button" className="wf-pill is-disabled" onClick={handleSoon}>Kit</button></li>
            <li><button type="button" className="wf-pill is-disabled" onClick={handleSoon}>FAQ</button></li>
          </ul>
        </nav>
      </div>

      <div className="wf-legal">
        <div className="wf-legalbar">
          <p className="wf-copy">© 2025 10K Independencia de Ambato — Todos los derechos reservados</p>

          <div className="wf-legalLinks" aria-label="Legal">
            <button type="button" className="link-like is-disabled" onClick={handleSoon}>Términos</button>
            <span aria-hidden="true">·</span>
            <button type="button" className="link-like is-disabled" onClick={handleSoon}>Privacidad</button>
            <span aria-hidden="true">·</span>
            <button type="button" className="link-like is-disabled" onClick={handleSoon}>Reglamento</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
