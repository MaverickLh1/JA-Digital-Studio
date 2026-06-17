"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Si el usuario pide menos movimiento, no activamos el scroll suave de Lenis:
  // puede provocar mareo (sensibilidad vestibular) y añade trabajo en cada
  // interacción. MotionConfig ya detiene las animaciones de motion.
  if (reduce) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
