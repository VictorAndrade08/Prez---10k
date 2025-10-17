'use client';

import React from 'react';

export default function RaceStatsBar() {
  return (
    <div className="mandarinas-stats-bar">
      <div className="mandarinas-stats-container">
        <div className="mandarinas-stat">
          <p className="label">Distancia</p>
          <p className="value">8.0 KM</p>
        </div>

        <div className="mandarinas-stat highlight">
          <p className="label">Últimos Cupos</p>
          <p className="value special">$23 USD <br/>Incluye Kit</p>
        </div>

        <div className="mandarinas-stat">
          <p className="label">Fecha de salida</p>
          <p className="value">Sábado 27 Septiembre 2025</p>
        </div>

        <div className="mandarinas-stat">
          <p className="label">Salida</p>
          <p className="value">Patate Gardens – 08:00</p>
        </div>

        <div className="mandarinas-stat">
          <p className="label">Tiempo máximo</p>
          <p className="value">02 Horas</p>
        </div>
      </div>
    </div>
  );
}
