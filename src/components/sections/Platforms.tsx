"use client";

import { motion } from "motion/react";
import { platforms } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

export default function Platforms() {
  return (
    // Inicio del bloque oscuro final: entra como una lámina con esquinas
    // redondeadas sobre el crema (el fondo del body asoma en las esquinas).
    <section
      id="plataformas"
      className="rounded-t-[2.5rem] bg-carbon px-5 pb-24 pt-20 text-crema sm:rounded-t-[3.5rem] sm:pb-28 sm:pt-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeader
          index="04"
          kicker="Encuéntrame también en"
          title="¿Prefieres contratar a través de una plataforma?"
          description="Estoy en las principales. Elige la que prefieras."
          dark
          center
          dot={false}
          titleClassName="max-w-xl text-2xl sm:text-4xl"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target={p.url === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center justify-center overflow-hidden rounded-2xl border border-crema/10 bg-crema/[0.03] px-7 py-8 text-crema/55 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:bg-crema/[0.06] hover:text-coral"
            >
              <span
                className="platform-icon h-12 w-full transition-transform duration-300 group-hover:scale-105"
                style={{
                  WebkitMaskImage: `url(${p.icon})`,
                  maskImage: `url(${p.icon})`,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
