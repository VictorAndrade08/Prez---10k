'use client';

export default function Beneficios() {
  const items = [
    { icon: '🌿', title: 'Experiencia natural', desc: 'Paisajes únicos' },
    { icon: '🤝', title: 'Comunidad',          desc: 'Ambiente runner' },
    { icon: '🏆', title: 'Premios',            desc: 'Por categorías' },
    { icon: '📲', title: 'Resultados',         desc: 'Digitales' },
  ];

  // Google Maps limpio (sin tarjeta superior) centrado en Patate
  const mapEmbedSrc =
    'https://www.google.com/maps?q=Patate+Ecuador&z=15&hl=es&output=embed';

  // Imagen 1:1 (archivo en /public/assets/...)
  const photoSrc = '/assets/imgs/page/homepage1/Banner-8k-Mandarina-2.webp';
  const photoAlt = 'Patate — vista 1:1';

  return (
    <section id="beneficios" className="benef-sec" aria-label="Beneficios de la carrera">
      <div className="benef-wrap">
        <h2 className="benef-title">Beneficios</h2>

        {/* Grid superior */}
        <div className="benef-grid">
          {items.map((b, i) => (
            <article className="benef-card" key={i} tabIndex={0}>
              <span className="benef-ico" aria-hidden>{b.icon}</span>
              <div className="benef-content">
                <h3 className="benef-cardTitle">{b.title}</h3>
                <p className="benef-cardDesc">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Showcase: Google Maps + Foto */}
        <div className="benef-showcase">
          {/* Mapa */}
          <article className="benef-mapCard" aria-label="Mapa de Patate en Google Maps">
            <div className="benef-mapBox">
              <iframe
                title="Mapa de Patate"
                src={mapEmbedSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          {/* Foto */}
          <figure className="benef-photoCard" aria-label="Fotografía de Patate">
            <div className="benef-photoBox">
              <img
                src={photoSrc}
                alt={photoAlt}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <figcaption className="benef-photoCap">
              
            </figcaption>
          </figure>
        </div>

        {/* Tarjeta ancha existente */}
        <article className="benef-wide" tabIndex={0} aria-label="Turismo y bienestar">
          <span className="benef-ico" aria-hidden>🧭</span>
          <div className="benef-wideContent">
            <h3 className="benef-wideTitle">Turismo &amp; Bienestar</h3>
            <p className="benef-wideDesc">Disfruta Patate</p>
          </div>
        </article>
      </div>
    </section>
  );
}
