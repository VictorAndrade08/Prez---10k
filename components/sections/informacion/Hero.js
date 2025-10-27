'use client';
import { useEffect, useMemo, useState } from 'react';

export default function Hero({
  className,
  eventTitle = '10K Independencia de Ambato – 2025',
  subtitle = 'Vive “La carrera de la ciudad”. Descubre toda la información sobre la ruta, categorías, precios, kit del corredor y premios. Este 23 de noviembre, corre por las calles de Ambato, Ecuador.',
  dateISO = '2025-11-23T08:00:00-05:00',
  chips = [
    { label: 'Domingo 23 Nov 2025' },
    { label: '08h00' },
    { label: 'Lugar: Ambato, Ecuador' },
    { label: 'Distancia: 10 km' },
    { label: 'Premios: Primeros Lugares' },
  ],
  registerHref = '/inscripcion',
  onRegisterClick,
  premiosId = 'premios',

  // 🟩 Imagen principal (banner horizontal oficial)
  mediaSrc = '/assets/imgs/10k2.webp',
  mediaAlt = 'Banner oficial 10K Independencia de Ambato 2025 — La carrera de la ciudad',

  mediaFit = 'cover',
  mediaAspect = '16 / 9',
  mediaHeight = 'clamp(360px, 48vw, 620px)',
  mediaBg = '#0B2439',
}) {
  const target = useMemo(
    () => (typeof window !== 'undefined' ? new Date(dateISO).getTime() : 0),
    [dateISO]
  );

  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    if (!target) return;
    const tick = () => {
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000); diff -= d * 86400000;
      const h = Math.floor(diff / 3600000);  diff -= h * 3600000;
      const m = Math.floor(diff / 60000);    diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    const onVis = () => { if (document.visibilityState === 'visible') tick(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', onVis); };
  }, [target]);

  const pad2 = (n) => String(n).padStart(2, '0');

  const handleRegister = () => {
    if (typeof onRegisterClick === 'function') return onRegisterClick();
    window.location.href = registerHref;
  };

  // Scroll suave
  const scrollToPremios = () => {
    const el = document.getElementById(premiosId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className={`inf-hero ${className || ''}`} aria-label="Hero del evento">
      <div className="inf-container">
        {/* Columna texto */}
        <div className="inf-colText">
          <h1 className="inf-title">{eventTitle}</h1>
          <p className="inf-subtitle">{subtitle}</p>

          <div className="inf-chips" aria-label="Datos del evento">
            {chips.map((c, i) => {
              const isPremios = c.label.includes('Premios');
              return (
                <span
                  key={i}
                  className={`inf-chip ${isPremios ? 'inf-chipLink' : ''}`}
                  onClick={isPremios ? scrollToPremios : undefined}
                  style={{ cursor: isPremios ? 'pointer' : 'default' }}
                >
                  {c.label}
                </span>
              );
            })}
          </div>

          {/* Contador regresivo */}
          <div className="inf-countdown" aria-label="Cuenta regresiva" aria-live="polite">
            <div className="inf-counter"><b>{pad2(time.d)}</b><small>Días</small></div>
            <div className="inf-counter"><b>{pad2(time.h)}</b><small>Horas</small></div>
            <div className="inf-counter"><b>{pad2(time.m)}</b><small>Min</small></div>
            <div className="inf-counter"><b>{pad2(time.s)}</b><small>Seg</small></div>
          </div>

          {/* Botones */}
          <div className="inf-btns">
            <button className="inf-btn inf-btnPrimary inf-btnXL" type="button" onClick={handleRegister}>
              <span>¡Inscríbete Online!</span>
              <span className="inf-arrow" aria-hidden>→</span>
            </button>

            <a
              className="inf-btn inf-btnGhost inf-btnXL"
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToPremios(); }}
            >
              Ver Premios Económicos
            </a>
          </div>
        </div>

        {/* Columna media — Banner horizontal */}
        <div
          className="inf-colMedia inf-colMedia--fixed"
          style={{
            '--inf-media-fit': mediaFit,
            '--inf-media-aspect': mediaAspect,
            '--inf-media-h': mediaHeight,
            '--inf-media-bg': mediaBg,
          }}
        >
          <img
            src={mediaSrc}
            alt={mediaAlt}
            className="inf-mediaImg inf-mediaImg--contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
}
