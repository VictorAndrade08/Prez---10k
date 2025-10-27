'use client';
import { useState } from 'react';

/**
 * PremiosTabs – Sección de premios con tabs
 * Línea gráfica 10K Independencia de Ambato (verde azulado y verde lima)
 */
export default function PremiosTabs() {
  const [active, setActive] = useState('elite');

  const tabs = [
    { id: 'elite', label: 'Élite (18–39)' },
    { id: 'master', label: 'Súper Máster (40–64)' },
    { id: 'leyenda', label: 'Leyenda (65+)' },
    { id: 'especiales', label: 'Personas con Discapacidad' },
  ];

  return (
    <section
      className="premios-section"
      id="premios"
      style={{
        background: 'linear-gradient(180deg, #0B2439 0%, #111111 100%)',
        color: '#FFFFFF',
        padding: '80px 20px',
      }}
    >
      <div className="premios-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          className="premios-title"
          style={{
            color: '#D6E764',
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '2rem',
            marginBottom: '12px',
          }}
        >
          PREMIOS ECONÓMICOS
        </h2>
        <p
          className="premios-sub"
          style={{
            textAlign: 'center',
            color: '#EAEAEA',
            marginBottom: '40px',
          }}
        >
          Premiación oficial de la <b>10K Independencia de Ambato 2025</b> para los tres primeros lugares por categoría.
        </p>

        {/* Tabs */}
        <div
          className="premios-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`premios-tab ${active === tab.id ? 'active' : ''}`}
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                border: active === tab.id ? 'none' : '1px solid rgba(255,255,255,0.3)',
                background:
                  active === tab.id
                    ? 'linear-gradient(135deg, #1CA7A6, #D6E764)'
                    : 'transparent',
                color: active === tab.id ? '#0B0B0B' : '#FFFFFF',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="premios-panels">
          {active === 'elite' && (
            <PremiosCard
              title="ÉLITE (18 a 39 años)"
              premios={[
                { lugar: '1° lugar', hombre: '$200', mujer: '$200' },
                { lugar: '2° lugar', hombre: '$150', mujer: '$150' },
                { lugar: '3° lugar', hombre: '$100', mujer: '$100' },
              ]}
              btn="Inscribirme en Élite"
            />
          )}

          {active === 'master' && (
            <PremiosCard
              title="SÚPER MÁSTER (40 a 64 años)"
              premios={[
                { lugar: '1° lugar', hombre: '$150', mujer: '$150' },
                { lugar: '2° lugar', hombre: '$100', mujer: '$100' },
                { lugar: '3° lugar', hombre: '$50', mujer: '$50' },
              ]}
              btn="Inscribirme en Súper Máster"
            />
          )}

          {active === 'leyenda' && (
            <PremiosCard
              title="LEYENDA (65 años en adelante)"
              premios={[
                { lugar: '1° lugar', hombre: '$150', mujer: '$150' },
                { lugar: '2° lugar', hombre: '$100', mujer: '$100' },
                { lugar: '3° lugar', hombre: '$50', mujer: '$50' },
              ]}
              btn="Inscribirme en Leyenda"
            />
          )}

          {active === 'especiales' && (
            <PremiosCard
              title="PERSONAS CON DISCAPACIDAD (Abierto)"
              premios={[
                { lugar: '1° lugar', premio: '$150' },
                { lugar: '2° lugar', premio: '$100' },
                { lugar: '3° lugar', premio: '$50' },
              ]}
              btn="Inscribirme en Discapacidad"
              single
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ----------------- SUBCOMPONENTE ----------------- */
function PremiosCard({ title, premios, btn, single = false }) {
  return (
    <div
      className="premios-card"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '32px',
        margin: '0 auto',
        maxWidth: '800px',
      }}
    >
      <h3
        style={{
          color: '#D6E764',
          fontWeight: 800,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        {title}
      </h3>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '28px',
        }}
      >
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.08)' }}>
            <th style={thStyle}>Ubicación</th>
            {!single && <th style={thStyle}>Hombre</th>}
            {!single && <th style={thStyle}>Mujer</th>}
            {single && <th style={thStyle}>Premio</th>}
          </tr>
        </thead>
        <tbody>
          {premios.map((p, i) => (
            <tr key={i}>
              <td style={tdStyle}>{p.lugar}</td>
              {!single && <td style={tdStyle}>{p.hombre}</td>}
              {!single && <td style={tdStyle}>{p.mujer}</td>}
              {single && <td style={tdStyle}>{p.premio}</td>}
            </tr>
          ))}
        </tbody>
      </table>

      <a
        href="/inscripcion"
        className="btn-cta"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #1CA7A6, #D6E764)',
          color: '#0B0B0B',
          fontWeight: 700,
          borderRadius: '10px',
          padding: '12px 24px',
          textDecoration: 'none',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {btn}
      </a>
    </div>
  );
}

/* Estilos tabla */
const thStyle = {
  color: '#D6E764',
  textAlign: 'left',
  padding: '10px',
  fontWeight: 700,
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  color: '#EAEAEA',
};
