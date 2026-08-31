import { site } from "@/data/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${site.name} — ${site.tagline}`;

export default function Image() {
  return renderOg({
    kicker: "Desarrollo web · Bogotá",
    title: "¿Necesitas una página web o una tienda online?",
    price: "Desde $900.000 COP",
  });
}
