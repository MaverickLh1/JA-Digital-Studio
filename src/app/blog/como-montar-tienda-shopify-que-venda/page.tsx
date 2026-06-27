import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("como-montar-tienda-shopify-que-venda")!;

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
        Abrir una tienda en Shopify es fácil: pagas, eliges una plantilla y
        subes productos. En una tarde lo tienes. El problema es que «tener una
        tienda» y «tener una tienda que <strong>vende</strong>» son dos cosas muy
        distintas. Te cuento lo que de verdad marca la diferencia, sin
        tecnicismos.
      </p>

      <h2>Antes de Shopify: ten claro qué vendes y a quién</h2>
      <p>
        El paso que todo el mundo se salta. Antes de elegir colores o plantillas,
        responde: ¿qué problema le resuelves a quien compra? ¿por qué te va a
        comprar a ti y no en Amazon? Si eso no está claro, la tienda más bonita
        del mundo no venderá. Aquí se gana o se pierde la mitad del partido.
      </p>

      <h2>El catálogo: fichas que convencen</h2>
      <p>
        Cada ficha de producto es una pequeña página de ventas. Que no se quede
        en «foto + precio». Necesita:
      </p>
      <ul>
        <li>
          <strong>Buenas fotos.</strong> Varias, desde distintos ángulos y, si
          puede ser, el producto en uso. Es lo primero que mira la gente. Lo
          desarrollo en{" "}
          <a href="/blog/fotos-de-producto-que-venden">
            fotos de producto que venden
          </a>
          .
        </li>
        <li>
          <strong>Un texto que hable de beneficios</strong>, no solo de
          características. No «algodón 180g»; mejor «suave, no encoge y aguanta
          lavados».
        </li>
        <li>
          <strong>Variantes claras</strong> (talla, color) y el stock a la vista.
          La duda mata la compra.
        </li>
      </ul>

      <h2>Velocidad y móvil: donde se pierden las ventas</h2>
      <p>
        Una tienda lenta es dinero que se va. Cada segundo que tarda en cargar,
        se va gente. Optimiza las imágenes (que no pesen una barbaridad), no
        instales mil apps que la ralenticen y prueba la tienda{" "}
        <strong>en el móvil</strong>, que es por donde entra la mayoría. Si en el
        teléfono cuesta comprar, tienes un agujero por el que se cae el dinero.
      </p>

      <h2>Pagos, envíos y confianza</h2>
      <p>
        La gente solo paga si se fía. Pon varios métodos de pago (tarjeta, y a
        ser posible PayPal o pago aplazado), deja los <strong>gastos de envío
        claros desde el principio</strong> —los costes sorpresa en el último paso
        son la causa número uno de carritos abandonados— y enseña que detrás hay
        alguien: política de devoluciones, contacto visible, reseñas si las
        tienes.
      </p>

      <h2>Publicar no es el final</h2>
      <p>
        El día que abres es el día 1, no la meta. Mira qué productos se ven y no
        se compran, dónde abandona la gente, qué buscan y no encuentran. Una
        tienda que se ajusta con datos reales vende cada mes un poco más. Y ojo
        con los fallos típicos: te los resumo en{" "}
        <a href="/blog/errores-que-matan-ventas-tienda-online">
          5 errores que matan las ventas de tu tienda
        </a>
        .
      </p>

      <h2>El atajo</h2>
      <p>
        Todo esto se puede hacer uno mismo —de hecho{" "}
        <a href="/blog/hacer-tu-web-tu-mismo-o-contratar">
          a veces es lo que toca
        </a>
        —. Pero si prefieres dedicar tu tiempo a tu negocio y no a pelearte con
        la tienda, <strong>te la monto yo</strong>, pensada para vender desde el
        primer día. Lo vemos en <a href="/#contacto">contacto</a>.
      </p>
    </BlogArticle>
  );
}
