# JA Digital Studio — Decisiones de Diseño

## Concepto General

Landing page para José Antonio, freelancer en España que ofrece servicios digitales.
Publicada en Vercel. Repositorio en GitHub (MaverickLh1/JA-Digital-Studio).

---

## Enfoque Visual: Híbrido (Claro + Oscuro)

Tema claro como base principal, con secciones oscuras para impacto visual en la entrada y el cierre.

### Distribución de temas por sección

| # | Sección            | Tema   | Justificación                                              |
|---|--------------------|--------|------------------------------------------------------------|
| 1 | Hero               | Oscuro | Impacto visual inmediato, gradiente sutil de fondo         |
| 2 | Servicios          | Claro  | Máxima legibilidad para descripciones de servicios         |
| 3 | Sobre mí           | Claro  | La foto se ve mejor sobre fondo limpio, transmite cercanía |
| 4 | Cómo trabajo       | Claro  | Claridad en los pasos del proceso, acentos de color        |
| 5 | Plataformas        | Oscuro | Contraste visual, destaca iconos de plataformas            |
| 6 | Contacto + Footer  | Oscuro | Cierre potente, formulario y WhatsApp destacan             |

---

## Paleta de Colores — DEFINITIVA (Coral, anclada al logo)

La paleta se deriva directamente del logo para máxima coherencia.
Acento elegido por José Antonio: coral `#FF6F61` (Living Coral).

| Rol                   | Color           | Hex       | Origen                       |
|-----------------------|-----------------|-----------|------------------------------|
| Fondo claro (crema)   | Crema           | `#F8F0E3` | El crema del logo            |
| Fondo oscuro (carbón) | Negro carbón    | `#171615` | El negro del logo            |
| Texto sobre claro     | Negro carbón    | `#171615` | —                            |
| Texto sobre oscuro    | Crema           | `#F8F0E3` | —                            |
| **Acento coral**      | **Living Coral**| `#FF6F61` | Logo + web (mismo coral)     |
| Coral hover/pressed   | Coral oscuro    | `#F25444` | Variante derivada            |

**Reglas de uso del coral:**
- Coral SOLO para: botones, títulos grandes/display, iconos, acentos, bordes en hover.
- NUNCA coral para texto de párrafo (contraste insuficiente sobre crema ~2.6:1).
- Texto de lectura siempre en carbón `#171615` sobre crema, o crema sobre carbón.
- El coral `#FF6F61` es complementario del azul marino de la foto de perfil → la realza.

**Descartado:** gradiente violeta→cian original (parecía "hecho por IA").
**Coherencia total:** el logo se recoloreó a coral `#FF6F61`, idéntico al acento de la web.
Un solo coral en logo + botones + acentos = marca unificada.

---

## Secciones — Detalle

### 1. Hero (oscuro)
- Nombre: José Antonio / JA Digital Studio
- Titular potente: tipo "Transformo ideas en experiencias digitales que venden"
- Subtítulo breve explicando el alcance
- CTA principal: "Ver Servicios"
- Fondo: gradiente mesh animado sutil
- Efecto: fade-in suave de los elementos

### 2. Servicios (claro)
- 5 tarjetas en bento grid, una por pilar:
  1. Prompts Profesionales e IA
  2. Optimización en Shopify y Catálogos
  3. Webs y Landing Pages
  4. Imágenes para E-commerce
  5. Identidad de Marca Aplicada
- Cada tarjeta: icono + título + descripción corta
- Click para expandir y ver sub-servicios
- Efecto: glassmorphism en tarjetas, stagger animation al scroll

### 3. Sobre mí (claro)
- Foto de José Antonio (pendiente de recibir)
- 3-4 líneas de presentación personal
- Datos clave: España, idiomas, experiencia
- Layout: split-screen (foto + texto)
- Efecto: reveal al scroll

### 4. Cómo trabajo (claro)
- 3 pasos: Contacta → Definimos → Entrego
- Iconos animados por paso
- Línea de conexión visual entre pasos
- Efecto: animación secuencial al scroll

### 5. Plataformas (oscuro)
- Título: "Encuéntrame también en:"
- Iconos clicables de: Fiverr, Malt, Upwork, Freelancer.es, Workana, SoyFreelancer
- SVGs guardados en `/recursos/` (fiverr, malt, upwork, freelancer_es, workana, soyfreelancer)
- **Todos los logos en el MISMO color (monocromo)** para integración visual coherente.
  Normalizar Upwork (trae verde #6FDA44 y width fijo) al color unificado y misma caja.
- Links: pendientes de recibir
- Efecto: hover con glow/brillo en cada icono

### 6. Contacto + Footer (oscuro)
- CTA: "Hablemos de tu proyecto"
- Formulario de contacto (envía email a José Antonio)
- Botón de WhatsApp (flotante, siempre visible en toda la página)
- Links a plataformas en el footer
- Efecto: gradiente de fondo, botón con shimmer

---

## Efectos y Animaciones Premium

### Los 7 efectos aprobados

| # | Efecto | Técnica | Impacto |
|---|--------|---------|---------|
| 1 | **Smooth Scroll** | Lenis (~8KB) | El scroll se siente suave y sedoso, señal inconsciente de calidad |
| 2 | **Texto decodificado en Hero** | GSAP ScrambleText o use-scramble | Letras arrancan como caracteres aleatorios y se resuelven; comunica "tecnología" |
| 3 | **Textura de grano (grain)** | SVG feTurbulence + CSS mix-blend-mode, 3-5% opacidad | Señal #1 de "hecho a mano"; presente en webs Awwwards, ausente en templates |
| 4 | **Aurora animada en Hero** | CSS radial-gradients + blur + mix-blend-mode, sin JS | Manchas de color difuminadas moviéndose detrás del texto hero |
| 5 | **Reveal de secciones con clip-path** | clip-path: inset() animado con scroll (Framer Motion useScroll) | Secciones se revelan progresivamente, sensación narrativa |
| 6 | **Botones magnéticos + cursor personalizado** | Framer Motion spring physics + mix-blend-mode: difference | Cursor que cambia de tamaño + botones que atraen al cursor |
| 7 | **Micro-interacciones en tarjetas** | CSS transform perspective + rotateX/Y + scale + box-shadow | Tarjetas que se inclinan siguiendo el ratón, efecto tilt 3D |

### Lo que NO se incluye (decisión deliberada)

- ❌ Hero centrado genérico (título + subtítulo + botón + stock image) — layout del 99% de IAs
- ❌ Parallax básico en imágenes — era impresionante en 2015, hoy genérico
- ❌ Animaciones infinitas en loop — cansan, gastan CPU, distraen
- ❌ Gradientes violeta-azul por todas partes — grita "IA"
- ❌ Transiciones largas (>600ms) — las buenas son rápidas: 200-300ms interacciones, 600ms máx reveals

### Tiempos de animación

- Micro-interacciones (hover, click): 200-300ms
- Reveals al scroll: 400-600ms
- Texto decodificado hero: ~1.5s
- Smooth scroll (Lenis lerp): 0.1

---

## Tecnología

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Estilos:** Tailwind CSS
- **Animaciones:**
  - Lenis (~8KB) — smooth scroll
  - Framer Motion (~40KB) — transiciones React, hover, scroll básico
  - GSAP ScrollTrigger (~27KB) — secuencias de scroll complejas, text reveal
- **Formulario:** Envío de email (servicio por definir)
- **WhatsApp:** Botón flotante con enlace directo, siempre visible
- **Deploy:** Vercel
- **Repo:** GitHub — MaverickLh1/JA-Digital-Studio

---

## Recursos y Datos de Contacto

Todos los recursos en `/recursos/` (raster optimizado a WebP; originales pesados en `/recursos/originales/`):

**Marca:**
- `logo-coral.svg` — **LOGO DEFINITIVO** (emblema circular "JA", coral `#FF6F61` + crema + carbón). Coincide con el acento de la web.
- `logo-naranja.svg` — versión original en naranja `#F95A25` (respaldo, no se usa)

**Foto:**
- `foto-perfil.webp` — 1200×1200, 68KB (estudio, camisa azul marino, cartel "AUTOMATIZA·OPTIMIZA·ESCALA·CRECE")

**Iconos de plataformas:**
- `plataforma-fiverr.svg`, `plataforma-malt.svg`, `plataforma-upwork.svg`, `plataforma-freelancer.svg`, `plataforma-workana.svg`, `plataforma-soyfreelancer.svg`

**Mockups de trabajo (uno por tarjeta de servicio, muestras reales de cliente, 1600px máx, ~100KB c/u):**
- `mockup-branding.webp` → tarjeta *Identidad de Marca* (logo wemaker.es en Affinity, iMac)
- `mockup-web.webp` → tarjeta *Webs y Landing Pages* (web wemaker, iMac, misma escena)
- `mockup-shopify.webp` → tarjeta *Optimización Shopify* (panel admin Shopify, tienda TAZAMANGA, MacBook)
- `mockup-imagenes.webp` → tarjeta *Imágenes E-commerce* (antes/después botella de vino, MacBook)
- Nota: tarjeta *IA aplicada* sin mockup propio (se resuelve con icono/efecto). Aplicar marco/tratamiento uniforme a las 4 para que se vean como un set.

**Optimización aplicada:** las 5 imágenes raster pasaron de ~37MB (JPEG/PNG, hasta 6000×4000px) a ~468KB totales en WebP. Reducción del 98.7%.

**Contacto:**
- WhatsApp: `623462851` (España, +34) → enlace `https://wa.me/34623462851`
- Email (destino del formulario): `joseantonio@jadigitalstudio.com`

---

## Pendientes

- [x] Foto de José Antonio ✅
- [x] Logo definitivo ✅
- [x] Paleta de colores definitiva ✅ (coral `#FF6F61` anclada al logo)
- [x] Número de WhatsApp ✅ (623462851)
- [x] Email de contacto ✅ (joseantonio@jadigitalstudio.com)
- [ ] Enlaces a perfiles de plataformas freelance (los pasa después)
- [ ] Textos definitivos (headline, bio, descripciones) — SIGUIENTE PASO
