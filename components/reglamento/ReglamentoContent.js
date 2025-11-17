export default function ReglamentoContent() {
  return (
    <section className="reglamento reglamento--10k">
      <header className="reglamento__header">
        <h1 className="reglamento__title">
          Reglamento Oficial – 10K Independencia de Ambato 2025
        </h1>
        <p className="reglamento__location">
          <strong>Ambato, Tungurahua – Ecuador</strong>
        </p>
      </header>

      <div className="reglamento__body">
        {/* ARTÍCULO 1 */}
        <article className="reglamento__item" id="art1">
          <h2 className="reglamento__item-title">ARTÍCULO 1. Denominación</h2>
          <p className="reglamento__item-text">
            La carrera atlética 10K Independencia de Ambato 2025 es organizada por
            el Comité Organizador en colaboración con el GAD Municipal de Ambato y
            entidades auspiciantes.
          </p>
        </article>

        {/* ARTÍCULO 2 */}
        <article className="reglamento__item" id="art2">
          <h2 className="reglamento__item-title">ARTÍCULO 2. Fecha y Hora</h2>
          <p className="reglamento__item-text">
            El evento se llevará a cabo el domingo <strong>23 de noviembre de 2025</strong>, con hora
            de salida oficial a las <strong>08h00</strong>. El tiempo máximo permitido será de 
            <strong> 2 horas 30 minutos</strong>.
          </p>
        </article>

        {/* ARTÍCULO 3 */}
        <article className="reglamento__item" id="art3">
          <h2 className="reglamento__item-title">ARTÍCULO 3. Participantes</h2>
          <p className="reglamento__item-text">
            Podrán participar corredores nacionales y extranjeros en buen estado
            de salud y con inscripción válida. Atletas extranjeros que aspiren a
            premios deberán cumplir los requisitos administrativos.
          </p>
        </article>

        {/* ARTÍCULO 4 */}
        <article className="reglamento__item" id="art4">
          <h2 className="reglamento__item-title">ARTÍCULO 4. Distancia y Recorrido</h2>
          <p className="reglamento__item-text">
            La distancia oficial es de <strong>10 kilómetros</strong>, con salida en el
            <strong> Puente Luis A. Martínez</strong> y llegada al <strong>Parque Cdla. Nuevo Ambato</strong>.
          </p>
          <p className="reglamento__item-text">
            El recorrido incluye puntos de hidratación, control y asistencia médica.
          </p>
          <p className="reglamento__item-text">➡️ Ruta oficial disponible en imagen, PDF y GPX.</p>
        </article>

        {/* ARTÍCULO 5 */}
        <article className="reglamento__item" id="art5">
          <h2 className="reglamento__item-title">ARTÍCULO 5. Categorías</h2>
          <ul className="reglamento__list">
            <li>Élite Pro (Hasta 39 años)</li>
            <li>Máster (40–64 años)</li>
            <li>Leyenda (65+ años)</li>
            <li>Capacidades Especiales (Abierto)</li>
          </ul>
        </article>

        {/* ARTÍCULO 6 */}
        <article className="reglamento__item" id="art6">
          <h2 className="reglamento__item-title">ARTÍCULO 6. Inscripciones</h2>
          <p className="reglamento__item-text">
            Inscripciones habilitadas en <strong>www.10kindependenciadeambato.com</strong> o vía WhatsApp.
          </p>
          <p className="reglamento__item-text"><strong>Costos 2025:</strong></p>
          <ul className="reglamento__list">
            <li>$25 – Élite Pro</li>
            <li>$25 – Máster</li>
            <li>$18 – Leyenda</li>
            <li>$18 – Capacidades Especiales</li>
          </ul>
          <p className="reglamento__item-text">
            Incluye kit oficial (camiseta, chip, número, medalla, hidratación).
            Es obligatorio presentar cédula.
          </p>
        </article>

        {/* ARTÍCULO 7 */}
        <article className="reglamento__item" id="art7">
          <h2 className="reglamento__item-title">ARTÍCULO 7. Entrega de Kits y Chips</h2>
          <p className="reglamento__item-text">
            Entrega: sábado <strong>22 de noviembre de 2025</strong>.  
            <strong>Lugar:</strong> Por confirmar.
          </p>
          <p className="reglamento__item-text"><strong>Horario:</strong> 10h00 a 17h00</p>
          <ul className="reglamento__list">
            <li>Comprobante de inscripción</li>
            <li>Cédula de identidad</li>
          </ul>
        </article>

        {/* ARTÍCULO 8 */}
        <article className="reglamento__item" id="art8">
          <h2 className="reglamento__item-title">ARTÍCULO 8. Clasificación</h2>
          <p className="reglamento__item-text">
            Resultados oficiales publicados en línea al finalizar el evento.
          </p>
        </article>

        {/* ARTÍCULO 9 */}
        <article className="reglamento__item" id="art9">
          <h2 className="reglamento__item-title">ARTÍCULO 9. Puntos de Control</h2>
          <p className="reglamento__item-text">
            No pasar por un punto de control es causal de descalificación.
          </p>
        </article>

        {/* ARTÍCULO 10 */}
        <article className="reglamento__item" id="art10">
          <h2 className="reglamento__item-title">ARTÍCULO 10. Vehículos Autorizados</h2>
          <p className="reglamento__item-text">
            Solo vehículos acreditados podrán circular durante el evento.
          </p>
        </article>

        {/* ARTÍCULO 11 */}
        <article className="reglamento__item" id="art11">
          <h2 className="reglamento__item-title">ARTÍCULO 11. Seguridad y Atención Médica</h2>
          <p className="reglamento__item-text">
            Ambulancias, voluntarios, personal médico y seguridad estarán presentes en
            todo el recorrido.
          </p>
        </article>

        {/* ARTÍCULO 12 */}
        <article className="reglamento__item" id="art12">
          <h2 className="reglamento__item-title">ARTÍCULO 12. Descalificación</h2>
          <ul className="reglamento__list">
            <li>No completar la ruta.</li>
            <li>Exceder 2h30.</li>
            <li>No pasar por controles.</li>
            <li>Usar número no oficial.</li>
            <li>Recibir ayuda externa.</li>
          </ul>
        </article>

        {/* ARTÍCULO 13 */}
        <article className="reglamento__item" id="art13">
          <h2 className="reglamento__item-title">ARTÍCULO 13. Premios Económicos</h2>
          <p className="reglamento__item-text">
            Premios para los primeros lugares de cada categoría. Publicación oficial en
            el sitio web.
          </p>
        </article>

        {/* ARTÍCULO 14 */}
        <article className="reglamento__item" id="art14">
          <h2 className="reglamento__item-title">ARTÍCULO 14. Declaración de Salud</h2>
          <p className="reglamento__item-text">
            El corredor declara estar apto para participar y libera de
            responsabilidades a la organización.
          </p>
        </article>

        {/* ARTÍCULO 15 */}
        <article className="reglamento__item" id="art15">
          <h2 className="reglamento__item-title">ARTÍCULO 15. Modificaciones</h2>
          <p className="reglamento__item-text">
            La organización podrá modificar el reglamento o fechas por fuerza
            mayor.
          </p>
        </article>
      </div>
    </section>
  );
}
