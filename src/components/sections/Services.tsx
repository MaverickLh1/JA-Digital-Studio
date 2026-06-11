"use client";

import { motion } from "motion/react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { Crosshair } from "@/components/decor";
import { easeOut } from "@/lib/motion";

export default function Services() {
  // Jerarquía de oferta: dos especialidades grandes y dos complementos.
  const core = services.filter((s) => !s.extra);
  const extras = services.filter((s) => s.extra);

  return (
    <section id="servicios" className="bg-crema px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <SectionHeader
            index="01"
            kicker="Lo que puedo hacer por ti"
            title="Todo lo que tu negocio necesita para destacar online"
            description="Dos especialidades y dos complementos. Un objetivo: que tu tienda funcione y venda."
          />
        </div>

        <div className="relative">
          {/* Marcas de registro: encuadran el área de trabajo del bento */}
          <Crosshair className="-left-1.5 -top-1.5 text-carbon/30" />
          <Crosshair className="-right-1.5 -top-1.5 text-carbon/30" />
          <Crosshair className="-bottom-1.5 -left-1.5 text-carbon/30" />
          <Crosshair className="-bottom-1.5 -right-1.5 text-carbon/30" />

          {/* Especialidades */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {core.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              >
                <ServiceCard service={service} index={i} />
              </motion.div>
            ))}
          </div>

          {/* Complementos */}
          <motion.div
            {...{
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.5 },
            }}
            className="mb-6 mt-12 flex items-center gap-3"
          >
            <span className="kicker text-coral-dark">(+)</span>
            <span className="kicker text-carbon/45">
              Complementos que rematan el proyecto
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-carbon/10" />
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {extras.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
              >
                <ServiceCard service={service} index={core.length + i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
