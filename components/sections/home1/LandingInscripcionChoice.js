// components/LandingInscripcionChoice.js
import Link from "next/link";

const DEFAULT_NORMAL_IMG =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/90x1.webp";
const DEFAULT_VERIFICAR_IMG =
  "https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/11/92x2.webp";

/**
 * Bloque con dos tarjetas: Inscripción normal / Verificar inscripción
 * Funciona en export estático (no hooks, no fetch).
 */
export default function LandingInscripcionChoice({
  normalHref = "/inscripcion/",
  verificarHref = "/verificar",
  normalImg = DEFAULT_NORMAL_IMG,
  verificarImg = DEFAULT_VERIFICAR_IMG,
  className = "",
  normalSubtitle = "23 de noviembre · 08h00",
  verificarSubtitle = "Consulta tu registro oficial de la 10K Independencia de Ambato",
}) {
  return (
    <section
      className={`landing-choice ${className}`}
      aria-label="Elige tu inscripción o verifica"
    >
      <Card
        href={normalHref}
        img={normalImg}
        title="Inscripción normal"
        subtitle={normalSubtitle}
        cta="Inscribirme"
      />
      <Card
        href={verificarHref}
        img={verificarImg}
        title="Verificar inscripción"
        subtitle={verificarSubtitle}
        cta="Verificar"
      />
    </section>
  );
}

function Card({ href, img, title, subtitle, cta }) {
  return (
    <Link href={href} className="landing-card" aria-label={title}>
      <div
        className="landing-card__img"
        style={{ backgroundImage: `url(${img})` }}
        aria-hidden="true"
      />
      <div className="landing-card__body">
        <h3 className="landing-card__title">{title}</h3>
        {subtitle ? <p className="landing-card__subtitle">{subtitle}</p> : null}
        <span className="landing-card__btn" role="button">
          {cta}
        </span>
      </div>
    </Link>
  );
}
