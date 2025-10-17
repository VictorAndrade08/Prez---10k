'use client';
import { useState } from 'react';

/**
 * PremiosTabs – Sección de premios con tabs
 * Línea gráfica Mandarinas (fondo púrpura, acentos naranja)
 */
export default function PremiosTabs() {
  const [active, setActive] = useState('elite');

  const tabs = [
    { id: 'elite', label: 'Élite Pro 8K' },
    { id: 'master', label: 'Máster' },
    { id: 'leyenda', label: 'Leyenda' },
    { id: 'discapacidad', label: 'Discapacidad' },
  ];

  return (
    <section className="premios-section" id="premios">
      <div className="premios-container">
        <h2 className="premios-title">PREMIOS ECONÓMICOS</h2>
        <p className="premios-sub">
          Para los primeros lugares en cada categoría y clasificación.
        </p>

        {/* Tabs */}
        <div className="premios-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`premios-tab ${active === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="premios-panels">
          {active === 'elite' && (
            <div className="premios-card">
              <h3>ÉLITE PRO 8K (Menores de 40 años)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ubicación</th>
                    <th>Hombre</th>
                    <th>Mujer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Primero</td><td>$120</td><td>$120</td></tr>
                  <tr><td>Segundo</td><td>$100</td><td>$100</td></tr>
                  <tr><td>Tercero</td><td>$80</td><td>$80</td></tr>
                </tbody>
              </table>
              <a href="/inscripcion" className="btn-cta">Inscribirme en Élite</a>
            </div>
          )}

          {active === 'master' && (
            <div className="premios-card">
              <h3>MÁSTER (40 a 64 años)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ubicación</th>
                    <th>Hombre</th>
                    <th>Mujer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Primero</td><td>$80</td><td>$80</td></tr>
                  <tr><td>Segundo</td><td>$60</td><td>$60</td></tr>
                  <tr><td>Tercero</td><td>$40</td><td>$40</td></tr>
                </tbody>
              </table>
              <a href="/inscripcion" className="btn-cta">Inscribirme en Máster</a>
            </div>
          )}

          {active === 'leyenda' && (
            <div className="premios-card">
              <h3>LEYENDA (65+ años)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ubicación</th>
                    <th>Hombre</th>
                    <th>Mujer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Primero</td><td>$80</td><td>$80</td></tr>
                  <tr><td>Segundo</td><td>$60</td><td>$60</td></tr>
                  <tr><td>Tercero</td><td>$40</td><td>$40</td></tr>
                </tbody>
              </table>
              <a href="/inscripcion" className="btn-cta">Inscribirme en Leyenda</a>
            </div>
          )}

          {active === 'discapacidad' && (
            <div className="premios-card">
              <h3>DISCAPACIDAD (Abierto)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ubicación</th>
                    <th>Premio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Primero</td><td>$80</td></tr>
                  <tr><td>Segundo</td><td>$60</td></tr>
                  <tr><td>Tercero</td><td>$40</td></tr>
                </tbody>
              </table>
              <a href="/inscripcion" className="btn-cta">Inscribirme en Discapacidad</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
