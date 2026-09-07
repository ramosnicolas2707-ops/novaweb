import { notFound } from "next/navigation";
import { servicioPorSlug, slugsServicios } from "@/data/contenido";
import { meta } from "@/lib/seo";
import { IDIOMAS, esIdioma, type Idioma } from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";
import PaginaServicio from "@/components/PaginaServicio";

/**
 * Las ocho páginas de servicio: 4 servicios × 2 idiomas, todas desde aquí.
 *
 * Antes había un archivo por servicio. Con dos idiomas eso eran ocho archivos
 * diciendo lo mismo, así que ahora el slug es parte de la ruta y las combina
 * generateStaticParams.
 */

export function generateStaticParams() {
  return IDIOMAS.flatMap((lang) =>
    slugsServicios.map((slug) => ({ lang, slug })),
  );
}

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang: bruto, slug } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const s = servicioPorSlug(lang, slug);

  if (!s) return {};

  return meta({
    lang,
    title: s.meta.title,
    description: s.meta.description,
    path: `/servicios/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { lang: bruto, slug } = await params;
  if (!esIdioma(bruto)) notFound();
  const lang: Idioma = bruto;

  const s = servicioPorSlug(lang, slug);
  if (!s) notFound();

  return <PaginaServicio lang={lang} t={textos(lang)} s={s} />;
}
