"use client";
import React, { useEffect, useRef, useState } from "react";

export default function VideoF1() {
  const [mountIframe, setMountIframe] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const iframeRef = useRef(null);

  // 1) Respetar prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // 2) Disparadores de carga “como WP Rocket”: movimiento de cursor o scroll (y opcional: click/touch)
  useEffect(() => {
    if (reducedMotion) return; // no montes nada si el usuario lo pide

    const enableVideo = () => {
      setMountIframe(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("mousemove", enableVideo);
      window.removeEventListener("scroll", enableVideo);
      window.removeEventListener("click", enableVideo);
      window.removeEventListener("touchstart", enableVideo);
      window.removeEventListener("keydown", enableVideo);
    };

    // Requerido por ti: mousemove o scroll. Dejo otros como fallback por si el user no mueve el mouse.
    window.addEventListener("mousemove", enableVideo, { once: true, passive: true });
    window.addEventListener("scroll", enableVideo, { once: true, passive: true });

    // Fallback opcional (puedes comentar estas 3 si no las quieres)
    window.addEventListener("click", enableVideo, { once: true });
    window.addEventListener("touchstart", enableVideo, { once: true, passive: true });
    window.addEventListener("keydown", enableVideo, { once: true });

    return cleanup;
  }, [reducedMotion]);

  // 3) Empujar play en iOS/Android si el autoplay no arranca de inmediato
  useEffect(() => {
    if (!mountIframe) return;
    const poke = () => {
      const w = iframeRef.current?.contentWindow;
      if (!w) return;
      w.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
    };
    const t1 = setTimeout(poke, 300);
    const t2 = setTimeout(poke, 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [mountIframe]);

  // 4) Parámetros del player (autoplay silencioso + loop + inline)
  const SRC =
    "https://www.youtube.com/embed/PeBBsM8FkHw" +
    "?autoplay=1&mute=1&playsinline=1&loop=1&playlist=PeBBsM8FkHw" +
    "&rel=0&modestbranding=1&showinfo=0&enablejsapi=1";

  return (
    <section className="video-oficial-section container py-5 text-center">
      <h2 className="mb-3">
        VIDEO OFICIAL DE LA CARRERA <br className="d-none d-lg-block" />
        8K RUTA DE LAS MANDARINAS
      </h2>

      <p className="text-lg neutral-700 mb-4">
        Corre entre mandarinales en Patate, Ecuador. Vive la energía, inscríbete hoy.
        ¿Listo para sumarte? Mira el video y únete a la 8K.
      </p>

      <div className="video-frame" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9
            height: 0,
            overflow: "hidden",
            borderRadius: 12,
            background: mountIframe
              ? "none"
              : "url(/assets/imgs/page/homepage1/op23.webp) center/cover no-repeat", // póster antes de cargar
          }}
        >
          {mountIframe && (
            <iframe
              ref={iframeRef}
              src={SRC}
              title="Video oficial 8K Ruta de las Mandarinas"
              width="560"
              height="315"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
