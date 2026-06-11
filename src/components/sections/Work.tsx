"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import { easeOut } from "@/lib/motion";

// Carril horizontal con scroll-snap: la sección mantiene una altura fija
// aunque la lista de proyectos crezca. Las flechas solo aparecen cuando
// hay desbordamiento real (en escritorio con pocos casos no hacen falta).
export default function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setOverflow(max > 8);
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    // La medición inicial va en rAF para no llamar a setState en el render.
    const raf = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.clientWidth + 20 : 460;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="trabajos" className="bg-crema-dim px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionHeader
              index="02"
              kicker="Casos reales"
              title="Trabajo seleccionado"
              description="Proyectos de verdad, con tienda abierta o en camino. Esto es lo que sé montar."
            />
          </div>

          {overflow && (
            <div className="hidden shrink-0 gap-2.5 md:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Proyecto anterior"
                disabled={progress <= 0.01}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-carbon/20 text-carbon transition-colors hover:border-coral hover:text-coral-dark disabled:pointer-events-none disabled:opacity-35"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Proyecto siguiente"
                disabled={progress >= 0.99}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-carbon/20 text-carbon transition-colors hover:border-coral hover:text-coral-dark disabled:pointer-events-none disabled:opacity-35"
              >
                →
              </button>
            </div>
          )}
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.05 * i, ease: easeOut }}
              className="group flex w-[min(84vw,440px)] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-carbon/10 bg-paper shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-coral/35 hover:shadow-xl hover:shadow-carbon/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-carbon/10 bg-carbon">
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.type}`}
                  fill
                  sizes="(max-width: 640px) 84vw, 440px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {p.status === "soon" && (
                  <span className="absolute right-4 top-4 rounded-full bg-coral px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-carbon">
                    Próximamente
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="kicker text-[10px] text-coral-dark">{p.type}</p>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 font-mono text-xs tracking-[0.15em] text-carbon/30"
                  >
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-carbon/65">
                  {p.description}
                </p>

                {p.quote && (
                  <blockquote className="mt-4 border-l-2 border-coral pl-4 text-sm italic leading-relaxed text-carbon/75">
                    “{p.quote.text}”
                    <footer className="mt-1.5 font-mono text-[10px] uppercase not-italic tracking-[0.15em] text-carbon/45">
                      — {p.quote.author}
                    </footer>
                  </blockquote>
                )}

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-carbon/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-carbon/60"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-coral-dark"
                    >
                      {p.status === "soon" ? "Visitar web" : "Visitar tienda"}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-carbon/45">
                      En construcción — lanzamiento próximo
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {overflow && (
          <div
            aria-hidden="true"
            className="mt-7 h-px w-full bg-carbon/10"
          >
            <div
              className="h-px bg-coral transition-[width] duration-150"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
