"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { processSteps } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

export default function Process() {
  return (
    <section className="bg-crema px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <SectionHeader
            index="04"
            kicker="Proceso"
            title="Trabajar conmigo es fácil"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: easeOut }}
              className="border-t border-carbon/15 pt-8 transition-colors hover:border-coral/60"
            >
              <span
                aria-hidden="true"
                className="text-outline block font-display text-7xl font-black leading-none sm:text-8xl"
              >
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-carbon/65">
                {step.text}
              </p>
              <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-coral-text">
                → {step.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
