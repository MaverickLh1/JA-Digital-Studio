"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const chips = ["📍 España", "Trato directo conmigo", "Respuesta rápida"];

export default function About() {
  return (
    <section id="sobre-mi" className="bg-crema-dim px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-coral/20" />
          <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl bg-coral" />
          <Image
            src="/foto-perfil.webp"
            alt="José Antonio, freelance digital"
            width={1200}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 448px"
            className="rounded-3xl object-cover shadow-xl"
          />
        </motion.div>

        {/* Texto */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-coral-dark"
          >
            Sobre mí
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Hola, soy José Antonio 👋
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 space-y-4 text-base leading-relaxed text-carbon/75 sm:text-lg"
          >
            <p>
              Soy freelance digital desde España y trabajo con negocios y marcas
              de todo el mundo hispano. Me muevo igual de bien entre el diseño y
              la tecnología: lo mismo te monto una web o una landing, te optimizo
              una tienda online en Shopify, te edito el catálogo de imágenes o te
              configuro la IA para tu negocio.
            </p>
            <p>
              Mi forma de trabajar es simple: entender qué necesitas, hacerlo
              bien y entregártelo listo para usar. Sin rodeos y sin tecnicismos
              innecesarios.
            </p>
            <p className="font-medium text-carbon">
              Si tienes un proyecto entre manos, cuéntamelo. Seguro que puedo
              ayudarte.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-carbon/15 bg-crema px-4 py-2 text-sm font-medium"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
