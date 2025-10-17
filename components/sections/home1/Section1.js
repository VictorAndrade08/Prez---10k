"use client";
import { useRef, useEffect, useState } from "react";

const HEADER_OFFSET = 88;
const VIDEO_ID = "I8EtjbDIOR4";
const POSTER = "/assets/imgs/page/homepage1/op23.webp";

// Ajustes rápidos
const AUTOPLAY_ON_MOBILE = false; // ← pon true si quieres video real también en móvil
const USE_NOCOOKIE = true;        // ← usa dominio sin cookies

export default function Section1() {
  const rootRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [mountIframe, setMountIframe] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Respeta prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // Detecta móvil (para decidir si montar iframe)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // Preconnect perezoso a orígenes de YouTube solo si nos acercamos
  const preconnectedRef = useRef(false);
  const lazyPreconnect = () => {
    if (preconnectedRef.current) return;
    preconnectedRef.current = true;
    const origins = [
      USE_NOCOOKIE ? "https://www.youtube-nocookie.com" : "https://www.youtube.com",
      "https://i.ytimg.com",
      "https://www.google.com",
    ];
    origins.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  };

  // Observa visibilidad de la sección
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            lazyPreconnect();
          }
        });
      },
      { rootMargin: "300px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Desktop (y móvil con AUTOPLAY_ON_MOBILE=true): monta en idle cuando está visible
  useEffect(() => {
    if (!isVisible) return;
    if (reducedMotion) return;                  // accesibilidad: deja póster
    if (isMobile && !AUTOPLAY_ON_MOBILE) return; // móvil: por defecto solo póster

    const mount = () => setMountIframe(true);
    if ("requestIdleCallback" in window) {
      // @ts-ignore
      const id = window.requestIdleCallback(mount, { timeout: 1500 });
      return () => {
        // @ts-ignore
        window.cancelIdleCallback?.(id);
      };
    } else {
      const t = setTimeout(mount, 900);
      return () => clearTimeout(t);
    }
  }, [isVisible, reducedMotion, isMobile]);

  // Móvil con AUTOPLAY_ON_MOBILE=false → montar tras primer gesto del usuario
  useEffect(() => {
    if (!isMobile) return;
    if (AUTOPLAY_ON_MOBILE) return;
    if (!isVisible) return;
    if (reducedMotion) return;
    if (mountIframe) return;

    let armed = true;

    const trigger = () => {
      if (!armed) return;
      armed = false;
      lazyPreconnect();
      setMountIframe(true);
      detach();
    };

    const opts = { passive: true, once: true };
    const events = ["touchstart", "pointerdown", "click", "keydown", "scroll"];

    const detach = () => {
      events.forEach((ev) => window.removeEventListener(ev, trigger, opts));
    };

    events.forEach((ev) => window.addEventListener(ev, trigger, opts));
    return detach;
  }, [isMobile, isVisible, reducedMotion, mountIframe]);

  // Guard doble disparo + navegación instantánea
  const firedRef = useRef(false);
  const guardDoubleFire = () => {
    if (firedRef.current) return true;
    firedRef.current = true;
    setTimeout(() => { firedRef.current = false; }, 400);
    return false;
  };

  const navInstant = (url, blank = false) => (e) => {
    if (guardDoubleFire()) return;
    e.preventDefault();
    e.stopPropagation();
    try { e.currentTarget?.blur?.(); } catch {}
    if (blank) window.open(url, "_blank", "noopener,noreferrer");
    else window.location.assign(url);
  };

  const onKeyActivate = (handler) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler(e);
    }
  };

  // URL del iframe (nocookie + parámetros “ligeros”)
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const originParam = origin ? `&origin=${encodeURIComponent(origin)}` : "";
  const YT_BASE = USE_NOCOOKIE ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
  const YT_SRC =
    `${YT_BASE}/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}` +
    `&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&fs=0&disablekb=1&hl=es-419&vq=small` +
    originParam;

  return (
    <section
      ref={rootRef}
      className="section-box"
      style={{
        position: "relative",
        isolation: "isolate",  // ← aísla el z-index del héroe
        overflow: "clip",      // ← recorta vídeo/capa oscura al alto del héroe (usa "hidden" si prefieres)
        minHeight: "100dvh",
        paddingBottom: 0       // ← evita que el overlay tape el borde inferior
      }}
    >
      {/* MEDIA LAYER: póster siempre visible (0 coste de YouTube) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          overflow: "hidden",
          pointerEvents: "none",
          backgroundImage: `url(${POSTER})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
          transition: "opacity .3s ease",
          opacity: mountIframe ? 0.85 : 1,
        }}
      />

      {/* IFRAME real solo cuando toca */}
      {mountIframe && (
        <iframe
          title="Video de fondo"
          src={YT_SRC}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          style={{
            width: "100vw",
            height: "56.25vw",   // 16:9
            minHeight: "100vh",
            minWidth: "177.78vh", // 16:9
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.2)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      )}

      {/* CAPA OSCURA */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,.6)", zIndex: -1 }} />

      {/* CONTENIDO */}
      <div className="banner-hero hero-5" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          <div className="box-banner-left text-white" style={{ paddingTop: "160px", position: "relative", zIndex: 3 }}>
            <a
              href="/inscripcion"
              className="btn-fosforescente mb-4"
              onPointerUp={navInstant("/inscripcion", false)}
              onKeyDown={onKeyActivate(navInstant("/inscripcion", false))}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            >
              <span className="etiqueta">8K</span> Inscripcion Oficial
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" />
              </svg>
            </a>

            <h1 className="display-2 mb-30 mt-25">Corre en la 8K Ruta de las Mandarinas Patate - Ecuador</h1>
            <p className="text-lg mb-40">
              Inscríbete y vive la emoción de correr entre paisajes únicos.
              Participa, supera tus límites y sé parte de una experiencia inolvidable con la comunidad runner.
              Premios económicos a primeros lugares.
            </p>

            <div className="d-flex mb-40 flex-wrap gap-3">
              <a
                href="/inscripcion"
                className="btn-inscribete-vibrante"
                onPointerUp={navInstant("/inscripcion", false)}
                onKeyDown={onKeyActivate(navInstant("/inscripcion", false))}
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              >
                INSCRÍBETE AHORA <strong>— ¡ÚLTIMOS CUPOS!</strong> →
              </a>

              <a
                href="/informacion/"
                className="btn-inscribete-vibrante"
                onPointerUp={navInstant("/informacion/", false)}
                onKeyDown={onKeyActivate(navInstant("/informacion/", false))}
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              >
                ¿QUÉ INCLUYE LA INSCRIPCIÓN? →
              </a>
            </div>

            <div style={{ marginTop: "30px", textAlign: "left" }}>
              <p className="text-lg mb-3" style={{ fontSize: "1.25rem", fontWeight: "600", fontStyle: "italic" }}>
                Con la calidad de:
              </p>
              <div className="d-flex gap-4 flex-wrap">
                <img src="/assets/imgs/10kjuanes.webp"  alt="8K Ruta de las Mandarinas" width="148" height="60" />
                <img src="/assets/imgs/10kjuanes2.webp" alt="8K Ruta de las Mandarinas" width="148" height="60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html { scroll-behavior: auto; }
        [id] { scroll-margin-top: ${HEADER_OFFSET}px; }
        .banner-hero.hero-5, .banner-hero.hero-5 * { will-change: auto; }
        .banner-hero.hero-5 .box-banner-left {
          opacity: 1 !important;
          transform: none !important;
          visibility: visible !important;
          pointer-events: auto !important;
          z-index: 3;
        }
        [aria-hidden="true"] { pointer-events: none !important; }
      `}</style>
    </section>
  );
}
