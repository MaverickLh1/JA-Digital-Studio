import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("caso-wemaker")!;

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
        Wemaker es un proyecto <strong>mío</strong>, y aquí no monté solo una
        tienda: creé una <strong>marca entera de cero</strong>. Personalización
        creativa para clubes, empresas y eventos —ropa, tazas, grabados,
        impresión 3D—. Te lo enseño por dentro porque es un caso distinto al de{" "}
        <a href="/blog/caso-taza-magica">Taza Mágica</a>: aquí lo que más pesó
        fue la <strong>marca</strong>.
      </p>

      <h2>Empezar por la marca, no por la tienda</h2>
      <p>
        Mucha gente abre la tienda y deja «lo de la marca» para después. Con
        Wemaker hice lo contrario, y por eso funciona: primero el{" "}
        <strong>nombre</strong>, la <strong>identidad</strong> (logo, colores,
        tono) y cómo quería que se sintiera. Una marca coherente hace que un
        negocio pequeño <strong>parezca grande y serio</strong> desde el primer
        vistazo. Y eso genera confianza antes incluso de ver el producto.
      </p>

      <h2>La web, programada a medida</h2>
      <p>
        Con la identidad clara, montar la web fue coser y cantar: todo —colores,
        tipografías, imágenes— ya hablaba un mismo idioma. La{" "}
        <strong>programé a medida</strong>, con código propio (sin plantillas ni
        constructores), con un catálogo ordenado y una home que explica en dos
        frases qué hace Wemaker y para quién. Una web rápida, ligera y cuidada al
        detalle en el móvil.
      </p>

      <h2>Un modelo distinto: presupuesto, no carrito</h2>
      <p>
        Aquí está la diferencia gorda con una tienda normal. Wemaker vende a{" "}
        <strong>clubes, empresas y eventos</strong>: pedidos a medida, desde una
        unidad hasta cientos. Así que el objetivo no era «meter al carrito y
        pagar», sino <strong>pedir presupuesto fácil</strong>. Por eso el camino
        principal es un botón de presupuesto por WhatsApp: respuesta rápida,
        trato directo y cero fricción. La web está pensada para ese modelo, no
        copiada de una tienda al uso.
      </p>

      <h2>Lo que aprendí</h2>
      <ul>
        <li>
          <strong>La marca vende antes que el producto.</strong> Una identidad
          sólida sube la percepción de calidad —y el precio que la gente está
          dispuesta a pagar.
        </li>
        <li>
          <strong>La web tiene que encajar con el modelo de negocio</strong>, no
          al revés. Si vendes a medida, no la montes como una tienda de carrito.
        </li>
        <li>
          <strong>Coherencia en todo.</strong> Que el logo, la web, las fotos y
          el tono hablen el mismo idioma es lo que separa «parece un proyecto
          serio» de «parece improvisado».
        </li>
      </ul>

      <p>
        Puedes ver{" "}
        <a href="https://wemaker.es" target="_blank" rel="noopener noreferrer">
          Wemaker funcionando aquí
        </a>{" "}
        y el resto de proyectos en <a href="/#trabajos">mis trabajos</a>.
      </p>
      <p>
        Si tienes un negocio que necesita una <strong>marca de verdad</strong>{" "}
        —no solo un logo suelto— y una web que la acompañe, eso es justo lo que
        hago. Te lo cuento en <a href="/#servicios">servicios</a>, o escríbeme y
        lo vemos.
      </p>
    </BlogArticle>
  );
}
