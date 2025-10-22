// components/LandingInscripcionChoice.js
import Link from 'next/link';

const DEFAULT_NORMAL_IMG =
  'https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/10/normal.jpg';
const DEFAULT_PROMO_IMG =
  'https://mandarinas.10kindependenciadeambato.com/wp-content/uploads/2025/10/promo1.webp';

/**
 * Bloque con dos tarjetas: Inscripción normal / Inscripción promoción
 * Funciona en export estático (no hooks, no fetch).
 */
export default function LandingInscripcionChoice({
  normalHref = '/inscripcion/',             // <-- cambiado aquí
  promoHref = '/promo#formulario',
  normalImg = DEFAULT_NORMAL_IMG,
  promoImg = DEFAULT_PROMO_IMG,
  className = '',
  normalSubtitle = '23 de noviembre · 08h00',
  promoSubtitle = 'Ruta de los Tres Juanes + 10K Ambato · 2 carreras por $50',
}) {
  return (
    <section className={`landing-choice ${className}`} aria-label="Elige tu inscripción">
      <Card
        href={normalHref}
        img={normalImg}
        title="Inscripción normal"
        subtitle={normalSubtitle}
        cta="Inscripción normal"
      />
      <Card
        href={promoHref}
        img={promoImg}
        title="Inscripción promoción"
        subtitle={promoSubtitle}
        cta="Inscripción promoción"
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
        <span className="landing-card__btn" role="button">{cta}</span>
      </div>
    </Link>
  );
}
