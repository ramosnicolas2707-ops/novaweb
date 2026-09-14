import Link from "next/link";
import { servicios as obtenerServicios, desde } from "@/data/contenido";
import { condiciones, whatsapp } from "@/data/site";
import { precio } from "@/lib/format";
import type { Idioma } from "@/i18n/idiomas";
import type { Textos } from "@/i18n/textos";
import { TituloSeccion } from "./ui";
import Revelar from "./Revelar";
import Precio from "./Precio";

/**
 * Precios en el home.
 *
 * Todos los planes de los cuatro servicios, con el precio a la vista en las
 * dos monedas. Filtra: quien no puede pagarlo no escribe, y quien sí llega a
 * la conversación sabiendo cuánto cuesta.
 *
 * En celular la tabla se rompe en tarjetas. Una tabla de cuatro columnas en un
 * teléfono no se lee, se sufre.
 */
export default function Precios({ lang, t }: { lang: Idioma; t: Textos }) {
  const servicios = obtenerServicios(lang);

  return (
    <section id="precios" className="seccion bg-nieve">
      <div className="contenedor">
        <Revelar>
          <TituloSeccion antetitulo={t.precios} titulo={t.cuantoCuesta} />
          {/* La letra chica va aparte y más pequeña: es una aclaración, no
              parte del argumento. Con el mismo peso que el título competía. */}
          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-grafito">
            {t.monedasNota}
          </p>
        </Revelar>

        <div className="mt-14 space-y-14 md:mt-20 md:space-y-16">
          {servicios.map((s, i) => (
            <Revelar key={s.slug} retraso={i * 60}>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-tinta pb-4">
                  <h3 className="text-2xl md:text-3xl">{s.card}</h3>
                  <Link
                    href={`/${lang}/servicios/${s.slug}`}
                    className="text-[0.9375rem] font-bold tracking-tight text-rojo underline decoration-2 underline-offset-4 hover:text-tinta"
                  >
                    {t.verElDetalle} →
                  </Link>
                </div>

                {/* Las columnas se ajustan a cuántos planes hay. Con
                    lg:grid-cols-3 fijo, un servicio de dos planes dejaba una
                    celda gris vacía a la derecha. */}
                <div
                  className={`grid gap-px bg-filete sm:grid-cols-2 ${
                    s.planes.length > 2 ? "lg:grid-cols-3" : ""
                  }`}
                >
                  {s.planes.map((p) => (
                    <div
                      key={p.name}
                      className={`realza flex flex-col bg-blanco p-7 ${
                        p.destacado ? "ring-2 ring-inset ring-rojo" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-lg font-extrabold tracking-tight">
                          {p.name}
                        </h4>
                        {p.destacado && (
                          <span className="shrink-0 bg-rojo px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-blanco">
                            {t.elMasPedido}
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-grafito">
                        {p.paraQuien}
                      </p>

                      <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
                        <Precio
                          valor={p.price}
                          className="cifra text-[2.25rem] font-extrabold leading-none"
                        />
                        <span className="text-sm text-grafito">
                          {p.billing === "mes" ? t.alMes : t.pagoUnico}
                        </span>
                      </p>

                      <p className="mt-3.5 inline-flex w-fit items-center gap-2 bg-nieve px-3 py-1.5 text-sm font-bold">
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 bg-rojo"
                        />
                        {p.entrega}
                      </p>

                      <ul className="mt-6 flex-1 space-y-2.5 border-t border-filete pt-6">
                        {p.incluye.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-sm leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-rojo"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={whatsapp(
                          t.waPlan(p.name, s.card, precio(p.price)),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`barrido mt-7 inline-flex items-center justify-center px-5 py-3 text-[0.9375rem] font-bold tracking-tight transition-colors duration-300 hover:text-blanco ${
                          p.destacado
                            ? "bg-rojo text-blanco"
                            : "border border-filete-fuerte"
                        }`}
                      >
                        {t.preguntarPorEste}
                      </a>
                    </div>
                  ))}
                </div>

                <p className="mt-4 flex flex-wrap items-center gap-x-1.5 text-sm text-grafito">
                  <span>{t.desde}</span>
                  <Precio valor={desde(s)} className="cifra font-bold" />
                  <span>· {s.entrega}</span>
                </p>
              </div>
            </Revelar>
          ))}
        </div>

        {/* Condiciones. Va aquí y no en letra chica al final. */}
        <Revelar>
          {/* Sin divisorias: con gap-px las columnas 2 y 3 quedaban con el
              texto pegado a la línea. Aquí separa el aire, no un filete. */}
          <dl className="mt-16 grid gap-10 border-t-2 border-tinta pt-8 sm:grid-cols-3">
            {condiciones[lang].map((c) => (
              <div key={c.label}>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                  {c.label}
                </dt>
                <dd className="cifra mt-2 text-2xl font-extrabold tracking-tight">
                  {c.value}
                </dd>
                <dd className="mt-2 text-sm leading-relaxed text-grafito">
                  {c.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Revelar>
      </div>
    </section>
  );
}
