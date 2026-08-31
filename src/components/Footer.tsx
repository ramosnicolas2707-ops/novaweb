import Link from "next/link";
import { conditions, site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "./ui";

const MENSAJE_WA = "Hola Meridiano. Quiero cotizar un proyecto.";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-carbon">
      <Container className="py-16 md:py-20">
        {/* Las condiciones comerciales van en el pie, visibles en todas las páginas. */}
        <dl className="grid gap-8 border-b border-hairline pb-12 sm:grid-cols-3">
          {conditions.map((c) => (
            <div key={c.label}>
              <dt className="kicker text-niebla">{c.label}</dt>
              <dd className="tnum mt-2 font-display text-2xl text-brasa">
                {c.value}
              </dd>
              <dd className="mt-2 text-sm leading-relaxed text-niebla">
                {c.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-12 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="block h-4 w-0.5 bg-brasa" />
              <span className="font-display text-lg">{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-niebla">
              {site.claim}
            </p>
            <p className="mt-6 text-sm text-niebla">
              {site.address.city}, {site.address.country} · Atendemos toda
              Latinoamérica de forma remota.
            </p>
          </div>

          <nav aria-label="Servicios">
            <h2 className="kicker text-niebla">Servicios</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="enlace-costura text-sm text-niebla hover:text-tiza"
                  >
                    {s.card}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="kicker text-niebla">Contacto</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink(MENSAJE_WA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enlace-costura text-niebla hover:text-tiza"
                >
                  Escribir por WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="enlace-costura text-niebla hover:text-tiza"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="enlace-costura text-niebla hover:text-tiza"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="enlace-costura text-niebla hover:text-tiza"
                >
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-8 text-xs text-niebla sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Precios en pesos
            colombianos.
          </p>
          <p>
            Hecho en Next.js, servido estático.{" "}
            <a href="/llms.txt" className="enlace-costura hover:text-tiza">
              /llms.txt
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
