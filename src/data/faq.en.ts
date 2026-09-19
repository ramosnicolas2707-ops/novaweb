import type { Faq } from "./tipos";

/**
 * The home page questions, in English.
 *
 * Same rule as the Spanish file: these are written against what a stranger
 * TYPES INTO GOOGLE before they know who to hire —"how much does a website
 * cost", "how long does it take", "do I need a store or a site"— and every
 * answer opens with the hard number. Google quotes the first sentence.
 *
 * Prices stay in Colombian pesos here too. They are the currency the work is
 * priced in; the dollar figure on the site is a conversion, and a converted
 * number written into a sentence goes stale the day the rate moves.
 */
export const faqHome: Faq[] = [
  {
    q: "How much does a website cost?",
    a: "A one-page landing costs COP $900,000 and a full site of up to six pages, COP $2,200,000. Both are one-off payments, not a subscription. An online store starts at COP $2,800,000 because it carries a payment gateway, a cart and inventory. The prices are published on this site: you don't have to write in to get a quote.",
    ir: { href: "/servicios/paginas-web", label: "See what each plan includes" },
  },
  {
    q: "How long does it take?",
    a: "A landing page is ready in one week and a full site in four. An online store takes between three and nine weeks depending on the size of the catalogue. The clock starts when we have your copy and photos, not when you sign: that's the part that usually holds things up, and it's worth knowing beforehand.",
  },
  {
    q: "Do I need a website or an online store?",
    a: "If you want to be found and written to, it's a website. If you want to be bought from without talking to anyone —at night, on a Sunday, without being asked the price— it's an online store. The difference isn't the design, it's taking the money: a store carries a payment gateway, a cart and inventory, which is why it costs more and takes longer.",
    ir: { href: "/servicios/tiendas-online", label: "See online stores" },
  },
  {
    q: "Will my site show up on Google?",
    a: "It will, but not overnight. We hand the site over with everything technical Google asks for —speed, a proper phone version, its own title and description on every page, structured data and a sitemap— which is the part that's actually up to us. Ranking first for a heavily contested search also depends on time and on other sites linking to you. Be wary of anyone who promises it.",
  },
  {
    q: "What do I need before we start?",
    a: "Knowing what you sell and who you sell it to is enough to start talking. To build, we need your copy, your photos and your logo if you have one. If you don't have copy, we write it from a call; if you don't have photos, we tell you which ones you need before you spend money on a photographer.",
  },
  {
    q: "Can I change things myself afterwards?",
    a: "Yes. In an online store you manage the products, prices and promotions yourself from a panel, without calling us. On a website, text and photo changes are done by us, and that's what maintenance is for, from COP $95,000 a month, which also covers hosting, backups and monitoring. There's no lock-in.",
    ir: { href: "/servicios/mantenimiento", label: "See maintenance" },
  },
  {
    q: "My site is old. Should I scrap it and build a new one?",
    a: "You don't need to, and it's usually a bad idea. A new site starts from zero in search engines and throws away whatever the old one had earned. A redesign keeps that history and fixes what's in the way: the speed, the phone version and the design. From COP $950,000.",
    ir: { href: "/servicios/rediseno", label: "See redesigns" },
  },
  {
    q: "Do you work with businesses outside Colombia?",
    a: "Yes. We work with businesses across Latin America and the United States. We invoice in pesos or dollars —you can see prices in both currencies on this site— and we're available 8 to 6 Bogotá time, which is 8 to 6 on the US East Coast and 5 to 3 on the West Coast.",
  },
  {
    q: "How does payment work?",
    a: "50% to start and the rest on delivery. We don't charge a monthly fee for the site: the site is yours. The only monthly thing, and only if you want it, is maintenance.",
  },
];
