import Image from "next/image";
import { proyectos as obtenerProyectos } from "@/data/contenido";
import type { Proyecto } from "@/data/tipos";
import type { Idioma } from "@/i18n/idiomas";
import type { Textos } from "@/i18n/textos";
import { TituloSeccion } from "./ui";
import Revelar from "./Revelar";

/**
 * Trabajo real.
 *
 * Cada proyecto se muestra con capturas de verdad del sitio en vivo, no con
 * mockups. La primera captura va grande porque es la que convence; las demás
 * van en fila abajo, cada una con su pie explicando qué está viendo.
 */

function Ficha({
  p,
  indice,
  t,
}: {
  p: Proyecto;
  indice: number;
  t: Textos;
}) {
  const [principal, ...resto] = p.capturas;

  return (
    <article className="border-t border-filete pt-12 md:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        {/* Ficha del proyecto */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-rojo">
            {String(indice + 1).padStart(2, "0")} · {p.servicioLabel}
          </p>

          <h3 className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)]">
            {p.nombre}
          </h3>

          <p className="mt-2 text-sm text-grafito">
            {p.sector} · {p.ciudad} · {p.anio}
          </p>

          <p className="mt-6 text-lg leading-relaxed">{p.resumen}</p>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                {t.elProblema}
              </h4>
              <p className="mt-2 leading-relaxed text-grafito">{p.problema}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-grafito">
                {t.queLeHice}
              </h4>
              <p className="mt-2 leading-relaxed">{p.solucion}</p>
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-filete pt-6">
            {p.datos.map((d) => (
              <div key={d.label}>
                <dt className="text-[0.6875rem] font-bold uppercase leading-tight tracking-[0.1em] text-grafito">
                  {d.label}
                </dt>
                <dd className="cifra mt-1.5 font-extrabold tracking-tight">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 flex flex-wrap gap-2">
            {p.stack.map((tec) => (
              <span
                key={tec}
                className="bg-nieve px-3 py-1.5 text-xs font-semibold text-grafito"
              >
                {tec}
              </span>
            ))}
          </p>

          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-bold tracking-tight text-rojo underline decoration-2 underline-offset-4 hover:text-tinta"
            >
              {t.verSitioEnVivo}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>

        {/* Capturas */}
        <div className="space-y-4">
          <figure>
            <Image
              src={principal.src}
              alt={principal.alt}
              width={1568}
              height={746}
              // Es lo primero que se ve del proyecto: vale la pena la prioridad.
              priority={indice === 0}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="w-full border border-filete"
            />
            <figcaption className="mt-3 text-sm text-grafito">
              {principal.pie}
            </figcaption>
          </figure>

          {resto.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {resto.map((c) => (
                <figure key={c.src}>
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={1568}
                    height={746}
                    loading="lazy"
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="w-full border border-filete"
                  />
                  <figcaption className="mt-2.5 text-sm text-grafito">
                    {c.pie}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Proyectos({
  lang,
  t,
  antetitulo,
  titulo,
  bajada,
}: {
  lang: Idioma;
  t: Textos;
  antetitulo?: string;
  titulo?: string;
  bajada?: string;
}) {
  const lista = obtenerProyectos(lang);

  return (
    <section id="proyectos" className="seccion">
      <div className="contenedor">
        <Revelar>
          <TituloSeccion
            antetitulo={antetitulo ?? t.proyectosAntetitulo}
            titulo={titulo ?? t.proyectosTitulo}
            bajada={bajada ?? t.proyectosBajada}
          />
        </Revelar>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {lista.map((p, i) => (
            <Revelar key={p.slug}>
              <Ficha p={p} indice={i} t={t} />
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
