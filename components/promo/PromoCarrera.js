'use client';

import Link from 'next/link';

const COMBO_URL = '/inscripcion/#formulario'; 
// ⬆️ Cambia esta ruta si tu formulario Combo está en otra página, p.ej. '/combo/#formulario'

export default function PromoDoble() {
  return (
    <main className="promo8k">
      <section className="promo8k__wrap" style={{ alignItems: 'stretch' }}>
        {/* IZQUIERDA */}
        <div className="card" style={{ height: '100%' }}>
          <h1 className="card__title">PROMOCIÓN ACTIVA 🎉</h1>

          <p className="card__subtitle" style={{ marginBottom: 12 }}>
            Inscríbete en el <b>Combo 2 Carreras</b> y corre:
            <br />
            <b>10K Independencia de Ambato 2025</b> + <b>10K Ruta de los Tres Juanes 2026</b>
          </p>

          <div className="badge-row" style={{ display: 'flex', gap: 12, alignItems: 'center', margin: '8px 0 20px' }}>
            <span className="badge" style={{ padding: '6px 10px', borderRadius: 999, background: 'var(--soft, #F4F8FB)' }}>
              Precio: <b>$50</b>
            </span>
            <span className="badge" style={{ padding: '6px 10px', borderRadius: 999, background: 'var(--soft, #F4F8FB)' }}>
              Categorías: ELITE · MASTER · LEYENDA · ESPECIALES
            </span>
          </div>

          <ul className="mini-list" style={{ margin: 0, paddingLeft: 18 }}>
            <li><b>Ambato 10K:</b> 23 de noviembre de 2025</li>
            <li><b>Tres Juanes 10K:</b> 6 de febrero de 2026</li>
          </ul>

          <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 16, display: 'flex', gap: 12 }}>
            <Link href={COMBO_URL} className="btn btn--primary">
              Inscríbete al Combo ($50)
            </Link>
            <Link href="/inscripcion/" className="btn btn--ghost">
              Ver info de inscripción
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
                  alt="Promo Combo 2 Carreras — 10K Ambato + 10K Tres Juanes"
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
