import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon PNG (32px) generado en build a partir del monograma JG.
// icon.svg cubre los navegadores con soporte de favicon vectorial.
export default async function Icon() {
  const svg = await readFile(join(process.cwd(), "public/brand/monograma-app.svg"), "utf8");
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(<img src={src} alt="" width={32} height={32} />, size);
}
