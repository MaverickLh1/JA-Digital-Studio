"use client";

import { motion } from "motion/react";
import { faqs } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp } from "@/lib/motion";

// Acordeón nativo (<details>): accesible por teclado sin ARIA manual y, sobre
// todo, las respuestas viven siempre en el DOM aunque estén plegadas, así que
// Google y los buscadores con IA las leen (clave para el FAQPage schema).
export default function Faq() {
  return (
    <section id="faq" className="bg-crema-dim px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          index="05"
          kicker="Preguntas frecuentes"
          title="Lo que sueles querer saber"
          description="Y si te queda cualquier duda, escríbeme: respondo en menos de 24 h."
        />

        <motion.div
          {...fadeUp(0.1)}
          className="mt-12 border-y border-carbon/10"
        >
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-carbon/10 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold tracking-tight text-carbon [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl font-light leading-none text-coral-text transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="-mt-1 max-w-2xl pb-5 leading-relaxed text-carbon/75">
                {f.a}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
