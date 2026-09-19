import type { Proyecto } from "./tipos";

/**
 * Real work, in English. The Spanish original lives in proyectos.es.ts.
 *
 * The screenshots in /public/proyectos are captures of the live sites, taken
 * on 6 September 2026. If you swap a screenshot, swap its `alt` too: the alt
 * describes the image, not the project.
 *
 * Rule for this list: only what can be verified by looking at the site.
 */
export const proyectos: Proyecto[] = [
  {
    slug: "eclipse-perfumeria",
    nombre: "Eclipse Perfumería",
    sector: "Perfume retail",
    ciudad: "Bogotá, Colombia",
    anio: 2026,
    servicio: "tiendas-online",
    servicioLabel: "Online store",
    resumen:
      "A perfume store with instalment payments, a catalogue split by family and gender, and advice on WhatsApp.",
    problema:
      "They sold through Instagram and WhatsApp. Every order was assembled by hand in the chat, and there was no way for someone to buy on their own, at night or on a Sunday.",
    solucion:
      "A full store with a payment gateway and Addi instalments, a catalogue split into ten categories, reviews from real customers, and a collection photo where you tap each bottle and it takes you to the product. The WhatsApp button is still there for anyone who'd rather be walked through it.",
    datos: [
      { label: "Instalments", value: "Addi" },
      { label: "Categories", value: "10" },
      { label: "Delivery", value: "All of Colombia" },
    ],
    stack: ["Shopify", "Liquid", "Addi", "WhatsApp Business"],
    url: null,
    capturas: [
      {
        src: "/proyectos/eclipse-producto.jpg",
        alt: "Product page for the Amber Oud Gold Edition perfume on Eclipse Perfumería: a photo of the bottle with its case, a price of $120,000, the option to pay in 3 instalments with Addi, and a three-step delivery timeline.",
        pie: "The product page says the price, the instalments and when it arrives. Without having to ask.",
      },
      {
        src: "/proyectos/eclipse-hero.jpg",
        alt: "Eclipse Perfumería home page with the Amor y Amistad campaign: two perfumes on a background of red roses and a button reading Descubre los dúos perfectos.",
        pie: "The home page changes with each campaign. They edit it themselves, without calling us.",
      },
      {
        src: "/proyectos/eclipse-shoppable.jpg",
        alt: "The Conoce la esencia de la colección section: a photo of several perfume bottles with white dots on top; tapping a dot brings up the product card on the right with its price and an add-to-cart button.",
        pie: "You tap a bottle in the photo and its price appears. It can be bought right there.",
      },
      {
        src: "/proyectos/eclipse-catalogo.jpg",
        alt: "Product grid for the niche collection with perfumes by Ariana Grande and Burberry, each showing brand, name, price and an add-to-cart button.",
        pie: "The catalogue loads fast and every card can be bought in one step.",
      },
      {
        src: "/proyectos/eclipse-resenas.jpg",
        alt: "The Experiencias que enamoran section with review cards from customers in Bogotá, each with stars, the comment and the name of whoever wrote it.",
        pie: "Reviews from real customers, with a name and a city.",
      },
    ],
  },
  {
    slug: "sexta-rueda",
    nombre: "Sexta Rueda",
    sector: "Heavy truck and bus parts",
    ciudad: "Bogotá, Colombia",
    anio: 2026,
    servicio: "paginas-web",
    servicioLabel: "Website with a catalogue",
    resumen:
      "A heavy-vehicle parts catalogue with search by reference number and quoting through WhatsApp.",
    problema:
      "Somebody buying a truck part doesn't search by a nice name: they search by the exact reference number or by the truck model. If they can't find it in thirty seconds, they call another supplier.",
    solucion:
      "A search box that understands reference numbers and models, six categories built around the failures that take a truck off the road, and a cart that instead of charging assembles the quote and sends it over WhatsApp.",
    datos: [
      { label: "Categories", value: "6" },
      { label: "Search", value: "By reference or model" },
      { label: "Checkout", value: "Quote via WhatsApp" },
    ],
    stack: ["Astro", "TypeScript", "WhatsApp Business"],
    url: null,
    capturas: [
      {
        src: "/proyectos/sextarueda-hero.jpg",
        alt: "Sexta Rueda home page on a black background with red stripes: the headline El repuesto que para tu mula aquí sí está, a reference search box at the top and the parts category menu.",
        pie: "The search box is the first thing you see. It's the only thing the customer wants.",
      },
      {
        src: "/proyectos/sextarueda-categorias.jpg",
        alt: "A grid of six parts categories — clutch kits, shock absorbers, steering, suspension, filters and brakes — each with a black icon, a short description and the number of references available.",
        pie: "Six categories, not forty. The ones that actually stop a truck.",
      },
    ],
  },
];
