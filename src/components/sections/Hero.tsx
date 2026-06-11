"use client";

import { motion } from "motion/react";
import ScrambleText from "@/components/ScrambleText";
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
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-carbon px-5 pb-20 pt-28 text-crema sm:pt-32"
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
          Josea González — Freelance digital · España
        </motion.p>

        <h1 className="font-display text-[2.6rem] font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
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
            {/* El U+2060 tras el guion evita que "e-commerce" se parta
                en dos líneas en móvil. */}
            <ScrambleText text={"web, e-⁠commerce y marca."} />
          </motion.span>
        </h1>

        <motion.p
          custom={4}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-crema/70 sm:mt-8 sm:text-lg"
        >
          Ayudo a negocios y marcas a crecer en internet: tiendas Shopify y
          diseño web, con imágenes de producto y branding para rematar. Y la
          IA bien aplicada en cada proyecto.
        </motion.p>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
        >
          <a
            href="#servicios"
            className="shimmer group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-carbon transition-transform hover:scale-[1.03] active:scale-[0.97]"
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
            className="inline-flex items-center rounded-full border border-crema/25 px-7 py-3.5 text-sm font-semibold text-crema transition-[border-color,transform] hover:border-crema/60 active:scale-[0.97]"
          >
            Hablemos
          </a>
        </motion.div>
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
