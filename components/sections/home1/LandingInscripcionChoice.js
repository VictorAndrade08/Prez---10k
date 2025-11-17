"use client";
import Link from "next/link";
import { useState } from "react";

const IMG_NORMAL =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/90x1.webp";
const IMG_VERIFICAR =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/92x2.webp";
const IMG_REGLAMENTO =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/94x1.webp";
const IMG_KIT =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/95x1.webp";

// IMÁGENES DEL POPUP
const IMG_KIT_FOTO =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/574886449_1335662518252194_57657.webp";

const IMG_LUGAR =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/AF1QipOME5T7h8SzsLD0JBg5IW8avqMx.webp";

export default function LandingInscripcionChoice({
  normalHref = "/inscripcion/",
  verificarHref = "/verificar",
  reglamentoHref = "/reglamento",
  className = "",
}) {
  const [openKit, setOpenKit] = useState(false);

  return (
    <>
      <section
        className={`landing-choice ${className}`}
        aria-label="Opciones de inscripción y recursos"
      >
        <Card
          href={normalHref}
          img={IMG_NORMAL}
          title="Inscripción normal"
          subtitle="23 de noviembre · 08h00"
          cta="Inscribirme"
        />

        <Card
          href={verificarHref}
          img={IMG_VERIFICAR}
          title="Verificar inscripción"
          subtitle="Consulta tu registro oficial"
          cta="Verificar"
        />

        <Card
          href={reglamentoHref}
          img={IMG_REGLAMENTO}
          title="Conoce el reglamento"
          subtitle="Normativas, categorías y requisitos"
          cta="Leer reglamento"
        />

        <button
          className="landing-card landing-card--btn"
          onClick={() => setOpenKit(true)}
        >
          <div
            className="landing-card__img"
            style={{ backgroundImage: `url(${IMG_KIT})` }}
          />
          <div className="landing-card__body">
            <h3 className="landing-card__title">Retira tu kit</h3>
            <p className="landing-card__subtitle">
              Dirección, horarios y pasos para retirarlo
            </p>
            <span className="landing-card__btn">Ver detalles</span>
          </div>
        </button>
      </section>

      {openKit && (
        <div className="modal-kit open">
          <div className="modal-kit__overlay" onClick={() => setOpenKit(false)} />

          <div className="modal-kit__content">
            <button
              className="modal-kit__close-x"
              aria-label="Cerrar"
              onClick={() => setOpenKit(false)}
            >
              ×
            </button>

            <img
              src={IMG_LUGAR}
              alt="Lugar de retiro – Vehicentro Ficoa"
              className="modal-kit__image"
            />

            <h2>Retira tu kit</h2>

            <p className="modal-kit__info">
              <strong>📍 Vehicentro | Sinotruk – Ficoa</strong> <br />
              Av. Los Guaytambos, Ambato 180108
            </p>

            {/* 🔥 HORARIO NUEVO */}
            <p className="modal-kit__info">
              <strong>🗓 Sábado 22 de noviembre</strong> <br />
              <strong>🕘 10h00 a 17h00</strong>
            </p>

            <a
              href="https://share.google/jfGgf6Q723cQbtWpw"
              target="_blank"
              className="modal-kit__maps-btn"
            >
              Ir en Google Maps
            </a>

            <h3 className="modal-kit__subtitle">¿Qué contiene el kit?</h3>

            <img
              src={IMG_KIT_FOTO}
              alt="Contenido del kit oficial 10K"
              className="modal-kit__kit-img"
            />

            <ul className="modal-kit__list">
              <li>Camiseta oficial</li>
              <li>Chip de cronometraje</li>
              <li>Medalla finisher</li>
              <li>Souvenir</li>
              <li>Dorsal</li>
              <li>Sporty bag</li>
              <li>Seguro de accidentes</li>
              <li>Premios económicos (según categoría)</li>
            </ul>

            <div className="modal-kit__note">
              <strong>Nota importante:</strong>
              <br />
              Si no puedes retirar tu kit, puedes enviar a un tercero con:
              <ul>
                <li>Copia de tu cédula</li>
                <li>Papeleta de votación</li>
                <li>Autorización firmada (física o digital)</li>
              </ul>
            </div>

            <button className="modal-kit__close-btn" onClick={() => setOpenKit(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Card({ href, img, title, subtitle, cta }) {
  return (
    <Link href={href} className="landing-card" aria-label={title}>
      <div
        className="landing-card__img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="landing-card__body">
        <h3 className="landing-card__title">{title}</h3>
        {subtitle ? <p className="landing-card__subtitle">{subtitle}</p> : null}
        <span className="landing-card__btn">{cta}</span>
      </div>
    </Link>
  );
}
