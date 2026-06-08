"use client";

import { motion } from "motion/react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section id="servicios" className="bg-crema px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-coral-dark"
          >
            Lo que puedo hacer por ti
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
          >
            Todo lo que tu negocio necesita para destacar online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-carbon/60"
          >
            Cinco áreas, un objetivo: que funcione y que venda. Con mano
            especial para el e-commerce.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className={service.span}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
