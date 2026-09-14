import type { Proyecto } from "./tipos";

/**
 * Trabajo real, en español. La traducción vive en proyectos.en.ts.
 *
 * Las capturas de /public/proyectos son pantallazos de los sitios en vivo,
 * tomados el 6 de septiembre de 2026. Si cambias una captura, cambia también
 * su `alt`: el alt describe la imagen, no el proyecto.
 *
 * Regla de esta lista: solo entra lo que se puede verificar mirando el sitio.
 */
export const proyectos: Proyecto[] = [
  {
    slug: "eclipse-perfumeria",
    nombre: "Eclipse Perfumería",
    sector: "Perfumería",
    ciudad: "Bogotá, Colombia",
    anio: 2026,
    servicio: "tiendas-online",
    servicioLabel: "Tienda online",
    resumen:
      "Tienda online de perfumería con pago en cuotas, catálogo por familia y género, y asesoría por WhatsApp.",
    problema:
      "Vendían por Instagram y WhatsApp. Cada pedido se armaba a mano en el chat y no había forma de que alguien comprara solo, de noche o un domingo.",
    solucion:
      "Tienda completa con pasarela de pago y cuotas con Addi, catálogo dividido en diez categorías, reseñas de clientes reales y una imagen de la colección donde tocas cada frasco y te lleva al producto. El botón de WhatsApp sigue ahí para quien prefiere que lo asesoren.",
    datos: [
      { label: "Pago en cuotas", value: "Addi" },
      { label: "Categorías", value: "10" },
      { label: "Entrega", value: "Toda Colombia" },
    ],
    stack: ["Shopify", "Liquid", "Addi", "WhatsApp Business"],
    // La tienda está protegida con contraseña mientras terminan de cargar
    // inventario. Cuando salga a producción, pon aquí el dominio público.
    url: null,
    capturas: [
      {
        src: "/proyectos/eclipse-producto.jpg",
        alt: "Ficha del perfume Amber Oud Gold Edition en Eclipse Perfumería: foto del frasco con su estuche, precio de $120.000, la opción de pagarlo en 3 cuotas con Addi y una línea de tiempo de entrega de tres pasos.",
        pie: "La ficha de producto dice el precio, las cuotas y cuándo llega. Sin tener que preguntar.",
      },
      {
        src: "/proyectos/eclipse-hero.jpg",
        alt: "Portada de Eclipse Perfumería con la campaña de Amor y Amistad: dos perfumes sobre un fondo de rosas rojas y el botón Descubre los dúos perfectos.",
        pie: "La portada cambia por campaña. Ellos la editan solos, sin llamarnos.",
      },
      {
        src: "/proyectos/eclipse-shoppable.jpg",
        alt: "Sección Conoce la esencia de la colección: una foto de varios frascos de perfume con puntos blancos encima; al tocar un punto aparece a la derecha la tarjeta del producto con precio y botón de añadir al carrito.",
        pie: "Tocas un frasco en la foto y aparece su precio. Se compra sin salir de ahí.",
      },
      {
        src: "/proyectos/eclipse-catalogo.jpg",
        alt: "Grilla de productos de la colección de nicho con perfumes de Ariana Grande y Burberry, cada uno con marca, nombre, precio y botón de añadir al carrito.",
        pie: "El catálogo carga rápido y cada tarjeta se puede comprar de una.",
      },
      {
        src: "/proyectos/eclipse-resenas.jpg",
        alt: "Sección Experiencias que enamoran con tarjetas de reseñas de clientes de Bogotá, cada una con estrellas, el comentario y el nombre de quien lo escribió.",
        pie: "Reseñas de clientes de verdad, con nombre y ciudad.",
      },
    ],
  },
  {
    slug: "sexta-rueda",
    nombre: "Sexta Rueda",
    sector: "Repuestos para tractomula y bus",
    ciudad: "Bogotá, Colombia",
    anio: 2026,
    servicio: "paginas-web",
    servicioLabel: "Página web con catálogo",
    resumen:
      "Catálogo de repuestos pesados con buscador por referencia y cotización por WhatsApp.",
    problema:
      "El comprador de un repuesto no busca por nombre bonito: busca por la referencia exacta o por el modelo del camión. Si no la encuentra en treinta segundos, llama a otro proveedor.",
    solucion:
      "Buscador que entiende referencias y modelos, seis categorías armadas alrededor de las fallas que sacan un camión de la ruta, y un carrito que en vez de cobrar arma la cotización y la manda por WhatsApp.",
    datos: [
      { label: "Categorías", value: "6" },
      { label: "Búsqueda", value: "Por referencia o modelo" },
      { label: "Cierre", value: "Cotización por WhatsApp" },
    ],
    stack: ["Astro", "TypeScript", "WhatsApp Business"],
    // Todavía en desarrollo local. Cuando se publique, pon el dominio aquí.
    url: null,
    capturas: [
      {
        src: "/proyectos/sextarueda-hero.jpg",
        alt: "Portada de Sexta Rueda sobre fondo negro con franjas rojas: el titular El repuesto que para tu mula aquí sí está, un buscador de referencias arriba y el menú de categorías de repuestos.",
        pie: "El buscador es lo primero que ves. Es lo único que el cliente quiere.",
      },
      {
        src: "/proyectos/sextarueda-categorias.jpg",
        alt: "Grilla de seis categorías de repuestos —kits de embrague, amortiguadores, dirección, suspensión, filtros y frenos— cada una con su ícono en negro, una descripción corta y el número de referencias disponibles.",
        pie: "Seis categorías, no cuarenta. Las que de verdad paran un camión.",
      },
    ],
  },
];
