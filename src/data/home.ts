/**
 * Contenido del home. La bifurcación del hero es lo primero y lo más importante.
 *
 * Criterio de copy: el home solo tiene que dejar elegir un camino. El detalle
 * (alcance, exclusiones, condiciones) vive en cada página de servicio, después
 * del clic. Si una frase de aquí se puede borrar sin perder la decisión, sobra.
 */

import type { Faq } from "./services";

export const hero = {
  kicker: "Estudio de desarrollo · Bogotá, Colombia",
  /** El h1 es literalmente la pregunta que el sitio resuelve. */
  h1: "¿Necesitas una página web o una tienda online?",
  sub: "Construimos las dos. Elige por dónde empezar.",
  scrollHint: "O sigue bajando para ver el resto",
};

/** Los dos caminos del hero. El orden importa: izquierda es el caso más simple. */
export const fork = [
  {
    side: "left" as const,
    eyebrow: "Quiero que me encuentren",
    title: "Una página web",
    detail: "Para mostrar lo que haces y recibir mensajes.",
    priceFrom: 900000,
    href: "/servicios/paginas-web",
    cta: "Ver planes de páginas web",
  },
  {
    side: "right" as const,
    eyebrow: "Quiero vender en línea",
    title: "Una tienda online",
    detail: "Para cobrar con pasarela y manejar catálogo.",
    priceFrom: 2800000,
    href: "/servicios/ecommerce",
    cta: "Ver planes de e-commerce",
  },
];

/**
 * Cifras verificables. Ninguna se anima con contador: el número ya es el argumento.
 * El detalle es de una línea a propósito: aquí se mira, no se lee.
 */
export const stats = [
  {
    value: "700+",
    label: "productos en un solo catálogo",
    detail: "Con variantes, filtros combinables y buscador.",
  },
  {
    value: "4",
    label: "pasarelas de pago integradas",
    detail: "Wompi, Mercado Pago, PayU y Stripe.",
  },
  {
    value: "< 2 s",
    label: "de carga objetivo en 4G",
    detail: "Todo estático y servido desde CDN.",
  },
  {
    value: "0",
    label: "aplicaciones que descargar",
    detail: "El menú en 3D corre en el navegador.",
  },
];

export const proof = {
  title: "Ya está en producción",
};

export const servicesIntro = {
  kicker: "Qué hacemos",
  title: "Cuatro servicios, con el precio a la vista.",
};

export const arSection = {
  kicker: "El diferenciador",
  title: "El plato sale de la mesa",
  body: [
    "El comensal escanea el QR de la mesa y ve el plato en 3D, a tamaño real, sobre su propio mantel. Sin instalar nada.",
  ],
  cta: "Ver menús con realidad aumentada",
  href: "/servicios/software-restaurantes",
  /** Se muestran como pasos numerados sobre la escena en perspectiva. */
  steps: [
    { n: "01", text: "Escanea el QR de la mesa con la cámara" },
    { n: "02", text: "Se abre el menú en el navegador, sin instalar nada" },
    { n: "03", text: "Toca un plato y aparece en 3D sobre el mantel" },
  ],
};

/**
 * Proceso. Va en el sitio porque cada paso dice quién debe qué y cuándo.
 * Un proceso genérico de cuatro pasos no aportaría nada y no estaría aquí.
 */
export const process = {
  kicker: "Cómo trabajamos",
  title: "Quién hace qué, y cuándo",
  steps: [
    {
      n: "01",
      title: "Llamada de 30 minutos",
      body: "Revisamos si Meridiano es el estudio correcto. Si no lo es, lo decimos ahí mismo.",
      you: "Traes: ejemplos de sitios que te gustan y los que no.",
    },
    {
      n: "02",
      title: "Propuesta cerrada y anticipo",
      body: "Alcance, precio y fecha por escrito.",
      you: "Pagas: 50% del total. El saldo va contra entrega.",
    },
    {
      n: "03",
      title: "Diseño y dos rondas de ajustes",
      body: "Ves el diseño antes de que programemos nada.",
      you: "Entregas: textos, fotos y logo en alta resolución.",
    },
    {
      n: "04",
      title: "Desarrollo y pruebas",
      body: "Programación y pruebas en celular real.",
      you: "Revisas: un enlace de vista previa desde tu propio teléfono.",
    },
    {
      n: "05",
      title: "Publicación y capacitación",
      body: "Publicamos y configuramos dominio y analítica.",
      you: "Recibes: accesos, código fuente y video de 30 minutos.",
    },
  ],
};

/**
 * FAQ del home: solo las preguntas que se hacen antes de elegir un servicio.
 * Las preguntas específicas de cada servicio están en su propia página.
 */
export const homeFaq: Faq[] = [
  {
    q: "¿Qué hace Meridiano exactamente?",
    a: "Meridiano es un estudio de desarrollo web con sede en Bogotá, Colombia. Construye cuatro cosas: páginas web a medida, tiendas online, menús digitales con realidad aumentada para restaurantes y mantenimiento mensual de sitios ya publicados. Atiende clientes en toda Latinoamérica de forma remota.",
  },
  {
    q: "¿Necesito una página web o una tienda online?",
    a: "Si tu objetivo es que te encuentren y te escriban, necesitas una página web, desde $900.000. Si vas a cobrar en línea y manejar catálogo y stock, necesitas una tienda online, desde $2.800.000. Si vendes por WhatsApp y quieres probar primero, empieza por la página web.",
  },
  {
    q: "¿Cuánto cuesta trabajar con Meridiano?",
    a: "Los precios van desde $900.000 por una landing page hasta $7.000.000 por un e-commerce a medida. El menú digital para restaurantes cuesta $700.000 y el menú con realidad aumentada desde $1.800.000. El mantenimiento mensual va de $70.000 a $300.000. Todos los precios están publicados en el sitio, sin necesidad de pedir cotización.",
  },
  {
    q: "¿Cómo se paga un proyecto?",
    a: "Con 50% de anticipo para iniciar y 50% contra entrega, antes de publicar. Todos los precios están en pesos colombianos.",
  },
  {
    q: "¿Meridiano trabaja con clientes fuera de Colombia?",
    a: "Sí. Meridiano trabaja de forma remota con negocios en México, Chile, Perú, Argentina, Ecuador, Costa Rica y Panamá. Los precios se publican en pesos colombianos y para clientes fuera del país se calcula el equivalente en dólares a la TRM del día.",
  },
  {
    q: "¿Quién es el dueño del código y del dominio?",
    a: "El cliente. El dominio y el hosting se compran a nombre del cliente con sus propios datos, y el código fuente se entrega al publicar. Meridiano no retiene accesos como forma de retención.",
  },
];

export const finalCta = {
  kicker: "Siguiente paso",
  title: "Cuéntanos qué necesitas construir",
  body: "Respondemos en menos de 24 horas hábiles con alcance, precio y fecha.",
  primary: "Escribir por WhatsApp",
  secondary: "Escribir un correo",
};
