'use client';

export default function RegistrationPreventa({
  distance = '8K',
  price = 'US$ 23',
  priceLabel = 'Últimos cupos',
  priceNote = 'Incluye kit oficial',
  kitItems = ['Camiseta', 'Medalla', 'Chip', 'Fruta/Hidratación'],
  timeMax = 'Tiempo Máx 2h',
  timeSub = 'Para todos los niveles',
  ctaHref = '/inscripcion/',
  verifyHref = '/verificar',
}) {
  return (
    <section id="registro" className="reg-section" aria-labelledby="reg-title">
      <div className="reg-container">

        {/* Cabecera */}
        <header className="reg-head">
          <h2 id="reg-title" className="reg-title">
            Inscripción &amp; Precio <span className="reg-badge">(Últimos cupos)</span>
          </h2>

          {/* Pasos */}
          <ol className="reg-steps" aria-label="Cómo inscribirte">
            <li className="reg-step">
              <span className="reg-stepNum">1</span>
              Completa el formulario online o escríbenos por WhatsApp.
            </li>
            <li className="reg-step">
              <span className="reg-stepNum">2</span>
              Realiza el pago y adjunta tu comprobante.
            </li>
            <li className="reg-step">
              <span className="reg-stepNum">3</span>
              Recibe confirmación y retira tu kit.
            </li>
          </ol>
        </header>

        {/* Tarjetas */}
        <div className="reg-cards" role="list">
          {/* Distancia */}
          <article
            className="reg-card reg-card--soft"
            role="listitem"
            aria-label={`Distancia oficial ${distance}`}
          >
            <div className="reg-ico" role="img" aria-label="Bandera de meta">🏁</div>

            <h3 className="reg-cardTitle">
              {distance} <span className="reg-chip">Distancia</span>
            </h3>
            <p className="reg-cardSub">Recorrido oficial</p>

            <ul className="reg-list reg-list--bullets" aria-label="Detalles del recorrido">
              <li>Salida: <b>Patate Garden – 08h00</b></li>
              <li>Llegada: <b>Parque Central</b></li>
              <li>Terreno mixto: tierra compacta + asfalto</li>
              <li>Puntos de hidratación señalizados</li>
              <li>Experiencia única entre mandarinales</li>
              <li>Seguridad y asistencia en toda la ruta</li>
            </ul>
          </article>

          {/* Precio preventa */}
          <article
            className="reg-card reg-card--price"
            role="listitem"
            aria-label={`${priceLabel} ${price}`}
          >
            <div className="reg-priceRibbon" aria-hidden="true">{priceLabel}</div>
            <div className="reg-ico" role="img" aria-label="Precio en efectivo">💵</div>

            <h3 className="reg-cardTitle">
              <span className="reg-price">{price}</span>
            </h3>
            <p className="reg-cardSub">{priceNote}</p>

            <ul className="reg-kitList" aria-label="Kit incluido">
              {kitItems.map((k, i) => (
                <li key={i} className="reg-kitItem">• {k}</li>
              ))}
            </ul>

            <p className="reg-miniNote">Confirma tu pago y recibe la validación de tu inscripción.</p>
          </article>

          {/* Tiempo máximo */}
          <article
            className="reg-card reg-card--soft"
            role="listitem"
            aria-label={`${timeMax}`}
          >
            <div className="reg-ico" role="img" aria-label="Cronómetro">⏱️</div>

            <h3 className="reg-cardTitle">{timeMax}</h3>
            <p className="reg-cardSub">{timeSub}</p>

            <ul className="reg-list reg-list--bullets" aria-label="Recomendaciones">
              <li>Participa, disfruta y supera tus límites</li>
              <li>Corre entre paisajes únicos de Patate</li>
              <li>Ambiente runner y acompañamiento</li>
              <li>Tiempo suficiente para completar el recorrido</li>
              <li>Ideal para corredores de todos los niveles</li>
            </ul>
          </article>
        </div>

        {/* Acciones */}
        <div className="reg-ctas">
          <a className="reg-btn reg-btnPrimary" href={ctaHref}>
            Inscribirme ahora <span className="reg-arrow">→</span>
          </a>
          <a className="reg-btn reg-btnGhost" href={verifyHref}>
            Verificar inscripción
          </a>
        </div>

        {/* Notas / SEO */}
        <div className="reg-extra">
          <p>
            Corre en la <b>8K Ruta de las Mandarinas – Patate, Ecuador</b>. Inscríbete hoy y vive la
            emoción de una ruta pensada para todos los niveles, con hidratación, kit oficial y un
            ambiente inigualable.
          </p>
          <p className="reg-footNote">*Venta válida hasta agotar cupos.</p>
        </div>
      </div>
    </section>
  );
}
