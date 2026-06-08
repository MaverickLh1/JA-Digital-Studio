export type Service = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  image: string | null;
  span: string; // clases de columnas para el bento (lg)
};

export const services: Service[] = [
  {
    id: "ia",
    title: "IA aplicada a tu negocio",
    tagline:
      "La inteligencia artificial bien usada y adaptada a tu marca. Prompts, asistentes a medida y automatizaciones que te ahorran horas.",
    bullets: [
      "Prompts para e-commerce",
      "Humanización de textos IA",
      "GPTs y proyectos de Claude a medida",
      "Fórmulas IA para Google Sheets",
      "Guías para Midjourney / Ideogram",
    ],
    image: null,
    span: "lg:col-span-2",
  },
  {
    id: "shopify",
    title: "Optimización en Shopify",
    tagline:
      "Subo, organizo y optimizo tu catálogo para que se venda solo. SEO, variantes, migraciones y todo lo que tu tienda necesita.",
    bullets: [
      "Subida y SEO de productos",
      "Migración de catálogos",
      "Corrección de archivos CSV",
      "Metafields personalizados",
      "Reseñas y badges de confianza",
    ],
    image: "/mockup-shopify.webp",
    span: "lg:col-span-2",
  },
  {
    id: "web",
    title: "Webs y Landing Pages",
    tagline:
      "Páginas que no solo se ven bien: convierten. Diseño orientado a que el visitante haga lo que quieres que haga.",
    bullets: [
      "Webs de una página",
      "Landing pages de captación",
      "Link in Bio",
      "Páginas Coming Soon",
      "Páginas legales",
    ],
    image: "/mockup-web.webp",
    span: "lg:col-span-2",
  },
  {
    id: "imagenes",
    title: "Imágenes para E-commerce",
    tagline:
      "Tus productos, vistos como se merecen. Fondos limpios, fotografía con IA, infografías y formatos listos para cada marketplace.",
    bullets: [
      "Fondos blancos y transparentes",
      "Fotografía de producto con IA",
      "Infografías y miniaturas",
      "Edición de sombras y reflejos",
      "Adaptación a Amazon, Etsy y Shopify",
    ],
    image: "/mockup-imagenes.webp",
    span: "lg:col-span-3",
  },
  {
    id: "branding",
    title: "Identidad de Marca",
    tagline:
      "Una imagen coherente que se reconoce a la primera. Colores, logos, plantillas y los detalles que hacen que tu marca parezca grande.",
    bullets: [
      "Paleta de colores y tipografías",
      "Diseño de logos",
      "Kits editables en Canva",
      "Iconos de beneficios",
      "Favicon y cabeceras",
    ],
    image: "/mockup-branding.webp",
    span: "lg:col-span-3",
  },
];

export type Platform = {
  name: string;
  icon: string;
  url: string;
};

// Las URLs se actualizarán cuando José Antonio pase sus perfiles.
export const platforms: Platform[] = [
  { name: "Fiverr", icon: "/plataforma-fiverr.svg", url: "#" },
  { name: "Malt", icon: "/plataforma-malt.svg", url: "#" },
  { name: "Upwork", icon: "/plataforma-upwork.svg", url: "#" },
  { name: "Freelancer", icon: "/plataforma-freelancer.svg", url: "#" },
  { name: "Workana", icon: "/plataforma-workana.svg", url: "#" },
  { name: "SoyFreelancer", icon: "/plataforma-soyfreelancer.svg", url: "#" },
];

export const contact = {
  email: "joseantonio@jadigitalstudio.com",
  whatsapp: "34623462851",
};

export type ContactState = {
  ok: boolean;
  message: string;
};
