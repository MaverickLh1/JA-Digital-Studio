import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

// Chrome compartido por el índice del blog y los artículos: cabecera clara
// (logo → inicio, acceso al blog y CTA) y el footer de marca reutilizado. El
// fondo claro hace la lectura cómoda; el footer oscuro cierra la página.
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-crema text-carbon">
      <header className="sticky top-0 z-50 border-b border-carbon/10 bg-crema/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Josea González — inicio"
          >
            <Logo className="h-[15px] w-auto text-carbon transition-colors hover:text-coral-dark sm:h-[18px]" />
          </Link>
          <nav className="flex items-center gap-5" aria-label="Blog">
            <Link
              href="/blog"
              className="text-sm font-medium text-carbon/70 transition-colors hover:text-carbon"
            >
              Blog
            </Link>
            <Link
              href="/#contacto"
              className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-carbon transition-transform hover:scale-105 active:scale-[0.96]"
            >
              Hablemos
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <Footer />
    </div>
  );
}
