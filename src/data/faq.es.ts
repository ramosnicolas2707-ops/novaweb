import type { Faq } from "./tipos";

/**
 * Las preguntas del home.
 *
 * No son las mismas que las de cada servicio. Estas están escritas contra lo
 * que la gente ESCRIBE EN GOOGLE antes de saber a quién contratar: "cuánto
 * cuesta una página web", "cuánto se demora", "necesito tienda o página".
 * Son búsquedas de alguien que ya quiere comprar pero todavía no sabe qué.
 *
 * Por eso cada pregunta está redactada como la escribiría un desconocido, no
 * como la diríamos nosotros, y cada respuesta empieza por el dato duro —el
 * precio, el plazo, el sí o el no— en la primera frase. Google cita la
 * primera frase; si arranca con rodeos, cita el rodeo.
 *
 * Van al FAQPage del home (ver faqJsonLd en src/lib/seo.ts), que es lo que
 * hace que salgan como desplegables en los resultados de búsqueda.
 */
export const faqHome: Faq[] = [
  {
    q: "¿Cuánto cuesta una página web en Colombia?",
    a: "Una landing de una sola página cuesta $900.000 y un sitio completo de hasta seis páginas, $2.200.000. Los dos son pago único, no mensualidad. Una tienda online arranca en $2.800.000 porque lleva pasarela de pago, carrito e inventario. Los precios están publicados en este sitio: no hace falta escribir para que te pasen una cotización.",
    ir: { href: "/servicios/paginas-web", label: "Ver qué incluye cada plan" },
  },
  {
    q: "¿Cuánto se demora en estar lista?",
    a: "Una landing está lista en una semana y un sitio completo en cuatro. Una tienda online toma entre tres y nueve semanas según el tamaño del catálogo. El plazo empieza a correr cuando tenemos los textos y las fotos, no cuando se firma: esa es la parte que más suele demorar y conviene saberlo antes.",
  },
  {
    q: "¿Necesito una página web o una tienda online?",
    a: "Si quieres que te encuentren y te escriban, es una página web. Si quieres que te compren sin hablar contigo —de noche, un domingo, sin preguntarte el precio—, es una tienda online. La diferencia no es el diseño sino el cobro: la tienda lleva pasarela de pago, carrito e inventario, y por eso cuesta más y toma más tiempo.",
    ir: { href: "/servicios/tiendas-online", label: "Ver tiendas online" },
  },
  {
    q: "¿Mi página va a salir en Google?",
    a: "Sale, pero no de un día para otro. Entregamos el sitio con todo lo técnico que Google pide —velocidad, versión para celular, títulos y descripciones propios de cada página, datos estructurados y mapa del sitio— que es lo que sí depende de nosotros. Salir de primeras en una búsqueda muy peleada depende además del tiempo y de que otros sitios te enlacen. Desconfía de quien te lo prometa.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Con saber qué vendes y a quién, ya podemos hablar. Para construir necesitamos los textos, las fotos y el logo si ya tienes uno. Si no tienes textos, los escribimos nosotros a partir de una llamada; si no tienes fotos, te decimos cuáles hacen falta antes de que gastes en un fotógrafo.",
  },
  {
    q: "¿Puedo cambiar cosas yo mismo después?",
    a: "Sí. En una tienda online administras tú los productos, los precios y las promociones desde un panel, sin llamarnos. En una página web los cambios de texto o de fotos los hacemos nosotros, y para eso está el mantenimiento desde $95.000 al mes, que además incluye hosting, copias de seguridad y monitoreo. No tiene permanencia.",
    ir: { href: "/servicios/mantenimiento", label: "Ver mantenimiento" },
  },
  {
    q: "Ya tengo página pero está vieja, ¿la boto y hago una nueva?",
    a: "No hace falta, y casi siempre es mala idea. Un sitio nuevo arranca de cero en buscadores y pierde lo que el viejo ya tenía ganado. Un rediseño conserva ese historial y arregla lo que estorba: la velocidad, el celular y el diseño. Cuesta desde $950.000.",
    ir: { href: "/servicios/rediseno", label: "Ver rediseño" },
  },
  {
    q: "¿Trabajan con negocios fuera de Colombia?",
    a: "Sí. Trabajamos con negocios de toda Latinoamérica y de Estados Unidos. Facturamos en pesos o en dólares —puedes ver los precios en las dos monedas en este mismo sitio— y atendemos de 8 a 6 hora de Bogotá, que es 8 a 6 en la costa este de Estados Unidos y 5 a 3 en la costa oeste.",
  },
  {
    q: "¿Cómo se paga?",
    a: "El 50% para arrancar y el resto contra entrega. No cobramos mensualidad por el sitio: la página es tuya. Lo único mensual, y solo si lo quieres, es el mantenimiento.",
  },
];
