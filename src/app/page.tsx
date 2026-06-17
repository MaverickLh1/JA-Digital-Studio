import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Platforms from "@/components/sections/Platforms";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-coral focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-carbon"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Process />
        <Platforms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
