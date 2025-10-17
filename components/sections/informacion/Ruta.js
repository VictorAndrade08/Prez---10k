'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function Ruta({
  title = 'Ruta',
  salida = 'Patate Garden',
  llegada = 'Parque Central',
  descripcion = 'Terreno mixto (tierra compacta + asfalto). Puntos de hidratación señalizados.',
  mapSrc = '/assets/imgs/mapa.webp',
  mapAlt = 'Mapa/recorrido 8K Ruta de las Mandarinas',
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

  // Sonner
  const handleSoon = (label) => {
    toast.info(`Próximamente: ${label} estará disponible muy pronto 🚧`, { duration: 3000 });
  };

  return (
    <section id="ruta" className="route-sec" aria-label="Información de la ruta">
      <div className="route-wrap">
        <div className="route-grid">
          {/* Columna izquierda */}
          <article className="route-card">
            <h2 className="route-title">{title}</h2>

            <p className="route-meta">
              <span>Salida:</span> <strong>{salida}</strong>
              <span className="route-dot">·</span>
              <span>Llegada:</span> <strong>{llegada}</strong>
            </p>

            <p className="route-desc">{descripcion}</p>

            <div className="route-actions">
              <button
                className="route-btn route-btnPrimary"
                onClick={() => setLightboxOpen(true)}
              >
                Ver ruta oficial
              </button>

              <button className="route-btn route-btnGhost" onClick={() => handleSoon('Descargar GPX')}>
                Descargar GPX
              </button>

              <button className="route-btn route-btnGhost" onClick={() => handleSoon('Descargar PDF')}>
                Descargar PDF
              </button>

              <button className="route-btn route-btnGhost" onClick={() => handleSoon('Abrir en Mapas')}>
                Abrir en Mapas
              </button>
            </div>
          </article>

          {/* Columna derecha */}
          <aside className="route-mapCard" aria-label="Vista del recorrido">
            {mapSrc ? (
              <div className="route-mapBox">
                <img
                  className="route-mapImg"
                  src={mapSrc}
                  alt={mapAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div className="route-mapPlaceholder">
                <span>[ Placeholder del mapa / recorrido ]</span>
              </div>
            )}
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
          aria-label="Mapa ampliado"
        >
          <div
            className="route-lightboxInner"
            onClick={(e) => e.stopPropagation()} // evita cierre si clic dentro
          >
            <img
              className="route-lightboxImg"
              src={mapSrc}
              alt={mapAlt}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <button
              className="route-lightboxClose"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar"
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
