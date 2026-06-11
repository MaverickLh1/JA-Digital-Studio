import Link from "next/link";
import Logo from "@/components/Logo";
import { platforms, contact, legalLinks } from "@/lib/data";
import { LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-crema/10 bg-carbon px-5 py-12 text-crema">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2.5 sm:items-start">
          <Logo className="h-[17px] w-auto text-crema" />
          <p className="text-sm text-crema/65">
            José Antonio González · Freelance digital
          </p>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  target={p.url === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={p.name}
                  className="block text-crema/45 transition-colors hover:text-coral"
                >
                  <span
                    className="platform-icon h-5"
                    style={{
                      aspectRatio: p.ratio,
                      WebkitMaskImage: `url(${p.icon})`,
                      maskImage: `url(${p.icon})`,
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {contact.linkedin && (
            <>
              <span className="h-6 w-px bg-crema/15" aria-hidden="true" />
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-crema/15 text-crema/55 transition-colors hover:border-coral hover:text-coral"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-crema/10 pt-6 text-sm text-crema/60 sm:flex-row">
        <a href={`mailto:${contact.email}`} className="link-underline hover:text-crema">
          {contact.email}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-crema">
              {l.label}
            </Link>
          ))}
        </nav>

        <p>© {new Date().getFullYear()} Josea González</p>
      </div>

      {/* Marca de agua: el nombre del estudio recortado por el borde inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mb-12 mt-10 select-none overflow-hidden"
      >
        <p className="text-outline-crema translate-y-[22%] whitespace-nowrap text-center font-display text-[8.2vw] font-black uppercase leading-[0.85] tracking-tight">
          JOSEA GONZALEZ<span className="text-coral/25">.</span>
        </p>
      </div>
    </footer>
  );
}
