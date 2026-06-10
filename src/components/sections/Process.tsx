"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Cuéntame",
    text: "Me escribes y me explicas qué necesitas. Te respondo rápido y sin compromiso.",
  },
  {
    n: "02",
    title: "Lo definimos",
    text: "Acordamos alcance, plazo y precio. Todo claro desde el principio, sin sorpresas.",
  },
  {
    n: "03",
    title: "Lo entrego",
    text: "Hago el trabajo y te lo entrego listo para usar. Con revisiones si hace falta.",
  },
];

export default function Process() {
  return (
    <section className="bg-crema px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl"
        >
          Trabajar conmigo es fácil
        </motion.h2>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Línea de conexión */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-carbon/15 md:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: easeOut }}
              className="relative"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-coral bg-crema font-mono text-sm font-bold text-coral-dark">
                {step.n}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-carbon/65">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
