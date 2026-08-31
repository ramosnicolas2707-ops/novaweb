import { getService } from "@/data/services";
import { cop } from "@/lib/format";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

const service = getService("paginas-web")!;

export const size = ogSize;
export const contentType = ogContentType;
export const alt = service.meta.title;

export default function Image() {
  const desde = Math.min(...service.plans.map((p) => p.price));
  const mensual = service.plans.every((p) => p.billing === "mes");

  return renderOg({
    kicker: service.nav,
    title: service.meta.title,
    price: `Desde ${cop(desde)} COP${mensual ? " al mes" : ""}`,
  });
}
