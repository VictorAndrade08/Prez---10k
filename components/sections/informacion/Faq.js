// components/sections/informacion/Faq.js
'use client';

export default function Faq() {
  const items = [
    {
      q: '¿Cómo me inscribo?',
      a: 'Elige inscripción online o por WhatsApp y confirma tu pago.',
    },
    {
      q: '¿Cómo verifico mi inscripción?',
      a: 'Usa el enlace de verificación o contáctanos por WhatsApp.',
    },
    {
      q: '¿Cuánto cuesta?',
      a: 'Venta desde US$23. Revisa precios por categoría arriba.',
    },
    {
      q: '¿Habrá premios?',
      a: 'Sí. Próximamente se publicarán los premios económicos por categoría.',
    },
    {
      q: '¿Dónde retiro mi kit?',
      a: 'Punto oficial anunciado 1 semana antes del evento.',
    },
    {
      q: 'Políticas',
      a: 'Número visible, hidratación incluida, respeto a categorías.',
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
                <span className="faq-caret" aria-hidden>▾</span>
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
