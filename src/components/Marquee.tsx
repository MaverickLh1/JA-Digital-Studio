import { marqueeItems } from "@/lib/data";

// Banda coral entre el hero y servicios: el momento de color de la página.
// Ligeramente rotada para romper la rejilla; el contenido es decorativo
// (se repite en la sección de servicios), por eso va con aria-hidden.
export default function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden bg-carbon py-10 sm:py-12">
      <div className="-rotate-[1.5deg] scale-[1.04]">
        <div className="bg-coral py-3.5 text-carbon shadow-[0_8px_30px_rgba(255,111,97,0.25)]">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {Array.from({ length: 3 }, () => marqueeItems)
                  .flat()
                  .map((item, i) => (
                    <span
                      key={`${copy}-${i}`}
                      className="flex items-center whitespace-nowrap font-display text-sm font-black uppercase tracking-[0.14em] sm:text-base"
                    >
                      {item}
                      <span className="mx-6 text-carbon/60">✦</span>
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
