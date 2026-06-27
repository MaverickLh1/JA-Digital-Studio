import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("caso-taza-magica")!;

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
        Taza Mágica es un proyecto <strong>mío</strong>, montado de cero. Una
        tienda Shopify de productos personalizables —tazas, textil,
        decoración— donde el cliente diseña su producto en la propia web. Te la
        enseño por dentro, sin postureo, para que veas cómo es montar una tienda
        de verdad y qué decisiones hay detrás.
      </p>

      <h2>La idea: vender algo que apetece personalizar</h2>
      <p>
        No quería montar «una tienda más». La gracia de Taza Mágica es la{" "}
        <strong>personalización</strong>: una taza con tu foto, una camiseta con
        tu frase. Productos que se regalan, que emocionan y que la gente busca
        activamente. Eso lo cambia todo: no compites solo por precio, compites
        por idea.
      </p>
      <p>
        Antes de tocar nada tuve claras dos cosas: <strong>qué se vende</strong>{" "}
        y <strong>a quién</strong>. Suena obvio, pero saltarse esto es el error
        número uno de las tiendas que no arrancan.
      </p>

      <h2>Montar la tienda en Shopify</h2>
      <p>
        Elegí Shopify porque, para vender en serio, es lo más sólido y lo que
        menos quebraderos de cabeza da (lo comparo con otras opciones en{" "}
        <a href="/blog/shopify-woocommerce-o-wix">
          Shopify, WooCommerce o Wix
        </a>
        ). Pero lo importante no fue «subir productos». Fue:
      </p>
      <ul>
        <li>
          <strong>Estructurar el catálogo</strong> con categorías claras, para
          que cualquiera encuentre lo que busca en dos clics.
        </li>
        <li>
          <strong>Configurar las variantes</strong> (tamaños, colores) y la
          personalización dentro de la propia ficha, sin pasos raros que asusten.
        </li>
        <li>
          <strong>Cuidar el camino hasta el carrito.</strong> Cuanto menos tenga
          que pensar el cliente, más compra. Cada paso de más es una puerta para
          irse.
        </li>
      </ul>

      <h2>Las imágenes: lo que más vende</h2>
      <p>
        Aquí es donde fallan muchas tiendas. En una tienda online{" "}
        <strong>la foto es el producto</strong>: nadie puede tocarlo. Para Taza
        Mágica preparé imágenes con fondo limpio para el catálogo y{" "}
        <strong>mockups</strong> que enseñan el resultado final —la taza con un
        diseño puesto— para que cada persona se imagine la suya. Esa diferencia
        se nota directamente en las ventas. Lo desarrollo en{" "}
        <a href="/blog/fotos-de-producto-que-venden">
          fotos de producto que venden
        </a>
        .
      </p>

      <h2>Lo que aprendí montándola</h2>
      <p>Tres cosas que me llevo y que aplico en todos los proyectos:</p>
      <ul>
        <li>
          <strong>Móvil primero.</strong> La mayoría de la gente entra desde el
          teléfono. Si ahí no se ve perfecta, da igual lo bonita que esté en el
          ordenador.
        </li>
        <li>
          <strong>Menos es más.</strong> Cada botón, banner o paso extra es una
          excusa para no comprar.
        </li>
        <li>
          <strong>Lanzar es el principio, no el final.</strong> Una tienda se
          ajusta con lo que ves que pasa de verdad cuando entra gente.
        </li>
      </ul>
      <p>
        Puedes ver{" "}
        <a href="https://tazamagica.com" target="_blank" rel="noopener noreferrer">
          Taza Mágica funcionando aquí
        </a>{" "}
        y el resto de proyectos en <a href="/#trabajos">mis trabajos</a>.
      </p>
      <p>
        ¿Te interesa más el lado de la <strong>marca</strong>? Te enseño cómo
        creé <a href="/blog/caso-wemaker">Wemaker, una marca de cero</a>.
      </p>
      <p>
        Si quieres una tienda así para lo tuyo —montada con esta cabeza, no a lo
        loco— escríbeme y lo vemos. Te cuento cómo trabajo en{" "}
        <a href="/#servicios">servicios</a>.
      </p>
    </BlogArticle>
  );
}
