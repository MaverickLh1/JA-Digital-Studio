import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("errores-que-matan-ventas-tienda-online")!;

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
        Tienes visitas, pagas publicidad, entra gente… pero no vendes. Es de las
        cosas más frustrantes que hay, y casi nunca es mala suerte: suele ser uno
        de estos cinco errores. La buena noticia es que todos tienen arreglo,{" "}
        <strong>sin gastar un euro más en anuncios</strong>.
      </p>

      <h2>1. Tu web tarda en cargar</h2>
      <p>
        El asesino silencioso. Si tu tienda tarda más de dos o tres segundos en
        abrir, una buena parte de la gente se va antes de ver nada. Suele ser por
        imágenes enormes sin optimizar o por exceso de apps. Comprime las fotos,
        quita lo que no uses y nota la diferencia.
      </p>

      <h2>2. Las fotos no enseñan el producto</h2>
      <p>
        En internet no se puede tocar nada: <strong>la foto es el producto</strong>
        . Si son oscuras, borrosas o hay una sola, estás pidiéndole a la gente un
        acto de fe. Pon varias fotos, con buena luz, desde distintos ángulos y el
        producto en uso. Te cuento cómo en{" "}
        <a href="/blog/fotos-de-producto-que-venden">
          fotos de producto que venden
        </a>
        .
      </p>

      <h2>3. Comprar es un lío</h2>
      <p>
        Cada clic de más entre «me gusta» y «pagado» es gente que se cae por el
        camino. Obligar a crear una cuenta, un proceso de pago largo, formularios
        eternos… todo eso resta. El objetivo es que comprar cueste lo mínimo:
        pocos pasos, claros, y la opción de pagar como invitado.
      </p>

      <h2>4. No transmites confianza</h2>
      <p>
        Nadie le da su tarjeta a una web que parece sospechosa. Si no se ve quién
        está detrás, no hay política de devoluciones, ni reseñas, ni una forma
        clara de contactar… la gente duda, y la duda no compra. Enseña que hay
        una persona o negocio real detrás. La confianza vende tanto como el
        producto.
      </p>

      <h2>5. En el móvil se ve mal</h2>
      <p>
        Más de la mitad de tus visitas son desde el teléfono. Si ahí los botones
        se montan, el texto es minúsculo o hay que hacer zoom para comprar, estás
        perdiendo a la mayoría de tus clientes. Prueba tu tienda en tu propio
        móvil e intenta comprar algo. Lo que te moleste a ti, le molesta a todos.
      </p>

      <h2>En resumen</h2>
      <p>
        Arreglar estos cinco puntos sube las ventas con el tráfico que{" "}
        <strong>ya tienes</strong>. Es lo más rentable que puedes hacer antes de
        gastar más en publicidad. Si quieres que le eche un ojo a tu tienda y te
        diga qué está fallando, escríbeme sin compromiso en{" "}
        <a href="/#contacto">contacto</a>.
      </p>
    </BlogArticle>
  );
}
