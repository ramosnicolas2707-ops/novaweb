/**
 * Los cuatro servicios, con planes, precios y preguntas frecuentes.
 * Cada precio que aparece en el sitio sale de aquí. No hay precios escritos en componentes.
 */

export type Plan = {
  name: string;
  /** Precio principal en pesos colombianos (COP). */
  price: number;
  /** "unico" = pago único de implementación. "mes" = suscripción. */
  billing: "unico" | "mes";
  /** Mensualidad cuando el plan combina implementación + suscripción. */
  monthly?: number;
  /** Resumen del alcance. Es la celda "Alcance" de la tabla de precios. */
  scope: string;
  features: string[];
  featured?: boolean;
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Etiqueta corta para navegación y breadcrumbs. */
  nav: string;
  /** Título de tarjeta en el home. */
  card: string;
  h1: string;
  kicker: string;
  /** Frase autocontenida y verificable. La usan los buscadores generativos. */
  summary: string;
  /** Una línea para la tarjeta del home. El summary es demasiado largo ahí. */
  cardLine: string;
  intro: string[];
  deliveryTime: string;
  forWhom: string[];
  notForWhom: string[];
  includes: { title: string; detail: string }[];
  excludes: string[];
  plans: Plan[];
  tableCaption: string;
  extras: { label: string; value: string }[];
  note?: string;
  faq: Faq[];
  meta: { title: string; description: string };
  /** Palabras clave que el texto de la página trabaja de forma natural. */
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "paginas-web",
    cardLine: "Para que te encuentren y te escriban.",
    nav: "Páginas web",
    card: "Páginas web",
    kicker: "Servicio 01",
    h1: "Páginas web a medida, desde Colombia para toda Latinoamérica",
    summary:
      "Meridiano desarrolla páginas web a medida en Next.js desde $900.000 la landing page y $2.200.000 el sitio corporativo, con entrega entre 2 y 5 semanas.",
    intro: [
      "Una página web sirve para dos cosas: que te encuentren y que te escriban. Todo lo demás es decoración.",
      "Construimos en Next.js con renderizado estático. Eso significa que la página se entrega ya armada desde el servidor más cercano al visitante, no se ensambla en su teléfono. La diferencia se nota en Bogotá, en Ciudad de México y en un celular de gama media con datos móviles.",
    ],
    deliveryTime: "Landing page: 2 semanas. Sitio corporativo: 4 a 5 semanas.",
    forWhom: [
      "Empresas de servicios que reciben clientes por WhatsApp y hoy no tienen dónde mandarlos.",
      "Marcas con una web vieja que carga lento y no se ve bien en celular.",
      "Negocios que necesitan aparecer en Google por búsquedas concretas de su ciudad o su rubro.",
      "Equipos que quieren editar su propio blog sin depender de nadie.",
    ],
    notForWhom: [
      "Quien busca la web más barata del mercado. No competimos ahí.",
      "Quien necesita vender online: eso es un e-commerce, y tiene su propia página.",
      "Quien quiere entregar el proyecto sin participar. Pedimos textos, fotos y dos reuniones.",
    ],
    includes: [
      {
        title: "Diseño propio, no plantilla",
        detail:
          "Cada sitio se diseña desde cero sobre la identidad de la marca. No compramos temas ni reutilizamos maquetas de otros clientes.",
      },
      {
        title: "Formulario de contacto que llega a tu correo",
        detail:
          "Con protección anti-spam y confirmación visible para quien escribe. Los mensajes llegan a la bandeja que indiques.",
      },
      {
        title: "Botón de WhatsApp con mensaje precargado",
        detail:
          "El visitante abre el chat con el texto ya escrito. Menos fricción, más conversaciones que empiezan solas.",
      },
      {
        title: "SEO técnico de base",
        detail:
          "Títulos y descripciones únicos por página, datos estructurados, sitemap, robots.txt, URLs canónicas y encabezados jerarquizados.",
      },
      {
        title: "Velocidad medida, no prometida",
        detail:
          "Entregamos con el reporte de PageSpeed Insights. El objetivo es LCP por debajo de 2 segundos en 4G.",
      },
      {
        title: "Capacitación grabada",
        detail:
          "Una sesión en video de 30 minutos, tuya para siempre, mostrando cómo editar lo que puedes editar.",
      },
    ],
    excludes: [
      "Redacción de textos largos. Escribimos los títulos y ajustamos lo que envíes, pero el contenido base lo pones tú o lo cotizamos aparte.",
      "Fotografía y video. Si no tienes material, te decimos qué necesitas y podemos recomendar a alguien.",
      "Diseño de logo e identidad de marca.",
      "El dominio y el hosting del primer año. Se compran a nombre tuyo, con tus datos y tu tarjeta: la propiedad es tuya, no nuestra.",
      "Campañas de pauta en Google o Meta.",
      "Traducción a otros idiomas.",
      "Aplicaciones móviles nativas para iOS o Android.",
    ],
    plans: [
      {
        name: "Landing page",
        price: 900000,
        billing: "unico",
        scope: "1 página, hasta 5 secciones, formulario y WhatsApp",
        features: [
          "Una página, hasta 5 secciones",
          "Formulario de contacto al correo",
          "Botón de WhatsApp con mensaje precargado",
          "Diseño responsive hasta 375 px",
          "SEO técnico de base y Google Analytics",
          "Entrega en 2 semanas",
        ],
      },
      {
        name: "Sitio corporativo",
        price: 2200000,
        billing: "unico",
        scope: "Hasta 6 páginas, blog y SEO base",
        featured: true,
        features: [
          "Hasta 6 páginas internas",
          "Blog editable sin tocar código",
          "SEO base por página, con textos escritos a mano",
          "Formulario, WhatsApp y enlaces a redes",
          "Datos estructurados de organización y servicios",
          "Capacitación grabada de 30 minutos",
          "Entrega en 4 a 5 semanas",
        ],
      },
    ],
    tableCaption:
      "Planes de desarrollo web. Precios en pesos colombianos (COP), pago único.",
    extras: [
      { label: "Página adicional sobre el plan contratado", value: "$360.000" },
      { label: "Ronda de revisión adicional", value: "$60.000 / hora" },
      { label: "Redacción de textos por página", value: "$140.000" },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una página web con Meridiano?",
        a: "Una landing page de una sola página cuesta $900.000 y un sitio corporativo de hasta 6 páginas con blog cuesta $2.200.000. Ambos precios son pago único e incluyen diseño propio, formulario de contacto, botón de WhatsApp y SEO técnico de base.",
      },
      {
        q: "¿Cuánto se demora el desarrollo de una página web?",
        a: "Una landing page se entrega en 2 semanas y un sitio corporativo en 4 a 5 semanas, contadas desde que recibimos los textos y las imágenes. El anticipo del 50% da inicio al proyecto.",
      },
      {
        q: "¿La página incluye hosting y dominio?",
        a: "No. El dominio y el hosting se compran a nombre del cliente, con sus datos y su medio de pago, para que la propiedad sea suya. Meridiano configura todo sin costo adicional. Si prefieres no ocuparte, el plan de mantenimiento desde $70.000 al mes incluye el hosting.",
      },
      {
        q: "¿Con qué tecnología construyen las páginas web?",
        a: "Con Next.js y TypeScript, desplegado en Vercel con renderizado estático. No usamos WordPress ni constructores visuales tipo Wix o Squarespace, porque el objetivo es tiempo de carga bajo 2 segundos y control total del código.",
      },
      {
        q: "¿Puedo editar los textos de mi página después?",
        a: "En el plan de sitio corporativo puedes editar el blog por tu cuenta. Los textos de las secciones fijas los cambia Meridiano: con un plan de mantenimiento entran dentro de las horas incluidas; sin plan, se facturan a $60.000 la hora.",
      },
      {
        q: "¿Trabajan con clientes fuera de Colombia?",
        a: "Sí. Meridiano trabaja de forma remota con clientes en México, Chile, Perú, Argentina, Ecuador, Costa Rica y Panamá. Las reuniones se hacen por videollamada y la factura se emite en pesos colombianos, con el equivalente en dólares a la TRM del día para quien lo necesite.",
      },
    ],
    meta: {
      title: "Desarrollo de páginas web a medida",
      description:
        "Páginas web en Next.js desde $900.000. Landing page en 2 semanas, sitio corporativo con blog en 5. Diseño propio, SEO técnico y carga bajo 2 segundos. Bogotá, Colombia.",
    },
    keywords: [
      "desarrollo web Colombia",
      "diseño de páginas web Bogotá",
      "landing page profesional",
      "sitio web corporativo",
    ],
  },

  {
    slug: "ecommerce",
    cardLine: "Para cobrar en línea y manejar catálogo.",
    nav: "E-commerce",
    card: "Tiendas online",
    kicker: "Servicio 02",
    h1: "Tiendas online que aguantan catálogos grandes y pagos reales",
    summary:
      "Meridiano desarrolla tiendas online desde $2.800.000, con pasarela de pago integrada, catálogos de más de 700 productos y cierre de venta por WhatsApp.",
    intro: [
      "Un e-commerce se rompe en dos puntos: cuando el catálogo crece y cuando el cliente va a pagar. Ahí ponemos el trabajo.",
      "Ya hemos gestionado catálogos de más de 700 referencias con variantes de talla, color y presentación, filtros que responden al instante y buscador que tolera errores de tipeo. Y hemos integrado las pasarelas que de verdad operan en la región: Wompi, Mercado Pago, PayU y Stripe.",
    ],
    deliveryTime:
      "Esencial: 3 semanas. Profesional: 5 a 6 semanas. Élite: 8 a 10 semanas.",
    forWhom: [
      "Marcas con catálogo amplio que hoy venden por Instagram y WhatsApp y ya no dan abasto.",
      "Tiendas físicas que quieren vender en línea sin perder el canal de WhatsApp.",
      "Negocios con productos de variantes múltiples: tallas, colores, presentaciones, fragancias.",
      "Empresas que necesitan cobrar en dólares o en varias monedas.",
    ],
    notForWhom: [
      "Quien quiere probar si vender online le sirve. Para eso empieza con una landing y WhatsApp.",
      "Quien busca solo instalar una plantilla de Shopify. Es un trabajo legítimo, pero no es el nuestro.",
      "Quien no tiene fotos de producto ni quiere producirlas.",
    ],
    includes: [
      {
        title: "Catálogo con variantes y stock",
        detail:
          "Tallas, colores, presentaciones y combinaciones. Cada variante con su propio inventario, precio y foto.",
      },
      {
        title: "Pasarela de pago integrada y probada",
        detail:
          "Wompi, Mercado Pago, PayU o Stripe. Entregamos con transacciones de prueba hechas y comprobantes de que el flujo cierra.",
      },
      {
        title: "Carrito que sobrevive al cierre del navegador",
        detail:
          "El carrito persiste entre sesiones y dispositivos. Un carrito perdido es una venta perdida.",
      },
      {
        title: "Cierre por WhatsApp como alternativa",
        detail:
          "El comprador puede terminar el pedido por chat con el carrito ya armado dentro del mensaje. En Latinoamérica esto convierte.",
      },
      {
        title: "Buscador y filtros que aguantan volumen",
        detail:
          "Búsqueda tolerante a errores de tipeo y filtros combinables que responden sin recargar la página, con catálogos de cientos de referencias.",
      },
      {
        title: "Panel para gestionar el catálogo",
        detail:
          "Cargas y editas productos, precios y stock sin tocar código y sin pedirnos permiso.",
      },
      {
        title: "Datos estructurados de producto",
        detail:
          "Cada ficha publica precio y disponibilidad en formato Product de schema.org, para que Google pueda mostrar el precio en los resultados.",
      },
    ],
    excludes: [
      "La carga inicial de productos por encima del tope del plan. Se cobra a $3.000 por producto.",
      "Fotografía y edición de imágenes de producto.",
      "La cuenta de la pasarela de pago. Se abre a nombre del comercio, con sus documentos: nosotros no manejamos tu dinero.",
      "Las comisiones de la pasarela, que cobra el proveedor sobre cada transacción.",
      "Facturación electrónica ante la DIAN u organismo equivalente. Se integra como desarrollo adicional, cotizado aparte.",
      "Logística, envíos y acuerdos con transportadoras.",
      "Gestión de inventario físico o de bodega.",
      "Campañas de pauta y email marketing.",
    ],
    plans: [
      {
        name: "Esencial",
        price: 2800000,
        billing: "unico",
        scope: "Plantilla, hasta 50 productos, 1 pasarela de pago",
        features: [
          "Diseño sobre plantilla adaptada a tu marca",
          "Hasta 50 productos cargados",
          "Una pasarela de pago integrada",
          "Carrito y checkout completos",
          "Panel de gestión de catálogo",
          "Entrega en 3 semanas",
        ],
      },
      {
        name: "Profesional",
        price: 4400000,
        billing: "unico",
        scope: "Diseño propio, hasta 200 productos, SEO y WhatsApp",
        featured: true,
        features: [
          "Diseño propio, desde cero",
          "Hasta 200 productos cargados",
          "Pasarela de pago y cierre por WhatsApp",
          "Filtros, buscador y variantes",
          "SEO por producto y por categoría",
          "Datos estructurados con precio y stock",
          "Entrega en 5 a 6 semanas",
        ],
      },
      {
        name: "Élite",
        price: 7000000,
        billing: "unico",
        scope: "A medida, catálogo ilimitado, integraciones y capacitación",
        features: [
          "Desarrollo a medida, sin techo de catálogo",
          "Integraciones con ERP, facturación o CRM",
          "Múltiples pasarelas y monedas",
          "Cupones, combos y precios por mayor",
          "Capacitación en vivo para tu equipo",
          "Un mes de ajustes posteriores incluido",
          "Entrega en 8 a 10 semanas",
        ],
      },
    ],
    tableCaption:
      "Planes de desarrollo de tiendas online. Precios en pesos colombianos (COP), pago único.",
    extras: [
      { label: "Carga de producto adicional", value: "$3.000 por producto" },
      { label: "Pasarela de pago adicional", value: "$440.000" },
      {
        label: "Integración con ERP o facturación electrónica",
        value: "Desde $1.200.000",
      },
      { label: "Ronda de revisión adicional", value: "$60.000 / hora" },
    ],
    note: "La carga de productos adicionales se cobra a $3.000 por producto. Si prefieres cargarlos tú, el panel es tuyo y no hay costo.",
    faq: [
      {
        q: "¿Cuánto cuesta una tienda online en Meridiano?",
        a: "Hay tres planes: Esencial a $2.800.000 con hasta 50 productos, Profesional a $4.400.000 con hasta 200 productos y diseño propio, y Élite a $7.000.000 con catálogo ilimitado e integraciones. Todos son pago único e incluyen pasarela de pago.",
      },
      {
        q: "¿Qué pasa si tengo más productos que los del plan?",
        a: "La carga de productos por encima del tope del plan se cobra a $3.000 por producto. También puedes cargarlos tú desde el panel sin costo adicional. Meridiano ha gestionado catálogos de más de 700 referencias con variantes.",
      },
      {
        q: "¿Qué pasarelas de pago integran?",
        a: "Wompi, Mercado Pago, PayU y Stripe. La cuenta se abre a nombre del comercio, con sus propios documentos, y el dinero llega directo a su cuenta. Meridiano nunca intermedia los pagos.",
      },
      {
        q: "¿Se puede vender por WhatsApp desde la tienda?",
        a: "Sí. El comprador puede cerrar el pedido por WhatsApp con el carrito ya armado dentro del mensaje, sin volver a escribir qué quiere. Está incluido en los planes Profesional y Élite.",
      },
      {
        q: "¿Usan Shopify o WooCommerce?",
        a: "No. Meridiano desarrolla las tiendas en Next.js con TypeScript, sobre un catálogo propio. Eso evita las comisiones mensuales de plataforma y permite catálogos grandes sin que la tienda se ponga lenta.",
      },
      {
        q: "¿Cuánto se demora una tienda online?",
        a: "El plan Esencial se entrega en 3 semanas, el Profesional en 5 a 6 semanas y el Élite en 8 a 10 semanas, contadas desde la entrega de fotos y catálogo por parte del cliente.",
      },
      {
        q: "¿La tienda incluye facturación electrónica DIAN?",
        a: "No viene incluida. La integración con facturación electrónica ante la DIAN, o el organismo equivalente de cada país, se cotiza aparte desde $1.200.000 según el proveedor que use el comercio.",
      },
    ],
    meta: {
      title: "Desarrollo de tiendas online y e-commerce",
      description:
        "E-commerce a medida desde $2.800.000. Catálogos de más de 700 productos, pasarelas Wompi, Mercado Pago y Stripe, cierre por WhatsApp. Desarrollo e-commerce en Bogotá.",
    },
    keywords: [
      "crear tienda online Latinoamérica",
      "desarrollo e-commerce Bogotá",
      "tienda virtual Colombia",
      "integración pasarela de pagos",
    ],
  },

  {
    slug: "software-restaurantes",
    cardLine: "Carta con QR y platos en 3D sobre la mesa.",
    nav: "Restaurantes",
    card: "Software para restaurantes",
    kicker: "Servicio 03",
    h1: "Menús digitales y menús con realidad aumentada para restaurantes",
    summary:
      "El menú con realidad aumentada de Meridiano funciona desde el navegador del celular, sin instalar ninguna aplicación: el comensal escanea el código QR y ve el plato en 3D, a escala real, sobre su propia mesa.",
    intro: [
      "El problema del menú de un restaurante no es el diseño: es que nadie sabe qué tan grande viene el plato ni cómo se ve.",
      "Un menú con realidad aumentada resuelve eso. El comensal apunta la cámara al código QR de la mesa, elige un plato y lo ve aparecer en 3D, a tamaño real, sobre el mantel. No descarga nada. Funciona en el navegador que ya tiene abierto, en iPhone y en Android.",
      "Es el único de nuestros servicios que hoy no ofrece ningún estudio local de la región.",
    ],
    deliveryTime:
      "Menú digital: 1 semana. Menú con realidad aumentada: 3 semanas para 15 platos, 5 semanas para 30.",
    forWhom: [
      "Restaurantes con carta corta y platos que se ven bien: hamburguesas, cortes, postres, cocteles.",
      "Cadenas que quieren la misma carta en todas las sedes y cambiarla desde un solo lugar.",
      "Locales con clientela extranjera, donde una imagen explica mejor que una descripción.",
      "Restaurantes que ajustan precios seguido y ya no quieren reimprimir cartas.",
    ],
    notForWhom: [
      "Cartas de más de 60 platos que cambian todos los días.",
      "Locales sin señal ni WiFi para los clientes: la realidad aumentada necesita conexión la primera vez.",
      "Quien busca un punto de venta o un sistema de comandas a cocina. Eso es otro producto.",
    ],
    includes: [
      {
        title: "Modelado 3D de cada plato",
        detail:
          "A partir de fotos del plato real. No usamos modelos genéricos de banco: tu hamburguesa es tu hamburguesa.",
      },
      {
        title: "Realidad aumentada en el navegador",
        detail:
          "Funciona con WebXR en Android y Quick Look en iOS. El comensal no instala ninguna aplicación ni crea ninguna cuenta.",
      },
      {
        title: "Código QR diseñado, no genérico",
        detail:
          "Con la identidad del restaurante, listo para imprimir en mesa, vitrina o pendón. Se entrega en vectorial.",
      },
      {
        title: "Panel para cambiar precios y disponibilidad",
        detail:
          "Subes un precio o marcas un plato agotado y el cambio se ve al instante en todas las mesas.",
      },
      {
        title: "Carta en dos idiomas",
        detail:
          "Español e inglés incluidos, con cambio de idioma en un toque.",
      },
      {
        title: "Métricas de qué miran",
        detail:
          "Qué platos abren más, cuáles ven en 3D y cuánto tiempo. Sirve para decidir qué promover y qué sacar de la carta.",
      },
    ],
    excludes: [
      "Platos en 3D por encima del tope del plan. Cada plato adicional cuesta $130.000.",
      "Fotografía de los platos. Necesitamos entre 8 y 12 fotos por plato para modelarlo; si no las tienes, te pasamos la guía o recomendamos fotógrafo.",
      "Impresión física de los códigos QR, soportes de mesa o pendones.",
      "Tablets, pantallas o cualquier hardware del local.",
      "Integración con el punto de venta o envío de comandas a cocina. Se cotiza aparte.",
      "Toma de pedidos y cobro dentro del menú. El menú muestra; no cobra.",
      "Aplicación nativa en App Store o Google Play. Justamente, la gracia es no necesitarla.",
    ],
    plans: [
      {
        name: "Menú digital",
        price: 700000,
        billing: "unico",
        monthly: 90000,
        scope: "Hasta 40 platos, con código QR diseñado",
        features: [
          "Hasta 40 platos con foto, descripción y precio",
          "Código QR diseñado con tu identidad",
          "Panel para editar precios y disponibilidad",
          "Carta en español e inglés",
          "Entrega en 1 semana",
        ],
      },
      {
        name: "Menú con realidad aumentada · 15 platos",
        price: 1800000,
        billing: "unico",
        monthly: 180000,
        scope: "15 platos modelados en 3D, vistos desde el navegador",
        featured: true,
        features: [
          "15 platos modelados en 3D a escala real",
          "Realidad aumentada sin instalar aplicaciones",
          "Funciona en iPhone y en Android",
          "Todo lo del menú digital, incluido",
          "Métricas de visualización por plato",
          "Entrega en 3 semanas",
        ],
      },
      {
        name: "Menú con realidad aumentada · 30 platos",
        price: 3200000,
        billing: "unico",
        monthly: 180000,
        scope: "30 platos modelados en 3D, vistos desde el navegador",
        features: [
          "30 platos modelados en 3D a escala real",
          "Realidad aumentada sin instalar aplicaciones",
          "Cubre la carta completa de la mayoría de restaurantes",
          "Todo lo del menú digital, incluido",
          "Métricas de visualización por plato",
          "Entrega en 5 semanas",
        ],
      },
    ],
    tableCaption:
      "Menús digitales y menús con realidad aumentada. Implementación de pago único más mensualidad, en pesos colombianos (COP).",
    extras: [
      { label: "Plato adicional modelado en 3D", value: "$130.000 por plato" },
      { label: "Sede adicional con la misma carta", value: "$240.000" },
      { label: "Idioma adicional en la carta", value: "$180.000" },
    ],
    note: "Cada plato adicional en 3D cuesta $130.000. La mensualidad cubre el alojamiento de los modelos 3D, el ancho de banda y los cambios de precio ilimitados.",
    faq: [
      {
        q: "¿Cómo funciona el menú con realidad aumentada?",
        a: "El comensal escanea el código QR de la mesa con la cámara de su celular, se abre el menú en el navegador y al tocar un plato lo ve en 3D a escala real sobre la mesa. No descarga ninguna aplicación ni crea ninguna cuenta.",
      },
      {
        q: "¿El cliente tiene que descargar una app?",
        a: "No. El menú con realidad aumentada de Meridiano funciona con WebXR en Android y con Quick Look en iOS, ambos integrados en el sistema operativo. Todo ocurre dentro del navegador que el comensal ya tiene abierto.",
      },
      {
        q: "¿Cuánto cuesta un menú con realidad aumentada?",
        a: "La versión de 15 platos cuesta $1.800.000 de implementación más $180.000 al mes. La de 30 platos cuesta $3.200.000 más $180.000 al mes. Cada plato extra modelado en 3D cuesta $130.000.",
      },
      {
        q: "¿Cuánto cuesta un menú digital sin realidad aumentada?",
        a: "El menú digital con código QR cuesta $700.000 de implementación e incluye hasta 40 platos, más una mensualidad de $90.000 que cubre el alojamiento y los cambios de precio ilimitados.",
      },
      {
        q: "¿Qué necesito para que modelen mis platos en 3D?",
        a: "Entre 8 y 12 fotos de cada plato, tomadas alrededor y desde arriba, con buena luz. Meridiano envía una guía de una página para que las tome el propio restaurante con un celular.",
      },
      {
        q: "¿Puedo cambiar los precios yo mismo?",
        a: "Sí. El panel permite cambiar precios, descripciones y marcar platos agotados, y el cambio se ve al instante en todas las mesas. Está incluido en la mensualidad y no tiene límite de cambios.",
      },
      {
        q: "¿Qué pasa si dejo de pagar la mensualidad?",
        a: "El menú deja de estar disponible, porque la mensualidad cubre el alojamiento de los modelos 3D y el ancho de banda. Los modelos son del restaurante: se entregan en formato GLB si decide irse.",
      },
    ],
    meta: {
      title: "Menú digital y menú con realidad aumentada para restaurantes",
      description:
        "Menú digital con QR desde $700.000 y menú con realidad aumentada desde $1.800.000. El comensal ve el plato en 3D sobre su mesa, desde el navegador y sin descargar nada.",
    },
    keywords: [
      "menú digital para restaurantes",
      "menú con realidad aumentada",
      "carta QR restaurante",
      "WebAR restaurantes Latinoamérica",
    ],
  },

  {
    slug: "mantenimiento",
    cardLine: "Hosting, copias y horas de cambios cada mes.",
    nav: "Mantenimiento",
    card: "Mantenimiento",
    kicker: "Servicio 04",
    h1: "Mantenimiento de páginas web y tiendas online",
    summary:
      "Meridiano ofrece mantenimiento de páginas web desde $70.000 al mes, con hosting, copias de seguridad diarias, actualizaciones de seguridad y horas de cambios incluidas.",
    intro: [
      "Un sitio sin mantenimiento no falla el primer mes. Falla el noveno, un viernes, cuando nadie mira.",
      "El mantenimiento cubre lo aburrido y necesario: que el hosting esté al día, que haya copia de seguridad de ayer, que los parches de seguridad se apliquen y que cuando quieras cambiar un precio o una foto haya alguien que lo haga el mismo día.",
    ],
    deliveryTime:
      "Los cambios solicitados se atienden en menos de 48 horas hábiles. En el plan Prioritario, en menos de 12.",
    forWhom: [
      "Cualquier cliente que ya tenga un sitio hecho por Meridiano.",
      "Negocios con sitios hechos por otros que hoy no tienen a quién llamar.",
      "Tiendas online, donde una caída de dos horas es plata que no vuelve.",
      "Equipos sin persona técnica interna.",
    ],
    notForWhom: [
      "Sitios en plataformas cerradas a las que no podemos acceder.",
      "Quien necesita un rediseño completo. Eso es un proyecto nuevo, no mantenimiento.",
      "Quien espera desarrollo de funcionalidades nuevas dentro de las horas del plan.",
    ],
    includes: [
      {
        title: "Hosting y dominio administrados",
        detail:
          "Nos ocupamos de renovaciones, certificados SSL y configuración de DNS. Sin sorpresas de vencimiento.",
      },
      {
        title: "Copias de seguridad diarias",
        detail:
          "Retención de 30 días. Restauración a cualquier punto en menos de una hora si algo sale mal.",
      },
      {
        title: "Actualizaciones de seguridad",
        detail:
          "Dependencias al día y monitoreo de vulnerabilidades conocidas. Las críticas se parchean el mismo día.",
      },
      {
        title: "Monitoreo de disponibilidad",
        detail:
          "Revisión cada 5 minutos. Si el sitio se cae, nos enteramos nosotros antes que tú.",
      },
      {
        title: "Horas de cambios incluidas",
        detail:
          "Textos, fotos, precios, secciones pequeñas nuevas. Pides por WhatsApp o correo y queda hecho.",
      },
      {
        title: "Reporte mensual en Activo y Prioritario",
        detail:
          "Una página: visitas, velocidad, horas usadas y qué se hizo. Sin gráficas de relleno.",
      },
    ],
    excludes: [
      "Rediseños o secciones nuevas grandes. Se cotizan como proyecto aparte.",
      "Desarrollo de funcionalidades nuevas, como agregar un carrito o una pasarela.",
      "Gestión diaria de contenido, redes sociales o publicaciones de blog.",
      "Campañas de marketing, pauta o email marketing.",
      "Carga masiva de productos, que se cobra a $3.000 por producto.",
      "Soporte del hardware, la red o los computadores del cliente.",
      "Las horas no usadas no se acumulan de un mes al siguiente.",
    ],
    plans: [
      {
        name: "Básico",
        price: 70000,
        billing: "mes",
        scope: "Hosting, copias de seguridad, seguridad y 1 hora de cambios",
        features: [
          "Hosting y dominio administrados",
          "Copias de seguridad diarias, 30 días de retención",
          "Actualizaciones de seguridad",
          "Monitoreo de disponibilidad cada 5 minutos",
          "1 hora de cambios al mes",
          "Respuesta en 48 horas hábiles",
        ],
      },
      {
        name: "Activo",
        price: 150000,
        billing: "mes",
        scope: "Todo lo del Básico, más 3 horas de cambios y reportes",
        featured: true,
        features: [
          "Todo lo del plan Básico",
          "3 horas de cambios al mes",
          "Reporte mensual de visitas y velocidad",
          "Revisión trimestral de SEO técnico",
          "Respuesta en 24 horas hábiles",
        ],
      },
      {
        name: "Prioritario",
        price: 300000,
        billing: "mes",
        scope: "Todo lo del Activo, más 6 horas y soporte de fin de semana",
        features: [
          "Todo lo del plan Activo",
          "6 horas de cambios al mes",
          "Soporte sábados y domingos",
          "Respuesta en 12 horas",
          "Canal directo de WhatsApp con el desarrollador",
        ],
      },
    ],
    tableCaption:
      "Planes de mantenimiento web. Precios mensuales en pesos colombianos (COP), sin permanencia mínima.",
    extras: [
      { label: "Hora adicional de cambios", value: "$60.000 / hora" },
      { label: "Carga de producto adicional", value: "$3.000 por producto" },
      { label: "Auditoría técnica de un sitio existente", value: "$300.000" },
    ],
    note: "Sin permanencia mínima: puedes cancelar cualquier mes avisando con 15 días. Si te vas, se entrega el código y una copia de seguridad completa.",
    faq: [
      {
        q: "¿Cuánto cuesta el mantenimiento de una página web?",
        a: "Meridiano ofrece tres planes mensuales: Básico a $70.000 con 1 hora de cambios, Activo a $150.000 con 3 horas y reportes, y Prioritario a $300.000 con 6 horas y soporte de fin de semana. Los tres incluyen hosting, copias de seguridad y actualizaciones de seguridad.",
      },
      {
        q: "¿Qué entra dentro de las horas de cambios?",
        a: "Cambios de textos, fotos, precios, banners, secciones pequeñas y ajustes de SEO. No entran rediseños completos ni funcionalidades nuevas, que se cotizan como proyecto aparte.",
      },
      {
        q: "¿Las horas no usadas se acumulan?",
        a: "No. Las horas incluidas se renuevan cada mes y no se acumulan. Si necesitas más horas en un mes puntual, se facturan a $60.000 la hora.",
      },
      {
        q: "¿Hacen mantenimiento de sitios que no desarrollaron ustedes?",
        a: "Sí, previa auditoría técnica de $300.000 que se descuenta del primer mes si el sitio entra al plan. La auditoría dice en qué estado está el código y qué hace falta arreglar antes de empezar.",
      },
      {
        q: "¿Hay permanencia mínima?",
        a: "No. Puedes cancelar cualquier mes avisando con 15 días de anticipación. Al cancelar, Meridiano entrega el código fuente y una copia de seguridad completa del sitio.",
      },
      {
        q: "¿Qué pasa si mi sitio se cae un domingo?",
        a: "En el plan Prioritario hay soporte sábados y domingos con respuesta en menos de 12 horas. En los planes Básico y Activo el soporte es de lunes a viernes, aunque el monitoreo automático corre todos los días.",
      },
    ],
    meta: {
      title: "Mantenimiento de páginas web y tiendas online",
      description:
        "Mantenimiento web desde $70.000 al mes: hosting, copias de seguridad diarias, actualizaciones de seguridad, monitoreo y horas de cambios incluidas. Sin permanencia.",
    },
    keywords: [
      "mantenimiento de páginas web",
      "soporte web mensual Colombia",
      "hosting administrado Latinoamérica",
      "actualización y seguridad web",
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const serviceSlugs = services.map((s) => s.slug);
