import Link from "next/link";
import Logo from "@/components/Logo";
import { legalLinks } from "@/lib/data";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-carbon text-crema">
      <header className="border-b border-crema/10 px-5 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Josea González — inicio">
            <Logo className="h-3.5 w-auto text-crema" />
          </Link>
          <Link
            href="/"
            className="text-sm text-crema/55 transition-colors hover:text-coral"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="px-5 py-14 sm:py-20">
        <article
          className="mx-auto max-w-3xl
            [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-crema sm:[&_h1]:text-4xl
            [&_h2]:font-display [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-crema
            [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-crema/70
            [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_ul]:text-crema/70
            [&_li]:leading-relaxed
            [&_a]:text-coral [&_a]:underline [&_a]:underline-offset-2
            [&_strong]:font-semibold [&_strong]:text-crema"
        >
          {children}
        </article>
      </main>

      <footer className="border-t border-crema/10 px-5 py-8">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-crema/45">
          {legalLinks.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="transition-colors hover:text-coral"
            >
              {p.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
