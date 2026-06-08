"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="h-full [perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-carbon/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-carbon/10"
      >
        {/* Visual */}
        {service.image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-carbon">
            <Image
              src={service.image}
              alt={`Ejemplo de trabajo: ${service.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-carbon">
            <div className="aurora opacity-70" aria-hidden="true" />
            <svg
              viewBox="0 0 24 24"
              className="relative h-16 w-16 stroke-coral"
              fill="none"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </div>
        )}

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-carbon/65">
            {service.tagline}
          </p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="mt-4 space-y-2 overflow-hidden"
              >
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-carbon/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {b}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-coral-dark"
          >
            {open ? "Ver menos" : "Ver más"}
            <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-lg leading-none">
              +
            </motion.span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
