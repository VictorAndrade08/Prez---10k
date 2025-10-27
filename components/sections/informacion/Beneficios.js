'use client';

export default function Beneficios() {
  const items = [
    { icon: '🏙️', title: 'Ruta urbana', desc: 'Corre por las principales avenidas de Ambato' },
    { icon: '🤝', title: 'Comunidad', desc: 'Ambiente runner y espíritu ambateño' },
    { icon: '🏆', title: 'Premiación', desc: 'Por categorías oficiales' },
    { icon: '📲', title: 'Resultados', desc: '100% digitales y en línea' },
  ];

  // Google Maps limpio centrado en Ambato
  const mapEmbedSrc =
    'https://www.google.com/maps?q=Ambato+Ecuador&z=14&hl=es&output=embed';

  // Imagen actualizada: logo oficial con degradado verde-azul
  const photoSrc = '/assets/imgs/10k3.jpg';
  const photoAlt = '10K Independencia de Ambato — logo oficial con degradado';

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

        {/* Showcase: Google Maps + Logo 10K */}
        <div className="benef-showcase">
          {/* Mapa */}
          <article className="benef-mapCard" aria-label="Mapa de Ambato en Google Maps">
            <div className="benef-mapBox">
              <iframe
                title="Mapa de Ambato"
                src={mapEmbedSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          {/* Logo */}
          <figure className="benef-photoCard" aria-label="Logo oficial 10K Independencia de Ambato">
            <div className="benef-photoBox">
              <img
                src={photoSrc}
                alt={photoAlt}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '12px',
                }}
              />
            </div>
            <figcaption className="benef-photoCap">
              “La carrera de la ciudad” — Ambato te espera este 23 de noviembre.
            </figcaption>
          </figure>
        </div>

        {/* Tarjeta ancha */}
        <article className="benef-wide" tabIndex={0} aria-label="Turismo y bienestar">
          <span className="benef-ico" aria-hidden>🧭</span>
          <div className="benef-wideContent">
            <h3 className="benef-wideTitle">Turismo &amp; Cultura</h3>
            <p className="benef-wideDesc">
              Disfruta Ambato: parques, gastronomía y tradición. Vive la ciudad mientras corres.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
