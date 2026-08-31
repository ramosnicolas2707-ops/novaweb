import type { Metadata } from "next";
import { site } from "@/data/site";
import type { Faq, Service } from "@/data/services";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

type PageMeta = {
  title: string;
  description: string;
  /** Ruta relativa, con barra inicial. Se usa para la canónica y para el OG. */
  path: string;
  keywords?: readonly string[];
};

/**
 * Construye los metadatos de una página. El title lleva sufijo de marca salvo en
 * el home, donde el título ya empieza por el nombre.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;

  return {
    // absolute evita que la plantilla del layout vuelva a añadir la marca.
    title: { absolute: fullTitle },
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_CO",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/* ---------------------------------------------------------------------------
 * JSON-LD
 * ------------------------------------------------------------------------- */

const ORG_ID = `${site.url}/#organizacion`;
const SITE_ID = `${site.url}/#sitio`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.claim,
    slogan: site.tagline,
    email: site.contact.email,
    telephone: site.contact.phone,
    priceRange: "$$$",
    currenciesAccepted: "COP",
    paymentAccepted: "Transferencia bancaria, tarjeta de crédito",
    openingHours: site.openingHours,
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
    areaServed: site.serviceArea.map((name) => ({ "@type": "Country", name })),
    knowsLanguage: ["es", "en"],
    sameAs: Object.values(site.social),
    makesOffer: [
      {
        "@type": "Offer",
        name: "Desarrollo de páginas web",
        priceCurrency: "COP",
        price: 900000,
        url: absoluteUrl("/servicios/paginas-web"),
      },
      {
        "@type": "Offer",
        name: "Desarrollo de tiendas online",
        priceCurrency: "COP",
        price: 2800000,
        url: absoluteUrl("/servicios/ecommerce"),
      },
      {
        "@type": "Offer",
        name: "Menú digital y menú con realidad aumentada",
        priceCurrency: "COP",
        price: 700000,
        url: absoluteUrl("/servicios/software-restaurantes"),
      },
      {
        "@type": "Offer",
        name: "Mantenimiento web mensual",
        priceCurrency: "COP",
        price: 70000,
        url: absoluteUrl("/servicios/mantenimiento"),
      },
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "es",
    publisher: { "@id": ORG_ID },
  };
}

export function serviceLd(service: Service) {
  const prices = service.plans.map((p) => p.price);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/servicios/${service.slug}`)}#servicio`,
    name: service.h1,
    description: service.summary,
    serviceType: service.nav,
    url: absoluteUrl(`/servicios/${service.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: site.serviceArea.map((name) => ({ "@type": "Country", name })),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: service.plans.length,
      offers: service.plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.scope,
        price: plan.price,
        priceCurrency: "COP",
        availability: "https://schema.org/InStock",
        url: absoluteUrl(`/servicios/${service.slug}`),
        ...(plan.billing === "mes"
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: plan.price,
                priceCurrency: "COP",
                billingIncrement: 1,
                unitCode: "MON",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitCode: "MON",
                },
              },
            }
          : {}),
      })),
    },
  };
}

export function faqLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
