import Link from "next/link";
import { servicios, desde, faqHome } from "@/data/contenido";
import { claim } from "@/data/site";
import { meta, faqJsonLd } from "@/lib/seo";
import { esIdioma, paramsDeIdioma, type Idioma } from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Proyectos from "@/components/Proyectos";
import Precios from "@/components/Precios";
import CtaFinal from "@/components/CtaFinal";
import Revelar from "@/components/Revelar";
import Precio from "@/components/Precio";
import { TituloSeccion } from "@/components/ui";

export const generateStaticParams = paramsDeIdioma;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";

  return meta({
    lang,
    title:
      lang === "es"
        ? "NovaWeb · Páginas web y tiendas online en Colombia"
        : "NovaWeb · Websites and online stores, built in Colombia",
    description: claim[lang],
    path: "/",
  });
}

/**
 * Home. Cinco bloques y se acabó:
 *   1. Qué hago (hero)
 *   2. Qué vendo (las cuatro tarjetas, cortitas)
 *   3. Trabajo real
 *   4. Precios
 *   5. Las dudas que frenan la compra
 *   6. Cierre
 *
 * Sin sección de "proceso", sin "nosotros", sin logos de tecnologías. Lo que
 * no ayuda a decidir, estorba.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const t = textos(lang);

  const preguntas = faqHome(lang);

  return (
    <>
      {/*
        El FAQPage del home. Las preguntas están escritas contra búsquedas
        reales ("cuánto cuesta una página web"), así que este bloque es lo
        que puede hacer que el sitio aparezca respondiendo esa búsqueda
        directamente en Google, sin que nadie entre a la página.
      */}
      <JsonLd data={faqJsonLd(preguntas)} />

      <Hero t={t} />

      {/* Qué vendo */}
      <section className="seccion bg-nieve">
        <div className="contenedor">
          <Revelar>
            <TituloSeccion
              antetitulo={t.queHago}
              titulo={t.queHagoTitulo}
              bajada={t.queHagoBajada}
            />
          </Revelar>

          <div className="mt-12 grid gap-px bg-filete sm:grid-cols-2">
            {servicios(lang).map((s, i) => (
              <Revelar key={s.slug} retraso={i * 60}>
                {/* El negro no aparece de golpe: sube desde abajo como un
                    panel (.panel-sube en globals.css). El texto se aclara
                    detrás de él para seguir siendo legible. */}
                <Link
                  href={`/${lang}/servicios/${s.slug}`}
                  className="panel-sube group flex h-full flex-col bg-blanco p-8 transition-colors duration-500 hover:text-blanco md:p-10"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-rojo">
                    {t.servicio} {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-2xl md:text-3xl">{s.card}</h3>

                  <p className="mt-3 text-lg text-grafito group-hover:text-white/70">
                    {s.cardLine}
                  </p>

                  <p className="mt-8 flex items-baseline justify-between gap-4 border-t border-filete pt-5 group-hover:border-filete-claro">
                    <span className="cifra text-xl font-extrabold tracking-tight">
                      {t.desde}{" "}
                      <Precio valor={desde(s)} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-rojo transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <Proyectos lang={lang} t={t} />
      <Precios lang={lang} t={t} />

      {/* Las dudas que frenan la compra, contestadas antes de que escriban. */}
      <section className="seccion">
        <div className="contenedor">
          <Revelar>
            <TituloSeccion
              antetitulo={t.preguntas}
              titulo={t.loQueMasPreguntan}
            />
          </Revelar>
          <Revelar>
            <div className="mt-12 max-w-3xl">
              <Faq lang={lang} preguntas={preguntas} />
            </div>
          </Revelar>
        </div>
      </section>

      <CtaFinal t={t} />
    </>
  );
}
