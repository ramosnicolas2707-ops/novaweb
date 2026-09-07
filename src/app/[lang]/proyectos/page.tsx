import { meta, migasJsonLd } from "@/lib/seo";
import { proyectos } from "@/data/contenido";
import { esIdioma, paramsDeIdioma, type Idioma } from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";
import Migas from "@/components/Migas";
import Proyectos from "@/components/Proyectos";
import CtaFinal from "@/components/CtaFinal";
import JsonLd from "@/components/JsonLd";

export const generateStaticParams = paramsDeIdioma;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";

  return meta({
    lang,
    title: textos(lang).trabajoReal,
    description:
      lang === "es"
        ? "Sitios que están andando: una tienda de perfumería con pago en cuotas y un catálogo de repuestos pesados con cotización por WhatsApp. Con capturas de verdad."
        : "Sites that are live: a perfume store with instalment payments and a heavy-vehicle parts catalogue that quotes over WhatsApp. With real screenshots.",
    path: "/proyectos",
  });
}

export default async function Page({ params }: Props) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const t = textos(lang);

  const migas = [
    { name: t.inicio, path: `/${lang}` },
    { name: t.trabajoReal, path: `/${lang}/proyectos` },
  ];

  return (
    <>
      <JsonLd data={migasJsonLd(migas)} />
      <Migas items={migas} etiqueta={t.ruta} />

      <div className="contenedor pt-10 md:pt-14">
        <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
          {t.proyectosH1(proyectos(lang).length)}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-grafito">
          {t.proyectosIntro}
        </p>
      </div>

      <Proyectos
        lang={lang}
        t={t}
        antetitulo={t.proyectosUnoAUno}
        titulo={t.proyectosAntesDespues}
        bajada={t.proyectosDetalle}
      />

      <CtaFinal t={t} mensaje={t.waProyectos} />
    </>
  );
}
