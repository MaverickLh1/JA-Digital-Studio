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
      <Navbar />
      <main>
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
