'use client';

export default function KitOficial({
  title = 'Kit Oficial',
  items = [
    { icon: '👕', title: 'Camiseta', subtitle: 'Edición 2025' },
    { icon: '🏅', title: 'Medalla', subtitle: 'Finisher' },
    { icon: '⏱️', title: 'Chip', subtitle: 'Cronometraje' },
    { icon: '🍊', title: 'Fruta & Hidratación', subtitle: 'En ruta' },
    { icon: '🎁', title: 'Souvenirs', subtitle: 'Patrocinadores', wide: true },
  ],
}) {
  // Imagen fija
  const imageSquareSrc = "/assets/imgs/kit1.webp";
  const imageSquareAlt = "Vista del kit oficial";

  return (
    <section id="kit" className="kit-sec" aria-label="Kit oficial del evento">
      <div className="kit-wrap">
        <h2 className="kit-title">{title}</h2>

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

        {/* Imagen cuadrada */}
        <figure className="kit-media" aria-label="Imagen del Kit Oficial">
          <div className="kit-mediaBox">
            <img
              src={imageSquareSrc}
              alt={imageSquareAlt}
              className="kit-mediaImg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="kit-mediaCap">Kit Oficial — Vista previa</figcaption>
        </figure>
      </div>
    </section>
  );
}
