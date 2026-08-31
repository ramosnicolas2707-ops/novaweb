/**
 * Datos transversales del negocio.
 * Editar aquí cambia el sitio entero: metadatos, JSON-LD, footer y enlaces de contacto.
 */

export const site = {
  name: "Meridiano",
  legalName: "Meridiano Estudio",
  url: "https://meridiano-nrm4.vercel.app",
  domain: "meridiano-nrm4.vercel.app",
  tagline: "Desarrollo web y e-commerce para marcas de Latinoamérica",
  /** Una frase autocontenida, pensada para que un modelo de lenguaje la pueda citar entera. */
  claim:
    "Meridiano es un estudio de desarrollo web y software con sede en Bogotá, Colombia, que construye páginas web, tiendas online y menús digitales para negocios de Latinoamérica.",
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
  /** Países donde se atiende. Alimenta areaServed en el JSON-LD. */
  serviceArea: [
    "Colombia",
    "México",
    "Chile",
    "Perú",
    "Argentina",
    "Ecuador",
    "Costa Rica",
    "Panamá",
  ],
  timezone: "America/Bogota",
  currency: "COP",
  /** Horario de atención en formato schema.org */
  openingHours: "Mo-Fr 08:00-18:00",
  social: {
    github: "https://github.com/ramosnicolas2707-ops",
  },
} as const;

/** Condiciones comerciales. Se muestran tal cual en el sitio, sin letra chica. */
export const conditions = [
  {
    label: "Anticipo",
    value: "50%",
    detail:
      "Todo proyecto arranca con el 50% por adelantado. El saldo se paga contra entrega, antes de publicar.",
  },
  {
    label: "Rondas de revisión",
    value: "2 incluidas",
    detail:
      "Cada proyecto incluye dos rondas de ajustes sobre el diseño entregado. Las rondas adicionales se facturan a $60.000 la hora.",
  },
  {
    label: "Moneda",
    value: "COP",
    detail:
      "Todos los precios están en pesos colombianos. Se factura desde Colombia; para clientes fuera del país se calcula el equivalente en dólares a la TRM del día.",
  },
] as const;

export const whatsappLink = (mensaje: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const nav = [
  { href: "/servicios/paginas-web", label: "Páginas web" },
  { href: "/servicios/ecommerce", label: "E-commerce" },
  { href: "/servicios/software-restaurantes", label: "Restaurantes" },
  { href: "/servicios/mantenimiento", label: "Mantenimiento" },
  { href: "/proyectos", label: "Proyectos" },
] as const;
