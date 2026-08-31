import type { Service } from "@/data/services";
import { whatsappLink } from "@/data/site";

import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { FaqList } from "./Faq";
import { FinalCta } from "./FinalCta";
import { JsonLd } from "./JsonLd";
import { PlanCards } from "./PlanCards";
import { ExtrasTable, PriceTable } from "./PriceTable";
import { Reveal } from "./Reveal";
import { Container, Cta, Kicker, ListaNo, ListaSi, Section } from "./ui";

import { breadcrumbLd, faqLd, serviceLd } from "@/lib/seo";

/**
 * Plantilla de página de servicio.
 *
 * Todas siguen el mismo orden: qué es, cuánto cuesta, qué incluye, para quién es,
 * qué NO incluye, preguntas frecuentes. El precio aparece antes que cualquier
 * argumento de venta, a propósito: quien busca lo más barato se va aquí, y eso
 * está bien.
 */
export function ServicePage({ service }: { service: Service }) {
  const ruta = `/servicios/${service.slug}`;

  const migas: Crumb[] = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/#servicios" },
    { name: service.nav, path: ruta },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceLd(service),
          faqLd(service.faq),
          breadcrumbLd(migas),
        ]}
      />

      {/* Encabezado */}
      <Section plano="carbon" className="pt-32 md:pt-40 lg:pt-44">
        <Container>
          <Breadcrumbs items={migas} />

          <div className="costura-filete mt-10 max-w-4xl">
            <Kicker>{service.kicker}</Kicker>
            <h1 className="mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
              {service.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-tiza">
              {service.summary}
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div className="max-w-2xl">
              {service.intro.map((parrafo) => (
                <p
                  key={parrafo.slice(0, 24)}
                  className="mt-5 text-base leading-relaxed text-niebla first:mt-0"
                >
                  {parrafo}
                </p>
              ))}
              <div className="mt-9">
                <Cta
                  href={whatsappLink(
                    `Hola Meridiano. Quiero cotizar ${service.nav.toLowerCase()}.`,
                  )}
                  external
                >
                  Escribir por WhatsApp
                </Cta>
              </div>
            </div>

            <dl className="border-t border-hairline pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <dt className="kicker text-niebla">Tiempo de entrega</dt>
              <dd className="mt-3 text-sm leading-relaxed text-tiza">
                {service.deliveryTime}
              </dd>
              <dt className="kicker mt-8 text-niebla">Cómo se paga</dt>
              <dd className="mt-3 text-sm leading-relaxed text-tiza">
                50% de anticipo para iniciar y 50% contra entrega. Dos rondas de
                revisión incluidas; las adicionales, a $60.000 la hora.
              </dd>
            </dl>
          </div>
        </Container>
      </Section>

      {/* Planes y precios */}
      <Section plano="pizarra" id="planes">
        <Container>
          <Reveal className="costura-filete max-w-3xl">
            <Kicker>Planes y precios</Kicker>
            <h2 className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
              Precio visible, alcance escrito
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-niebla">
              Todos los importes están en pesos colombianos. No hay
              «consultar precio»: si el proyecto se sale de estos planes, se
              cotiza sobre estas mismas cifras.
            </p>
          </Reveal>

          <div className="mt-14">
            <PlanCards service={service} />
          </div>

          <div className="mt-20">
            <PriceTable service={service} />
          </div>

          <div className="mt-16 max-w-2xl">
            <ExtrasTable service={service} />
          </div>
        </Container>
      </Section>

      {/* Qué incluye */}
      <Section plano="carbon">
        <Container>
          <Reveal className="costura-filete max-w-3xl">
            <Kicker>Qué incluye</Kicker>
            <h2 className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
              Lo que entra en el precio
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, i) => (
              <li key={item.title} className="bg-carbon">
                <Reveal delay={(i % 3) * 0.06} className="h-full p-7 lg:p-8">
                  <h3 className="text-balance font-display text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-niebla">
                    {item.detail}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Para quién es y para quién no */}
      <Section plano="pizarra">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="costura-filete">
              <Kicker>Para quién es</Kicker>
              <h2 className="mt-4 text-balance text-2xl leading-tight sm:text-3xl">
                Este servicio encaja si...
              </h2>
              <div className="mt-8">
                <ListaSi items={service.forWhom} />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="kicker text-niebla">Para quién no es</p>
              <h2 className="mt-4 text-balance text-2xl leading-tight text-niebla sm:text-3xl">
                Mejor busca otro estudio si...
              </h2>
              <div className="mt-8">
                <ListaNo items={service.notForWhom} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Qué NO incluye */}
      <Section plano="carbon">
        <Container>
          <Reveal className="costura-filete max-w-3xl">
            <Kicker>Qué no incluye</Kicker>
            <h2 className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
              Lo que no está en el precio
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-niebla">
              Está aquí por la misma razón que los precios: para que nadie
              descubra un costo a mitad del proyecto.
            </p>
          </Reveal>

          <div className="mt-12 max-w-3xl">
            <ListaNo items={service.excludes} />
          </div>
        </Container>
      </Section>

      {/* Preguntas frecuentes */}
      <Section plano="pizarra">
        <Container>
          <Reveal className="costura-filete max-w-3xl">
            <Kicker>Preguntas frecuentes</Kicker>
            <h2
              id={`faq-${service.slug}`}
              className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl"
            >
              Dudas sobre {service.nav.toLowerCase()}
            </h2>
          </Reveal>

          <div className="mt-12">
            <FaqList faqs={service.faq} titleId={`faq-${service.slug}`} />
          </div>
        </Container>
      </Section>

      <FinalCta
        mensaje={`Hola Meridiano. Vengo de la página de ${service.nav.toLowerCase()} y quiero cotizar.`}
      />
    </>
  );
}
