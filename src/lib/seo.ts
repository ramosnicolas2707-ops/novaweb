import type { Metadata } from "next";
import { site, claim } from "@/data/site";
import type { Servicio } from "@/data/tipos";
import { IDIOMAS, LOCALE, type Idioma } from "@/i18n/idiomas";
import { precioPlano } from "./format";

/**
 * Metadatos y datos estructurados.
 *
 * El SEO de este sitio no es un plugin: son estas cosas hechas a mano.
 * 1. Un título y una descripción propios por página y por idioma.
 * 2. hreflang: le dice a Google que /es y /en son la misma página en dos
 *    idiomas y no contenido duplicado. Sin esto, tener el sitio en dos
 *    idiomas resta en vez de sumar.
 * 3. JSON-LD que describe el negocio, sus servicios y sus precios en un
 *    formato que Google y los buscadores con IA pueden citar.
 */

const URL_BASE = site.url;

const absoluta = (path: string) => new URL(path, URL_BASE).toString();

/**
 * Las direcciones equivalentes de una misma página en todos los idiomas.
 * `path` va sin idioma: "/proyectos", "/servicios/rediseno", "/".
 */
const alternativas = (path: string) => {
  const languages: Record<string, string> = {};
  for (const l of IDIOMAS) {
    languages[LOCALE[l]] = absoluta(path === "/" ? `/${l}` : `/${l}${path}`);
  }
  // x-default es a dónde manda Google a quien no encaja en ningún idioma.
  languages["x-default"] = absoluta("/es");
  return languages;
};

export function meta({
  lang,
  title,
  description,
  path = "/",
}: {
  lang: Idioma;
  title: string;
  description: string;
  /** Sin el idioma delante: "/contacto", no "/es/contacto". */
  path?: string;
}): Metadata {
  const url = absoluta(path === "/" ? `/${lang}` : `/${lang}${path}`);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternativas(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: LOCALE[lang].replace("-", "_"),
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** La ficha del negocio. Va en el layout, o sea en todas las páginas. */
export function negocioJsonLd(lang: Idioma) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${URL_BASE}/#negocio`,
    name: site.name,
    legalName: site.legalName,
    description: claim[lang],
    url: absoluta(`/${lang}`),
    email: site.contact.email,
    telephone: site.contact.phone,
    priceRange: "$$",
    currenciesAccepted: "COP, USD",
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.role,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    areaServed: site.serviceArea.map((pais) => ({
      "@type": "Country",
      name: pais,
    })),
    openingHours: site.openingHours,
    sameAs: Object.values(site.social),
  };
}

/**
 * La ficha del sitio como tal, distinta de la del negocio.
 *
 * Son dos cosas separadas en schema.org y conviene que lo sigan siendo: el
 * negocio es NovaWeb —que existiría igual sin sitio— y el WebSite es este
 * sitio, que lo publica. Atarlos con `publisher` apuntando al mismo @id le
 * dice a Google que las dos fichas hablan de la misma empresa en vez de
 * tratarlas como dos entidades sueltas que casualmente se llaman igual.
 */
export function sitioJsonLd(lang: Idioma) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${URL_BASE}/#sitio`,
    name: site.name,
    url: absoluta(`/${lang}`),
    description: claim[lang],
    inLanguage: LOCALE[lang],
    publisher: { "@id": `${URL_BASE}/#negocio` },
  };
}

/** Un servicio con sus planes, para que Google muestre el precio. */
export function servicioJsonLd(lang: Idioma, s: Servicio) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    description: s.resumen,
    serviceType: s.nav,
    provider: { "@id": `${URL_BASE}/#negocio` },
    areaServed: site.serviceArea.map((pais) => ({
      "@type": "Country",
      name: pais,
    })),
    offers: s.planes.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: precioPlano(p.price),
      // Los precios se declaran en pesos, que es la moneda en la que se
      // guardan. El dólar es una conversión de cara al visitante.
      priceCurrency: site.currency,
      description: p.paraQuien,
      url: absoluta(`/${lang}/servicios/${s.slug}`),
    })),
  };
}

/**
 * Preguntas frecuentes.
 * Es lo que hace que Google muestre las respuestas desplegables en los
 * resultados, y de donde los buscadores con IA sacan la cita.
 */
export function faqJsonLd(preguntas: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Migas de pan. Google las usa para dibujar la ruta bajo el título. */
export function migasJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluta(item.path),
    })),
  };
}
