'use client'

import { useEffect, useMemo, useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function LogoTicker2() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const API = 'https://mandarinas.10kindependenciadeambato.com/wp-json/mandarinas/v1/logos?active=1&page_id=47'
  const LOCAL_FALLBACK = '/assets/imgs/template/logo-mandarinas.svg'

  // ===== Ajustes visuales =====
  const MAX_SHOW = 10        // <- muestra sólo 6 logos distintos
  const LOGO_HEIGHT = 84    // <- tamaño del logo en desktop (px)
  const GAP_X = 48          // <- separación lateral entre logos (px)
  const SPEED = 38          // <- velocidad del marquee
  const MIN_FOR_LOOP = 12   // duplica hasta tener al menos 12 elementos en la tira

  const url = useMemo(() => `${API}&_ts=${Date.now()}`, [])

  useEffect(() => {
    let cancel = false
    ;(async () => {
      try {
        const res = await fetch(url, { cache: 'no-store' })
        const data = await res.json()
        const rows = Array.isArray(data?.items) ? data.items : []
        const cleaned = rows.filter(r => typeof r?.image_url === 'string' && r.image_url.length)
        if (!cancel) setItems(cleaned)
      } catch (e) {
        console.error('Logos API error:', e)
      } finally {
        if (!cancel) setLoading(false)
      }
    })()
    return () => { cancel = true }
  }, [url])

  if (loading) return null

  // Base: datos o fallback
  const base = items.length ? items : Array(10).fill(0).map(() => ({ image_url: LOCAL_FALLBACK, url: '' }))

  // Muestra menos logos, pero grandes
  const firstBatch = base.slice(0, MAX_SHOW)

  // Duplica para que el carrusel sea continuo aunque sean pocos
  let logosToShow = firstBatch.slice()
  while (logosToShow.length < MIN_FOR_LOOP) {
    logosToShow = logosToShow.concat(firstBatch)
  }

  // Forzar remount cuando cambien las imágenes
  const marqueeKey = logosToShow.map(l => l.image_url).join('|').length || 'def'

  return (
    <>
      <Marquee
        key={marqueeKey}
        pauseOnHover
        direction="left"
        speed={SPEED}
        gradient={false}
        autoFill   // si tu versión lo soporta, rellena huecos automáticamente
        className="list-logos"
      >
        {logosToShow.map((it, i) => {
          const href = typeof it.url === 'string' ? it.url : ''
          const img = (
            <div className="logoItem" style={{ padding: `0 ${GAP_X}px` }}>
              <img
                src={it.image_url}
                alt={`Logo ${i + 1}`}
                loading="lazy"
                draggable="false"
                style={{ height: LOGO_HEIGHT, width: 'auto', display: 'block', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = LOCAL_FALLBACK }}
              />
            </div>
          )
          return (
            <li key={i} style={{ display: 'inline-block', listStyle: 'none' }}>
              {href ? <a href={href} target="_blank" rel="noopener noreferrer">{img}</a> : img}
            </li>
          )
        })}
      </Marquee>

      <style jsx global>{`
        .list-logos { white-space: nowrap; }
        .list-logos .logoItem img { filter: none; opacity: 1; transition: transform .2s ease; }
        .list-logos .logoItem:hover img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .list-logos .logoItem img { height: ${Math.round(LOGO_HEIGHT * 0.75)}px; }
        }
      `}</style>
    </>
  )
}
