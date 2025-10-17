'use client';
import React from 'react';

export default function Section4() {
  return (
    <section className="section-box box-preparing-2">
      <div className="container">
        <div className="text-center">
          <h2
            className="mb-15"
            style={{ color: '#FFFFFF', textShadow: '0 0 8px rgba(0,0,0,.6)' }}
          >
            Prepárate para lograr
            <br className="d-none d-lg-block" />
            lo que antes creías imposible
          </h2>

          <p
            className="text-lg neutral-700"
            style={{ color: '#FFFFFF', textShadow: '0 0 4px rgba(0,0,0,.55)' }}
          >
            La Ruta de las Mandarinas es más que una carrera: es un camino de superación personal,
            <br />
            comunidad y bienestar. Corre con propósito, vive la experiencia.
          </p>
        </div>

        <div className="row mt-90">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card-preparing text-white-prep">
              <div className="card-image">
                <img
                  src="/assets/imgs/page/homepage1/c5.webp"
                  alt="Inscripción rápida y segura - 8K Ruta de las Mandarinas"
                  loading="lazy"
                />
              </div>
              <div className="card-info">
                <h5>Inscripción Rápida y Segura</h5>
                <p className="text-lg neutral-700 w-85 mx-auto">
                  Realiza tu registro online en pocos pasos y recibe confirmación
                  inmediata por la web o WhatsApp. Sin filas ni complicaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="card-preparing text-white-prep">
              <div className="card-image">
                <img
                  src="/assets/imgs/page/homepage1/c2.webp"
                  alt="Seguimiento de tu progreso - 8K Ruta de las Mandarinas"
                  loading="lazy"
                />
              </div>
              <div className="card-info">
                <h5>Seguimiento de tu Progreso</h5>
                <p className="text-lg neutral-700 w-85 mx-auto">
                  Accede a tu historial de tiempos y recibe consejos personalizados
                  para mejorar tu rendimiento en cada edición.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card-preparing text-white-prep">
              <div className="card-image">
                <img
                  src="/assets/imgs/page/homepage1/c3.webp"
                  alt="Comunidad que motiva - 8K Ruta de las Mandarinas"
                  loading="lazy"
                />
              </div>
              <div className="card-info">
                <h5>Comunidad que Motiva</h5>
                <p className="text-lg neutral-700 w-85 mx-auto">
                  Forma parte de una red de corredores que comparten metas,
                  entrenamientos y experiencias. ¡Corre acompañado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
