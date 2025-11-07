'use client';

export default function CategoriasPreventa({
  title = 'Categorías & Precios – 10K Independencia de Ambato 2025',
  priceGeneral = 'US$ 25',
  onRegister = (slug) => (window.location.href = `/inscripcion`),
}) {
  const items = [
    {
      slug: 'elite-pro',
      icon: '⚡️',
      title: 'Élite Pro (Hasta 39 Años)',
      body:
        'Categoría competitiva para corredores que buscan su mejor marca. Ideal si tienes entre 18 y 39 años. Velocidad, técnica y pasión por el running.',
      price: priceGeneral,
      priceLabel: 'Precio general',
    },
    {
      slug: 'master',
      icon: '💪',
      title: 'Máster (40–64)',
      body:
        'Corredores con experiencia y fortaleza. Vive el desafío con madurez y energía. Categoría oficial femenina y masculina.',
      price: priceGeneral,
      priceLabel: 'Precio general',
    },
    {
      slug: 'leyenda',
      icon: '✨',
      title: 'Leyenda (65+)',
      body:
        'Para verdaderas leyendas del running. Corre a tu ritmo, con orgullo y alegría. Categoría femenina y masculina con reconocimiento especial.',
      price: priceGeneral,
      priceLabel: 'Precio general',
    },
    {
      slug: 'especiales',
      icon: '♿️',
      title: 'Capacidades Especiales (Abierto)',
      body:
        'Para atletas con discapacidad visual, intelectual o física. Participación con respeto, apoyo y alegría. Requiere identificación vigente. Seguridad total durante la ruta.',
      price: priceGeneral,
      priceLabel: 'Precio general',
    },
  ];

  return (
    <section id="categorias-preventa" className="catp-sec" aria-label="Categorías y precios">
      <div className="catp-wrap">
        <h2 className="catp-title">
          {title} <span className="catp-badge">Venta general</span>
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
          <p className="catp-note">Incluye kit oficial del corredor y medalla finisher.</p>
          <p className="catp-note">
            🏆 <b>Premios económicos:</b> se publicarán próximamente para los primeros lugares de cada categoría.
          </p>
        </div>
      </div>
    </section>
  );
}
