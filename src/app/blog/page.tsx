import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sortedPosts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Josea González",
  description:
    "Diseño web, tiendas Shopify, imágenes de producto y marca, explicados sin tecnicismos. Lo que he aprendido montando webs y tiendas que funcionan.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Josea González",
    description:
      "Diseño web, Shopify, imágenes de producto y marca, sin humo. Desde la experiencia de un freelance.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <main className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="kicker text-coral-dark">El blog</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-6xl">
          Ideas para vender más<span className="text-coral">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-carbon/65">
          Diseño web, Shopify, imágenes de producto y marca, explicados sin
          tecnicismos. Lo que voy aprendiendo montando webs y tiendas que de
          verdad funcionan.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-carbon/10 bg-paper shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-coral/35 hover:shadow-xl hover:shadow-carbon/10"
            >
              <div className="relative aspect-[1200/630] overflow-hidden border-b border-carbon/10 bg-carbon">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="kicker text-[10px] text-coral-text">
                  {post.kicker}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-coral-dark">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-carbon/65">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center gap-2.5 pt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-carbon/55">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMin} min</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
