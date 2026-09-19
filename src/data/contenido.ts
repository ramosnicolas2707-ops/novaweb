import type { Idioma } from "@/i18n/idiomas";
import type { Servicio, Proyecto, Faq } from "./tipos";
import { servicios as serviciosEs } from "./servicios.es";
import { servicios as serviciosEn } from "./servicios.en";
import { proyectos as proyectosEs } from "./proyectos.es";
import { proyectos as proyectosEn } from "./proyectos.en";
import { faqHome as faqHomeEs } from "./faq.es";
import { faqHome as faqHomeEn } from "./faq.en";

/**
 * El único sitio desde donde se pide contenido.
 *
 * Ningún componente importa servicios.es ni servicios.en directamente: piden
 * `servicios(lang)` y se olvidan del idioma. Así, si mañana entra un tercer
 * idioma, se agrega aquí y en ningún otro lado.
 *
 * Los slugs son los mismos en los dos idiomas a propósito. Traducirlos daría
 * direcciones más bonitas en inglés, pero duplicaría el árbol de rutas y
 * multiplicaría las redirecciones a mantener. Vale la pena cuando el tráfico
 * en inglés lo justifique, hoy no.
 */

const SERVICIOS: Record<Idioma, Servicio[]> = {
  es: serviciosEs,
  en: serviciosEn,
};

const PROYECTOS: Record<Idioma, Proyecto[]> = {
  es: proyectosEs,
  en: proyectosEn,
};

/** Las preguntas del home. Las de cada servicio viven dentro del servicio. */
const FAQ_HOME: Record<Idioma, Faq[]> = {
  es: faqHomeEs,
  en: faqHomeEn,
};

export const servicios = (lang: Idioma) => SERVICIOS[lang];

export const proyectos = (lang: Idioma) => PROYECTOS[lang];

export const faqHome = (lang: Idioma) => FAQ_HOME[lang];

export const servicioPorSlug = (lang: Idioma, slug: string) =>
  SERVICIOS[lang].find((s) => s.slug === slug);

/** Los slugs no cambian entre idiomas, así que el español alcanza. */
export const slugsServicios = serviciosEs.map((s) => s.slug);

/** El precio más bajo de un servicio. Alimenta los "desde $X" del home. */
export const desde = (s: Servicio) => Math.min(...s.planes.map((p) => p.price));

/**
 * Una dirección interna con su idioma delante.
 *
 * En los datos los enlaces se escriben sin idioma ("/servicios/rediseno")
 * para no repetirlos dos veces. Esto les pone el prefijo al pintarlos.
 */
export const ruta = (lang: Idioma, path = "/") =>
  path === "/" ? `/${lang}` : `/${lang}${path}`;
