import type { Idioma } from "@/i18n/idiomas";

/**
 * Datos del negocio.
 *
 * Aquí va solo lo que NO se traduce: el número de WhatsApp, el correo, la
 * ciudad, la moneda. Lo que sí se traduce vive en /src/i18n/textos.ts y en
 * /src/data/*.es.ts y *.en.ts.
 *
 * NOMBRE PENDIENTE ────────────────────────────────────────────────────────
 * "Meridiano" es provisional. Cuando definas el nombre real, cambia `name`,
 * `legalName`, `url` y `domain` aquí y el sitio entero se actualiza solo, en
 * los dos idiomas. No hay ningún otro archivo con el nombre escrito a mano.
 * ─────────────────────────────────────────────────────────────────────────
 */
/**
 * ¿Puede Google registrar este sitio?
 *
 * En `false` mientras el nombre siga siendo provisional. El sitio funciona
 * igual y el enlace se puede abrir y compartir: lo único que cambia es que se
 * le pide a los buscadores que no lo indexen, para no quemar "Meridiano" ni
 * este dominio antes de que la marca esté decidida. Si Google indexa un
 * nombre y después lo cambias, cambias también el dominio y ese trabajo se
 * pierde.
 *
 * PARA PUBLICAR DE VERDAD: pon esto en `true` y vuelve a desplegar. Eso es
 * todo — desde aquí se alimentan el <meta robots> de todas las páginas y el
 * archivo robots.txt.
 */
export const INDEXAR = false;

export const site = {
  name: "Meridiano",
  legalName: "Meridiano Estudio",
  url: "https://meridiano-nrm4.vercel.app",
  domain: "meridiano-nrm4.vercel.app",

  founder: {
    name: "Nicolás Ramos Murcia",
    role: "Desarrollador y fundador",
  },

  contact: {
    email: "ramos.nicolas2707@gmail.com",
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
  es: "Meridiano es un estudio de desarrollo web en Bogotá, Colombia, que hace páginas web, tiendas online y rediseños para negocios de Colombia, Latinoamérica y Estados Unidos, con precios publicados desde $900.000 COP.",
  en: "Meridiano is a web development studio in Bogotá, Colombia, building websites, online stores and redesigns for businesses in Colombia, Latin America and the United States, with prices published from COP $900,000.",
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
