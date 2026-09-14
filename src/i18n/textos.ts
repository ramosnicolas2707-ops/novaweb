import type { Idioma } from "./idiomas";

/**
 * Los textos de la interfaz: títulos de sección, botones, etiquetas.
 *
 * Lo que NO está aquí es el contenido —servicios, planes, proyectos, FAQ—:
 * eso vive en /src/data/*.es.ts y *.en.ts, porque es largo y se edita solo.
 * Aquí está lo corto y lo repetido.
 *
 * El tipo Textos se deriva del español, así que si el inglés se olvida de una
 * clave la compilación falla. No se puede publicar media traducción.
 */

const es = {
  /* ── Chrome ────────────────────────────────────────────────────────── */
  saltarAlContenido: "Saltar al contenido",
  abrirMenu: "Abrir menú",
  cerrarMenu: "Cerrar menú",
  escribeme: "Escríbenos",
  escribemePorWhatsapp: "Escríbenos por WhatsApp",
  cotizarPorWhatsapp: "Cotizar por WhatsApp",
  verPrecios: "Ver precios",
  moneda: "Moneda",
  idioma: "Idioma",
  inicio: "Inicio",
  ruta: "Ruta",
  navPrincipal: "Principal",
  trabajoReal: "Trabajo real",
  contacto: "Contacto",

  /* ── Hero ──────────────────────────────────────────────────────────── */
  heroBadge: "Bogotá · Trabajamos para todo LATAM",
  heroPromesa: "Te hacemos la página web que tu negocio necesita para vender.",
  heroBajada: "Páginas web, tiendas online y rediseños.",
  heroRespuesta: "Te respondemos el mismo día.",

  /* ── Home ──────────────────────────────────────────────────────────── */
  queHago: "Qué hacemos",
  queHagoTitulo: "Cuatro cosas, bien hechas",
  queHagoBajada: "No hacemos apps, ni logos, ni redes sociales. Hacemos esto.",
  servicio: "Servicio",
  desde: "desde",

  /* ── Proyectos ─────────────────────────────────────────────────────── */
  proyectosAntetitulo: "Trabajo real",
  proyectosTitulo: "Sitios que están andando",
  proyectosBajada:
    "Capturas de los sitios en vivo. Nada de mockups bonitos que nunca existieron.",
  elProblema: "El problema",
  queLeHice: "Qué le hicimos",
  verSitioEnVivo: "Ver el sitio en vivo",
  proyectosH1: (n: number) => `${n} proyectos que puedes ir a mirar`,
  proyectosIntro:
    "Estas son capturas de los sitios funcionando, no maquetas. Si quieres ver alguno en vivo o hablar con el cliente, pídenoslo.",
  proyectosUnoAUno: "Uno por uno",
  proyectosAntesDespues: "Qué había antes y qué hay ahora",
  proyectosDetalle:
    "Para cada proyecto: cuál era el problema del negocio y qué construimos para resolverlo.",

  /* ── Precios ───────────────────────────────────────────────────────── */
  precios: "Precios",
  cuantoCuesta: "Cuánto cuesta",
  monedasNota:
    "Manejamos precios en pesos colombianos y en dólares. Si tu proyecto tiene una estructura complicada, te lo decimos antes de facturar.",
  verElDetalle: "Ver el detalle",
  elMasPedido: "El más pedido",
  preguntarPorEste: "Preguntar por este",
  losPlanes: "Los planes",
  planesBajada:
    "El 50% para arrancar, el resto contra entrega. Puedes ver los precios en pesos o en dólares.",
  pagoUnico: "pago único",
  alMes: "al mes",
  siNecesitasMas: "Si necesitas más",
  ojoConEsto: "Ojo con esto",

  /* ── Página de servicio ────────────────────────────────────────────── */
  entrega: "Entrega",
  paraQueNoPierdasTiempo: "Para que no pierdas tiempo",
  esEstoLoQueNecesitas: "¿Es esto lo que necesitas?",
  esEstoBajada:
    "Te ahorramos la llamada: aquí abajo está para qué sirve esto y, si lo tuyo es otra cosa, a dónde ir.",
  justoLoTuyo: "Esto es justo lo tuyo si…",
  otraCosaTitulo: "Te sirve más otra cosa si…",
  queIncluye: "Qué incluye",
  vaEnTodosLosPlanes: "Esto va en todos los planes",
  noVaIncluido: "Y esto no va incluido",
  preguntas: "Preguntas",
  loQueMasPreguntan: "Lo que más nos preguntan",
  arrancamosCon: (servicio: string) => `¿Arrancamos con ${servicio}?`,

  /* ── Cierre ────────────────────────────────────────────────────────── */
  siguientePaso: "Siguiente paso",
  ctaTitulo: "¿Hablamos de tu proyecto?",
  ctaBajada:
    "Nos cuentas qué vendes y a quién. Te decimos qué te sirve, cuánto cuesta y en cuánto lo tenemos. Si lo que necesitas no lo hacemos, también te lo decimos.",
  oPorCorreo: "O por correo",
  horarioBogota:
    "Lunes a viernes, 8:00 a 18:00 hora de Bogotá (UTC−5, sin cambio de hora).",
  horarioEstadosUnidos:
    "En Estados Unidos eso cae 8:00–18:00 en la costa este —9:00–19:00 durante su horario de verano— y 5:00–15:00 en la costa oeste.",

  /* ── Pie ───────────────────────────────────────────────────────────── */
  pieTagline: (ciudad: string) =>
    `Páginas web, tiendas online y rediseños. Desde ${ciudad}, para toda Latinoamérica.`,
  pieHorario: "Lunes a viernes, 8 a 6",
  pieHecho: "Hecho en Next.js. Sin plantillas.",
  dondeEstoy: "Dónde estamos",
  horario: "Horario",

  /* ── Contacto ──────────────────────────────────────────────────────── */
  contactoH1: "Escríbenos y hablamos",
  contactoIntro:
    "Cuéntanos qué vendes, a quién y qué necesitas. Con eso te decimos qué te sirve, cuánto cuesta y en cuánto lo tenemos listo. Si lo que necesitas no lo hacemos, te lo decimos de una y te ahorramos el tiempo.",
  comoTrabajo: "Cómo trabajamos",
  correo: "Correo",

  /* ── 404 ───────────────────────────────────────────────────────────── */
  noEncontradoTitulo: "Esta página no existe",
  noEncontradoTexto:
    "O la borramos, o el enlace venía mal escrito. Te dejamos por dónde seguir.",
  irAlInicio: "Ir al inicio",
  verElTrabajo: "Ver el trabajo",

  /* ── Mensajes de WhatsApp ──────────────────────────────────────────── */
  waGeneral: "Hola, vi tu página y quiero cotizar un proyecto.",
  waCotizar: "Hola, quiero cotizar un proyecto.",
  waServicio: (servicio: string) => `Hola, quiero cotizar: ${servicio}.`,
  waPlan: (plan: string, servicio: string, precio: string) =>
    `Hola, me interesa el plan ${plan} de ${servicio} (${precio}).`,
  waProyectos:
    "Hola, vi tus proyectos y quiero algo parecido para mi negocio.",
};

/**
 * El tipo sale del español. Sin "as const" a propósito: con él, cada clave
 * quedaba tipada como la cadena exacta en español y el inglés no compilaba.
 */
export type Textos = typeof es;

const en: Textos = {
  /* ── Chrome ────────────────────────────────────────────────────────── */
  saltarAlContenido: "Skip to content",
  abrirMenu: "Open menu",
  cerrarMenu: "Close menu",
  escribeme: "Message us",
  escribemePorWhatsapp: "Message us on WhatsApp",
  cotizarPorWhatsapp: "Get a quote on WhatsApp",
  verPrecios: "See prices",
  moneda: "Currency",
  idioma: "Language",
  inicio: "Home",
  ruta: "Breadcrumb",
  navPrincipal: "Main",
  trabajoReal: "Real work",
  contacto: "Contact",

  /* ── Hero ──────────────────────────────────────────────────────────── */
  heroBadge: "Bogotá · We work across LATAM and the US",
  heroPromesa: "We build the website your business needs to sell.",
  heroBajada: "Websites, online stores and redesigns.",
  heroRespuesta: "We answer the same day.",

  /* ── Home ──────────────────────────────────────────────────────────── */
  queHago: "What we do",
  queHagoTitulo: "Four things, done properly",
  queHagoBajada: "No apps, no logos, no social media. This is what we do.",
  servicio: "Service",
  desde: "from",

  /* ── Proyectos ─────────────────────────────────────────────────────── */
  proyectosAntetitulo: "Real work",
  proyectosTitulo: "Sites that are live right now",
  proyectosBajada:
    "Screenshots of the actual sites. No pretty mockups of things that never existed.",
  elProblema: "The problem",
  queLeHice: "What we built",
  verSitioEnVivo: "Visit the live site",
  proyectosH1: (n: number) => `${n} projects you can go and look at`,
  proyectosIntro:
    "These are screenshots of working sites, not mockups. If you want to see one live or talk to the client, just ask.",
  proyectosUnoAUno: "One by one",
  proyectosAntesDespues: "What was there before, and what's there now",
  proyectosDetalle:
    "For each project: what the business's problem was, and what we built to solve it.",

  /* ── Precios ───────────────────────────────────────────────────────── */
  precios: "Pricing",
  cuantoCuesta: "What it costs",
  monedasNota:
    "Prices are shown in Colombian pesos and US dollars. If your project has a complicated structure, we'll tell you before we invoice.",
  verElDetalle: "See the details",
  elMasPedido: "Most requested",
  preguntarPorEste: "Ask about this one",
  losPlanes: "The plans",
  planesBajada:
    "50% to start, the rest on delivery. You can see prices in pesos or in dollars.",
  pagoUnico: "one-off payment",
  alMes: "per month",
  siNecesitasMas: "If you need more",
  ojoConEsto: "Worth knowing",

  /* ── Página de servicio ────────────────────────────────────────────── */
  entrega: "Delivery",
  paraQueNoPierdasTiempo: "So you don't waste time",
  esEstoLoQueNecesitas: "Is this what you need?",
  esEstoBajada:
    "This saves us a call: below is what this is for and, if you need something else, where to go instead.",
  justoLoTuyo: "This is exactly right if…",
  otraCosaTitulo: "Something else suits you better if…",
  queIncluye: "What's included",
  vaEnTodosLosPlanes: "This comes with every plan",
  noVaIncluido: "And this doesn't",
  preguntas: "Questions",
  loQueMasPreguntan: "What people ask us most",
  arrancamosCon: (servicio: string) => `Shall we start on ${servicio}?`,

  /* ── Cierre ────────────────────────────────────────────────────────── */
  siguientePaso: "Next step",
  ctaTitulo: "Want to talk about your project?",
  ctaBajada:
    "Tell us what you sell and who you sell it to. We'll tell you what suits you, what it costs and how long it takes. If what you need isn't something we do, we'll tell you that too.",
  oPorCorreo: "Or by email",
  horarioBogota:
    "Monday to Friday, 8:00 to 18:00 Bogotá time (UTC−5, no daylight saving).",
  horarioEstadosUnidos:
    "In the US that's 8:00–18:00 on the East Coast — 9:00–19:00 during daylight saving — and 5:00–15:00 on the West Coast.",

  /* ── Pie ───────────────────────────────────────────────────────────── */
  pieTagline: (ciudad: string) =>
    `Websites, online stores and redesigns. From ${ciudad}, for Latin America and the US.`,
  pieHorario: "Monday to Friday, 8 to 6",
  pieHecho: "Built in Next.js. No templates.",
  dondeEstoy: "Where we are",
  horario: "Hours",

  /* ── Contacto ──────────────────────────────────────────────────────── */
  contactoH1: "Write to us and let's talk",
  contactoIntro:
    "Tell us what you sell, who you sell it to and what you need. With that we'll tell you what suits you, what it costs and when it'll be ready. If what you need isn't something we do, we'll say so right away and save you the time.",
  comoTrabajo: "How we work",
  correo: "Email",

  /* ── 404 ───────────────────────────────────────────────────────────── */
  noEncontradoTitulo: "This page doesn't exist",
  noEncontradoTexto:
    "Either we deleted it or the link was mistyped. Here's where to go instead.",
  irAlInicio: "Go home",
  verElTrabajo: "See the work",

  /* ── Mensajes de WhatsApp ──────────────────────────────────────────── */
  waGeneral: "Hi, I saw your site and I'd like a quote for a project.",
  waCotizar: "Hi, I'd like a quote for a project.",
  waServicio: (servicio: string) => `Hi, I'd like a quote for: ${servicio}.`,
  waPlan: (plan: string, servicio: string, precio: string) =>
    `Hi, I'm interested in the ${plan} plan for ${servicio} (${precio}).`,
  waProyectos:
    "Hi, I saw your projects and I'd like something similar for my business.",
};

const TEXTOS: Record<Idioma, Textos> = { es, en };

export const textos = (lang: Idioma): Textos => TEXTOS[lang];
