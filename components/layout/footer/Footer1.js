'use client';

import Link from 'next/link';
import { useCallback } from 'react';

/**
 * Footer Wireframe B/N – Next.js
 */
export default function FooterWireframe({
  inscriptionHref = '/inscripcion',
  whatsapp = '593999999999',
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
    const msg = encodeURIComponent('Quiero inscribirme a la 8K Ruta de las Mandarinas.');
    const isUrl = /^https?:\/\//i.test(whatsapp) || /^wa\.me|wa\.link/i.test(whatsapp);
    const url = isUrl ? whatsapp : `https://wa.me/${whatsapp}?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [whatsapp]);

  return (
    <footer className="wf-footer" aria-labelledby="wf-title">
      <div className="wf-wrap">
        <div className="wf-brand">
          <div className="wf-brand-left">
            {/* Logo con <img> en sitio estático */}
            <div className="wf-logo">
              <img
                src="/assets/imgs/template/logo-mandarinas-blanco.svg"
                alt="Logo Ruta de las Mandarinas"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div className="wf-meta">
              <h3 id="wf-title" className="wf-title">8K RUTA DE LAS MANDARINAS</h3>
              <p className="wf-sub">Patate • Tungurahua • Ecuador</p>
            </div>
          </div>

          <div className="wf-ctas wf-ctas--right" aria-label="Acciones principales">
            <button
              type="button"
              className="wf-btn wf-btn--primary wf-btn--xl"
              onClick={handleInscripcion}
              aria-label="Ir a inscripción online"
            >
              <span className="wf-btnMain">Inscripción online</span>
              <small className="wf-btnSub">Completar en 2–3 min</small>
            </button>
            <button
              type="button"
              className="wf-btn wf-btn--ghost wf-btn--xl"
              onClick={handleWhatsapp}
              aria-label="Abrir WhatsApp para inscribirse"
            >
              <span className="wf-btnMain">Inscripción WhatsApp</span>
              <small className="wf-btnSub">Respuesta en ~10 min</small>
            </button>
          </div>
        </div>

        {/* 🔗 Todos los pills llevan a /informacion/ */}
        <nav className="wf-links" aria-label="Enlaces rápidos" role="navigation">
          <ul className="wf-pills">
            <li><Link className="wf-pill" href="/informacion/">Categorías</Link></li>
            <li><Link className="wf-pill" href="/informacion/">Ruta</Link></li>
            <li><Link className="wf-pill" href="/informacion/">Kit</Link></li>
            <li><Link className="wf-pill" href="/informacion/">FAQ</Link></li>
          </ul>
        </nav>
      </div>

      <div className="wf-legal">
        <div className="wf-legalbar">
          <p className="wf-copy">
            © 2025 Carrera 8K Patate — Todos los derechos reservados
          </p>
          <div className="wf-legalLinks" aria-label="Legal">
            <Link href="/reglamento/" className="link-like">Términos</Link>
            <span aria-hidden="true">·</span>
            <Link href="/reglamento/" className="link-like">Privacidad</Link>
            <span aria-hidden="true">·</span>
            <Link href="/reglamento/" className="link-like">Reglamento</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
