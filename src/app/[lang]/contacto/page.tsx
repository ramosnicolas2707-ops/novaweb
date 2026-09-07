import { site, whatsapp, condiciones } from "@/data/site";
import { meta, migasJsonLd } from "@/lib/seo";
import { esIdioma, paramsDeIdioma, type Idioma } from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";
import Migas from "@/components/Migas";
import JsonLd from "@/components/JsonLd";
import { Boton } from "@/components/ui";

export const generateStaticParams = paramsDeIdioma;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";

  return meta({
    lang,
    title: textos(lang).contacto,
    description:
      lang === "es"
        ? `Escríbeme por WhatsApp al ${site.contact.whatsappDisplay} o por correo. Respondo el mismo día, de lunes a viernes.`
        : `Message me on WhatsApp at ${site.contact.whatsappDisplay} or by email. I answer the same day, Monday to Friday.`,
    path: "/contacto",
  });
}

/**
 * Contacto.
 *
 * Sin formulario a propósito: el visitante ya eligió WhatsApp y un formulario
 * de seis campos solo agrega un paso donde se pierde gente. Si algún día hace
 * falta uno, va aquí, debajo del bloque de WhatsApp, nunca encima.
 */
export default async function Page({ params }: Props) {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const t = textos(lang);

  const migas = [
    { name: t.inicio, path: `/${lang}` },
    { name: t.contacto, path: `/${lang}/contacto` },
  ];

  return (
    <>
      <JsonLd data={migasJsonLd(migas)} />
      <Migas items={migas} etiqueta={t.ruta} />

      <section className="contenedor pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <h1 className="text-[clamp(2.25rem,6vw,4rem)]">{t.contactoH1}</h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-grafito">
              {t.contactoIntro}
            </p>

            <div className="mt-10">
              <Boton href={whatsapp(t.waCotizar)} externo>
                {t.escribemePorWhatsapp}
              </Boton>
            </div>

            <dl className="mt-14 grid gap-8 border-t-2 border-tinta pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                  WhatsApp
                </dt>
                <dd className="cifra mt-2 text-lg font-bold">
                  <a
                    href={`https://wa.me/${site.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-naranja-texto"
                  >
                    {site.contact.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                  {t.correo}
                </dt>
                <dd className="mt-2 font-bold break-all">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="hover:text-naranja-texto"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                  {t.dondeEstoy}
                </dt>
                <dd className="mt-2 font-bold">
                  {site.address.city}, {site.address.country}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                  {t.horario}
                </dt>
                <dd className="mt-2 space-y-1 font-bold leading-snug">
                  <span className="block">{t.horarioBogota}</span>
                  <span className="block text-sm font-normal text-grafito">
                    {t.horarioEstadosUnidos}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Condiciones comerciales, a la vista y no en letra chica. */}
          <aside className="h-fit bg-nieve p-8 md:p-10">
            <h2 className="text-2xl">{t.comoTrabajo}</h2>
            <dl className="mt-8 space-y-7">
              {condiciones[lang].map((c) => (
                <div key={c.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                    {c.label}
                  </dt>
                  <dd className="cifra mt-1.5 text-2xl font-extrabold tracking-tight text-naranja-texto">
                    {c.value}
                  </dd>
                  <dd className="mt-2 leading-relaxed text-grafito">
                    {c.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
