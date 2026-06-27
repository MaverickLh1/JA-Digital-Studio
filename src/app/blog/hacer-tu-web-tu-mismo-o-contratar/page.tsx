import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { getPost } from "@/lib/posts";

const post = getPost("hacer-tu-web-tu-mismo-o-contratar")!;

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
        Hoy montar una web parece más fácil que nunca. Wix, Shopify,
        Squarespace, WordPress… todos te prometen tener tu página lista «en una
        tarde y sin saber programar». Y en parte es verdad: <strong>empezar</strong>{" "}
        es fácil. La pregunta de verdad es otra: ¿esa web va a{" "}
        <strong>vender</strong>, o solo va a <em>existir</em>?
      </p>
      <p>
        Te lo cuento sin humo y sin barrer para casa: a veces hacerla tú mismo
        es la decisión correcta. Otras, te va a costar más tiempo y dinero del
        que crees. Vamos a verlo para que decidas con criterio.
      </p>

      <h2>Hacerla tú mismo: cuándo tiene todo el sentido</h2>
      <p>Hacértela tú es buena idea cuando…</p>
      <ul>
        <li>
          <strong>Estás validando una idea.</strong> Aún no sabes si tu producto
          se va a vender y necesitas algo rápido y barato para salir a probar.
          Perfecto: monta algo básico y a la calle.
        </li>
        <li>
          <strong>El presupuesto es cero.</strong> Si ahora mismo no puedes
          invertir, una web sencilla hecha por ti es mil veces mejor que no
          tener nada.
        </li>
        <li>
          <strong>Es una web informativa simple.</strong> Una página que explique
          quién eres y cómo contactarte, sin tienda ni muchas florituras. Eso lo
          sacas tú con una plantilla.
        </li>
        <li>
          <strong>Te gusta y tienes tiempo.</strong> Si disfrutas trasteando y te
          sobran fines de semana, aprenderás un montón por el camino.
        </li>
      </ul>
      <p>
        Si te ves en alguno de estos casos, en serio: <strong>hazla tú</strong>.
        No necesitas contratar a nadie todavía.
      </p>

      <h2>Dónde se complica (y la gente se atasca)</h2>
      <p>
        El problema no es <em>crear</em> la web. Es todo lo que viene después y
        que las plantillas no te cuentan:
      </p>
      <ul>
        <li>
          <strong>Que venda, no solo que se vea.</strong> Una tienda bonita en la
          que nadie compra no sirve. Convertir visitas en clientes es un oficio:
          dónde va cada botón, qué dice cada texto, cómo se enseña el producto…
        </li>
        <li>
          <strong>La velocidad y el SEO.</strong> Una web lenta espanta a la
          gente y a Google. Optimizar imágenes, estructura y textos para que te
          encuentren no viene «de fábrica».
        </li>
        <li>
          <strong>El móvil.</strong> Más de la mitad de tus visitas entran desde
          el teléfono. Que se vea perfecta ahí —y no solo en tu ordenador— tiene
          más miga de la que parece.
        </li>
        <li>
          <strong>Las integraciones.</strong> Pagos, envíos, facturación, email,
          inventario… cada pieza que conectas es un punto donde algo puede
          romperse.
        </li>
        <li>
          <strong>Tu tiempo.</strong> El recurso más caro de todos. Las horas que
          pasas peleándote con la web son horas que no dedicas a tu negocio.
        </li>
      </ul>

      <h2>Contratar a alguien: qué ganas de verdad</h2>
      <p>Pagar a un profesional no es pagar «por una web». Es pagar por…</p>
      <ul>
        <li>
          <strong>Tiempo.</strong> Te lo quitas de encima y sigues con lo tuyo
          mientras alguien se encarga.
        </li>
        <li>
          <strong>Criterio.</strong> Quien ya ha montado tiendas sabe qué
          funciona y qué no, y te ahorra los errores típicos que cuestan ventas.
        </li>
        <li>
          <strong>Una web pensada para convertir</strong> desde el primer día, no
          solo para «estar ahí».
        </li>
        <li>
          <strong>Alguien a quien preguntar</strong> cuando algo falla, en vez de
          buscar en foros a las once de la noche.
        </li>
      </ul>
      <p>
        La diferencia no se nota el día que la publicas. Se nota a los tres
        meses, cuando una vende y la otra no.
      </p>

      <h2>Entonces, ¿qué te conviene a ti?</h2>
      <p>Una regla sencilla:</p>
      <ul>
        <li>
          Si estás <strong>probando una idea</strong> o tienes{" "}
          <strong>presupuesto cero</strong> → hazla tú, sal a vender y ya
          mejorarás.
        </li>
        <li>
          Si la web es <strong>tu canal de ventas</strong> y cada cliente cuenta
          → contrata. Lo que te ahorras haciéndola tú lo pierdes en ventas que no
          llegan.
        </li>
        <li>
          Si vas <strong>en serio pero con cabeza</strong> → un punto medio: que
          un profesional te la monte bien de base y tú la mantengas después.
        </li>
      </ul>
      <blockquote>
        No es «caro vs. barato». Es «una web que te cuesta dinero vs. una web que
        te lo trae».
      </blockquote>

      <h2>Cómo lo hago yo</h2>
      <p>
        Por si te sirve: cuando monto una web o una tienda, intento que sea justo
        lo contrario de complicado. <strong>Trato directo conmigo</strong> (sin
        agencias ni intermediarios), <strong>precio cerrado</strong> antes de
        empezar (sin sorpresas) y <strong>plazos claros</strong>. Me encargo de
        que se vea bien, cargue rápido, funcione en el móvil y, sobre todo, esté
        pensada para <strong>vender</strong>.
      </p>
      <p>
        Tienes <a href="/#trabajos">algunos trabajos reales aquí</a> —tiendas de
        verdad, abiertas y funcionando— y el detalle de lo que hago en{" "}
        <a href="/#servicios">servicios</a>.
      </p>
      <p>
        Y si después de leer esto sigues con dudas sobre qué te conviene,
        escríbeme y te oriento sin compromiso. A veces la respuesta honesta es
        «hazla tú» —y te lo diré.
      </p>
    </BlogArticle>
  );
}
