// Registro de artículos del blog. Fuente ÚNICA para el índice, el sitemap y la
// metadata de cada artículo. El CUERPO de cada post vive en su page.tsx
// (src/app/blog/<slug>/page.tsx); aquí solo van los metadatos.
//
// Para publicar un artículo nuevo: (1) añade su objeto aquí, (2) crea la carpeta
// src/app/blog/<slug>/page.tsx con el cuerpo dentro de <BlogArticle>, y (3) deja
// la portada en /public/blog/<slug>.png (1200×630). El índice y el sitemap se
// actualizan solos.
export type Post = {
  slug: string;
  title: string; // titular del artículo (h1)
  description: string; // meta description + extracto en el índice
  date: string; // ISO (YYYY-MM-DD), fecha de publicación
  updated?: string; // ISO, si se revisa el contenido
  readingMin: number; // minutos de lectura aproximados
  tags: string[]; // etiquetas (chips)
  cover: string; // portada 1200×630 en /public
  kicker: string; // rótulo corto sobre el título (mono)
};

export const posts: Post[] = [
  {
    slug: "hacer-tu-web-tu-mismo-o-contratar",
    title: "¿Hacer tu web tú mismo o contratar a alguien? Te ayudo a decidir",
    description:
      "Wix, Shopify o WordPress hacen fácil empezar una web. Pero ¿y que venda? Sin humo: cuándo te compensa hacerla tú y cuándo contratar a un profesional.",
    date: "2026-06-27",
    readingMin: 5,
    tags: ["Diseño web", "Negocio"],
    cover: "/blog/hacer-tu-web-tu-mismo-o-contratar.png",
    kicker: "Diseño web",
  },
  {
    slug: "caso-taza-magica",
    title: "Caso real: cómo monté Taza Mágica, una tienda de cero",
    description:
      "Te enseño por dentro cómo monté Taza Mágica: la idea, la tienda Shopify, el catálogo, las imágenes y lo que aprendí montando una tienda de verdad.",
    date: "2026-06-20",
    readingMin: 6,
    tags: ["Shopify", "Caso real"],
    cover: "/blog/caso-taza-magica.png",
    kicker: "Caso real",
  },
  {
    slug: "como-montar-tienda-shopify-que-venda",
    title: "Cómo montar una tienda Shopify que venda (no solo que exista)",
    description:
      "Montar una Shopify es fácil; que venda es otra cosa. Guía sin tecnicismos: catálogo, fichas, velocidad, móvil y los detalles que marcan la diferencia.",
    date: "2026-06-13",
    readingMin: 7,
    tags: ["Shopify", "Guía"],
    cover: "/blog/como-montar-tienda-shopify-que-venda.png",
    kicker: "Shopify",
  },
  {
    slug: "errores-que-matan-ventas-tienda-online",
    title: "5 errores que están matando las ventas de tu tienda online",
    description:
      "Si tienes visitas pero no vendes, casi seguro es uno de estos 5 errores. Te digo cuáles son y cómo arreglarlos sin gastar más en publicidad.",
    date: "2026-06-06",
    readingMin: 5,
    tags: ["E-commerce", "Ventas"],
    cover: "/blog/errores-que-matan-ventas-tienda-online.png",
    kicker: "E-commerce",
  },
  {
    slug: "fotos-de-producto-que-venden",
    title: "Fotos de producto que venden (sin gastar en un estudio caro)",
    description:
      "En una tienda online la foto ES el producto. Cómo conseguir imágenes que convierten, con o sin presupuesto, y dónde entra la IA sin que parezca falso.",
    date: "2026-05-29",
    readingMin: 5,
    tags: ["Imágenes", "E-commerce"],
    cover: "/blog/fotos-de-producto-que-venden.png",
    kicker: "Imágenes",
  },
  {
    slug: "shopify-woocommerce-o-wix",
    title: "Shopify, WooCommerce o Wix: cuál te conviene de verdad",
    description:
      "Comparativa honesta para elegir plataforma de tienda online según tu caso: facilidad, control, coste y a quién le conviene cada una.",
    date: "2026-05-22",
    readingMin: 6,
    tags: ["E-commerce", "Shopify"],
    cover: "/blog/shopify-woocommerce-o-wix.png",
    kicker: "E-commerce",
  },
];

// Artículos ordenados de más nuevo a más antiguo (para el índice).
export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

// Fecha legible en español: "27 de junio de 2026".
export const formatPostDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
