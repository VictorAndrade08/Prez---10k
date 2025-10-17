"use client"; 
import React, { useState } from "react";

export default function RutaDetalle() {
  const [activeTab, setActiveTab] = useState("foto1");

  return (
    <section className="ruta-detalle container">
      <div className="ruta-detalle__grid">
        {/* Izquierda: Ruta y detalles */}
        <div className="card">
          <h2 className="card__title">Ruta y Detalles</h2>
          <p><b>Salida:</b> Patate Garden</p>
          <p><b>Llegada:</b> Parque Central</p>
          <p className="muted">
            Recorrido mixto con tramos urbanos y rurales. Hidratación intermedia.
          </p>

          <div className="card__actions">
            <a className="btn btn--outline" href="/rutas/route.gpx" download>
              Descargar GPX
            </a>
            <a className="btn btn--outline" href="/rutas/route.kml" download>
              Descargar KML
            </a>
            <a className="btn btn--fill" href="/inscripcion">
              Asegurar mi cupo
            </a>
          </div>

          <h3 className="card__subtitle">Así es tu recorrido en Patate</h3>
          <ol className="steps">
            <li className="step">
              <span className="km">0–1K 🏁</span>
              <div>
                Salida en <b>Patate Garden</b>
                <small>Tramo urbano controlado</small>
              </div>
            </li>
            <li className="step">
              <span className="km">1–3K 🌱</span>
              <div>
                Zona rural y cultivos
                <small>Tierra compacta</small>
              </div>
            </li>
            <li className="step">
              <span className="km">3–5K 💧</span>
              <div>
                Leves desniveles
                <small>Punto de hidratación</small>
              </div>
            </li>
            <li className="step">
              <span className="km">5–7K 🏙</span>
              <div>
                Retorno al centro
                <small>Terreno mixto</small>
              </div>
            </li>
            <li className="step">
              <span className="km">7–8K 🎉</span>
              <div>
                Llegada Parque Central
                <small>Zona de fotos y meta</small>
              </div>
            </li>
          </ol>
        </div>

        {/* Derecha: Recorrido */}
        <div className="card">
          <div className="card__header">
            <h2 className="card__title">Recorrido</h2>
            <a href="/inscripcion" className="btn btn--fill small">
              Asegurar mi cupo
            </a>
          </div>

          <div className="segmented">
            <button
              className={activeTab === "foto1" ? "active" : ""}
              onClick={() => setActiveTab("foto1")}
            >
              Foto 1
            </button>
            <button
              className={activeTab === "foto2" ? "active" : ""}
              onClick={() => setActiveTab("foto2")}
            >
              Foto 2
            </button>
            <button
              className={activeTab === "mapa" ? "active" : ""}
              onClick={() => setActiveTab("mapa")}
            >
              Mapa
            </button>
          </div>

          <div className="map-placeholder">
            {activeTab === "foto1" && (
              <img
                src="/images/mapa-carrera.jpg"
                alt="Mapa del recorrido 8K Patate (imagen 1)"
                className="map-img"
              />
            )}
            {activeTab === "foto2" && (
              <img
                src="/images/mapa-carrera-2.jpg"
                alt="Mapa del recorrido 8K Patate (imagen 2)"
                className="map-img"
              />
            )}
            {activeTab === "mapa" && (
              <iframe
                src="https://www.openstreetmap.org/export/embed.html"
                title="Mapa interactivo"
                className="map-iframe"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
