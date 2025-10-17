'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Section11() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false })
    } else {
      setIsActive({ status: true, key })
    }
  }

  return (
    <section className="section-box box-faqs-3 mandarina-faqs">
      <div className="container">
        <div className="row">
          {/* Col izquierda: título + copy */}
          <div className="col-lg-5">
            <div className="box-faq-left">
              <a
                className="btn btn-brand-4-sm"
                href="https://wa.link/nsogsa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preguntas Frecuentes
              </a>

              <h2 className="heading-2 mb-20 mt-20">
                Queremos que te sientas seguro(a) antes de correr
              </h2>
              <p className="text-lg neutral-700">
                Aquí encontrarás las respuestas a las preguntas más comunes sobre la{' '}
                <strong>Carrera Atlética 8K Ruta de las Mandarinas</strong>. Si necesitas más
                ayuda, no dudes en{' '}
                <a
                  href="https://wa.link/nsogsa"
                  className="mandarina-wa-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contactarnos por WhatsApp
                </a>
                .
              </p>
            </div>
          </div>

          {/* Col derecha: acordeón */}
          <div className="col-lg-7">
            <div
              className="accordion accordion-flush accordion-style-2"
              id="accordionFAQS"
            >
              {/* Pregunta 1 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="flush-headingOne"
                  onClick={() => handleClick(1)}
                >
                  <button
                    className={
                      isActive.key === 1
                        ? 'accordion-button'
                        : 'accordion-button collapsed'
                    }
                    type="button"
                  >
                    ¿Cómo me puedo inscribir?
                  </button>
                </h2>
                <div
                  className={
                    isActive.key === 1
                      ? 'accordion-collapse collapse show'
                      : 'accordion-collapse collapse'
                  }
                >
                  <div className="accordion-body">
                    Puedes hacerlo enviándonos un mensaje directo por{' '}
                    <a
                      href="https://wa.link/nsogsa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp aquí
                    </a>
                    . ¡Es rápido y fácil!
                  </div>
                </div>
              </div>

              {/* Pregunta 2 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="flush-headingTwo"
                  onClick={() => handleClick(2)}
                >
                  <button
                    className={
                      isActive.key === 2
                        ? 'accordion-button'
                        : 'accordion-button collapsed'
                    }
                    type="button"
                  >
                    ¿Dónde lleno el formulario?
                  </button>
                </h2>
                <div
                  className={
                    isActive.key === 2
                      ? 'accordion-collapse collapse show'
                      : 'accordion-collapse collapse'
                  }
                >
                  <div className="accordion-body">
                    Puedes iniciar tu inscripción escribiéndonos directamente por{' '}
                    <a
                      href="https://wa.link/nsogsa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>{' '}
                    y te guiaremos en el proceso.
                  </div>
                </div>
              </div>

              {/* Pregunta 3 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="flush-headingThree"
                  onClick={() => handleClick(3)}
                >
                  <button
                    className={
                      isActive.key === 3
                        ? 'accordion-button'
                        : 'accordion-button collapsed'
                    }
                    type="button"
                  >
                    ¿Cómo hago el pago?
                  </button>
                </h2>
                <div
                  className={
                    isActive.key === 3
                      ? 'accordion-collapse collapse show'
                      : 'accordion-collapse collapse'
                  }
                >
                  <div className="accordion-body">
                    Te indicaremos cómo realizar el pago una vez nos escribas por{' '}
                    <a
                      href="https://walink.co/d6a258"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                    . Solo debes enviar tu comprobante y listo.
                  </div>
                </div>
              </div>

              {/* Pregunta 4 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="flush-headingFour"
                  onClick={() => handleClick(4)}
                >
                  <button
                    className={
                      isActive.key === 4
                        ? 'accordion-button'
                        : 'accordion-button collapsed'
                    }
                    type="button"
                  >
                    ¿Cómo sé si estoy inscrito correctamente?
                  </button>
                </h2>
                <div
                  className={
                    isActive.key === 4
                      ? 'accordion-collapse collapse show'
                      : 'accordion-collapse collapse'
                  }
                >
                  <div className="accordion-body">
                    Una vez validado tu pago, recibirás una confirmación oficial por{' '}
                    <a
                      href="https://wa.link/nsogsa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>{' '}
                    con todos los detalles.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /col derecha */}
        </div>
      </div>
    </section>
  )
}
