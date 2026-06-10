import { ImageResponse } from "next/og";

export const alt = "JA Digital Studio — Web, e-commerce e IA para tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Paleta de marca
const CARBON = "#171615";
const CORAL = "#ff6f61";
const CREMA = "#f8f0e3";

// Carga la tipografía de marca (Bricolage Grotesque). Si la red falla en el
// build, se omite y se usa la fuente por defecto: nunca rompe la generación.
async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@${weight}`,
        { headers: { "User-Agent": "Mozilla/5.0" } }
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const [extrabold, regular] = await Promise.all([loadFont(800), loadFont(500)]);

  const fonts = [
    extrabold && { name: "Bricolage", data: extrabold, weight: 800 as const },
    regular && { name: "Bricolage", data: regular, weight: 500 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 800 | 500 }[];

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
          padding: "80px",
          fontFamily: fonts.length ? "Bricolage" : "sans-serif",
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
            opacity: 0.16,
            display: "flex",
          }}
        />

        {/* Badge JA */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "92px",
              height: "92px",
              borderRadius: "24px",
              background: CORAL,
              color: CARBON,
              fontSize: "44px",
              fontWeight: 800,
            }}
          >
            JA
          </div>
        </div>

        {/* Titular + claim */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "104px",
              fontWeight: 800,
              color: CREMA,
              lineHeight: 1.05,
              letterSpacing: "-3px",
            }}
          >
            JA Digital Studio
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "42px",
              fontWeight: 500,
              color: "rgba(248,240,227,0.72)",
            }}
          >
            Web, e-commerce e IA para tu negocio
          </div>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "30px",
            fontWeight: 500,
            color: CORAL,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: CORAL,
            }}
          />
          jadigitalstudio.com
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
