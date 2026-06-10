"use client";

import { motion } from "motion/react";
import ScrambleText from "@/components/ScrambleText";
import { StatusDot } from "@/components/decor";
import { easeOut } from "@/lib/motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: easeOut },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-carbon px-5 pb-20 pt-32 text-crema"
    >
      <div className="aurora" aria-hidden="true" />

      {/* Rejilla estructural: hairlines verticales fuera del contenido (solo lg) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[78rem] -translate-x-1/2 lg:block"
      >
        <span className="absolute inset-y-0 left-0 w-px bg-crema/[0.07]" />
        <span className="absolute inset-y-0 right-0 w-px bg-crema/[0.07]" />
        <span className="absolute bottom-28 left-0 h-px w-full bg-crema/[0.05]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="kicker mb-6 text-coral"
        >
          José Antonio — Freelance digital · España
        </motion.p>

        <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <motion.span
            custom={1}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Llevo tu negocio
          </motion.span>
          <motion.span
            custom={2}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="block"
          >
            al siguiente nivel:
          </motion.span>
          <motion.span
            custom={3}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="mt-2 block text-coral"
          >
            <ScrambleText text="web, e-commerce e IA." />
          </motion.span>
        </h1>

        <motion.p
          custom={4}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-xl text-base leading-relaxed text-crema/70 sm:text-lg"
        >
          Ayudo a negocios y marcas a crecer en internet: diseño web, tiendas
          Shopify, imágenes de producto, branding e inteligencia artificial
          aplicada.
        </motion.p>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#servicios"
            className="shimmer group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-carbon transition-transform hover:scale-[1.03]"
          >
            Ver lo que hago
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-crema/25 px-7 py-3.5 text-sm font-semibold text-crema transition-colors hover:border-crema/60"
          >
            Hablemos
          </a>
        </motion.div>

        <motion.p
          custom={6}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-12 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-crema/45"
        >
          <StatusDot />
          Disponible para nuevos proyectos
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-crema/40"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-crema/25 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-coral"
          />
        </div>
      </motion.div>
    </section>
  );
}
