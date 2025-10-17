import React from "react";

export default function HeroRuta() {
  return (
    <section className="hero-ruta">
      <div className="hero-ruta__content container">
        <h1 className="hero-ruta__title">
          RUTA OFICIAL 8K — PATATE 2025
        </h1>
        <p className="hero-ruta__subtitle">
          Corre entre montañas, naturaleza y plantaciones de mandarina.
        </p>

        {/* Chips principales */}
        <div className="hero-ruta__chips">
          <span className="chip"><b>Salida:</b> Patate Garden · 08h00</span>
          <span className="chip"><b>Llegada:</b> Parque Central</span>
          <span className="chip"><b>Distancia:</b> 8K</span>
          <span className="chip">Terreno mixto</span>
        </div>

        {/* Estado / Urgencia */}
        <div className="hero-ruta__status">
          <span className="chip chip--black">Quedan <b>180</b> cupos</span>
          <span className="chip">Precio sube en <b>3 días</b></span>
        </div>

        {/* Beneficios */}
        <div className="hero-ruta__benefits">
          <span className="chip chip--dashed">🏅 Medalla finisher</span>
          <span className="chip chip--dashed">💧 1 punto de hidratación</span>
          <span className="chip chip--dashed">🎽 Kit del corredor</span>
        </div>

        {/* CTA principal */}
        <div className="hero-ruta__actions">
          <a href="/inscripcion" className="btn btn--primary">
            ¡Inscríbete Online! →
          </a>
          <a href="#ruta" className="btn btn--outline">Ver ruta</a>
        </div>
      </div>
    </section>
  );
}
