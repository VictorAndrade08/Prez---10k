'use client';

export default function CategoriasPreventa({
  title = 'Categorías & Precios de',
  pricePreventa = 'US$ 23',
  priceNormal = 'US$ 18',
  onRegister = (slug) => (window.location.href = `/inscripcion`),
}) {
  const items = [
    {
      slug: 'elite',
      icon: '⚡️',
      title: 'Élite (18–39)',
      body:
        'Para corredores que buscan su mejor marca. Categoría oficial competitiva. Ideal si tienes entre 18 y 39 años. Velocidad y adrenalina.',
      price: pricePreventa,
      priceLabel: 'Venta',
    },
    {
      slug: 'super-master',
      icon: '💪',
      title: 'Súper Master (40–64)',
      body:
        'Corredores con experiencia y resistencia. Vive el desafío con madurez y fuerza. Damas y varones con espíritu competitivo.',
      price: pricePreventa,
      priceLabel: 'Venta',
    },
    {
      slug: 'leyenda',
      icon: '✨',
      title: 'Leyenda (65+)',
      body:
        'Para verdaderas leyendas del running. Corre a tu ritmo, con alegría y orgullo. Categoría femenina y masculina. Asistencia total.',
      price: priceNormal,
      priceLabel: 'Precio', // <- normal
    },
    {
      slug: 'especiales',
      icon: '♿️',
      title: 'Especiales (Identificación)',
      body:
        'Para atletas con discapacidad visual, intelectual o física. Participación con respeto, apoyo y alegría. Requiere identificación vigente. Asistencia y seguridad.',
      price: priceNormal,
      priceLabel: 'Precio', // <- normal
    },
  ];

  return (
    <section id="categorias-preventa" className="catp-sec" aria-label="Categorías y precios">
      <div className="catp-wrap">
        <h2 className="catp-title">
          {title} <span className="catp-badge">Venta</span>
        </h2>

        <div className="catp-grid">
          {items.map((item) => (
            <article key={item.slug} className="catp-card">
              <div className="catp-head">
                <span className="catp-ico" aria-hidden="true">{item.icon}</span>
                <h3 className="catp-h3">{item.title}</h3>
              </div>

              <p className="catp-body">{item.body}</p>

              <p className="catp-price">
                <span>{item.priceLabel}:</span> <strong>{item.price}</strong>
              </p>

              <button
                type="button"
                className="catp-btn"
                onClick={() => onRegister(item.slug)}
              >
                Inscribirme
              </button>
            </article>
          ))}
        </div>

        <div className="catp-notes">
          <p className="catp-note">Recibe confirmación y retira tu kit.</p>
          <p className="catp-note">
            🏆 <b>Premios económicos:</b> Próximamente se publicarán los premios para los primeros lugares por categoría.
          </p>
        </div>
      </div>
    </section>
  );
}
