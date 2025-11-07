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

  // 2) Activar video al mover, hacer scroll o click
  useEffect(() => {
    if (reducedMotion) return;

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

    window.addEventListener("mousemove", enableVideo, { once: true, passive: true });
    window.addEventListener("scroll", enableVideo, { once: true, passive: true });
    window.addEventListener("click", enableVideo, { once: true });
    window.addEventListener("touchstart", enableVideo, { once: true, passive: true });
    window.addEventListener("keydown", enableVideo, { once: true });

    return cleanup;
  }, [reducedMotion]);

  // 3) Autoplay silencioso en móviles
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

  // 4) URL del video oficial 10K Independencia de Ambato
  const SRC =
    "https://www.youtube.com/embed/R9Lu9dX20tE" +
    "?autoplay=1&mute=1&playsinline=1&loop=1&playlist=R9Lu9dX20tE" +
    "&rel=0&modestbranding=1&showinfo=0&enablejsapi=1";

  return (
    <section className="video-oficial-section container py-5 text-center">
      <h2 className="mb-3">
        VIDEO OFICIAL DE LA CARRERA <br className="d-none d-lg-block" />
        10K INDEPENDENCIA DE AMBATO 2025
      </h2>

      <p className="text-lg neutral-700 mb-4">
        Vive la emoción de “La carrera de la ciudad”. Corre por las calles de Ambato, Ecuador, 
        celebra la independencia con energía y orgullo. ¿Listo para sumarte? 
        Mira el video y únete a la 10K.
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
              : "url(/assets/imgs/page/homepage1/op23.webp) center/cover no-repeat", // póster temporal
          }}
        >
          {mountIframe && (
            <iframe
              ref={iframeRef}
              src={SRC}
              title="Video oficial 10K Independencia de Ambato 2025"
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
