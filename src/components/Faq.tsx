import Link from "next/link";
import type { Faq as TipoFaq } from "@/data/tipos";
import type { Idioma } from "@/i18n/idiomas";

/**
 * Preguntas frecuentes.
 *
 * <details> nativo: se abre y cierra sin una línea de JavaScript, funciona con
 * teclado y lector de pantalla, y Google lo lee aunque esté cerrado — que es
 * justo el punto de tener FAQ.
 *
 * Una respuesta puede llevar un enlace al final cuando la respuesta completa
 * vive en otra página. Es mejor mandar a la página que resumirla mal aquí.
 */
export default function Faq({
  lang,
  preguntas,
}: {
  lang: Idioma;
  preguntas: readonly TipoFaq[];
}) {
  return (
    <div className="border-t border-filete">
      {preguntas.map((f) => (
        <details key={f.q} className="group border-b border-filete">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-bold tracking-tight [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-2xl font-normal leading-none text-rojo transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="max-w-2xl pb-7">
            <p className="leading-relaxed text-grafito">{f.a}</p>

            {f.ir && (
              <Link
                href={`/${lang}${f.ir.href}`}
                className="mt-4 inline-flex items-center gap-2 font-bold tracking-tight text-rojo underline decoration-2 underline-offset-4 transition-colors hover:text-tinta"
              >
                {f.ir.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
