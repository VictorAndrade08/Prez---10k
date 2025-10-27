export default function RegistrationPreventa({
  distance = '10K',
  price = 'US$ 25',
  priceLabel = 'Inscripciones abiertas',
  priceNote = 'Incluye kit oficial del corredor',
  kitItems = [
    'Camiseta oficial',
    'Medalla finisher',
    'Chip de cronometraje',
    'Hidratación y fruta en ruta',
  ],
  timeMax = 'Tiempo Máx 2h 30min',
  timeSub = 'Ruta urbana, apta para todos los niveles',
  ctaHref = '/inscripcion/',
}) {
  return (
    <section id="registro" className="reg-section" aria-labelledby="reg-title">
      <div className="reg-container">
        {/* TÍTULO PRINCIPAL */}
        <header className="reg-head">
          <h2 id="reg-title" className="reg-title" style={{ color: '#FFFFFF' }}>
            Inscripción &amp; Precio{' '}
            <span
              className="reg-badge"
              style={{
                color: '#D6E764',
                fontWeight: '700',
              }}
            >
              (Cupos limitados)
            </span>
          </h2>

          {/* PASOS */}
          <ol className="reg-steps" aria-label="Cómo inscribirte" style={{ color: '#EAEAEA' }}>
            <li className="reg-step">
              <span className="reg-stepNum" style={{ background: '#1CA7A6', color: '#fff' }}>
                1
              </span>
              Completa el formulario online o comunícate por WhatsApp.
            </li>
            <li className="reg-step">
              <span className="reg-stepNum" style={{ background: '#1CA7A6', color: '#fff' }}>
                2
              </span>
              Realiza el pago y adjunta tu comprobante de inscripción.
            </li>
            <li className="reg-step">
              <span className="reg-stepNum" style={{ background: '#1CA7A6', color: '#fff' }}>
                3
              </span>
              Recibe tu confirmación y retira el kit del corredor.
            </li>
          </ol>
        </header>

        {/* TARJETAS */}
        <div className="reg-cards" role="list">
          {/* DISTANCIA */}
          <article
            className="reg-card reg-card--soft"
            role="listitem"
            aria-label={`Distancia oficial ${distance}`}
            style={{
              background: '#FFFFFF',
              color: '#1B2230',
            }}
          >
            <div className="reg-ico" role="img" aria-label="Bandera de meta">
              🏁
            </div>
            <h3
              className="reg-cardTitle"
              style={{
                color: '#1CA7A6',
                fontWeight: 800,
                fontStyle: 'italic',
                textTransform: 'uppercase',
              }}
            >
              {distance}
            </h3>
            <p
              className="reg-cardSub"
              style={{ color: '#0B0B0B', fontWeight: 700 }}
            >
              Recorrido oficial urbano
            </p>
            <ul
              className="reg-list reg-list--bullets"
              style={{
                color: '#1B2230',
                lineHeight: 1.6,
                fontSize: '0.95rem',
              }}
            >
              <li>Fecha: <b>Domingo 23 de noviembre 2025</b></li>
              <li>Hora de partida: <b>08h00</b></li>
              <li>Lugar: <b>Ambato – Ecuador</b></li>
              <li>Ruta certificada, rápida y segura</li>
              <li>Puntos de hidratación y asistencia médica</li>
              <li>Ambiente deportivo y familiar</li>
            </ul>
          </article>

          {/* PRECIO */}
          <article
            className="reg-card reg-card--price"
            style={{
              background: '#FFFFFF',
              color: '#1B2230',
            }}
          >
            <div
              className="reg-priceRibbon"
              style={{
                background: 'linear-gradient(135deg, #1CA7A6, #D6E764)',
                color: '#0B0B0B',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                fontWeight: 700,
              }}
            >
              {priceLabel}
            </div>
            <div className="reg-ico" role="img" aria-label="Precio en efectivo">
              💵
            </div>
            <h3
              className="reg-cardTitle"
              style={{
                color: '#1CA7A6',
                fontWeight: 800,
                fontStyle: 'italic',
              }}
            >
              {price}
            </h3>
            <p
              className="reg-cardSub"
              style={{ color: '#0B0B0B', fontWeight: 700 }}
            >
              {priceNote}
            </p>
            <ul
              className="reg-kitList"
              style={{
                color: '#1B2230',
                lineHeight: 1.6,
                fontSize: '0.95rem',
              }}
            >
              {kitItems.map((k, i) => (
                <li key={i}>• {k}</li>
              ))}
            </ul>
            <p
              className="reg-miniNote"
              style={{ color: '#555', marginTop: '8px' }}
            >
              Confirma tu pago para validar oficialmente tu inscripción.
            </p>
          </article>

          {/* TIEMPO */}
          <article
            className="reg-card reg-card--soft"
            style={{
              background: '#FFFFFF',
              color: '#1B2230',
            }}
          >
            <div className="reg-ico" role="img" aria-label="Cronómetro">
              ⏱️
            </div>
            <h3
              className="reg-cardTitle"
              style={{
                color: '#1CA7A6',
                fontWeight: 800,
                fontStyle: 'italic',
                textTransform: 'uppercase',
              }}
            >
              {timeMax}
            </h3>
            <p
              className="reg-cardSub"
              style={{ color: '#0B0B0B', fontWeight: 700 }}
            >
              {timeSub}
            </p>
            <ul
              className="reg-list reg-list--bullets"
              style={{
                color: '#1B2230',
                lineHeight: 1.6,
                fontSize: '0.95rem',
              }}
            >
              <li>Corre a tu ritmo, disfruta la ciudad y la energía del público</li>
              <li>Ambiente runner con música y animación</li>
              <li>Apoyo de voluntarios en toda la ruta</li>
              <li>Meta ubicada en zona central de Ambato</li>
              <li>Ideal para corredores novatos y avanzados</li>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="reg-ctas">
          <a
            className="reg-btn reg-btnPrimary"
            href={ctaHref}
            style={{
              background: 'linear-gradient(135deg, #1CA7A6, #D6E764)',
              color: '#0B0B0B',
              fontWeight: 700,
            }}
          >
            Inscribirme ahora <span className="reg-arrow">→</span>
          </a>
        </div>

        {/* TEXTO FINAL */}
        <div className="reg-extra">
          <p style={{ color: '#FFFFFF' }}>
            Vive la experiencia de la <b>10K Independencia de Ambato – 2025</b>.
            Corre “La carrera de la ciudad” este 23 de noviembre, con ruta
            urbana, ambiente seguro, hidratación, cronometraje y medalla
            finisher. ¡Inscríbete y sé parte de la historia!
          </p>
          <p
            className="reg-footNote"
            style={{ color: '#D6E764', fontWeight: 600 }}
          >
            *Cupos limitados hasta agotar existencias.
          </p>
        </div>
      </div>
    </section>
  );
}
