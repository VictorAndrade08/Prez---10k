'use client';

import React from 'react';
import { toast } from 'sonner';

export default function MandarinaOptions() {
  const mostrarAlerta = () => {
    toast.info('Esta opción estará disponible muy pronto.', {
      description: '¡Próximamente!',
      duration: 3000,
    });
  };

  return (
    <section className="botones-mandarina container py-5">
      <div className="mandarina-grid">
        {/* 1 - Formulario */}
        <a href="/inscripcion" className="mandarina-card mandarina-card--square">
          <div
            className="mandarina-bg"
            style={{ backgroundImage: "url('/assets/imgs/page/homepage1/op20.webp')" }}
          >
            <h3 className="mandarina-text" style={{ paddingTop: '60%' }}>
              ¡INSCRÍBETE,<br />ONLINE AQUÍ!
            </h3>
          </div>
        </a>

        {/* 2 - Informacion (antes WhatsApp) */}
        <a
          href="/informacion"
          className="mandarina-card mandarina-card--square"
          aria-label="Promo carreras: 2 por $40"
        >
          <div
            className="mandarina-bg mandarina-bg--contain" // <- evita recortes
            style={{ backgroundImage: "url('/assets/imgs/fondo1.webp')" }}
          >
            <h3 className="mandarina-text" style={{ paddingTop: '60%' }}>
             
              <br />
              <span style={{ fontWeight: 800 }}>
                Información de la Carrera
              </span>
            </h3>
          </div>
        </a>

        {/* 3 - Verificar Inscripción */}
        <a href="/verificar" className="mandarina-card mandarina-card--square">
          <div
            className="mandarina-bg"
            style={{ backgroundImage: "url('/assets/imgs/page/homepage1/op23.webp')" }}
          >
            <h3 className="mandarina-text" style={{ paddingTop: '58%' }}>
              VERIFICA<br />TU INSCRIPCIÓN
            </h3>
          </div>
        </a>

        {/* 4 - Ruta Oficial (Próximamente) */}
        <div
          onClick={mostrarAlerta}
          className="mandarina-card mandarina-card--square"
          role="button"
        >
          <div
            className="mandarina-bg"
            style={{ backgroundImage: "url('/assets/imgs/page/homepage1/imagen2.webp')" }}
          >
            <h3 className="mandarina-text" style={{ paddingTop: '58%' }}>
              CONECTA CON<br />LA RUTA OFICIAL
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
