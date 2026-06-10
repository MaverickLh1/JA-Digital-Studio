"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&/<>{}";

export default function ScrambleText({
  text,
  className,
  speed = 28,
  revealDelay = 250,
}: {
  text: string;
  className?: string;
  speed?: number;
  revealDelay?: number;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      // Sin animación: mostrar el texto final (vía rAF para no hacer
      // setState síncrono dentro del effect).
      raf.current = requestAnimationFrame(() => setDisplay(text));
      return () => {
        if (raf.current) cancelAnimationFrame(raf.current);
      };
    }

    let revealed = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed > revealDelay) {
        revealed = Math.floor((elapsed - revealDelay) / speed);
      }

      const out = text
        .split("")
        .map((char, i) => {
          if (char === " " || char === "\n") return char;
          if (i < revealed) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(out);

      if (revealed < text.length) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, speed, revealDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
