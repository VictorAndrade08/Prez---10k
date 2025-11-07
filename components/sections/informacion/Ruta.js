'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function Ruta({
  title = 'Ruta Oficial 10K Independencia de Ambato 2025',
  salida = 'Puente Luis A. Martínez',
  llegada = 'Parque Cdla. Nuevo Ambato – Ambato',
  descripcion = 'Circuito urbano de 10 kilómetros por las principales avenidas de Ambato. Ruta certificada, rápida y segura, con puntos de hidratación y asistencia médica.',
  mapSrc = '/assets/imgs/10k3.jpg',
  mapAlt = '10K Independencia de Ambato 2025 — La carrera de la ciudad',
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightboxOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Bloquear scroll del body cuando el lightbox está abierto
  useEffect(() => {
    const { style } = document.body;
    if (lightboxOpen) {
      const prev = style.overflow;
      style.overflow = 'hidden';
      return () => { style.overflow = prev; };
    }
  }, [lightboxOpen]);

  const handleSoon = (label) => {
    toast.info(`Próximamente: ${label} disponible muy pronto 🚧`, { duration: 3000 });
  };

  return (
    <section
      id="ruta"
      className="route-sec"
      aria-label="Información de la ruta"
      style={{
        background: 'linear-gradient(180deg, #0B2439 0%, #111111 100%)',
        color: '#FFFFFF',
        padding: '80px 20px',
      }}
    >
      <div
        className="route-wrap"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          className="route-grid"
          style={{
            display: 'grid',
            gap: '32px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
          }}
        >
          {/* Columna izquierda */}
          <article
            className="route-card"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}
          >
            <h2
              className="route-title"
              style={{
                fontWeight: 800,
                fontSize: '1.8rem',
                color: '#D6E764',
                fontStyle: 'italic',
                marginBottom: '16px',
              }}
            >
              {title}
            </h2>

            <p
              className="route-meta"
              style={{
                color: '#EAEAEA',
                fontSize: '1rem',
                marginBottom: '16px',
              }}
            >
              <span>Salida:</span>{' '}
              <strong style={{ color: '#D6E764' }}>{salida}</strong>
              <span className="route-dot" style={{ margin: '0 6px' }}>
                ·
              </span>
              <span>Llegada:</span>{' '}
              <strong style={{ color: '#1CA7A6' }}>{llegada}</strong>
            </p>

            <p
              className="route-desc"
              style={{
                lineHeight: 1.6,
                color: '#EAEAEA',
                marginBottom: '24px',
              }}
            >
              {descripcion}
            </p>

            <div
              className="route-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <button
                className="route-btn route-btnPrimary"
                onClick={() => setLightboxOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #1CA7A6, #D6E764)',
                  color: '#0B0B0B',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 22px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Ver imagen oficial
              </button>

              <button
                className="route-btn route-btnGhost"
                onClick={() => handleSoon('Descargar mapa GPX')}
                style={ghostButton}
              >
                Descargar GPX
              </button>

              <button
                className="route-btn route-btnGhost"
                onClick={() => handleSoon('Descargar mapa PDF')}
                style={ghostButton}
              >
                Descargar PDF
              </button>
            </div>
          </article>

          {/* Columna derecha */}
          <aside
            className="route-mapCard"
            aria-label="Mapa o logo del evento"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}
          >
            <div className="route-mapBox">
              <img
                className="route-mapImg"
                src={mapSrc}
                alt={mapAlt}
                loading="lazy"
                decoding="async"
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                  background: '#F6F6F6',
                }}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="route-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="route-lightboxInner"
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative' }}
          >
            <img
              className="route-lightboxImg"
              src={mapSrc}
              alt={mapAlt}
              draggable={false}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            />
            <button
              className="route-lightboxClose"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar"
              type="button"
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: 'linear-gradient(135deg, #1CA7A6, #D6E764)',
                border: 'none',
                borderRadius: '50%',
                color: '#0B0B0B',
                fontWeight: 700,
                fontSize: '1.2rem',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const ghostButton = {
  background: 'transparent',
  color: '#FFFFFF',
  border: '1px solid rgba(255,255,255,0.3)',
  borderRadius: '10px',
  padding: '12px 22px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};
