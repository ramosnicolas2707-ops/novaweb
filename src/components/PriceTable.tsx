import type { Service } from "@/data/services";
import { cop } from "@/lib/format";

/**
 * Tabla de precios. Es una <table> de verdad, con caption, th y scope.
 *
 * No es una decisión estética: los buscadores generativos extraen tablas
 * semánticas y no extraen divs que parecen tablas. Es también la forma correcta
 * de que un lector de pantalla anuncie "Plan Profesional, precio, 4.400.000 pesos".
 */
export function PriceTable({ service }: { service: Service }) {
  const conMensualidad = service.plans.some((p) => p.monthly !== undefined);

  return (
    <div className="border-l-2 border-brasa pl-5 sm:pl-8">
      {/* El texto del caption se repite fuera del contenedor con scroll para que
          pueda partir en varias líneas en móvil. Dentro queda como <caption>
          accesible, que es lo que leen el lector de pantalla y el rastreador. */}
      <p aria-hidden="true" className="pb-6 text-sm leading-relaxed text-niebla">
        {service.tableCaption}
      </p>
      <p className="pb-4 text-xs text-niebla sm:hidden">
        Desliza la tabla para ver el alcance completo →
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <caption className="sr-only">{service.tableCaption}</caption>
          <thead>
            <tr className="border-b border-hairline-fuerte">
              <th scope="col" className="kicker py-4 pr-6 text-niebla">
                {conMensualidad ? "Producto" : "Plan"}
              </th>
              <th scope="col" className="kicker py-4 pr-6 text-niebla">
                {conMensualidad ? "Implementación" : "Precio"}
              </th>
              {conMensualidad ? (
                <th scope="col" className="kicker py-4 pr-6 text-niebla">
                  Mensualidad
                </th>
              ) : null}
              <th scope="col" className="kicker py-4 text-niebla">
                Alcance
              </th>
            </tr>
          </thead>
          <tbody>
            {service.plans.map((plan) => (
              <tr
                key={plan.name}
                className="border-b border-hairline align-top last:border-0"
              >
                <th
                  scope="row"
                  className="py-6 pr-6 font-display text-lg font-normal text-tiza"
                >
                  {plan.name}
                  {plan.featured ? (
                    <span className="kicker mt-2 block text-brasa">
                      Más contratado
                    </span>
                  ) : null}
                </th>
                <td className="tnum whitespace-nowrap py-6 pr-6 font-display text-2xl text-tiza">
                  {cop(plan.price)}
                  {plan.billing === "mes" ? (
                    <span className="font-body text-sm text-niebla">/mes</span>
                  ) : null}
                </td>
                {conMensualidad ? (
                  <td className="tnum whitespace-nowrap py-6 pr-6 font-display text-2xl text-tiza">
                    {plan.monthly !== undefined ? (
                      <>
                        {cop(plan.monthly)}
                        <span className="font-body text-sm text-niebla">
                          /mes
                        </span>
                      </>
                    ) : (
                      <span className="font-body text-sm text-niebla">—</span>
                    )}
                  </td>
                ) : null}
                <td className="py-6 text-sm leading-relaxed text-niebla">
                  {plan.scope}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {service.note ? (
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-tiza">
          {service.note}
        </p>
      ) : null}
    </div>
  );
}

/** Segunda tabla: todo lo que se cobra aparte. También semántica. */
export function ExtrasTable({ service }: { service: Service }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[17rem] border-collapse text-left">
        <caption className="caption-top pb-5 text-left text-sm leading-relaxed text-niebla">
          {`Servicios adicionales de ${service.nav.toLowerCase()}, en pesos colombianos (COP).`}
        </caption>
        <thead>
          <tr className="border-b border-hairline-fuerte">
            <th scope="col" className="kicker py-3 pr-6 text-niebla">
              Concepto
            </th>
            <th scope="col" className="kicker py-3 text-right text-niebla">
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {service.extras.map((extra) => (
            <tr key={extra.label} className="border-b border-hairline last:border-0">
              <th
                scope="row"
                className="py-4 pr-6 text-sm font-normal leading-relaxed text-niebla"
              >
                {extra.label}
              </th>
              <td className="tnum py-4 text-right text-sm text-tiza">
                {extra.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
