"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/data";
import { easeOut } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll de fondo mientras el menú está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-[120] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-carbon/10 bg-crema/80 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center" aria-label="Josea González — inicio">
          <Logo
            className={`h-[15px] w-auto transition-colors duration-300 sm:h-[17px] ${
              scrolled || open ? "text-carbon" : "text-crema"
            }`}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-sm font-medium transition-colors ${
                scrolled ? "text-carbon/80 hover:text-carbon" : "text-crema/80 hover:text-crema"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-carbon transition-transform hover:scale-105 active:scale-[0.96]"
          >
            Hablemos
          </a>

          {/* Botón de menú (solo móvil) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${
              scrolled || open
                ? "border-carbon/20 text-carbon"
                : "border-crema/25 text-crema"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>

      {/* Menú móvil a pantalla completa (fuera del header: su backdrop-filter
          convertiría al header en containing block y colapsaría el overlay) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[57px] z-[110] bg-crema md:hidden"
          >
            <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-10" aria-label="Menú móvil">
              <ul className="flex flex-col gap-2">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.06, ease: easeOut }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-carbon/10 py-4 font-display text-3xl font-bold tracking-tight text-carbon"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.32, ease: easeOut }}
                className="flex flex-col gap-3"
              >
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-coral px-6 py-3.5 text-center text-sm font-semibold text-carbon transition-transform active:scale-[0.97]"
                >
                  Hablemos de tu proyecto
                </a>
                <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-carbon/55">
                  WEB/ ECOM/ <span className="text-coral-dark">BRAND/</span>
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
