'use client';

import Link from 'next/link';

export default function Section5() {
  const scrollToFormulario = () => {
    const formElement = document.getElementById('formulario');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-our-track-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-40">
            <div className="mandarina-title mb-30">
              <img src="/assets/imgs/page/homepage1/logo.png" alt="Logo mandarina" className="mandarina-icon" />
              <h3 className="mandarina-heading">Corre con propósito</h3>
            </div>

            <h2 className="heading-2 mb-20">Sigue tu progreso, supera tus propios límites</h2>
            <p className="text-lg neutral-700">
              Cada kilómetro es una victoria personal. Con nuestro sistema de cronometraje y resultados digitales, 
              podrás hacer seguimiento de tu rendimiento, comparar tiempos y prepararte para nuevos retos.
            </p>

            <div className="row mt-50">
              <div className="col-lg-12">
                <div className="card-feature-2">
                  <div className="card-image">
                    <img src="/assets/imgs/page/homepage3/ico1.webp" />
                  </div>
                  <div className="card-info">
                    <h3 className="text-22-bold">Conoce tu evolución como corredor</h3>
                    <p className="text-md neutral-700">
                      Forma parte de una comunidad activa y entrena junto a otros corredores que comparten tu motivación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="card-feature-2">
                  <div className="card-image">
                    <img src="/assets/imgs/page/homepage3/ico5.webp" />
                  </div>
                  <div className="card-info">
                    <h3 className="text-22-bold">Corre con tu equipo o grupo de entrenamiento</h3>
                    <p className="text-md neutral-700">
                      Consulta tus resultados oficiales, tiempos por categoría y progresos a lo largo de las ediciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-buttons-feature-4">
              {/* Scroll al formulario */}
              <button className="btn btn-brand-4-medium mr-20" onClick={scrollToFormulario}>
                Inscríbete ahora
                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                </svg>
              </button>

              {/* Enlace a WhatsApp */}
              <a
                className="btn btn-learmore-2"
                href="https://walink.co/d6a258"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <svg width={39} height={38} viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width={38} height={38} rx={19} fill="#191919" />
                    <g clipPath="url(#clip0_1_376)">
                      <path d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z" fill="#C5FF55" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_376">
                        <rect width={13} height={13} fill="white" transform="translate(13.5 13)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Ver ruta y categorías
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center mb-40">
            <div className="box-border-image">
              <img
                src="/assets/imgs/page/homepage1/Banner-8k-Mandarina-2.webp"
                alt="Prepárate 8K"
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
