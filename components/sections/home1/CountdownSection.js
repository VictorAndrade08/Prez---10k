'use client';
import React, { useEffect, useState } from 'react';
import '@/public/assets/css/main.css';

// Fija zona horaria (-05:00 Ecuador) para evitar NaN/valores raros
const targetDate = new Date('2025-09-27T07:00:00-05:00');

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const clamp = (n) => (Number.isFinite(n) ? Math.max(0, n) : 0);

  const seconds = clamp(Math.floor((total / 1000) % 60));
  const minutes = clamp(Math.floor((total / 1000 / 60) % 60));
  const hours   = clamp(Math.floor((total / (1000 * 60 * 60)) % 24));
  const days    = clamp(Math.floor(total / (1000 * 60 * 60 * 24)));

  return { total, days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeRemaining(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    // Fallback ligero mientras monta
    return (
      <section className="countdown-wrapper">
        <div className="countdown-title"><h2>Cargando…</h2></div>
      </section>
    );
  }

  const createCircle = (value, max, label) => {
    const CIRC = 565.48; // 2πr (r=90)
    const pct = Math.min(100, Math.max(0, (value / max) * 100));
    const dash = CIRC - (CIRC * pct) / 100;

    return (
      <div className="circle-container" key={label}>
        {/* SVG ajustado para ser fluido y mantener proporciones */}
        <svg
          className="circle"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="100" cy="100" r="90" className="track" />
          <circle
            cx="100"
            cy="100"
            r="90"
            className="indicator"
            style={{
              strokeDashoffset: dash,
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
            }}
          />
        </svg>
        <div className="circle-text">
          <span className="number-label">
            <span className="number">{value}</span>
            <span className="label">{label}</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="countdown-wrapper">
      <div className="countdown-title">
        <h2>
          ¡ESTÁS A TIEMPO DE UNIRTE A LA GRAN CARRERA!
          <br />
          8K RUTA DE LAS MANDARINAS
        </h2>
      </div>
      <div className="countdown-grid">
        {createCircle(timeLeft.days, 365, 'DÍAS')}
        {createCircle(timeLeft.hours, 24, 'HORAS')}
        {createCircle(timeLeft.minutes, 60, 'MINUTOS')}
        {createCircle(timeLeft.seconds, 60, 'SEGUNDOS')}
      </div>
    </section>
  );
}
