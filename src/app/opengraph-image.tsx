import { ImageResponse } from "next/og";
import { stackedLogo, domainWordmark } from "@/lib/brand-paths";

export const alt = "Josea González — Web, e-commerce y marca para tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Paleta de marca
const CARBON = "#171615";
const CORAL = "#ff6f61";
const CREMA = "#f8f0e3";

// La imagen se compone solo con trazados vectoriales generados desde
// Archivo Black / JetBrains Mono (brand-paths.ts): no descarga fuentes
// en el build, así que el resultado es determinista y nunca falla por red.
export default function Image() {
  const logoWidth = 880;
  const logoHeight = (stackedLogo.h / stackedLogo.w) * logoWidth;
  const domainWidth = 320;
  const domainHeight = (domainWordmark.h / domainWordmark.w) * domainWidth;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CARBON,
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Acento coral que sangra por la esquina (asimetría) */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-180px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: CORAL,
            opacity: 0.14,
            display: "flex",
          }}
        />
        {/* Hairline estructural inferior */}
        <div
          style={{
            position: "absolute",
            left: "80px",
            right: "80px",
            bottom: "150px",
            height: "1px",
            background: "rgba(248,240,227,0.12)",
            display: "flex",
          }}
        />

        {/* Cartel apilado: JOSEA / GONZALEZ. + WEB/ ECOM/ IA/ */}
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <svg
            width={logoWidth}
            height={logoHeight}
            viewBox={`0 0 ${stackedLogo.w} ${stackedLogo.h}`}
          >
            <path d={stackedLogo.ink} fill={CREMA} />
            <path d={stackedLogo.coral} fill={CORAL} />
          </svg>
        </div>

        {/* Pie: punto coral + dominio */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              background: CORAL,
            }}
          />
          <svg
            width={domainWidth}
            height={domainHeight}
            viewBox={`0 0 ${domainWordmark.w} ${domainWordmark.h}`}
          >
            <path d={domainWordmark.d} fill={CORAL} />
          </svg>
        </div>
      </div>
    ),
    size
  );
}
