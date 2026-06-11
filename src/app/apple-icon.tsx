import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Icono para iOS/Android generado en build a partir del monograma JG.
export default async function AppleIcon() {
  const svg = await readFile(join(process.cwd(), "public/brand/monograma-app.svg"), "utf8");
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
       
      <img src={src} alt="" width={180} height={180} />
    ),
    size
  );
}
