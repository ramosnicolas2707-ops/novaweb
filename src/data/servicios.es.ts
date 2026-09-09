import type { Servicio } from "./tipos";

/** Los cuatro servicios, en español. La traducción vive en servicios.en.ts. */
export const servicios: Servicio[] = [
  // ───────────────────────────────────────────────────────── PÁGINAS WEB ──
  {
    slug: "paginas-web",
    nav: "Páginas web",
    card: "Páginas web",
    cardLine: "Para que te encuentren y te escriban.",
    h1: "Páginas web que sí traen clientes",
    resumen:
      "NovaWeb hace páginas web a medida desde $900.000 la landing page y $2.200.000 el sitio completo, con entrega entre 2 y 5 semanas.",
    intro: [
      "Una página web tiene dos trabajos: que te encuentren en Google y que te escriban. Todo lo que hago apunta a esos dos.",
      "Te hago un sitio rápido, que se vea bien en el celular y que tenga el botón de WhatsApp donde toca. Sin plantillas recicladas y sin extensiones que se rompan en seis meses.",
    ],
    entrega: "Entre 2 y 5 semanas, según el plan.",
    siEsParaTi: [
      "Tienes un negocio andando y quieres que en internet se vea como se ve en persona.",
      "Quieres aparecer en Google cuando alguien busca lo que vendes.",
      "Cierras ventas por WhatsApp y necesitas que la página lleve a la gente hasta ahí.",
    ],
    otraCosa: [
      {
        texto: "Vas a vender productos con carrito y pago en línea.",
        ir: { href: "/servicios/tiendas-online", label: "Mira Tiendas online" },
      },
      {
        texto: "Ya tienes página y lo que quieres es ponerla al día.",
        ir: { href: "/servicios/rediseno", label: "Mira Rediseño" },
      },
      {
        texto:
          "Tu presupuesto todavía está por debajo de esto. Escríbeme igual y te digo por dónde arrancar, aunque sea sin mí.",
      },
    ],
    incluyeSiempre: [
      {
        title: "Se ve bien en el celular",
        detail:
          "Diseñado primero para celular, que es por donde te va a entrar el 80% de la gente.",
      },
      {
        title: "Carga en menos de dos segundos",
        detail:
          "Sitio estático: no hay base de datos que consultar ni servidor que despertar. Abre y ya.",
      },
      {
        title: "Listo para Google",
        detail:
          "Cada página con su título y su descripción escritos a mano, mapa del sitio y datos estructurados. No es un plugin: viene armado desde el código.",
      },
      {
        title: "Botón de WhatsApp que funciona",
        detail:
          "Con el mensaje ya escrito según la sección desde donde te escriben. Sabes de qué te están hablando antes de leer.",
      },
      {
        title: "El código es tuyo",
        detail:
          "Te entrego el repositorio. Si mañana quieres trabajar con otro, no tienes que pedirme permiso.",
      },
      {
        title: "Te enseño a usarla",
        detail:
          "Al entregarte grabo un video corto mostrándote dónde está cada cosa. Queda tuyo, para cuando se te olvide.",
      },
    ],
    noIncluye: [
      "Redacción de textos largos tipo blog (los títulos y textos de las secciones sí van incluidos)",
      "Sesión de fotos o video",
      "Logo o identidad de marca desde cero",
      "Pauta en Google o redes sociales",
    ],
    planes: [
      {
        name: "Landing page",
        price: 900000,
        billing: "unico",
        paraQuien: "Un solo servicio o producto que quieres empujar.",
        entrega: "Lista en 2 semanas",
        incluye: [
          "Una página, hasta 6 secciones",
          "Diseño a medida, no plantilla",
          "Botón de WhatsApp con mensaje armado",
          "Formulario de contacto",
          "Google Analytics conectado",
        ],
      },
      {
        name: "Sitio completo",
        price: 2200000,
        billing: "unico",
        paraQuien: "Un negocio con varios servicios que explicar.",
        entrega: "Listo en 5 semanas",
        destacado: true,
        incluye: [
          "Hasta 6 páginas (inicio, servicios, nosotros, contacto…)",
          "Diseño a medida página por página",
          "Todo lo de la landing, en todas las páginas",
          "SEO trabajado página por página",
          "Blog editable, si lo quieres",
        ],
      },
    ],
    extras: [
      { label: "Página extra", value: "$300.000" },
      { label: "Idioma adicional", value: "$450.000" },
      { label: "Blog editable", value: "$600.000" },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Colombia?",
        a: "Aquí, desde $900.000 una landing page y $2.200.000 un sitio completo, en pesos colombianos y sin sorpresas después. En el mercado vas a ver desde $300.000 (plantilla armada en una tarde) hasta más de $10.000.000 (agencia grande con equipo). Yo estoy en el medio: trabajo a medida, sin la estructura de costos de una agencia.",
      },
      {
        q: "¿En cuánto tiempo la tienes lista?",
        a: "Dos semanas la landing, cinco el sitio completo, contando desde que me pasas los textos y las fotos. El reloj arranca cuando tengo el material, no cuando pagas el anticipo. Si el material demora, la entrega demora.",
      },
      {
        q: "¿El hosting y el dominio están incluidos?",
        a: "El hosting sí: el sitio queda publicado en Vercel, que para un sitio estático no cuesta nada. El dominio lo compras tú (unos $60.000 al año un .com, $80.000 un .co) y queda a tu nombre, no al mío. Yo lo conecto.",
      },
      {
        q: "¿Puedo cambiar los textos yo mismo después?",
        a: "Si contratas el blog editable, sí: los cambias desde un panel, sin saber de código. Sin él, me los pides a mí y van dentro de las dos rondas incluidas. Pasadas esas, se cobran por hora a $60.000, o quedan cubiertos con un plan mensual.",
        ir: {
          href: "/servicios/mantenimiento",
          label: "Si quieres conocer los planes de mantenimiento, mira aquí",
        },
      },
      {
        q: "¿Qué pasa si no me gusta el diseño?",
        a: "Lo cambiamos. Primero te muestro el diseño y solo cuando te gusta me pongo a programar, así que los ajustes se hacen en el momento barato del proyecto y no cuando ya está todo armado. Van dos rondas de cambios incluidas, y en la práctica casi nunca se usan las dos.",
      },
    ],
    meta: {
      title: "Páginas web desde $900.000 en Colombia",
      description:
        "Páginas web a medida desde $900.000 la landing y $2.200.000 el sitio completo. Rápidas, listas para Google y con WhatsApp. Bogotá, para toda Latinoamérica.",
    },
  },

  // ─────────────────────────────────────────────────────── TIENDAS ONLINE ──
  {
    slug: "tiendas-online",
    nav: "Tiendas online",
    card: "Tiendas online",
    cardLine: "Para que te compren sin escribirte.",
    h1: "Tiendas online que venden solas",
    resumen:
      "NovaWeb desarrolla tiendas online desde $2.800.000, con pasarela de pago, cuotas y cierre por WhatsApp, entregadas entre 4 y 10 semanas.",
    intro: [
      "Si vendes por WhatsApp, cada venta te cuesta una conversación. Una tienda online cobra mientras duermes.",
      "Monto la tienda con catálogo real, pasarela de pago, pago en cuotas y el botón de WhatsApp intacto para quien igual prefiere que lo asesoren. Las dos puertas abiertas.",
    ],
    entrega: "Entre 4 y 10 semanas, según el tamaño del catálogo.",
    siEsParaTi: [
      "Ya vendes y el WhatsApp se te está quedando corto.",
      "Tienes fotos de tus productos, o puedes conseguirlas.",
      "Hay alguien que puede responder pedidos y despachar.",
    ],
    otraCosa: [
      {
        texto:
          "Lo que necesitas es que te encuentren y te escriban, no un carrito.",
        ir: { href: "/servicios/paginas-web", label: "Mira Páginas web" },
      },
      {
        texto:
          "Todavía no tienes producto ni proveedor. Primero eso: una tienda vacía no vende.",
      },
      {
        texto:
          "Quieres un marketplace con varios vendedores. Eso es otro proyecto y es más grande — escríbeme y lo hablamos con calma.",
      },
    ],
    incluyeSiempre: [
      {
        title: "Cobra de verdad",
        detail:
          "Pasarela conectada y probada con una compra real antes de entregarte. Wompi, Mercado Pago o la que uses.",
      },
      {
        title: "Pago en cuotas",
        detail:
          "Addi o Sistecrédito conectados. En Colombia sube el ticket promedio y baja el carrito abandonado.",
      },
      {
        title: "Catálogo que se busca",
        detail:
          "Filtros combinables y buscador que aguanta que escriban mal la marca.",
      },
      {
        title: "Cierre por WhatsApp",
        detail:
          "Botón que arma el mensaje con el carrito completo: productos, tallas, colores y total. Dejas de transcribir pedidos a mano.",
      },
      {
        title: "Tú manejas el inventario",
        detail:
          "Panel para subir productos, cambiar precios y marcar agotados. Sin llamarme.",
      },
      {
        title: "Te enseño a manejarla",
        detail:
          "Video corto al entregar: cómo subir un producto, cambiar un precio y marcar un agotado. Queda grabado para volver a verlo cuando toque.",
      },
    ],
    noIncluye: [
      "Fotografía de producto",
      "Carga masiva del catálogo inicial (se cotiza aparte según cuántos productos sean)",
      "Contabilidad, facturación electrónica o integración con la DIAN",
      "Logística o convenios con transportadoras",
    ],
    planes: [
      {
        name: "Esencial",
        price: 2800000,
        billing: "unico",
        paraQuien: "Catálogo chico, hasta 50 productos.",
        entrega: "Lista en 4 semanas",
        incluye: [
          "Hasta 50 productos",
          "Pasarela de pago conectada",
          "Carrito y checkout",
          "Cierre por WhatsApp",
          "Panel de inventario",
        ],
      },
      {
        name: "Profesional",
        price: 4400000,
        billing: "unico",
        paraQuien: "Catálogo mediano con tallas, colores o presentaciones.",
        entrega: "Lista en 7 semanas",
        destacado: true,
        incluye: [
          "Hasta 300 productos",
          "Variantes (talla, color, presentación) con inventario propio",
          "Filtros combinables y buscador tolerante a errores",
          "Pago en cuotas (Addi o Sistecrédito)",
          "Cupones y descuentos",
        ],
      },
      {
        name: "Élite",
        price: 7000000,
        billing: "unico",
        paraQuien: "Catálogo grande o algo que se sale de lo normal.",
        entrega: "Lista en 10 semanas",
        incluye: [
          "Productos sin límite",
          "Todo lo del Profesional",
          "Secciones comprables: tocas la foto y compras",
          "Reseñas de clientes",
          "Integración con tu sistema si lo tienes",
        ],
      },
    ],
    extras: [
      { label: "Carga de catálogo", value: "desde $400.000" },
      { label: "Pasarela adicional", value: "$350.000" },
      { label: "Suscripciones", value: "desde $900.000" },
    ],
    nota: "Las pasarelas cobran su propia comisión por transacción (entre 2,5% y 4% según cuál). Eso lo cobra la pasarela, no yo.",
    faq: [
      {
        q: "¿Cuánto cuesta una tienda online en Colombia?",
        a: "Desde $2.800.000 una tienda de hasta 50 productos y $4.400.000 una con variantes de talla y color. Encima va lo que cobre la pasarela por cada venta, entre 2,5% y 4%, que se lo lleva ella.",
      },
      {
        q: "¿Shopify o hecha a medida?",
        a: "Depende de ti, no de mí. Shopify si quieres administrarla sin depender de nadie y no te molesta pagar la mensualidad y la comisión de la plataforma. A medida si tienes algo raro que Shopify no hace, o si el volumen ya justifica quitarte esa comisión de encima. En la primera llamada te digo cuál te sirve, aunque sea la que me deja menos.",
      },
      {
        q: "¿Puedo vender sin pasarela, solo por WhatsApp?",
        a: "Sí, y muchos empiezan así. El carrito arma el pedido completo y lo manda al chat. Después conectas la pasarela cuando quieras: no hay que rehacer nada.",
      },
      {
        q: "¿Quién sube los productos?",
        a: "Tú, desde el panel, y te enseño cómo. Si son muchos y prefieres que lo haga yo, se cotiza aparte desde $400.000 según la cantidad y en qué formato tengas la información.",
      },
      {
        q: "¿Y el pago en cuotas?",
        a: "Addi y Sistecrédito se conectan como cualquier otra pasarela. Tú abres la cuenta con ellos, yo la conecto. En Colombia mueve la aguja: la gente compra más caro cuando lo ve dividido en tres.",
      },
    ],
    meta: {
      title: "Tiendas online desde $2.800.000 en Colombia",
      description:
        "Tiendas online con pasarela de pago, cuotas con Addi y cierre por WhatsApp. Desde $2.800.000. Shopify o a medida, según lo que te sirva.",
    },
  },

  // ────────────────────────────────────────────────────────────  REDISEÑO ──
  {
    slug: "rediseno",
    nav: "Rediseño",
    card: "Rediseño",
    cardLine: "Ya tienes página. Está vieja.",
    h1: "Rediseño de páginas que ya existen",
    resumen:
      "NovaWeb rediseña páginas web existentes desde $950.000, conservando el posicionamiento en Google que el sitio ya tiene.",
    intro: [
      "Tu página funciona, pero se ve del 2016, carga lento y en el celular se descuadra. No hace falta botarla.",
      "Rediseño lo que ya tienes sin perder lo que ya ganaste en Google. Ese es el punto: un sitio nuevo arranca de cero en buscadores, un rediseño bien hecho no.",
    ],
    entrega: "Entre 2 y 4 semanas.",
    siEsParaTi: [
      "Tu página tiene más de tres años y se nota.",
      "En el celular se descuadra, o toca hacer zoom para leerla.",
      "Tarda demasiado en cargar y sospechas que pierdes gente ahí.",
      "Ya apareces en Google y no quieres arriesgar eso.",
    ],
    otraCosa: [
      {
        texto: "Todavía no tienes página. Eso es empezar de cero, no rediseñar.",
        ir: { href: "/servicios/paginas-web", label: "Mira Páginas web" },
      },
      {
        texto:
          "Tu sitio es una tienda con cientos de productos y variantes.",
        ir: { href: "/servicios/tiendas-online", label: "Mira Tiendas online" },
      },
      {
        texto:
          "Solo quieres cambiar el logo y los colores. Para eso te sale más a cuenta tu diseñador de siempre.",
      },
    ],
    incluyeSiempre: [
      {
        title: "No pierdes tu Google",
        detail:
          "Reviso qué páginas tuyas están posicionadas y las conservo con la misma dirección. Si alguna tiene que cambiar, se redirige. Nadie llega a un error 404.",
      },
      {
        title: "Diseño nuevo de verdad",
        detail:
          "No es cambiar los colores del tema. Es rehacer la estructura de cada página pensando en qué quieres que haga el visitante.",
      },
      {
        title: "Se arregla el celular",
        detail:
          "Rehecho pensando primero en el celular, que suele ser exactamente lo que está roto.",
      },
      {
        title: "Se pone rápido",
        detail:
          "Imágenes comprimidas y servidas al tamaño correcto, y fuera todo lo que carga sin que nadie lo mire.",
      },
      {
        title: "Antes y después medido",
        detail:
          "Te muestro la velocidad y la nota de la página antes y después. Con números, no con opiniones.",
      },
      {
        title: "Nada se pierde en el camino",
        detail:
          "Antes de tocar nada guardo una copia completa de tu sitio actual. Si algo del diseño nuevo no te convence, hay a dónde volver.",
      },
    ],
    noIncluye: [
      "Escribir el contenido de nuevo (se reordena y se ajusta el que ya tienes)",
      "Fotos nuevas",
      "Migrar de plataforma si tu sitio está en algo muy cerrado (se revisa primero)",
      "Recuperar posiciones que ya habías perdido antes de llamarme",
    ],
    planes: [
      {
        name: "Lavada de cara",
        price: 950000,
        billing: "unico",
        paraQuien: "El contenido sirve. Lo que está mal es cómo se ve.",
        entrega: "Listo en 2 semanas",
        incluye: [
          "Hasta 4 páginas",
          "Diseño nuevo con tu contenido actual",
          "Arreglo del celular",
          "Optimización de velocidad",
          "Direcciones y redirecciones cuidadas",
        ],
      },
      {
        name: "Rediseño completo",
        price: 2100000,
        billing: "unico",
        paraQuien: "Hay que replantear qué dice el sitio y en qué orden.",
        entrega: "Listo en 4 semanas",
        destacado: true,
        incluye: [
          "Hasta 8 páginas",
          "Estructura replanteada de cero",
          "Diseño nuevo y textos reordenados",
          "SEO revisado página por página",
          "Todo lo de la lavada de cara",
        ],
      },
    ],
    extras: [
      { label: "Página extra", value: "$250.000" },
      { label: "Revisión previa de SEO", value: "$350.000" },
      { label: "Migrar de plataforma", value: "se cotiza" },
    ],
    nota: "Antes de cotizarte miro tu sitio y te digo si de verdad necesitas un rediseño. A veces con arreglar tres cosas basta y te lo digo, aunque me quede sin el trabajo.",
    faq: [
      {
        q: "¿Voy a perder mi posición en Google?",
        a: "No, si se hace bien. Cada página conserva su misma dirección, y la que tenga que cambiar se redirige a la nueva. Google entiende una redirección bien hecha y traslada el posicionamiento. Lo que sí pasa es que la primera semana los números se mueven un poco mientras Google vuelve a rastrear todo: es normal y se acomoda.",
      },
      {
        q: "¿Cuánto cuesta rediseñar una página web?",
        a: "Desde $950.000 si el contenido sirve y solo hay que rehacer el diseño, y $2.100.000 si además hay que replantear qué dice el sitio y en qué orden. Casi siempre sale más barato que hacerla de nuevo, porque el contenido y el posicionamiento ya están.",
      },
      {
        q: "Mi página está en WordPress. ¿Toca cambiarla?",
        a: "No necesariamente. Si WordPress te sirve y sabes usarlo, se rediseña ahí. Si lo que te tiene lento es una montaña de plugins, te propongo pasarlo a un sitio estático y te explico qué ganas y qué pierdes. Tú decides.",
      },
      {
        q: "¿Cómo sé si necesito un rediseño?",
        a: "Ábrela en tu celular ahora mismo. Si tienes que hacer zoom para leer, si algo se sale del margen, o si tarda más de tres segundos en aparecer, ya tienes la respuesta. Igual mándamela y te digo qué le veo, sin costo.",
      },
    ],
    meta: {
      title: "Rediseño de páginas web desde $950.000",
      description:
        "Rediseño tu página sin perder lo que ya tienes en Google. Desde $950.000. Se arregla el celular, la velocidad y el diseño.",
    },
  },

  // ─────────────────────────────────────────────────────── MANTENIMIENTO ──
  {
    slug: "mantenimiento",
    nav: "Mantenimiento",
    card: "Mantenimiento",
    cardLine: "Para que no se caiga y nadie se entere.",
    h1: "Mantenimiento mensual",
    resumen:
      "NovaWeb ofrece mantenimiento web mensual desde $95.000 al mes, con hosting, copias de seguridad, monitoreo y horas de cambios incluidas.",
    intro: [
      "Un sitio publicado no se cuida solo. Se cae, se desactualiza, alguien cambia un precio y nadie lo sube.",
      "El plan mensual es para no tener que pensar en eso. Los cambios se piden por WhatsApp y quedan hechos.",
    ],
    entrega: "Arranca el mismo día que contratas.",
    siEsParaTi: [
      "Cambias precios, promociones o fotos seguido.",
      "No quieres aprender a editar la página ni tienes a quién ponerle esa tarea.",
      "Prefieres enterarte de que el sitio se cayó por mí y no por un cliente.",
    ],
    otraCosa: [
      {
        texto:
          "Tu página no cambia nunca y no te preocupa que se caiga un rato. Entonces no lo contrates: no te va a servir.",
      },
      {
        texto:
          "Ya tienes a alguien de sistemas que lo maneja. Perfecto, para eso está.",
      },
      {
        texto: "Lo que quieres es rehacer el sitio, no mantenerlo.",
        ir: { href: "/servicios/rediseno", label: "Mira Rediseño" },
      },
    ],
    incluyeSiempre: [
      {
        title: "Hosting incluido",
        detail: "El sitio publicado y con certificado de seguridad al día.",
      },
      {
        title: "Copias de seguridad",
        detail: "Automáticas. Si algo se daña, se devuelve a como estaba.",
      },
      {
        title: "Monitoreo",
        detail:
          "Se revisa cada 5 minutos que el sitio esté arriba. Si se cae, me entero yo primero.",
      },
      {
        title: "Cambios por WhatsApp",
        detail:
          "Me escribes el cambio y queda. Sin tiquetes, sin formularios, sin correos.",
      },
      {
        title: "Reporte de lo que pasó",
        detail:
          "Cada mes te llega en pocas líneas qué se cambió, cuánto tiempo estuvo arriba el sitio y qué se viene. Sin jerga.",
      },
      {
        title: "Sin permanencia",
        detail:
          "Cancelas cuando quieras avisando antes del corte del mes. El sitio queda tuyo y te ayudo a moverlo a donde sea.",
      },
    ],
    noIncluye: [
      "Páginas o secciones nuevas (eso es un proyecto aparte)",
      "Rediseño",
      "Manejo de redes sociales o pauta",
      "Escribir contenido",
    ],
    planes: [
      {
        name: "Básico",
        price: 95000,
        billing: "mes",
        paraQuien: "El sitio casi no cambia. Solo que no se caiga.",
        entrega: "Te respondo en 48 h",
        incluye: [
          "Hosting y certificado de seguridad",
          "Copias de seguridad semanales",
          "Monitoreo cada 5 minutos",
          "1 hora de cambios al mes",
        ],
      },
      {
        name: "Activo",
        price: 120000,
        billing: "mes",
        paraQuien: "Cambias precios o promociones cada mes.",
        entrega: "Te respondo en 24 h",
        destacado: true,
        incluye: [
          "Todo lo del Básico",
          "Copias de seguridad diarias",
          "3 horas de cambios al mes",
          "Reporte mensual de visitas",
        ],
      },
      {
        name: "Prioritario",
        price: 199000,
        billing: "mes",
        paraQuien: "El sitio es tu canal de venta y no puede fallar.",
        entrega: "Te respondo en 4 h",
        incluye: [
          "Todo lo del Activo",
          "8 horas de cambios al mes",
          "Ajustes de velocidad y SEO cada trimestre",
          "WhatsApp directo conmigo",
        ],
      },
    ],
    extras: [
      { label: "Hora adicional", value: "$60.000" },
      { label: "Urgencia fuera de horario", value: "$120.000 la hora" },
    ],
    nota: "Las horas no se acumulan de un mes a otro. Si un mes no las usas, se pierden; si te pasas, se cobran a $60.000 la hora y te aviso antes.",
    faq: [
      {
        q: "¿Necesito el plan de mantenimiento?",
        a: "No es obligatorio. Si tu sitio no cambia nunca, no lo contrates. Tiene sentido si cambias cosas seguido o si el sitio te trae clientes y no te puedes dar el lujo de que se caiga sin que nadie se entere.",
      },
      {
        q: "¿Qué cuenta como una hora de cambios?",
        a: "Cambiar textos, precios, fotos, agregar productos, ajustar una sección. Lo que no cuenta es una página nueva o un rediseño: eso se cotiza aparte y te lo digo antes de tocar nada.",
      },
      {
        q: "¿Puedo cancelar cuando quiera?",
        a: "Sí, sin permanencia ni penalidad. Avisas antes del corte del mes y ya. El sitio queda tuyo y te ayudo a moverlo a donde quieras.",
      },
      {
        q: "¿Solo mantienes sitios que tú hiciste?",
        a: "No, pero primero lo reviso. Si está construido con algo que se va a caer solo, te lo digo y te propongo un rediseño en vez de venderte un plan que no va a alcanzar.",
      },
    ],
    meta: {
      title: "Mantenimiento web desde $95.000 al mes",
      description:
        "Hosting, copias de seguridad, monitoreo y horas de cambios incluidas. Desde $95.000 al mes, sin permanencia. Cambios por WhatsApp.",
    },
  },
];
