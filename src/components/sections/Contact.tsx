"use client";

import { motion } from "motion/react";
import ContactForm from "@/components/ContactForm";
import { contact, whatsappHref } from "@/lib/data";
import { WhatsAppIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-carbon px-5 py-24 text-crema sm:py-32">
      <div className="aurora opacity-40" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-coral"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
          >
            ¿Hablamos de tu proyecto?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-md text-crema/65"
          >
            Cuéntame qué necesitas y te respondo lo antes posible. Sin
            compromiso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Alternativas directas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center gap-5 rounded-3xl border border-crema/10 bg-crema/[0.03] p-7"
        >
          <h3 className="font-display text-xl font-semibold">
            ¿Prefieres algo más directo?
          </h3>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escríbeme por WhatsApp
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center justify-center gap-2 rounded-full border border-crema/20 px-6 py-3.5 text-sm font-semibold text-crema transition-colors hover:border-coral hover:text-coral"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            Escríbeme un email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
