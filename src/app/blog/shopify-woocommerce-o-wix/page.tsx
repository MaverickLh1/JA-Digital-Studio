import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("shopify-woocommerce-o-wix")!;

export const metadata: Metadata = {
  title: `${post.title} — Josea González`,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [post.cover],
  },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        «¿Qué plataforma uso para mi tienda?» es de las primeras preguntas que me
        llegan. Y la respuesta honesta es: <strong>depende de tu caso</strong>. La
        plataforma importa menos de lo que crees, pero elegir mal te complica la
        vida durante años. Te comparo las tres más habituales sin postureo.
      </p>

      <h2>Shopify: la más fácil para vender en serio</h2>
      <p>
        Es la que más recomiendo para la mayoría. Está pensada{" "}
        <strong>solo para vender</strong>, así que casi todo funciona bien de
        base: pagos, envíos, inventario, móvil. Pagas una cuota mensual y a
        cambio te olvidas de mantenimiento y de que se rompa. ¿La pega? Menos
        libertad para cosas muy a medida y las comisiones de algunas apps. Para el
        90% de los negocios, compensa de sobra. Es lo que usé en{" "}
        <a href="/blog/caso-taza-magica">Taza Mágica</a>.
      </p>

      <h2>WooCommerce: control total (si tienes quien lo lleve)</h2>
      <p>
        WooCommerce es WordPress + una extensión de tienda. Su gran baza es la{" "}
        <strong>libertad</strong>: puedes hacer prácticamente lo que quieras y no
        pagas cuota de plataforma. El «pero» es grande: el mantenimiento corre de
        tu cuenta (actualizaciones, seguridad, copias, que no se rompa nada al
        actualizar un plugin). Es potentísima si tienes a alguien que la
        gestione; un dolor de cabeza si no.
      </p>

      <h2>Wix: rápido y barato para empezar pequeño</h2>
      <p>
        Wix es el más sencillo para salir del paso: arrastras, sueltas y en una
        tarde tienes algo publicado. Para una web sencilla o una tienda muy
        pequeña, cumple. Cuando el catálogo crece o quieres afinar de verdad la
        parte de ventas y el SEO, se queda corto. Buen punto de partida; mal
        destino final si vas en serio.
      </p>

      <h2>Entonces, ¿cuál eliges?</h2>
      <ul>
        <li>
          <strong>Quieres vender en serio y sin complicarte</strong> → Shopify.
        </li>
        <li>
          <strong>Necesitas control total y tienes quien lo mantenga</strong> →
          WooCommerce.
        </li>
        <li>
          <strong>Estás probando algo pequeño con presupuesto mínimo</strong> →
          Wix (y ya migrarás si crece).
        </li>
      </ul>
      <p>
        Y un consejo: no te obsesiones con la herramienta. Lo que vende no es la
        plataforma, es <strong>cómo está montada la tienda</strong> —ahí están las{" "}
        <a href="/blog/errores-que-matan-ventas-tienda-online">
          ventas que se escapan
        </a>
        —. Si no sabes cuál encaja contigo, cuéntame tu caso en{" "}
        <a href="/#contacto">contacto</a> y te oriento sin compromiso.
      </p>
    </BlogArticle>
  );
}
