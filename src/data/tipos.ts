/**
 * Los tipos del contenido. No hay texto aquí: solo la forma que tiene.
 *
 * El contenido en sí vive en servicios.es.ts / servicios.en.ts y
 * proyectos.es.ts / proyectos.en.ts. Al estar los tipos aparte, el compilador
 * avisa si una traducción se queda corta: si el inglés olvida un campo que el
 * español tiene, la compilación falla en vez de publicar un hueco.
 */

export type Plan = {
  name: string;
  /** Precio en pesos colombianos. */
  price: number;
  /** "unico" = se paga una vez. "mes" = se paga todos los meses. */
  billing: "unico" | "mes";
  /** Para quién es este plan, en una línea. */
  paraQuien: string;
  /** Cuándo lo tienes. Va en su propio renglón: es lo segundo que se mira después del precio. */
  entrega: string;
  incluye: string[];
  destacado?: boolean;
};

export type Faq = {
  q: string;
  a: string;
  /** Enlace opcional al final de la respuesta, cuando la respuesta completa vive en otra página. */
  ir?: { href: string; label: string };
};

export type Servicio = {
  slug: string;
  /** Etiqueta corta para el menú. */
  nav: string;
  /** Título en el home. */
  card: string;
  /** Una línea en el home. */
  cardLine: string;
  h1: string;
  /** Frase autocontenida y verificable, para buscadores. */
  resumen: string;
  /** Los párrafos de arriba de la página. Cortos. */
  intro: string[];
  entrega: string;
  /**
   * Para quién es, y a dónde mandar al que necesita otra cosa.
   *
   * La columna de la derecha NO rechaza: redirige. Antes decía "no es para
   * ti" y se leía como un portero decidiendo quién entra. Ahora cada punto
   * lleva al servicio que sí resuelve lo que esa persona necesita, y el que
   * no tiene a dónde ir se lleva una recomendación igual.
   */
  siEsParaTi: string[];
  otraCosa: { texto: string; ir?: { href: string; label: string } }[];
  incluyeSiempre: { title: string; detail: string }[];
  noIncluye: string[];
  planes: Plan[];
  extras: { label: string; value: string }[];
  nota?: string;
  faq: Faq[];
  meta: { title: string; description: string };
};


export type Captura = {
  src: string;
  alt: string;
  /** Pie de foto: qué está viendo el visitante y por qué importa. */
  pie: string;
};

export type Proyecto = {
  slug: string;
  nombre: string;
  sector: string;
  ciudad: string;
  anio: number;
  /** Slug del servicio al que pertenece. */
  servicio: string;
  servicioLabel: string;
  /** Una frase. Qué es esto. */
  resumen: string;
  /** El problema, en palabras del cliente. */
  problema: string;
  /** Qué se construyó para resolverlo. */
  solucion: string;
  /** Solo hechos comprobables mirando el sitio. */
  datos: { label: string; value: string }[];
  stack: string[];
  /** URL pública. `null` si todavía no está publicado. */
  url: string | null;
  capturas: Captura[];
};
