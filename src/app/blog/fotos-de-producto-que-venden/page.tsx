import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("fotos-de-producto-que-venden")!;

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
        En una tienda física, el cliente coge el producto, lo mira, lo toca.
        Online no puede hacer nada de eso: lo único que tiene es{" "}
        <strong>la foto</strong>. Por eso una buena imagen vende más que el mejor
        texto del mundo. Y la buena noticia es que no necesitas un estudio caro
        para conseguirlas.
      </p>

      <h2>Lo básico que sí o sí necesitas</h2>
      <p>
        Antes de pensar en nada sofisticado, asegura los cimientos. Con esto ya
        vas por delante de la mayoría:
      </p>
      <ul>
        <li>
          <strong>Fondo limpio.</strong> Normalmente blanco o neutro, para que el
          producto sea el protagonista y se vea recortado y profesional.
        </li>
        <li>
          <strong>Buena luz.</strong> La luz natural de una ventana hace
          milagros y es gratis. Evita el flash directo y las sombras duras.
        </li>
        <li>
          <strong>Varios ángulos.</strong> Frente, lateral, detalle. Cuanto mejor
          se entienda el producto, menos dudas y más ventas.
        </li>
      </ul>

      <h2>Lifestyle: el producto en su contexto</h2>
      <p>
        Las fotos de catálogo (fondo limpio) son obligatorias, pero las que de
        verdad <strong>emocionan</strong> son las de contexto: el producto usado,
        en una mesa bonita, en manos de alguien. Ayudan al cliente a imaginarse
        que ya es suyo, y eso es justo lo que empuja a comprar. Una de cada tipo
        por producto es una gran combinación.
      </p>

      <h2>Dónde entra la IA (y dónde no)</h2>
      <p>
        Hoy la IA permite cosas que antes costaban un dineral: quitar fondos por
        lotes, poner el producto en escenas de estilo de vida, incluso vestir
        ropa en modelos. Bien usada, te ahorra muchísimo tiempo y dinero. El
        truco está en que <strong>no se note</strong>: el objetivo es que parezca
        una buena foto, no «una imagen de IA». Usada con criterio es una
        herramienta brutal; usada a lo bestia, espanta. Es parte de lo que hago
        en mis <a href="/#servicios">servicios de imágenes</a>.
      </p>

      <h2>Cada sitio pide lo suyo</h2>
      <p>
        Una foto que va perfecta en tu web puede salir recortada en Instagram o
        rechazada en Amazon. Cada plataforma tiene sus medidas y sus normas
        (cuadrado, vertical, fondo blanco obligatorio…). Preparar cada imagen en
        el formato correcto evita que se vea mal justo donde más te juegas la
        venta.
      </p>

      <h2>En resumen</h2>
      <p>
        No necesitas un estudio: necesitas luz, criterio y cuidar el detalle. Si
        prefieres no complicarte, yo me encargo de todo —recorte, fondos,
        lifestyle, formatos para cada marketplace— para que tu producto se vea
        como se merece. Esto es justo lo que hicimos en{" "}
        <a href="/blog/caso-taza-magica">Taza Mágica</a>. Hablamos en{" "}
        <a href="/#contacto">contacto</a>.
      </p>
    </BlogArticle>
  );
}
