"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IDIOMAS, NOMBRE_IDIOMA, type Idioma } from "@/i18n/idiomas";

/**
 * El interruptor de idioma.
 *
 * Son enlaces de verdad, no botones: cada idioma tiene su propia dirección,
 * así que cambiar de idioma es navegar. Eso hace que Google los vea, que
 * funcione con clic derecho → abrir en pestaña nueva, y que se pueda
 * compartir el enlace en el idioma en que se leyó.
 *
 * Mantiene la página: si estás en /es/servicios/rediseno, el botón EN te
 * deja en /en/servicios/rediseno, no en la portada. Perder el lugar al
 * cambiar de idioma es una de las cosas que más molesta de los sitios
 * bilingües.
 */
export default function SelectorIdioma({
  lang,
  etiqueta = "Idioma",
}: {
  lang: Idioma;
  etiqueta?: string;
}) {
  const ruta = usePathname();

  /** La misma página, en el otro idioma. */
  const equivalente = (destino: Idioma) => {
    // usePathname siempre trae /<idioma>/... porque toda la app vive dentro
    // del segmento [lang]. Se cambia el primer trozo y ya.
    const trozos = ruta.split("/").filter(Boolean);
    trozos[0] = destino;
    return `/${trozos.join("/")}`;
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className="sr-only">{etiqueta}</span>
      {IDIOMAS.map((l) => {
        const activo = l === lang;
        return (
          <Link
            key={l}
            href={equivalente(l)}
            hrefLang={l}
            aria-current={activo ? "true" : undefined}
            title={NOMBRE_IDIOMA[l]}
            className={`px-2 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
              activo ? "bg-tinta text-blanco" : "text-grafito hover:text-tinta"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
