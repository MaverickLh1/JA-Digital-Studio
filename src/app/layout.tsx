import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { contact, platforms } from "@/lib/data";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://jadigitalstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "JA Digital Studio — Web, e-commerce e IA para tu negocio",
  description:
    "Soy José Antonio, freelance digital. Llevo tu negocio al siguiente nivel: diseño web, tiendas Shopify, imágenes de producto e inteligencia artificial aplicada.",
  keywords: [
    "freelance digital",
    "diseño web",
    "Shopify",
    "e-commerce",
    "inteligencia artificial",
    "imágenes de producto",
    "identidad de marca",
    "España",
  ],
  authors: [{ name: "José Antonio" }],
  openGraph: {
    title: "JA Digital Studio — Web, e-commerce e IA",
    description:
      "Llevo tu negocio al siguiente nivel: web, e-commerce e IA. Freelance digital en España.",
    url: siteUrl,
    siteName: "JA Digital Studio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JA Digital Studio — Web, e-commerce e IA",
    description:
      "Llevo tu negocio al siguiente nivel: web, e-commerce e IA. Freelance digital en España.",
  },
};

// Datos estructurados: le dicen a Google que esto es un servicio profesional
// y enlazan los perfiles verificados (Fiverr, Malt, Freelancer, LinkedIn).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JA Digital Studio",
  url: siteUrl,
  email: contact.email,
  description:
    "Diseño web, tiendas Shopify, imágenes de producto e inteligencia artificial aplicada para negocios y marcas.",
  founder: {
    "@type": "Person",
    name: "José Antonio González Moreno",
  },
  areaServed: "ES",
  knowsLanguage: "es",
  sameAs: [
    ...platforms.map((p) => p.url),
    contact.linkedin,
  ].filter((u) => u && u !== "#"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Grain />
        <SmoothScroll>
          {children}
          <WhatsAppFloat />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
