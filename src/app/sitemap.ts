import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";
import { posts } from "@/lib/posts";

// Fecha de la última revisión significativa del contenido. Se actualiza a mano
// cuando hay cambios reales, en vez de new Date() (que cambiaría en cada build
// señalando modificaciones que no han ocurrido).
const lastModified = new Date("2026-06-27");

export default function sitemap(): MetadataRoute.Sitemap {
  // Cada artículo del blog, con su propia fecha. Se incluyen solos al añadir
  // posts en lib/posts.ts.
  const blogPosts = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts,
    { url: `${siteUrl}/aviso-legal`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
