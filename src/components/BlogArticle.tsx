import Link from "next/link";
import Image from "next/image";
import { siteUrl } from "@/lib/data";
import { formatPostDate, type Post } from "@/lib/posts";

// Molde de artículo del blog: cabecera oscura editorial + portada + cuerpo con
// estilo "prose" (sobre fondo claro, cómodo de leer) + CTA de cierre. Inyecta el
// schema BlogPosting para que el buscador entienda autor, fecha e imagen.
//
// Las clases [&_h2]:… aplican estilos a los elementos que el artículo pasa como
// children (mismo enfoque que el layout de las páginas legales), de modo que el
// cuerpo del post se escribe como JSX plano (<p>, <h2>, <ul>…).
export default function BlogArticle({
  post,
  children,
}: {
  post: Post;
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: `${siteUrl}${post.cover}`,
    inLanguage: "es",
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "José Antonio González Moreno",
      url: siteUrl,
    },
    publisher: { "@type": "Person", name: "Josea González", url: siteUrl },
  };
  // JSON-LD como texto del <script>: escapamos < > & a unicode para que sea
  // JSON válido, imposible de "romper" con </script> y sin necesidad de
  // inyección de HTML cruda.
  const jsonLdText = JSON.stringify(jsonLd)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <article>
      <script type="application/ld+json">{jsonLdText}</script>

      {/* Cabecera oscura */}
      <header className="bg-carbon px-5 pb-14 pt-12 text-crema sm:pt-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-[0.15em] text-crema/55 transition-colors hover:text-coral"
          >
            ← Blog
          </Link>
          <p className="kicker mt-7 text-coral">{post.kicker}</p>
          <h1 className="mt-4 font-display text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-crema/55">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMin} min de lectura</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-crema/15 px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Portada */}
      <div className="-mt-6 px-5">
        <div className="relative mx-auto aspect-[1200/630] max-w-4xl overflow-hidden rounded-2xl border border-carbon/10 bg-carbon shadow-xl shadow-carbon/10 sm:rounded-3xl">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-5 py-14 sm:py-20">
        <div
          className="mx-auto max-w-2xl
            [&_h2]:font-display [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-carbon sm:[&_h2]:text-3xl
            [&_h3]:font-display [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-carbon
            [&_p]:mb-5 [&_p]:text-[1.0625rem] [&_p]:leading-relaxed [&_p]:text-carbon/75
            [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-carbon/75
            [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-carbon/75
            [&_li]:leading-relaxed [&_li]:marker:text-coral
            [&_a]:font-medium [&_a]:text-coral-text [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-coral-dark
            [&_strong]:font-semibold [&_strong]:text-carbon
            [&_blockquote]:my-7 [&_blockquote]:border-l-2 [&_blockquote]:border-coral [&_blockquote]:pl-5 [&_blockquote]:font-display [&_blockquote]:text-xl [&_blockquote]:font-semibold [&_blockquote]:italic [&_blockquote]:text-carbon"
        >
          {children}
        </div>
      </div>

      {/* CTA de cierre */}
      <div className="px-5 pb-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-carbon/10 bg-carbon p-8 text-crema sm:p-10">
          <p className="kicker text-coral">¿Lo vemos?</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Cuéntame qué tienes en mente
          </h2>
          <p className="mt-3 text-crema/70">
            Te respondo en menos de 24 h, sin compromiso. Trato directo conmigo,
            sin agencias.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contacto"
              className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-carbon transition-transform hover:scale-105 active:scale-[0.96]"
            >
              Hablemos de tu proyecto
            </Link>
            <Link
              href="/#servicios"
              className="rounded-full border border-crema/20 px-6 py-3 text-sm font-semibold text-crema transition-colors hover:border-coral hover:text-coral"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
