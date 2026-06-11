"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { easeOut, fadeUp } from "@/lib/motion";
import { aboutChips } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-crema-dim px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Foto con marco coral desplazado (efecto impresión fuera de registro) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-coral"
            />
            <Image
              src="/foto-perfil.webp"
              alt="José Antonio, freelance digital"
              width={1200}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 448px"
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>
          <p className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-carbon/45">
            <span>La Haba, Badajoz — ES</span>
            <span className="text-coral-dark">38°55′N · 5°57′O</span>
          </p>
        </motion.div>

        {/* Texto */}
        <div>
          <SectionHeader
            index="03"
            kicker="Sobre mí"
            title="Hola, soy José Antonio 👋"
            dot={false}
            titleClassName="text-3xl sm:text-4xl"
          />

          <motion.div
            {...fadeUp(0.12)}
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

          <motion.ul {...fadeUp(0.18)} className="mt-7 flex flex-wrap gap-3">
            {aboutChips.map((c) => (
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
