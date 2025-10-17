'use client';
import { useEffect, useMemo, useState } from 'react';

export default function Hero({
  className,
  eventTitle = '8K Ruta de las Mandarinas – 2025',
  subtitle = 'Información – Aquí vas a encontrar todo sobre la carrera: kit, ruta, categorías, precios y más. Corre en el Pueblo Mágico de Patate – Ecuador',
  dateISO = '2025-09-27T13:00:00Z',
  chips = [
    { label: 'Sábado 27 Sept 2025' },
    { label: '08h00' },
    { label: 'Salida: Patate Garden' },
    { label: 'Llegada: Parque Central' },
    { label: 'Premios: Primeros Lugares' },
  ],
  registerHref = '/inscripcion',
  onRegisterClick,

  // id de la sección premios
  premiosId = 'premios',

  // IMAGEN (sitio estático)
  mediaSrc = '/assets/imgs/page/informacion/8kmandarinas1.webp',
  mediaAlt = 'Corredores entre campos de mandarina y montañas de Patate',

  // Control del media (sin recorte)
  mediaFit = 'contain',
  mediaAspect = '16 / 9',
  mediaHeight = 'clamp(320px, 45vw, 560px)',
  mediaBg = '#0e0e14',
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

  // 🔥 scroll suave a la sección premios
  const scrollToPremios = () => {
    const el = document.getElementById(premiosId);
    if (el) {
      const yOffset = -80; // ajusta si tienes header fijo
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

          <div className="inf-countdown" aria-label="Cuenta regresiva" aria-live="polite">
            <div className="inf-counter"><b>{pad2(time.d)}</b><small>Días</small></div>
            <div className="inf-counter"><b>{pad2(time.h)}</b><small>Horas</small></div>
            <div className="inf-counter"><b>{pad2(time.m)}</b><small>Min</small></div>
            <div className="inf-counter"><b>{pad2(time.s)}</b><small>Seg</small></div>
          </div>

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

        {/* Columna media */}
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
