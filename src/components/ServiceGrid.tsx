import Link from "next/link";
import { services } from "@/data/services";
import { cop } from "@/lib/format";
import { Reveal } from "./Reveal";

/** Los cuatro servicios, cada uno con enlace a su página y precio desde. */
export function ServiceGrid() {
  return (
    <ul className="mt-14 grid gap-px bg-hairline sm:grid-cols-2">
      {services.map((service, i) => {
        const desde = Math.min(...service.plans.map((p) => p.price));
        const mensual = service.plans.every((p) => p.billing === "mes");

        return (
          <li key={service.slug} className="bg-carbon">
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <Link
                href={`/servicios/${service.slug}`}
                className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-humo motion-reduce:transition-none lg:p-10"
              >
                <p className="kicker text-niebla">{service.kicker}</p>

                <h3 className="mt-5 text-balance font-display text-2xl leading-tight transition-colors duration-300 group-hover:text-brasa motion-reduce:transition-none lg:text-3xl">
                  {service.card}
                </h3>

                <p className="mt-4 max-w-md flex-1 text-sm leading-relaxed text-niebla">
                  {service.cardLine}
                </p>

                <div className="mt-8 flex items-end justify-between gap-6 border-t border-hairline pt-6">
                  <p className="tnum text-sm text-tiza">
                    Desde{" "}
                    <span className="font-display text-2xl text-brasa">
                      {cop(desde)}
                    </span>{" "}
                    <span className="text-niebla">
                      COP{mensual ? " al mes" : ""}
                    </span>
                  </p>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    Ver planes
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
