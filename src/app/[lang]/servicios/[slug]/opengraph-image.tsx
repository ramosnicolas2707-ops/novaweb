import { imagenOg, tamanoOg, tipoOg } from "@/lib/og";
import { servicioPorSlug, desde, slugsServicios } from "@/data/contenido";
import { precio } from "@/lib/format";
import { IDIOMAS, esIdioma, type Idioma } from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";

export function generateStaticParams() {
  return IDIOMAS.flatMap((lang) =>
    slugsServicios.map((slug) => ({ lang, slug })),
  );
}

export const alt = "NovaWeb";
export const size = tamanoOg;
export const contentType = tipoOg;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: bruto, slug } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const t = textos(lang);
  const s = servicioPorSlug(lang, slug);

  if (!s) return imagenOg({ titulo: "NovaWeb" });

  return imagenOg({
    titulo: s.h1,
    etiqueta: s.nav,
    precio: `${t.desde} ${precio(desde(s))}`,
  });
}
