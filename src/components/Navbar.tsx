"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Plataformas", href: "#plataformas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[120] transition-all duration-300 ${
        scrolled
          ? "border-b border-carbon/10 bg-crema/80 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="JA Digital Studio — inicio">
          <Image
            src="/logo-coral.svg"
            alt="JA Digital Studio"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? "text-carbon" : "text-crema"
            }`}
          >
            JA Digital Studio
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
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

        <a
          href="#contacto"
          className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-carbon transition-transform hover:scale-105"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
