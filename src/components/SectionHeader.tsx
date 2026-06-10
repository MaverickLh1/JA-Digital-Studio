"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

type Props = {
  index: string; // "01", "02"… — numeración editorial de la sección
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  center?: boolean;
  dot?: boolean; // punto final coral como firma tipográfica
  titleClassName?: string;
};

// Cabecera editorial común: (índice) — kicker — filete, titular y descripción.
// Mantiene el mismo ritmo tipográfico en todas las secciones.
export default function SectionHeader({
  index,
  kicker,
  title,
  description,
  dark = false,
  center = false,
  dot = true,
  titleClassName = "text-3xl sm:text-5xl",
}: Props) {
  const accent = dark ? "text-coral" : "text-coral-dark";
  const rule = dark ? "bg-crema/15" : "bg-carbon/15";

  return (
    <div className={center ? "text-center" : ""}>
      <motion.div
        {...fadeUp(0, { y: 16, duration: 0.5 })}
        className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
      >
        <span className={`kicker ${accent}`}>({index})</span>
        <span className={`kicker ${accent}`}>{kicker}</span>
        {!center && <span aria-hidden="true" className={`h-px flex-1 ${rule}`} />}
      </motion.div>

      <motion.h2
        {...fadeUp(0.05)}
        className={`mt-5 font-display font-bold tracking-tight ${titleClassName} ${
          center ? "mx-auto" : ""
        }`}
      >
        {title}
        {dot && <span className="text-coral">.</span>}
      </motion.h2>

      {description && (
        <motion.p
          {...fadeUp(0.1)}
          className={`mt-4 text-lg ${dark ? "text-crema/60" : "text-carbon/60"} ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
