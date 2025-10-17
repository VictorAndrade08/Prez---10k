import Link from 'next/link'

export default function Section3() {
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-our-track on-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-40">
            <img
              src="/assets/imgs/page/homepage1/Banner-8k-Mandarina-2.webp"
              alt="Nivia"
            />
          </div>
          <div className="col-lg-6 mb-40">
            <div className="box-padding-left-50">

              <div className="logo-wrapper mb-20">
                <img
                  src="/assets/imgs/page/homepage1/logo.png"
                  alt="Logo Ruta de las Mandarinas"
                  className="logo-icon-mandarina"
                />
              </div>

              {/* Línea gráfica */}
              <div className="mandarina-graphic-line" aria-hidden="true" />

              <h2 className="heading-2 mb-20">
                Llega más lejos cumpliendo tus metas personales
              </h2>

              <p className="text-lg neutral-700">
                La Ruta de las Mandarinas es una carrera con propósito que une a miles de corredores cada año.
                Fundada en Ecuador, promueve bienestar, comunidad y superación personal.
              </p>

              <div className="row mt-50">
                {[
                  {
                    img: 'op1.webp',
                    title: 'Kit de Bienvenida Completo',
                    text: 'Recibe camiseta, dorsal, medalla, snacks y regalos de nuestros auspiciantes al inscribirte.'
                  },
                  {
                    img: 'ruta.webp',
                    title: 'Ruta Segura y Escénica',
                    text: 'Corre entre paisajes naturales con hidratación, seguridad y asistencia médica garantizada.'
                  },
                  {
                    img: 'copa.webp',
                    title: 'Premios y Sorpresas',
                    text: 'Participa por premios en diferentes categorías y sorteos exclusivos para inscritos.'
                  },
                  {
                    img: 'tiempo.webp',
                    title: 'Certificado y Resultados Oficiales',
                    text: 'Al finalizar, obtén tu tiempo oficial y un certificado digital de participación.'
                  }
                ].map((card, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div className="card-feature-2">
                      <div className="card-image">
                        <img src={`/assets/imgs/page/homepage3/${card.img}`} alt="" />
                      </div>
                      <div className="card-info">
                        <Link href="#">
                          <h3 className="text-22-bold">{card.title}</h3>
                        </Link>
                        <p className="text-md neutral-700">{card.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
