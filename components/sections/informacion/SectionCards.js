'use client';

export default function SectionCards() {
  const items = [
    {
      title: 'Kit',
      desc: 'Camiseta oficial, número y sorpresas',
      color: '#FF6C00',
      iconSrc: '/assets/imgs/1.webp',
      href: 'kit', // 👈 solo el id sin #
      textColor: '#f7f7f7',
    },
    {
      title: 'Categorías y Premios',
      desc: 'Élite, Súper Master, Leyenda, Especiales',
      color: '#4C1C6F',
      iconSrc: '/assets/imgs/2.webp',
      href: 'categorias-preventa',
      textColor: '#FFF',
    },
    {
      title: 'Ruta',
      desc: 'Ver / descargar GPX y PDF',
      color: '#FFFFFF',
      iconSrc: '/assets/imgs/3.webp',
      href: 'ruta',
      textColor: '#111',
    },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault(); // evita el #
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="info-cards"
      className="cats-section cats--compact"
      aria-label="Navegación rápida"
    >
      <ul className="cats-container" role="list">
        {items.map((c, i) => (
          <li key={i} role="listitem">
            <a
              href={`#${c.href}`} // fallback en HTML estático
              onClick={(e) => handleScroll(e, c.href)}
              className={`cats-card ${c.color === '#FFFFFF' ? 'is-light' : ''}`}
              style={{ background: c.color, color: c.textColor || '#fff' }}
              aria-label={`${c.title}: ${c.desc}`}
            >
              <span className="cats-ico" aria-hidden="true">
                {c.iconSrc ? (
                  <img
                    src={c.iconSrc}
                    alt=""
                    className="cats-icoImg"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="cats-emoji">{c.icon}</span>
                )}
              </span>

              <div className="cats-content">
                <h3 className="cats-title">{c.title}</h3>
                <p className="cats-desc">{c.desc}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
