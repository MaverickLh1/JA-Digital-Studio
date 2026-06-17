import type { Metadata } from "next";
import { Archivo, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { contact, platforms, siteUrl } from "@/lib/data";

// Archivo es la familia variable hermana de Archivo Black (la del logo):
// los titulares en peso 900 conectan directamente con el wordmark.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// preload:false — Geist es el cuerpo de texto (sobre todo bajo el pliegue);
// no compite por la red con el titular del hero, que es lo que marca el LCP.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// JetBrains Mono: la mono del tagline del logo (WEB/ ECOM/ BRAND/).
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Josea González — Web, e-commerce y marca para tu negocio",
  description:
    "Freelance digital en Badajoz (España). Tiendas Shopify, diseño web, imágenes de producto y branding para llevar tu negocio al siguiente nivel.",
  keywords: [
    "freelance digital",
    "freelance Badajoz",
    "diseño web",
    "diseño web Badajoz",
    "Shopify",
    "e-commerce",
    "imágenes de producto",
    "identidad de marca",
    "Extremadura",
    "España",
  ],
  authors: [{ name: "José Antonio González", url: siteUrl }],
  openGraph: {
    title: "Josea González — Web, e-commerce y marca",
    description:
      "Llevo tu negocio al siguiente nivel: web, e-commerce y marca. Freelance digital en España.",
    url: siteUrl,
    siteName: "Josea González",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josea González — Web, e-commerce y marca",
    description:
      "Llevo tu negocio al siguiente nivel: web, e-commerce y marca. Freelance digital en España.",
  },
  verification: {
    google: "WKnPjN7dnS4bvfwRPtsckhJeLzBd2zaUKahFSNzFAkk",
  },
};

// Datos estructurados (grafo): identifican a la persona (José Antonio), el
// servicio profesional con su ubicación en Badajoz (SEO local) y el sitio web,
// y enlazan los perfiles verificados (Fiverr, Malt, Freelancer, LinkedIn).
const address = {
  "@type": "PostalAddress",
  addressLocality: "La Haba",
  addressRegion: "Badajoz",
  addressCountry: "ES",
};
const sameAs = [...platforms.map((p) => p.url), contact.linkedin].filter(
  (u) => u && u !== "#"
);
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#josea`,
      name: "José Antonio González Moreno",
      alternateName: "Josea González",
      url: siteUrl,
      jobTitle: "Freelance digital",
      email: contact.email,
      knowsAbout: [
        "Shopify",
        "e-commerce",
        "diseño web",
        "imágenes de producto",
        "branding",
      ],
      knowsLanguage: ["es", "en"],
      address,
      sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Josea González",
      alternateName: "JOSEA GONZALEZ",
      url: siteUrl,
      email: contact.email,
      description:
        "Tiendas Shopify, diseño web, imágenes de producto y branding para negocios y marcas, con IA aplicada en el proceso.",
      founder: { "@id": `${siteUrl}/#josea` },
      provider: { "@id": `${siteUrl}/#josea` },
      address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.93,
        longitude: -5.76,
      },
      areaServed: [
        { "@type": "Country", name: "España" },
        { "@type": "Country", name: "México" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Colombia" },
        { "@type": "Country", name: "Chile" },
      ],
      knowsLanguage: "es",
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Josea González",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#josea` },
    },
  ],
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
        <SpeedInsights />
      </body>
    </html>
  );
}
