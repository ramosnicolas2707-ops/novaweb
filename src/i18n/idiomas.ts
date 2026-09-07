/**
 * Los dos idiomas del sitio.
 *
 * El español manda: es el mercado principal y es lo que ve quien llega sin
 * elegir nada. `/` redirige a `/es` (ver next.config.ts).
 *
 * Cada idioma tiene su propia dirección — /es/... y /en/... — y no un
 * interruptor que cambia el texto en la misma página. Es más trabajo, pero es
 * la única forma de que Google indexe las dos versiones por separado y de que
 * alguien pueda compartir un enlace en el idioma en que lo leyó.
 */

export const IDIOMAS = ["es", "en"] as const;

export type Idioma = (typeof IDIOMAS)[number];

export const IDIOMA_POR_DEFECTO: Idioma = "es";

/** El código completo, para el atributo lang y para los metadatos. */
export const LOCALE: Record<Idioma, string> = {
  es: "es-CO",
  en: "en-US",
};

/** Cómo se llama cada idioma en su propio idioma. Nunca traducido. */
export const NOMBRE_IDIOMA: Record<Idioma, string> = {
  es: "Español",
  en: "English",
};

export const esIdioma = (v: string): v is Idioma =>
  (IDIOMAS as readonly string[]).includes(v);

/** Genera las rutas de los dos idiomas. Lo usa generateStaticParams. */
export const paramsDeIdioma = () => IDIOMAS.map((lang) => ({ lang }));
