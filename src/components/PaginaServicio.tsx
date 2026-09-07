import Link from "next/link";
import type { Servicio } from "@/data/tipos";
import { whatsapp } from "@/data/site";
import { desde } from "@/data/contenido";
import { precio } from "@/lib/format";
import { servicioJsonLd, faqJsonLd, migasJsonLd } from "@/lib/seo";
import type { Idioma } from "@/i18n/idiomas";
import type { Textos } from "@/i18n/textos";
import { Boton, ListaSi, ListaNo, TituloSeccion } from "./ui";
import Migas from "./Migas";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import CtaFinal from "./CtaFinal";
import Revelar from "./Revelar";
import Precio from "./Precio";

/**
 * Una sola plantilla para los cuatro servicios, en los dos idiomas.
 *
 * Cada página de servicio es un archivo de diez líneas que le pasa su objeto
 * de datos a este componente. Así las ocho páginas (4 servicios × 2 idiomas)
 * se mantienen idénticas en estructura, y arreglar algo aquí lo arregla en
 * las ocho.
 *
 * El orden responde, en este orden, a lo que el visitante se pregunta:
 * qué es esto → es lo que necesito? → qué me llevo → qué NO me llevo →
 * cuánto vale → las dudas que quedan.
 */
export default function PaginaServicio({
  lang,
  t,
  s,
}: {
  lang: Idioma;
  t: Textos;
  s: Servicio;
}) {
  const migas = [
    { name: t.inicio, path: `/${lang}` },
    { name: s.nav, path: `/${lang}/servicios/${s.slug}` },
  ];

  return (
    <>
      <JsonLd data={servicioJsonLd(lang, s)} />
      <JsonLd data={faqJsonLd(s.faq)} />
      <JsonLd data={migasJsonLd(migas)} />

      <Migas items={migas} etiqueta={t.ruta} />

      {/* Qué es esto */}
      <section className="contenedor pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h1 className="text-[clamp(2.25rem,6vw,4rem)]">{s.h1}</h1>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-grafito">
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Boton href={whatsapp(t.waServicio(s.card))} externo>
                {t.cotizarPorWhatsapp}
              </Boton>
              <Boton href="#planes" tono="linea">
                {t.verPrecios}
              </Boton>
            </div>
          </div>

          <dl className="grid h-fit grid-cols-2 gap-px bg-filete lg:grid-cols-1">
            <div className="bg-blanco p-6 lg:border-l-2 lg:border-naranja">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                {t.desde}
              </dt>
              <dd className="mt-2">
                <Precio
                  valor={desde(s)}
                  className="cifra text-3xl font-extrabold tracking-tight"
                />
              </dd>
            </div>
            <div className="bg-blanco p-6 lg:border-l-2 lg:border-naranja">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                {t.entrega}
              </dt>
              <dd className="mt-2 font-bold leading-snug">{s.entrega}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ¿Qué necesitas?
          Esta sección no filtra clientes, los orienta. La columna derecha
          manda a cada quien al servicio que sí le resuelve el problema. */}
      <section className="seccion bg-nieve">
        <div className="contenedor">
          <Revelar>
            <TituloSeccion
              antetitulo={t.paraQueNoPierdasTiempo}
              titulo={t.esEstoLoQueNecesitas}
              bajada={t.esEstoBajada}
            />
          </Revelar>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            <Revelar>
              <h3 className="mb-6 text-xl">{t.justoLoTuyo}</h3>
              <ListaSi items={s.siEsParaTi} />
            </Revelar>

            <Revelar retraso={80}>
              <h3 className="mb-6 text-xl">{t.otraCosaTitulo}</h3>
              <ul className="space-y-5">
                {s.otraCosa.map((item) => (
                  <li key={item.texto} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.72rem] h-px w-3 shrink-0 bg-grafito"
                    />
                    <span className="text-[0.9375rem] leading-relaxed text-grafito">
                      {item.texto}
                      {item.ir && (
                        <>
                          {" "}
                          <Link
                            href={`/${lang}${item.ir.href}`}
                            className="font-bold whitespace-nowrap text-naranja-texto underline decoration-2 underline-offset-4 hover:text-tinta"
                          >
                            {item.ir.label} →
                          </Link>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Revelar>
          </div>
        </div>
      </section>

      {/* Qué me llevo */}
      <section className="seccion">
        <div className="contenedor">
          <Revelar>
            <TituloSeccion
              antetitulo={t.queIncluye}
              titulo={t.vaEnTodosLosPlanes}
            />
          </Revelar>

          {/* Seis tarjetas, siempre. Con cinco quedaba un hueco gris en la
              tercera columna. Si algún día agregas una séptima, agrega también
              la octava o vuelve el hueco. */}
          <div className="mt-12 grid gap-px bg-filete sm:grid-cols-2 lg:grid-cols-3">
            {s.incluyeSiempre.map((item, i) => (
              <Revelar key={item.title} retraso={i * 50}>
                <div className="realza h-full bg-blanco p-7">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-grafito">
                    {item.detail}
                  </p>
                </div>
              </Revelar>
            ))}
          </div>

          <Revelar>
            <div className="mt-14 border-t border-filete pt-10">
              <h3 className="mb-6 text-xl">{t.noVaIncluido}</h3>
              <div className="max-w-2xl">
                <ListaNo items={s.noIncluye} />
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* Cuánto vale */}
      <section id="planes" className="seccion bg-nieve">
        <div className="contenedor">
          <Revelar>
            <TituloSeccion
              antetitulo={t.precios}
              titulo={t.losPlanes}
              bajada={t.planesBajada}
            />
          </Revelar>

          {/* Igual que en el home: las columnas siguen a cuántos planes hay,
              para no dejar una celda vacía en los servicios de dos planes. */}
          <div
            className={`mt-12 grid gap-px bg-filete sm:grid-cols-2 ${
              s.planes.length > 2 ? "lg:grid-cols-3" : ""
            }`}
          >
            {s.planes.map((p, i) => (
              <Revelar key={p.name} retraso={i * 60}>
                {/* El orden responde a cómo se decide una compra: primero
                    para quién es, después cuánto vale, después cuándo lo
                    tienes, y al final el detalle. El tiempo de entrega salió
                    de la lista de puntos a su propio renglón porque es lo
                    segundo que pregunta todo el mundo. */}
                <div
                  className={`realza flex h-full flex-col bg-blanco p-8 ${
                    p.destacado ? "ring-2 ring-inset ring-naranja" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl">{p.name}</h3>
                    {p.destacado && (
                      <span className="shrink-0 bg-naranja px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-tinta">
                        {t.elMasPedido}
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 leading-relaxed text-grafito">
                    {p.paraQuien}
                  </p>

                  <p className="mt-7 flex flex-wrap items-baseline gap-x-2">
                    <Precio
                      valor={p.price}
                      className="cifra text-[2.5rem] font-extrabold leading-none"
                    />
                    <span className="text-sm text-grafito">
                      {p.billing === "mes" ? t.alMes : t.pagoUnico}
                    </span>
                  </p>

                  <p className="mt-4 inline-flex w-fit items-center gap-2 bg-nieve px-3 py-1.5 text-sm font-bold">
                    <span aria-hidden="true" className="h-2 w-2 bg-naranja" />
                    {p.entrega}
                  </p>

                  <div className="mt-7 flex-1 border-t border-filete pt-7">
                    <ListaSi items={p.incluye} />
                  </div>

                  <Boton
                    href={whatsapp(t.waPlan(p.name, s.card, precio(p.price)))}
                    externo
                    tono={p.destacado ? "naranja" : "linea"}
                    className="mt-8 w-full"
                  >
                    {t.preguntarPorEste}
                  </Boton>
                </div>
              </Revelar>
            ))}
          </div>

          {/* Extras y la letra que no es chica */}
          <Revelar>
            <div className="mt-12 grid gap-10 border-t-2 border-tinta pt-10 md:grid-cols-[1fr_1.2fr]">
              <div>
                <h3 className="mb-5 text-lg">{t.siNecesitasMas}</h3>
                <dl className="space-y-3">
                  {s.extras.map((e) => (
                    <div
                      key={e.label}
                      className="flex items-baseline justify-between gap-4 border-b border-filete pb-3"
                    >
                      <dt className="text-[0.9375rem]">{e.label}</dt>
                      <dd className="cifra shrink-0 font-bold">{e.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {s.nota && (
                <div className="border-l-2 border-naranja pl-6">
                  <h3 className="mb-3 text-lg">{t.ojoConEsto}</h3>
                  <p className="leading-relaxed text-grafito">{s.nota}</p>
                </div>
              )}
            </div>
          </Revelar>
        </div>
      </section>

      {/* Las dudas que quedan */}
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
              <Faq lang={lang} preguntas={s.faq} />
            </div>
          </Revelar>
        </div>
      </section>

      <CtaFinal
        t={t}
        titulo={t.arrancamosCon(s.card.toLowerCase())}
        mensaje={t.waServicio(s.card)}
      />
    </>
  );
}
