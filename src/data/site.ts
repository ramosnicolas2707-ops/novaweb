import type { Idioma } from "@/i18n/idiomas";

/**
 * Datos del negocio.
 *
 * Aquí va solo lo que NO se traduce: el número de WhatsApp, el correo, la
 * ciudad, la moneda. Lo que sí se traduce vive en /src/i18n/textos.ts y en
 * /src/data/*.es.ts y *.en.ts.
 *
 * EL NOMBRE ─────────────────────────────────────────────────────────────────
 * "NovaWeb" se decidió el 9 de septiembre de 2026 y reemplazó a
 * "Meridiano", que era provisional. Sale de `name` y desde aquí se propaga
 * a todo el sitio en los dos idiomas: títulos, datos estructurados,
 * imágenes de compartir y pie de página.
 *
 * El logotipo NO sale de aquí: cómo se escribe la marca —NOVA en negrita y
 * WEB normal— vive en src/components/Logo.tsx, porque es dibujo y no dato.
 *
 * `url` y `domain` son el dominio propio, comprado el 20 de septiembre de
 * 2026. Sin `www`: el apex es la dirección oficial. La vieja de Vercel
 * sigue funcionando y lleva aquí.
 * ─────────────────────────────────────────────────────────────────────────
 */
/**
 * ¿Puede Google registrar este sitio?
 *
 * En `true` desde el 20 de septiembre de 2026: el dominio propio responde,
 * el certificado es válido y el DNS ya propagó, así que los buscadores
 * tienen a dónde entrar.
 *
 * Desde aquí se alimentan el <meta robots> de todas las páginas y el
 * archivo robots.txt. Ponerlo en `false` vuelve a cerrar la puerta, que es
 * lo que hay que hacer si algún día se cambia de dirección otra vez.
 */
export const INDEXAR = true;

/**
 * El contador de visitas (Google Analytics).
 *
 * Este código NO es secreto: viaja en el HTML de todas las páginas y
 * cualquiera puede verlo con clic derecho. Por eso vive aquí y no en una
 * variable de entorno, igual que el resto de los datos del negocio.
 *
 * Solo se carga en producción. En desarrollo estorba: cada recarga mientras
 * programas contaría como una visita real y ensuciaría los reportes.
 *
 * Dejarlo en cadena vacía apaga la medición sin tener que tocar el layout.
 */
export const ANALYTICS_ID = "G-9KZ2BE5W9J";

export const site = {
  name: "NovaWeb",
  legalName: "NovaWeb Estudio",
  url: "https://estudionovaweb.com",
  domain: "estudionovaweb.com",

  founder: {
    name: "Nicolás Ramos Murcia",
    role: "Desarrollador y fundador",
  },

  contact: {
    /** El de la empresa, no el personal: sale en el pie, en contacto y en
     *  los datos estructurados que lee Google. */
    email: "this.isnovaweb@gmail.com",
    /** Formato internacional sin signos, para el enlace wa.me */
    whatsapp: "573123445330",
    whatsappDisplay: "+57 312 344 5330",
    phone: "+573123445330",
  },

  address: {
    city: "Bogotá",
    region: "Cundinamarca",
    country: "Colombia",
    countryCode: "CO",
  },

  serviceArea: [
    "Colombia",
    "México",
    "Chile",
    "Perú",
    "Ecuador",
    "Argentina",
    "United States",
  ],
  timezone: "America/Bogota",
  /** La moneda en la que se guardan todos los precios. El dólar se calcula. */
  currency: "COP",
  openingHours: "Mo-Fr 08:00-18:00",

  social: {
    github: "https://github.com/ramosnicolas2707-ops",
  },
} as const;

/**
 * La frase autocontenida del negocio, por idioma.
 * Tiene que poder citarse entera y seguir siendo cierta: es lo que copian
 * Google y los buscadores con IA.
 */
export const claim: Record<Idioma, string> = {
  es: "NovaWeb es un estudio de desarrollo web en Bogotá, Colombia, que hace páginas web, tiendas online y rediseños para negocios de Colombia, Latinoamérica y Estados Unidos, con precios publicados desde $900.000 COP.",
  en: "NovaWeb is a web development studio in Bogotá, Colombia, building websites, online stores and redesigns for businesses in Colombia, Latin America and the United States, with prices published from COP $900,000.",
};

/** Condiciones comerciales. Se muestran tal cual, sin letra chica. */
export const condiciones: Record<
  Idioma,
  readonly { label: string; value: string; detail: string }[]
> = {
  es: [
    {
      label: "Para arrancar",
      value: "50%",
      detail:
        "La otra mitad la pagas cuando el sitio está listo, antes de publicarlo.",
    },
    {
      label: "Cambios incluidos",
      value: "2 rondas",
      detail:
        "Dos rondas de ajustes sobre el diseño. Las de más se cobran a $60.000 la hora.",
    },
    {
      label: "Puedes pagar en",
      value: "COP o USD",
      detail:
        "Los precios están en pesos colombianos y el equivalente en dólares se calcula a la tasa del día. Eliges en qué moneda facturamos.",
    },
  ],
  en: [
    {
      label: "To start",
      value: "50%",
      detail:
        "You pay the other half when the site is ready, before it goes live.",
    },
    {
      label: "Changes included",
      value: "2 rounds",
      detail:
        "Two rounds of adjustments to the design. Extra rounds are billed at COP $60,000 an hour.",
    },
    {
      label: "You can pay in",
      value: "COP or USD",
      detail:
        "Prices are held in Colombian pesos and the dollar equivalent is calculated at the day's rate. You choose which currency we invoice in.",
    },
  ],
};

/** Arma el enlace de WhatsApp con el mensaje ya escrito. */
export const whatsapp = (mensaje: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(mensaje)}`;
