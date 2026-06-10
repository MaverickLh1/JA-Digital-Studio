// Curva de easing compartida por todas las animaciones de entrada del sitio.
// Equivale a un "ease-out expo" suave: arranca rápido y frena con elegancia.
export const easeOut = [0.22, 1, 0.36, 1] as const;

// Entrada estándar "aparece subiendo" al hacer scroll (una sola vez).
// Uso: <motion.h2 {...fadeUp(0.05)}>  |  <motion.p {...fadeUp(0, { y: 16, duration: 0.5 })}>
export function fadeUp(delay = 0, { y = 20, duration = 0.6 } = {}) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration, delay },
  };
}
