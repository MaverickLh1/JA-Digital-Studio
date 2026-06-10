"use client";

import { motion } from "motion/react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { Crosshair } from "@/components/decor";
import { easeOut } from "@/lib/motion";

export default function Services() {
  return (
    <section id="servicios" className="bg-crema px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <SectionHeader
            index="01"
            kicker="Lo que puedo hacer por ti"
            title="Todo lo que tu negocio necesita para destacar online"
            description="Cinco áreas, un objetivo: que funcione y que venda. Con mano especial para el e-commerce."
          />
        </div>

        <div className="relative">
          {/* Marcas de registro: encuadran el área de trabajo del bento */}
          <Crosshair className="-left-1.5 -top-1.5 text-carbon/30" />
          <Crosshair className="-right-1.5 -top-1.5 text-carbon/30" />
          <Crosshair className="-bottom-1.5 -left-1.5 text-carbon/30" />
          <Crosshair className="-bottom-1.5 -right-1.5 text-carbon/30" />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className={service.span}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: easeOut }}
              >
                <ServiceCard service={service} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
