import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { slugsServicios } from "@/data/contenido";
import { IDIOMAS, LOCALE } from "@/i18n/idiomas";

/**
 * Mapa del sitio, con las dos versiones de cada página.
 *
 * Cada entrada lleva sus `alternates.languages`: es la forma de decirle a
 * Google que /es/contacto y /en/contacto son la misma página en dos idiomas y
 * no contenido duplicado. Sin eso, publicar en dos idiomas resta.
 *
 * Se arma solo desde los datos: si agregas un servicio, aparece aquí sin que
 * toques este archivo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date();
  const url = (path: string) => new URL(path, site.url).toString();

  /** Las rutas del sitio, sin el idioma delante. */
  const rutas: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    ...slugsServicios.map((slug) => ({
      path: `/servicios/${slug}`,
      priority: 0.9,
    })),
    { path: "/proyectos", priority: 0.8 },
    { path: "/contacto", priority: 0.7 },
  ];

  const conIdioma = (path: string, lang: string) =>
    path === "/" ? `/${lang}` : `/${lang}${path}`;

  return rutas.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(
      IDIOMAS.map((l) => [LOCALE[l], url(conIdioma(path, l))]),
    );

    return IDIOMAS.map((lang) => ({
      url: url(conIdioma(path, lang)),
      lastModified: hoy,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
