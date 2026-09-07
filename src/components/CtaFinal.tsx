import { site, whatsapp } from "@/data/site";
import type { Textos } from "@/i18n/textos";

/**
 * Cierre. Bloque negro, una pregunta y un botón.
 *
 * El negro a pantalla completa frena el scroll: después de haber pasado por
 * blanco todo el camino, este bloque se siente como el final de algo.
 */
export default function CtaFinal({
  t,
  titulo,
  bajada,
  mensaje,
}: {
  t: Textos;
  titulo?: string;
  bajada?: string;
  mensaje?: string;
}) {
  return (
    <section className="bg-tinta text-blanco">
      <div className="contenedor py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            {t.siguientePaso}
          </p>
          <h2 className="text-[clamp(2.25rem,6vw,3.75rem)]">
            {titulo ?? t.ctaTitulo}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            {bajada ?? t.ctaBajada}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={whatsapp(mensaje ?? t.waCotizar)}
              target="_blank"
              rel="noopener noreferrer"
              className="barrido inline-flex bg-naranja px-7 py-4 font-bold tracking-tight text-tinta transition-colors duration-300 [--color-barrido:var(--color-blanco)]"
            >
              {t.escribemePorWhatsapp}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-[0.9375rem] text-white/70 underline decoration-white/30 decoration-2 underline-offset-4 transition-colors hover:text-blanco"
            >
              {t.oPorCorreo}
            </a>
          </div>

          {/* Dos husos horarios: buena parte de quien escribe en inglés está
              en Estados Unidos, y "8 a 6 hora de Bogotá" no le dice nada a
              alguien en Miami o en Los Ángeles. */}
          <div className="mt-8 space-y-1.5 text-sm text-white/45">
            <p>{site.contact.whatsappDisplay}</p>
            <p>{t.horarioBogota}</p>
            <p>{t.horarioEstadosUnidos}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
