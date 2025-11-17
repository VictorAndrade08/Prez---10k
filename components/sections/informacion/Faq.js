// components/sections/informacion/Faq.js
"use client";

export default function Faq() {
  const items = [
    {
      q: "¿Cómo me inscribo?",
      a: "Puedes inscribirte online desde la web oficial o escribirnos por WhatsApp. Completa tus datos y confirma tu pago.",
    },
    {
      q: "¿Cómo verifico mi inscripción?",
      a: "Accede al enlace de verificación o comunícate por WhatsApp con tu número de cédula para confirmar tu registro.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "El valor de inscripción es de US$25 e incluye kit oficial del corredor (camiseta, medalla, chip, hidratación).",
    },
    {
      q: "¿Habrá premios?",
      a: "Sí. Habrá premios económicos para los tres primeros lugares de cada categoría (Élite, Master, Leyenda y Capacidades Especiales).",
    },
    {
      q: "¿Dónde retiro mi kit?",
      a: "El punto de entrega del kit se anunciará en los canales oficiales durante la semana previa a la carrera.",
    },
    {
      q: "¿Cuándo y dónde es la carrera?",
      a: "La 10K Independencia de Ambato se correrá el domingo 23 de noviembre de 2025 a las 08h00, con salida en Puente Luis A. Martínez y llegada en el Parque ciudadela Nuevo Ambato.",
    },
    {
      q: "Políticas del evento",
      a: "Número visible obligatorio, respeto a las categorías, asistencia médica y seguridad garantizada durante toda la ruta.",
    },
  ];

  return (
    <section id="faq" className="faq-sec" aria-label="Preguntas frecuentes">
      <div className="faq-wrap">
        <h2 className="faq-title">Preguntas frecuentes</h2>

        <div className="faq-grid">
          {items.map(({ q, a }, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-summary">
                <span className="faq-caret" aria-hidden>
                  ▾
                </span>
                {q}
              </summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
