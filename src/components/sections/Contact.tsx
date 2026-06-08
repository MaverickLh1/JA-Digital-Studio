"use client";

import { motion } from "motion/react";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/data";

const waHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "¡Hola José Antonio! Quería comentarte un proyecto."
)}`;

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
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.737-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Escríbeme por WhatsApp
          </a>

          <div className="text-center text-sm text-crema/50">o</div>

          <a
            href={`mailto:${contact.email}`}
            className="link-underline mx-auto text-sm font-medium text-crema/80 hover:text-crema"
          >
            {contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
