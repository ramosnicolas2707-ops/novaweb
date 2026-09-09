import { imagenOg, tamanoOg, tipoOg } from "@/lib/og";
import { esIdioma, paramsDeIdioma, type Idioma } from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";

export const generateStaticParams = paramsDeIdioma;
export const alt = "NovaWeb";
export const size = tamanoOg;
export const contentType = tipoOg;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const t = textos(lang);

  return imagenOg({
    titulo: t.heroPromesa,
    etiqueta: lang === "es" ? "Desarrollo web" : "Web development",
    precio: lang === "es" ? "desde $900.000" : "from COP $900,000",
  });
}
