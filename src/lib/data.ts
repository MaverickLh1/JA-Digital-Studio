export type Service = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  image: string | null;
  featured?: boolean; // tarjeta oscura focal del bento
  extra?: boolean; // complemento (jerarquía menor que las especialidades)
};

// El servicio "IA aplicada a tu negocio" se retiró del catálogo (jun 2026);
// si vuelve, recuperar el objeto desde el historial de git.
export const services: Service[] = [
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
    featured: true,
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
    extra: true,
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
    extra: true,
  },
];

export type Project = {
  id: string;
  name: string;
  type: string; // rótulo corto: "Tienda Shopify", "E-commerce + Marca"…
  description: string;
  image: string;
  url?: string; // enlace público; omitir para mostrar estado "en construcción"
  status: "live" | "soon";
  services: string[]; // chips de lo aplicado en el proyecto
  quote?: { text: string; author: string }; // testimonio real (cuando llegue)
};

// REVISAR: descripciones provisionales — ajustar al papel real en cada
// proyecto y añadir las otras dos tiendas Shopify cuando haya URL.
export const projects: Project[] = [
  {
    id: "tazamagica",
    name: "Taza Mágica",
    type: "Tienda Shopify",
    description:
      "Tienda de tazas y regalos personalizados. Montaje en Shopify, catálogo con personalización de producto e imágenes listas para vender.",
    image: "/work/tazamagica.png",
    url: "https://tazamagica.com",
    status: "live",
    services: ["Shopify", "Catálogo", "Imágenes de producto"],
  },
  {
    id: "wemaker",
    name: "Wemaker",
    type: "E-commerce + Marca",
    description:
      "Proyecto propio de e-commerce construido de cero: identidad de marca, diseño web y catálogo. Lanzamiento en camino.",
    image: "/mockup-web.webp",
    url: "https://wemaker.es",
    status: "soon",
    services: ["Branding", "Diseño web", "Shopify"],
  },
];

export type Platform = {
  name: string;
  icon: string;
  url: string;
  ratio: number; // ancho/alto del lienzo recortado → para ancho natural a altura fija
};

// ?v=N fuerza recarga del SVG cuando se edita su lienzo (evita caché del navegador).
// Solo se muestran las plataformas con perfil activo. Upwork, Workana y
// SoyFreelancer quedan ocultas: reactivar añadiendo su objeto con la url real.
const v = "?v=6";
export const platforms: Platform[] = [
  { name: "Fiverr", icon: `/plataforma-fiverr.svg${v}`, url: "https://es.fiverr.com/sellers/joseantoniog692/", ratio: 3.17 },
  { name: "Malt", icon: `/plataforma-malt.svg${v}`, url: "https://www.malt.es/profile/joseantoniogonzalezmoreno", ratio: 3.31 },
  { name: "Freelancer", icon: `/plataforma-freelancer.svg${v}`, url: "https://www.freelancer.es/u/joseantoniog56", ratio: 4.14 },
];

export const contact = {
  email: "hola@joseagonzalez.com",
  whatsapp: "34623462851",
  // Perfil de LinkedIn. Déjalo vacío ("") para ocultar el botón social.
  // URL con tildes codificadas (é→%C3%A9, á→%C3%A1) para máxima compatibilidad.
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-antonio-gonz%C3%A1lez-moreno-96b60a415",
};

// Enlace de WhatsApp con mensaje precargado (botón flotante y sección contacto).
export const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "¡Hola José Antonio! Quería comentarte un proyecto."
)}`;

// Rótulos de la marquesina (banda coral entre hero y servicios).
export const marqueeItems = [
  "Tiendas Shopify",
  "Diseño web",
  "Imágenes de producto",
  "Branding",
] as const;

// Páginas legales (footer principal y layout de páginas legales).
export const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
] as const;

// Navegación principal (anclas de la home).
export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Plataformas", href: "#plataformas" },
  { label: "Contacto", href: "#contacto" },
] as const;

// Chips de confianza de la sección "Sobre mí".
export const aboutChips = [
  "📍 España",
  "Trato directo conmigo",
  "Respuesta rápida",
] as const;

// Pasos de la sección "Trabajar conmigo es fácil".
export const processSteps = [
  {
    n: "01",
    title: "Cuéntame",
    text: "Me escribes y me explicas qué necesitas. Te respondo rápido y sin compromiso.",
  },
  {
    n: "02",
    title: "Lo definimos",
    text: "Acordamos alcance, plazo y precio. Todo claro desde el principio, sin sorpresas.",
  },
  {
    n: "03",
    title: "Lo entrego",
    text: "Hago el trabajo y te lo entrego listo para usar. Con revisiones si hace falta.",
  },
] as const;

