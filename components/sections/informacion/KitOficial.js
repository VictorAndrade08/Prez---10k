'use client';

export default function KitOficial({
  title = 'Kit Oficial 10K Independencia de Ambato 2025',
  items = [
    { icon: '👕', title: 'Camiseta', subtitle: 'Edición 2025' },
    { icon: '🏅', title: 'Medalla', subtitle: 'Finisher' },
    { icon: '⏱️', title: 'Chip', subtitle: 'Cronometraje' },
    { icon: '💧', title: 'Hidratación & Fruta', subtitle: 'En ruta' },
    { icon: '🎁', title: 'Souvenirs', subtitle: 'Patrocinadores', wide: true },
  ],
}) {
  // Imagen vertical principal del evento
  const imageVerticalSrc = '/assets/imgs/10k1.webp';
  const imageVerticalAlt = 'Afiche oficial 10K Independencia de Ambato 2025 — La carrera de la ciudad';

  return (
    <section id="kit" className="kit-sec" aria-label="Kit oficial del evento">
      <div className="kit-wrap">
        <h2 className="kit-title">{title}</h2>

        {/* Grid de items */}
        <div className="kit-grid">
          {items.map((it, i) => (
            <article
              key={`${it.title}-${i}`}
              className={`kit-card${it.wide ? ' kit-card--wide' : ''}`}
              role="group"
              aria-label={`${it.title}${it.subtitle ? `, ${it.subtitle}` : ''}`}
            >
              <div className="kit-ico" aria-hidden="true">{it.icon}</div>
              <div className="kit-content">
                <h3 className="kit-h3">{it.title}</h3>
                {it.subtitle ? <p className="kit-sub">{it.subtitle}</p> : null}
              </div>
            </article>
          ))}
        </div>

        {/* Imagen vertical (afiche oficial) */}
        <figure className="kit-media" aria-label="Afiche del evento">
          <div className="kit-mediaBox">
            <img
              src={imageVerticalSrc}
              alt={imageVerticalAlt}
              className="kit-mediaImg"
              loading="lazy"
              decoding="async"
              style={{
                borderRadius: '16px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                background: '#F6F6F6',
              }}
            />
          </div>
          <figcaption className="kit-mediaCap">
            Afiche oficial — “La carrera de la ciudad” · Domingo 23 de noviembre · 08h00
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
