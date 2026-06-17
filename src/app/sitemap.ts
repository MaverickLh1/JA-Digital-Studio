import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

// Fecha de la última revisión significativa del contenido. Se actualiza a mano
// cuando hay cambios reales, en vez de new Date() (que cambiaría en cada build
// señalando modificaciones que no han ocurrido).
const lastModified = new Date("2026-06-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/aviso-legal`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
