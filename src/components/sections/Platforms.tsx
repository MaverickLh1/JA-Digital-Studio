"use client";

import { motion } from "motion/react";
import { platforms } from "@/lib/data";

export default function Platforms() {
  return (
    <section id="plataformas" className="bg-carbon px-5 py-24 text-crema sm:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-coral"
        >
          Encuéntrame también en
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto max-w-xl font-display text-2xl font-bold tracking-tight sm:text-4xl"
        >
          ¿Prefieres contratar a través de una plataforma?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-md text-crema/60"
        >
          Estoy en las principales. Elige la que prefieras.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
              className="group flex aspect-[3/2] flex-col items-center justify-center gap-2 rounded-2xl border border-crema/10 bg-crema/[0.03] text-crema/55 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:bg-crema/[0.06] hover:text-coral"
            >
              <span
                className="platform-icon h-7 w-20 transition-transform duration-300 group-hover:scale-110"
                style={{
                  WebkitMaskImage: `url(${p.icon})`,
                  maskImage: `url(${p.icon})`,
                }}
              />
              <span className="text-xs font-medium">{p.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
