"use client";

import Link from 'next/link';

export default function Section10() {
  return (
    <section className="section-box box-pricing-2 box-pricing-3 mandarina-cats">
      <div className="container">
        <div className="text-center">
          {/* 👇 sin slash */}
          <a href="#formulario" className="btn btn-brand-4-sm">
            Categorías para Todos
          </a>

          <h2 className="mb-20 mt-15 mandarina-cats-head">
            Diseñada para todas <br className="d-none d-lg-block" /> las edades y condiciones.
          </h2>

          <p className="text-lg neutral-500 mb-65 mandarina-cats-sub">
            Desde corredores jóvenes hasta adultos mayores, incluyendo atletas con capacidades especiales.
          </p>
        </div>

        <div className="block-pricing">
          <div className="row">
            {/* ÉLITE */}
            <div className="col-lg-3 col-md-6">
              <div className="card-pricing card-pricing-style-3 mandarina-cat mandarina-cat--elite">
                <div className="card-title">
                  <h6>Élite (Menores de 40 años)</h6>
                </div>
                <div className="card-price" />
                <div className="card-button">
                  {/* 👇 sin slash */}
                  <a href="#formulario" className="btn mandarina-cat-btn mandarina-cat-btn--uniform">
                    ¡INSCRÍBETE AHORA! →
                  </a>
                </div>
                <div className="card-lists">
                  <ul className="list-feature">
                    <li>Para corredores que buscan dar su mejor marca</li>
                    <li>Categoría oficial competitiva</li>
                    <li>Ideal si tienes entre 18 y 39 años</li>
                    <li>Velocidad y adrenalina</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SÚPER MASTER */}
            <div className="col-lg-3 col-md-6">
              <div className="card-pricing card-pricing-style-3 mandarina-cat mandarina-cat--master">
                <div className="card-title">
                  <h6>Súper Master (40 a 64 años)</h6>
                </div>
                <div className="card-price" />
                <div className="card-button">
                  {/* 👇 sin slash */}
                  <a href="#formulario" className="btn mandarina-cat-btn mandarina-cat-btn--uniform">
                    ¡INSCRÍBETE AHORA! →
                  </a>
                </div>
                <div className="card-lists">
                  <ul className="list-feature">
                    <li>Corredores con experiencia y resistencia</li>
                    <li>Vive el desafío con madurez y fuerza</li>
                    <li>Participa junto a otros atletas de tu rango</li>
                    <li>Damas y varones con espíritu competitivo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LEYENDA */}
            <div className="col-lg-3 col-md-6">
              <div className="card-pricing card-pricing-style-3 mandarina-cat mandarina-cat--leyenda">
                <div className="card-title">
                  <h6>Leyenda – Tercera Edad (65+ años)</h6>
                </div>
                <div className="card-price" />
                <div className="card-button">
                  {/* 👇 sin slash */}
                  <a href="#formulario" className="btn mandarina-cat-btn mandarina-cat-btn--uniform">
                    ¡INSCRÍBETE AHORA! →
                  </a>
                </div>
                <div className="card-lists">
                  <ul className="list-feature">
                    <li>Para verdaderas leyendas del running</li>
                    <li>Corre a tu ritmo, con alegría y orgullo</li>
                    <li>Categoría femenina y masculina</li>
                    <li>Recorrido adaptado con asistencia total</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ESPECIALES */}
            <div className="col-lg-3 col-md-6">
              <div className="card-pricing card-pricing-style-3 mandarina-cat mandarina-cat--especiales">
                <div className="card-title">
                  <h6>Especiales (Con Carnet) </h6>
                </div>
                <div className="card-price" />
                <div className="card-button">
                  {/* 👇 sin slash */}
                  <a href="#formulario" className="btn mandarina-cat-btn mandarina-cat-btn--uniform">
                    ¡INSCRÍBETE AHORA! →
                  </a>
                </div>
                <div className="card-lists">
                  <ul className="list-feature">
                    <li>Para atletas con discapacidad visual, intelectual o física</li>
                    <li>Participación con respeto, apoyo y alegría</li>
                    <li>Requiere carnet CONADIS vigente</li>
                    <li>Asistencia y Seguridad</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
