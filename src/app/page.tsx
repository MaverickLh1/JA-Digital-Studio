import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
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
        <About />
        <Process />
        <Platforms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
