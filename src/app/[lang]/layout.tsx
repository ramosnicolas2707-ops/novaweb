import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo } from "next/font/google";
import { site, claim, INDEXAR, ANALYTICS_ID } from "@/data/site";
import { servicios } from "@/data/contenido";
import { negocioJsonLd, sitioJsonLd } from "@/lib/seo";
import {
  LOCALE,
  esIdioma,
  paramsDeIdioma,
  type Idioma,
} from "@/i18n/idiomas";
import { textos } from "@/i18n/textos";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";

/**
 * Este es el layout raíz del sitio: no hay app/layout.tsx.
 *
 * Tiene que ser así porque el <html lang="…"> depende del idioma, y un layout
 * en la raíz no recibe el parámetro. Al colgar todo de [lang], el atributo se
 * escribe bien y los lectores de pantalla pronuncian cada versión en su
 * idioma. La dirección "/" pelada redirige a "/es" desde next.config.ts.
 */

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente",
  weight: ["400", "600", "700", "800"],
});

/** Las dos versiones se generan al compilar. Cualquier otro idioma es 404. */
export const generateStaticParams = paramsDeIdioma;
export const dynamicParams = false;

/** La tasa del dólar se refresca una vez al día (ver src/lib/tasa.ts). */
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: bruto } = await params;
  const lang: Idioma = esIdioma(bruto) ? bruto : "es";
  const t = textos(lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default:
        lang === "es"
          ? `${site.name} · Páginas web y tiendas online en Colombia`
          : `${site.name} · Websites and online stores, built in Colombia`,
      template: `%s · ${site.name}`,
    },
    description: claim[lang],
    applicationName: site.name,
    authors: [{ name: site.founder.name }],
    creator: site.founder.name,
    openGraph: {
      type: "website",
      locale: LOCALE[lang].replace("-", "_"),
      siteName: site.name,
      url: new URL(`/${lang}`, site.url).toString(),
    },
    // INDEXAR vive en src/data/site.ts. Está en false mientras el nombre sea
    // provisional: el sitio se ve y se comparte igual, pero no se indexa.
    robots: {
      index: INDEXAR,
      follow: INDEXAR,
      googleBot: {
        index: INDEXAR,
        follow: INDEXAR,
        "max-image-preview": "large",
      },
    },
    other: { "format-detection": "telephone=no" },
  };
}

export default async function LayoutIdioma({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: bruto } = await params;
  if (!esIdioma(bruto)) notFound();
  const lang: Idioma = bruto;
  const t = textos(lang);

  // La navegación sale de los servicios más la página de trabajo real, así
  // que agregar un servicio lo mete en el menú sin tocar nada más.
  const enlaces = [
    ...servicios(lang).map((s) => ({
      href: `/servicios/${s.slug}`,
      label: s.nav,
    })),
    { href: "/proyectos", label: t.trabajoReal },
  ];

  return (
    /*
      suppressHydrationWarning va solo en este <html> y solo por un atributo:
      el script de más abajo escribe data-precios antes de que React hidrate,
      así que el servidor manda el <html> sin ese atributo y el cliente ya lo
      tiene puesto. React lo reportaba como desajuste en cada carga. No apaga
      los avisos del resto del árbol: React solo ignora este nodo.
    */
    <html
      lang={LOCALE[lang]}
      className={archivo.variable}
      suppressHydrationWarning
    >
      <head>
        {/*
          Aplica la moneda guardada ANTES de pintar. Sin esto, quien eligió
          dólares vería los pesos durante un cuadro y luego el salto. Va
          inline y sin diferir a propósito: tiene que correr antes que nada.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var m=localStorage.getItem("moneda");if(m==="usd"||m==="cop"){document.documentElement.dataset.precios=m}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <JsonLd data={negocioJsonLd(lang)} />
        <JsonLd data={sitioJsonLd(lang)} />

        {/* Primer tabulador de la página: saltar el menú e ir al contenido. */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-tinta focus:px-5 focus:py-3 focus:font-bold focus:text-blanco"
        >
          {t.saltarAlContenido}
        </a>

        {/*
          A Nav le llega un objeto recortado, no `t` entero. Nav corre en el
          cliente y `t` tiene funciones: React no las puede serializar y el
          build falla con "Functions cannot be passed directly to Client
          Components". Solo cadenas cruzan la frontera.
        */}
        <Nav
          lang={lang}
          enlaces={enlaces}
          t={{
            navPrincipal: t.navPrincipal,
            moneda: t.moneda,
            idioma: t.idioma,
            escribeme: t.escribeme,
            escribemePorWhatsapp: t.escribemePorWhatsapp,
            waGeneral: t.waGeneral,
            abrirMenu: t.abrirMenu,
            cerrarMenu: t.cerrarMenu,
          }}
        />
        <main id="contenido">{children}</main>
        <Footer lang={lang} t={t} enlaces={enlaces} />

        {/*
          El contador de visitas, de último y solo en producción.

          Va al final del <body> a propósito: el script se carga después de
          que la página ya se pintó, así que medir no le quita velocidad a
          nadie. Y va envuelto en la comprobación de entorno para que las
          recargas de `npm run dev` no se cuenten como visitas reales.
        */}
        {ANALYTICS_ID && process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
