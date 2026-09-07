import type { Servicio } from "./tipos";

/**
 * The four services, in English. The Spanish original lives in servicios.es.ts.
 *
 * Prices are the same numbers: they are always stored in Colombian pesos and
 * converted to dollars at render time (see Precio.tsx). Prose keeps COP so it
 * never goes stale — the exchange rate lives in one place only.
 *
 * Internal links have no language prefix here. The component adds /es or /en.
 */
export const servicios: Servicio[] = [
  // ──────────────────────────────────────────────────────────── WEBSITES ──
  {
    slug: "paginas-web",
    nav: "Websites",
    card: "Websites",
    cardLine: "So people find you and write to you.",
    h1: "Websites that actually bring in clients",
    resumen:
      "Meridiano builds custom websites from COP $900,000 for a landing page and COP $2,200,000 for a full site, delivered in 2 to 5 weeks.",
    intro: [
      "A website has two jobs: getting you found on Google, and getting people to write to you. Everything I build points at those two.",
      "You get a fast site that looks right on a phone and has the WhatsApp button where it belongs. No recycled templates and no plugins that break in six months.",
    ],
    entrega: "2 to 5 weeks, depending on the plan.",
    siEsParaTi: [
      "You have a running business and you want it to look online the way it looks in person.",
      "You want to show up on Google when someone searches for what you sell.",
      "You close sales on WhatsApp and you need the site to take people there.",
    ],
    otraCosa: [
      {
        texto: "You're going to sell products with a cart and online payment.",
        ir: { href: "/servicios/tiendas-online", label: "See Online stores" },
      },
      {
        texto: "You already have a site and you want to bring it up to date.",
        ir: { href: "/servicios/rediseno", label: "See Redesign" },
      },
      {
        texto:
          "Your budget is still below this. Write to me anyway and I'll tell you where to start, even if it's without me.",
      },
    ],
    incluyeSiempre: [
      {
        title: "It looks right on a phone",
        detail:
          "Designed for the phone first, because that's where 80% of your visitors will come from.",
      },
      {
        title: "Loads in under two seconds",
        detail:
          "A static site: no database to query, no server to wake up. It opens and it's there.",
      },
      {
        title: "Ready for Google",
        detail:
          "Every page with its own title and description written by hand, a sitemap and structured data. It isn't a plugin: it's built into the code.",
      },
      {
        title: "A WhatsApp button that works",
        detail:
          "The message is already written based on the section they clicked from. You know what they're asking about before you read it.",
      },
      {
        title: "The code is yours",
        detail:
          "I hand over the repository. If tomorrow you want to work with someone else, you don't have to ask my permission.",
      },
      {
        title: "I show you how to use it",
        detail:
          "When I hand it over I record a short video showing you where everything is. It's yours to keep, for when you forget.",
      },
    ],
    noIncluye: [
      "Long-form writing like blog posts (headlines and section copy are included)",
      "Photo or video shoots",
      "A logo or brand identity from scratch",
      "Google or social media advertising",
    ],
    planes: [
      {
        name: "Landing page",
        price: 900000,
        billing: "unico",
        paraQuien: "One service or product you want to push.",
        entrega: "Ready in 2 weeks",
        incluye: [
          "One page, up to 6 sections",
          "Custom design, not a template",
          "WhatsApp button with the message pre-written",
          "Contact form",
          "Google Analytics connected",
        ],
      },
      {
        name: "Full site",
        price: 2200000,
        billing: "unico",
        paraQuien: "A business with several services to explain.",
        entrega: "Ready in 5 weeks",
        destacado: true,
        incluye: [
          "Up to 6 pages (home, services, about, contact…)",
          "Custom design, page by page",
          "Everything from the landing page, on every page",
          "SEO worked page by page",
          "An editable blog, if you want one",
        ],
      },
    ],
    extras: [
      { label: "Extra page", value: "COP $300,000" },
      { label: "Additional language", value: "COP $450,000" },
      { label: "Editable blog", value: "COP $600,000" },
    ],
    faq: [
      {
        q: "How much does a website cost in Colombia?",
        a: "Here, from COP $900,000 for a landing page and COP $2,200,000 for a full site, with no surprises afterwards. Around the market you'll see anything from COP $300,000 (a template thrown together in an afternoon) to over COP $10,000,000 (a large agency with a team). I sit in the middle: custom work, without an agency's cost structure.",
      },
      {
        q: "How long does it take?",
        a: "Two weeks for a landing page, five for a full site, counting from the moment you send me the copy and the photos. The clock starts when I have the material, not when you pay the deposit. If the material is late, delivery is late.",
      },
      {
        q: "Are hosting and the domain included?",
        a: "Hosting yes: the site is published on Vercel, which costs nothing for a static site. You buy the domain yourself (around COP $60,000 a year for a .com, COP $80,000 for a .co) and it stays in your name, not mine. I connect it.",
      },
      {
        q: "Can I change the copy myself afterwards?",
        a: "If you take the editable blog, yes: you change it from a panel, no code needed. Without it, you ask me and the changes go inside the two included rounds. After those, they're billed by the hour at COP $60,000, or covered by a monthly plan.",
        ir: {
          href: "/servicios/mantenimiento",
          label: "If you want to see the maintenance plans, look here",
        },
      },
      {
        q: "What if I don't like the design?",
        a: "We change it. I show you the design first and only start coding once you like it, so adjustments happen at the cheap point of the project instead of when everything is already built. Two rounds of changes are included, and in practice the second one is rarely used.",
      },
    ],
    meta: {
      title: "Websites from COP $900,000, built in Colombia",
      description:
        "Custom websites from COP $900,000 for a landing page and COP $2,200,000 for a full site. Fast, ready for Google and wired to WhatsApp. Based in Bogotá.",
    },
  },

  // ──────────────────────────────────────────────────────── ONLINE STORES ──
  {
    slug: "tiendas-online",
    nav: "Online stores",
    card: "Online stores",
    cardLine: "So people buy without writing to you.",
    h1: "Online stores that sell on their own",
    resumen:
      "Meridiano builds online stores from COP $2,800,000, with a payment gateway, instalments and WhatsApp checkout, delivered in 4 to 10 weeks.",
    intro: [
      "If you sell on WhatsApp, every sale costs you a conversation. An online store takes money while you sleep.",
      "I set up the store with a real catalogue, a payment gateway, instalment payments and the WhatsApp button left exactly where it is for the people who still want to be walked through it. Both doors open.",
    ],
    entrega: "4 to 10 weeks, depending on the size of the catalogue.",
    siEsParaTi: [
      "You already sell and WhatsApp is starting to be too small for it.",
      "You have photos of your products, or you can get them.",
      "There's someone who can answer orders and ship them.",
    ],
    otraCosa: [
      {
        texto:
          "What you need is to be found and written to, not a shopping cart.",
        ir: { href: "/servicios/paginas-web", label: "See Websites" },
      },
      {
        texto:
          "You don't have a product or a supplier yet. That comes first: an empty store sells nothing.",
      },
      {
        texto:
          "You want a marketplace with several sellers. That's a different, bigger project — write to me and let's talk it through.",
      },
    ],
    incluyeSiempre: [
      {
        title: "It actually takes money",
        detail:
          "The gateway is connected and tested with a real purchase before I hand it over. Wompi, Mercado Pago, or whichever one you use.",
      },
      {
        title: "Instalment payments",
        detail:
          "Addi or Sistecrédito connected. In Colombia that raises the average order and lowers cart abandonment.",
      },
      {
        title: "A catalogue people can search",
        detail:
          "Combinable filters and a search box that survives a misspelled brand name.",
      },
      {
        title: "WhatsApp checkout",
        detail:
          "A button that builds the message with the whole cart: products, sizes, colours and total. You stop retyping orders by hand.",
      },
      {
        title: "You run the inventory",
        detail:
          "A panel to add products, change prices and mark things out of stock. Without calling me.",
      },
      {
        title: "I show you how to run it",
        detail:
          "A short video on delivery: how to add a product, change a price and mark something sold out. It stays recorded, to watch again when you need it.",
      },
    ],
    noIncluye: [
      "Product photography",
      "Bulk loading of the initial catalogue (quoted separately, depending on how many products)",
      "Accounting, electronic invoicing or DIAN integration",
      "Logistics or courier agreements",
    ],
    planes: [
      {
        name: "Essential",
        price: 2800000,
        billing: "unico",
        paraQuien: "A small catalogue, up to 50 products.",
        entrega: "Ready in 4 weeks",
        incluye: [
          "Up to 50 products",
          "Payment gateway connected",
          "Cart and checkout",
          "WhatsApp checkout",
          "Inventory panel",
        ],
      },
      {
        name: "Professional",
        price: 4400000,
        billing: "unico",
        paraQuien: "A mid-sized catalogue with sizes, colours or formats.",
        entrega: "Ready in 7 weeks",
        destacado: true,
        incluye: [
          "Up to 300 products",
          "Variants (size, colour, format) with their own stock",
          "Combinable filters and typo-tolerant search",
          "Instalment payments (Addi or Sistecrédito)",
          "Coupons and discounts",
        ],
      },
      {
        name: "Elite",
        price: 7000000,
        billing: "unico",
        paraQuien: "A large catalogue, or something out of the ordinary.",
        entrega: "Ready in 10 weeks",
        incluye: [
          "Unlimited products",
          "Everything in Professional",
          "Shoppable sections: tap the photo and buy",
          "Customer reviews",
          "Integration with your own system, if you have one",
        ],
      },
    ],
    extras: [
      { label: "Catalogue loading", value: "from COP $400,000" },
      { label: "Additional gateway", value: "COP $350,000" },
      { label: "Subscriptions", value: "from COP $900,000" },
    ],
    nota: "Payment gateways charge their own commission per transaction (between 2.5% and 4%, depending on which one). That's charged by the gateway, not by me.",
    faq: [
      {
        q: "How much does an online store cost in Colombia?",
        a: "From COP $2,800,000 for a store with up to 50 products, and COP $4,400,000 for one with size and colour variants. On top of that sits whatever the payment gateway charges per sale, between 2.5% and 4%, which goes to them.",
      },
      {
        q: "Shopify or custom-built?",
        a: "That depends on you, not on me. Shopify if you want to run it without depending on anyone and you don't mind paying the monthly fee and the platform's commission. Custom if you have something unusual that Shopify won't do, or if your volume already justifies getting that commission off your back. On the first call I'll tell you which one suits you, even when it's the one that pays me less.",
      },
      {
        q: "Can I sell without a gateway, on WhatsApp only?",
        a: "Yes, and plenty of people start that way. The cart assembles the full order and sends it to the chat. You connect the gateway later whenever you want: nothing has to be rebuilt.",
      },
      {
        q: "Who uploads the products?",
        a: "You do, from the panel, and I teach you how. If there are a lot of them and you'd rather I did it, that's quoted separately from COP $400,000 depending on the quantity and the format your information is in.",
      },
      {
        q: "What about instalment payments?",
        a: "Addi and Sistecrédito connect like any other gateway. You open the account with them, I connect it. In Colombia it moves the needle: people buy more expensive things when they see it split into three.",
      },
    ],
    meta: {
      title: "Online stores from COP $2,800,000 in Colombia",
      description:
        "Online stores with a payment gateway, Addi instalments and WhatsApp checkout. From COP $2,800,000. Shopify or custom, whichever suits you.",
    },
  },

  // ──────────────────────────────────────────────────────────── REDESIGN ──
  {
    slug: "rediseno",
    nav: "Redesign",
    card: "Redesign",
    cardLine: "You already have a site. It looks old.",
    h1: "Redesigning sites that already exist",
    resumen:
      "Meridiano redesigns existing websites from COP $1,200,000, keeping the Google ranking the site already has.",
    intro: [
      "Your site works, but it looks like 2016, it loads slowly and it falls apart on a phone. You don't have to throw it away.",
      "I redesign what you already have without losing what you already earned on Google. That's the whole point: a brand-new site starts from zero in search, and a redesign done properly does not.",
    ],
    entrega: "2 to 4 weeks.",
    siEsParaTi: [
      "Your site is more than three years old and it shows.",
      "On a phone it breaks, or you have to zoom in to read it.",
      "It takes too long to load and you suspect you're losing people there.",
      "You already show up on Google and you don't want to risk that.",
    ],
    otraCosa: [
      {
        texto:
          "You don't have a site yet. That's starting from scratch, not redesigning.",
        ir: { href: "/servicios/paginas-web", label: "See Websites" },
      },
      {
        texto: "Your site is a store with hundreds of products and variants.",
        ir: { href: "/servicios/tiendas-online", label: "See Online stores" },
      },
      {
        texto:
          "You only want to change the logo and the colours. Your usual designer will do that for less.",
      },
    ],
    incluyeSiempre: [
      {
        title: "You don't lose your Google ranking",
        detail:
          "I check which of your pages are ranking and keep them at the same address. Anything that has to change gets redirected. Nobody lands on a 404.",
      },
      {
        title: "A real redesign",
        detail:
          "Not swapping the theme colours. Rebuilding the structure of each page around what you want the visitor to do.",
      },
      {
        title: "The phone gets fixed",
        detail:
          "Rebuilt phone-first, which is usually exactly the part that's broken.",
      },
      {
        title: "It gets fast",
        detail:
          "Images compressed and served at the right size, and everything that loads without anyone looking at it taken out.",
      },
      {
        title: "Before and after, measured",
        detail:
          "I show you the speed and the page score before and after. With numbers, not opinions.",
      },
      {
        title: "Nothing gets lost on the way",
        detail:
          "Before touching anything I keep a full copy of your current site. If some part of the new design doesn't convince you, there's somewhere to go back to.",
      },
    ],
    noIncluye: [
      "Rewriting the content (the copy you have is reordered and adjusted)",
      "New photos",
      "Migrating off a very closed platform (checked first)",
      "Recovering rankings you had already lost before calling me",
    ],
    planes: [
      {
        name: "Facelift",
        price: 1200000,
        billing: "unico",
        paraQuien: "The content works. What's wrong is how it looks.",
        entrega: "Ready in 2 weeks",
        incluye: [
          "Up to 4 pages",
          "New design using your current content",
          "The phone version fixed",
          "Speed optimisation",
          "Addresses and redirects handled carefully",
        ],
      },
      {
        name: "Full redesign",
        price: 2600000,
        billing: "unico",
        paraQuien: "The site needs rethinking: what it says and in what order.",
        entrega: "Ready in 4 weeks",
        destacado: true,
        incluye: [
          "Up to 8 pages",
          "Structure rethought from scratch",
          "New design and reordered copy",
          "SEO reviewed page by page",
          "Everything in the facelift",
        ],
      },
    ],
    extras: [
      { label: "Extra page", value: "COP $250,000" },
      { label: "SEO review beforehand", value: "COP $350,000" },
      { label: "Platform migration", value: "quoted" },
    ],
    nota: "Before I quote you I look at your site and tell you whether you actually need a redesign. Sometimes fixing three things is enough, and I'll say so even when it costs me the job.",
    faq: [
      {
        q: "Will I lose my Google ranking?",
        a: "Not if it's done properly. Every page keeps the same address, and anything that has to change gets redirected to the new one. Google understands a well-made redirect and carries the ranking across. What does happen is that the numbers move around a little in the first week while Google re-crawls everything: that's normal and it settles.",
      },
      {
        q: "How much does a website redesign cost?",
        a: "From COP $1,200,000 if the content works and only the design needs rebuilding, and COP $2,600,000 if what the site says and in what order also needs rethinking. It's almost always cheaper than starting again, because the content and the ranking are already there.",
      },
      {
        q: "My site is on WordPress. Do I have to move?",
        a: "Not necessarily. If WordPress works for you and you know how to use it, we redesign there. If what's making it slow is a mountain of plugins, I'll propose moving it to a static site and explain what you gain and what you lose. You decide.",
      },
      {
        q: "How do I know if I need a redesign?",
        a: "Open it on your phone right now. If you have to zoom in to read, if something spills off the edge, or if it takes more than three seconds to appear, you already have your answer. Send it to me anyway and I'll tell you what I see, at no cost.",
      },
    ],
    meta: {
      title: "Website redesign from COP $1,200,000",
      description:
        "I redesign your site without losing what you already have on Google. From COP $1,200,000. The phone version, the speed and the design, all fixed.",
    },
  },

  // ──────────────────────────────────────────────────────── MAINTENANCE ──
  {
    slug: "mantenimiento",
    nav: "Maintenance",
    card: "Maintenance",
    cardLine: "So it doesn't go down and nobody notices.",
    h1: "Monthly maintenance",
    resumen:
      "Meridiano offers monthly website maintenance from COP $95,000 a month, with hosting, backups, monitoring and hours of changes included.",
    intro: [
      "A published site doesn't look after itself. It goes down, it goes stale, someone changes a price and nobody puts it up.",
      "The monthly plan exists so you don't have to think about that. Changes are requested on WhatsApp and they get done.",
    ],
    entrega: "Starts the same day you sign up.",
    siEsParaTi: [
      "You change prices, promotions or photos often.",
      "You don't want to learn to edit the site and there's nobody to hand that task to.",
      "You'd rather hear from me that the site went down than from a customer.",
    ],
    otraCosa: [
      {
        texto:
          "Your site never changes and you're not worried about it being down for a while. Then don't take this: it won't be worth it to you.",
      },
      {
        texto:
          "You already have someone in IT who handles it. Perfect, that's what they're there for.",
      },
      {
        texto: "What you want is to rebuild the site, not maintain it.",
        ir: { href: "/servicios/rediseno", label: "See Redesign" },
      },
    ],
    incluyeSiempre: [
      {
        title: "Hosting included",
        detail: "The site published and the security certificate kept current.",
      },
      {
        title: "Backups",
        detail:
          "Automatic. If something breaks, it goes back to how it was.",
      },
      {
        title: "Monitoring",
        detail:
          "The site is checked every 5 minutes. If it goes down, I find out first.",
      },
      {
        title: "Changes by WhatsApp",
        detail:
          "You send me the change and it's done. No tickets, no forms, no emails.",
      },
      {
        title: "A report of what happened",
        detail:
          "Each month you get a few lines: what changed, how long the site was up, and what's coming. No jargon.",
      },
      {
        title: "No lock-in",
        detail:
          "Cancel whenever you like by telling me before the monthly cut-off. The site stays yours and I'll help you move it anywhere.",
      },
    ],
    noIncluye: [
      "New pages or sections (that's a separate project)",
      "Redesign",
      "Social media management or advertising",
      "Writing content",
    ],
    planes: [
      {
        name: "Basic",
        price: 95000,
        billing: "mes",
        paraQuien: "The site barely changes. Just keep it from going down.",
        entrega: "I answer within 48 h",
        incluye: [
          "Hosting and security certificate",
          "Weekly backups",
          "Monitoring every 5 minutes",
          "1 hour of changes a month",
        ],
      },
      {
        name: "Active",
        price: 120000,
        billing: "mes",
        paraQuien: "You change prices or promotions every month.",
        entrega: "I answer within 24 h",
        destacado: true,
        incluye: [
          "Everything in Basic",
          "Daily backups",
          "3 hours of changes a month",
          "Monthly traffic report",
        ],
      },
      {
        name: "Priority",
        price: 199000,
        billing: "mes",
        paraQuien: "The site is your sales channel and it can't fail.",
        entrega: "I answer within 4 h",
        incluye: [
          "Everything in Active",
          "8 hours of changes a month",
          "Speed and SEO tuning every quarter",
          "My direct WhatsApp",
        ],
      },
    ],
    extras: [
      { label: "Additional hour", value: "COP $60,000" },
      { label: "Out-of-hours emergency", value: "COP $120,000 per hour" },
    ],
    nota: "Hours don't roll over from one month to the next. If you don't use them they're lost; if you go over, they're billed at COP $60,000 an hour and I tell you first.",
    faq: [
      {
        q: "Do I need the maintenance plan?",
        a: "It isn't compulsory. If your site never changes, don't take it. It makes sense if you change things often, or if the site brings you clients and you can't afford it going down without anyone noticing.",
      },
      {
        q: "What counts as an hour of changes?",
        a: "Changing copy, prices, photos, adding products, adjusting a section. What doesn't count is a new page or a redesign: that's quoted separately and I tell you before touching anything.",
      },
      {
        q: "Can I cancel whenever I want?",
        a: "Yes, no lock-in and no penalty. You tell me before the monthly cut-off and that's it. The site stays yours and I'll help you move it wherever you want.",
      },
      {
        q: "Do you only maintain sites you built?",
        a: "No, but I look at it first. If it's built on something that's going to fall over on its own, I'll tell you and propose a redesign instead of selling you a plan that won't be enough.",
      },
    ],
    meta: {
      title: "Website maintenance from COP $95,000 a month",
      description:
        "Hosting, backups, monitoring and hours of changes included. From COP $95,000 a month, no lock-in. Changes requested on WhatsApp.",
    },
  },
];
