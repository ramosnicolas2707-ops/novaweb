import type { Service } from "@/data/services";
import { cop } from "@/lib/format";
import { whatsappLink } from "@/data/site";
import { Reveal } from "./Reveal";
import { ListaSi } from "./ui";

export function PlanCards({ service }: { service: Service }) {
  return (
    // El envoltorio opaco va por fuera del revelado: así los huecos de 1 px de la
    // retícula nunca dejan ver el fondo claro mientras la tarjeta se desvanece.
    <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
      {service.plans.map((plan, i) => (
        <div key={plan.name} className="h-full bg-humo">
          <Reveal delay={i * 0.06} className="h-full">
            <article
              className={`flex h-full flex-col bg-humo p-7 lg:p-8 ${
                plan.featured
                  ? "border-t-2 border-brasa"
                  : "border-t-2 border-transparent"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-balance font-display text-xl leading-tight">
                  {plan.name}
                </h3>
                {plan.featured ? (
                  <span className="kicker shrink-0 text-brasa">
                    Más contratado
                  </span>
                ) : null}
              </div>

              {/* Las cifras en pesos son largas: la cifra nunca se parte, pero la
                  moneda puede bajar de línea antes que desbordar la columna. */}
              <p className="tnum mt-6 font-display text-[1.75rem] leading-none sm:text-3xl xl:text-4xl">
                <span className="whitespace-nowrap">{cop(plan.price)}</span>
                <span className="ml-1 font-body text-sm text-niebla">
                  {plan.billing === "mes" ? "COP/mes" : "COP"}
                </span>
              </p>

              {plan.monthly !== undefined ? (
                <p className="tnum mt-2 text-sm text-niebla">
                  más {cop(plan.monthly)} COP al mes
                </p>
              ) : null}

              <p className="mt-5 border-t border-hairline pt-5 text-sm leading-relaxed text-niebla">
                {plan.scope}
              </p>

              <div className="mt-6 flex-1">
                <ListaSi items={plan.features} />
              </div>

              <a
                href={whatsappLink(
                  `Hola Meridiano. Quiero cotizar el plan ${plan.name} de ${service.nav}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block px-5 py-3.5 text-center text-sm font-medium transition-colors duration-300 motion-reduce:transition-none ${
                  plan.featured
                    ? "bg-brasa text-carbon hover:bg-tiza"
                    : "border border-hairline-fuerte text-tiza hover:border-brasa hover:text-brasa"
                }`}
              >
                Cotizar este plan por WhatsApp
              </a>
            </article>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
