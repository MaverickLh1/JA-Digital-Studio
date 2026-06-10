// Detalles decorativos de plano técnico, compartidos entre secciones.

// Marca de registro "+" para esquinas de contenedores (posicionar vía className).
export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-3 w-3 ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
    </span>
  );
}

// Punto de estado pulsante (disponibilidad). El ping se desactiva solo
// con prefers-reduced-motion vía la regla global de globals.css.
export function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-2 w-2 ${className}`} aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
    </span>
  );
}
