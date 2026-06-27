"use client";

import { motion } from "motion/react";
import { testimonials } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

// Banda de reseñas (prueba social). No lleva número editorial: aparece solo
// cuando hay testimonios reales en data.ts, así que vacío = sección oculta,
// sin dejar hueco en la numeración del resto de secciones.
export default function Testimonios() {
  if (testimonials.length === 0) return null;

  return (
    <section id="resenas" className="bg-crema px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...fadeUp(0, { y: 16, duration: 0.5 })}
          className="flex items-center gap-3"
        >
          <span className="kicker text-coral-dark">Reseñas</span>
          <span aria-hidden="true" className="h-px flex-1 bg-carbon/15" />
        </motion.div>
        <motion.h2
          {...fadeUp(0.05)}
          className="mt-5 max-w-2xl font-display text-3xl font-black tracking-tight sm:text-5xl"
        >
          Lo que dicen quienes confían<span className="text-coral">.</span>
        </motion.h2>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author + i}
              {...fadeUp(0.05 * i)}
              className="flex w-full flex-col rounded-3xl border border-carbon/10 bg-paper p-7 shadow-sm sm:w-[22rem] sm:p-8"
            >
              <span aria-hidden="true" className="font-display text-5xl leading-none text-coral">
                &ldquo;
              </span>
              <blockquote className="-mt-3 text-base leading-relaxed text-carbon/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-carbon/10 pt-4">
                <div>
                  <p className="font-display font-bold tracking-tight text-carbon">
                    {t.author}
                  </p>
                  {t.role && (
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-carbon/60">
                      {t.role}
                    </p>
                  )}
                </div>
                {t.source && (
                  <span className="shrink-0 rounded-full border border-carbon/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-carbon/60">
                    {t.source}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
