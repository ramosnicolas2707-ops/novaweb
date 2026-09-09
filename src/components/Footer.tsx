import Link from "next/link";
import { site, whatsapp } from "@/data/site";
import type { Idioma } from "@/i18n/idiomas";
import type { Textos } from "@/i18n/textos";
import { Marca } from "./Logo";

/** Pie de página. Negro, porque cierra el sitio y frena el scroll. */
export default function Footer({
  lang,
  t,
  enlaces,
}: {
  lang: Idioma;
  t: Textos;
  enlaces: { href: string; label: string }[];
}) {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-tinta text-blanco">
      <div className="contenedor py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Marca tono="text-blanco" />
            <p className="mt-5 max-w-sm leading-relaxed text-white/60">
              {t.pieTagline(site.address.city)}
            </p>
            <a
              href={whatsapp(t.waCotizar)}
              target="_blank"
              rel="noopener noreferrer"
              className="barrido mt-7 inline-flex bg-naranja px-6 py-3.5 text-[0.9375rem] font-bold tracking-tight text-tinta transition-colors duration-300 [--color-barrido:var(--color-blanco)]"
            >
              {t.escribemePorWhatsapp}
            </a>
          </div>

          <nav aria-label={t.queHago}>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-naranja">
              {t.queHago}
            </h2>
            <ul className="mt-5 space-y-3">
              {enlaces.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className="text-[0.9375rem] text-white/70 transition-colors hover:text-blanco"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-naranja">
              {t.contacto}
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-white/70">
              <li>
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blanco"
                >
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all transition-colors hover:text-blanco"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="pt-1">
                {site.address.city}, {site.address.country}
              </li>
              <li>{t.pieHorario}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-filete-claro pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {anio} {site.legalName}
          </p>
          <p>{t.pieHecho}</p>
        </div>
      </div>
    </footer>
  );
}
