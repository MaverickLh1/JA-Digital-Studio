import type { Metadata } from "next";
import { Archivo, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { contact, platforms } from "@/lib/data";

// Archivo es la familia variable hermana de Archivo Black (la del logo):
// los titulares en peso 900 conectan directamente con el wordmark.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

// JetBrains Mono: la mono del tagline del logo (WEB/ ECOM/ IA/).
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://joseagonzalez.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Josea González — Web, e-commerce e IA para tu negocio",
  description:
    "Soy José Antonio González, freelance digital. Llevo tu negocio al siguiente nivel: tiendas Shopify, diseño web, imágenes de producto y branding, con IA aplicada en el proceso.",
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
    title: "Josea González — Web, e-commerce e IA",
    description:
      "Llevo tu negocio al siguiente nivel: web, e-commerce e IA. Freelance digital en España.",
    url: siteUrl,
    siteName: "Josea González",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josea González — Web, e-commerce e IA",
    description:
      "Llevo tu negocio al siguiente nivel: web, e-commerce e IA. Freelance digital en España.",
  },
};

// Datos estructurados: le dicen a Google que esto es un servicio profesional
// y enlazan los perfiles verificados (Fiverr, Malt, Freelancer, LinkedIn).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Josea González",
  alternateName: "JOSEA GONZALEZ",
  url: siteUrl,
  email: contact.email,
  description:
    "Tiendas Shopify, diseño web, imágenes de producto y branding para negocios y marcas, con IA aplicada en el proceso.",
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
      className={`${archivo.variable} ${geist.variable} ${jetbrains.variable}`}
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
