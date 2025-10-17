'use client';

import Link from 'next/link';

export default function PromoDoble() {
  return (
    <main className="promo8k">
      <section className="promo8k__wrap" style={{ alignItems: 'stretch' }}>
        {/* IZQUIERDA */}
        <div className="card" style={{ height: '100%' }}>
          <h1 className="card__title">PROMOCIÓN FINALIZADA</h1>

          <p className="card__subtitle">
            La promoción de inscripción doble ha terminado.
            <br />
            Puedes continuar con la <b>inscripción normal</b> a la 8K.
          </p>

          <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 16 }}>
            <Link href="/inscripcion/" className="btn btn--primary">
              Inscríbete normal (click aquí)
            </Link>
          </div>
        </div>

        {/* DERECHA: póster estático opcional */}
        <div className="card card--right" style={{ display: 'flex' }}>
          <div className="swap is-poster" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div
              className="swap__panel swap__poster"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                <source srcSet="/assets/imgs/promo.webp" type="image/webp" />
                <img
                  src="/assets/imgs/promo.webp"
                  alt="8K Ruta de las Mandarinas"
                  className="card__poster"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '24px' }}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
