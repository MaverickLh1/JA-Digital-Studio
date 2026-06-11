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
