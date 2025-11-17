"use client";

export default function SectionCards() {
  const items = [
    {
      title: "Kit Oficial",
      desc: "Camiseta, número, medalla y sorpresas",
      color: "linear-gradient(135deg, #1CA7A6, #D6E764)",
      iconSrc: "/assets/imgs/1.webp",
      href: "kit",
      textColor: "#0B0B0B",
    },
    {
      title: "Categorías y Premios",
      desc: "Élite, Máster, Leyenda, Especiales",
      color: "#01395B",
      iconSrc: "/assets/imgs/2.webp",
      href: "premios",
      textColor: "#FFFFFF",
    },
    {
      title: "Ruta Oficial",
      desc: "Ver / descargar GPX y PDF",
      color: "#FFFFFF",
      iconSrc: "/assets/imgs/3.webp",
      href: "ruta",
      textColor: "#0B0B0B", // 🔥 Título y texto en negro puro
    },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
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
              href={`#${c.href}`}
              onClick={(e) => handleScroll(e, c.href)}
              className={`cats-card ${c.color === "#FFFFFF" ? "is-light" : ""}`}
              style={{
                background: c.color,
                color: c.textColor,
                boxShadow:
                  c.color === "#FFFFFF"
                    ? "0 4px 14px rgba(0,0,0,0.08)"
                    : "0 8px 24px rgba(0,0,0,0.25)",
              }}
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
                <h3 className="cats-title" style={{ color: c.textColor }}>
                  {c.title}
                </h3>
                <p className="cats-desc">{c.desc}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
