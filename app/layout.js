// app/layout.js
import { Barlow_Condensed, Urbanist } from 'next/font/google'
import { Toaster } from 'sonner'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Server-only (válido en layout de App Router)
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import crypto from 'crypto'

const barlowCondensed = Barlow_Condensed({
  weight: ['200','300','400','500','600','700','800'],
  style: ['normal','italic'],
  subsets: ['latin'],
  variable: '--tg-body-font-family',
  display: 'swap',
})

// Urbanist self-host con display: swap (no cambia tu tipografía por defecto)
const urbanist = Urbanist({
  weight: ['300','400','600','700'],
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
})

// ---------- Manifest opcional (no rompe si no existe) ----------
function readManifest() {
  try {
    const p = resolve(process.cwd(), 'assets-manifest.json')
    if (existsSync(p)) return JSON.parse(readFileSync(p, 'utf8'))
  } catch {}
  return null
}

// ---------- Hash del contenido como fallback ----------
function fileHash(absPath) {
  try {
    const buf = readFileSync(absPath)
    return crypto.createHash('md5').update(buf).digest('hex').slice(0, 10)
  } catch {
    return String(Math.floor(Date.now() / 1000))
  }
}

const manifest = readManifest()

function cssHref(basename /* 'style.css' | 'main.css' */) {
  // Si hay manifest (p.ej. "assets/css/style.abc123.css"), úsalo
  if (manifest && manifest[basename]) return '/' + manifest[basename]
  // Si no, usa el archivo normal con ?v=HASH
  const abs = resolve(process.cwd(), 'public/assets/css/' + basename)
  const v = fileHash(abs)
  return `/assets/css/${basename}?v=${v}`
}

const styleHref = cssHref('style.css')
const mainHref  = cssHref('main.css')

export const metadata = {
  title: '8K Ruta de las Mandarinas – Corre con Propósito',
  description:
    'Vive la experiencia de correr entre los campos de mandarinas más emblemáticos del país. Cronometraje digital, comunidad activa y resultados oficiales.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${urbanist.variable}`}>
      <head>
        <base href="/" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0b0b12" />
        <link rel="icon" href="/favicon.ico" />

        {/*
          IMPORTANTE: Elimina cualquier <link> a Bunny Fonts (p.ej. fonts.bunny.net)
          si existe en otra parte (app/head.tsx, _document.tsx, etc.).
        */}

        {/* CSS con cache-busting automático */}
        <link rel="preload" as="style" href={styleHref} />
        <link rel="stylesheet" href={styleHref} />
        <link rel="preload" as="style" href={mainHref} />
        <link rel="stylesheet" href={mainHref} />

        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "su8ulvvimw");`
          }}
        />
      </head>
      <body>
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  )
}
