/**
 * Formato de precios en pesos colombianos, convención latinoamericana:
 * punto como separador de miles. $1.800.000, no $1,800,000.
 * Todos los importes del sitio pasan por aquí.
 */
export const cop = (amount: number) => `$${amount.toLocaleString("es-CO")}`;

/** Sufijo legible del ciclo de cobro. */
export const billingLabel = (billing: "unico" | "mes") =>
  billing === "mes" ? "/mes" : "";

/** Texto accesible del precio, para lectores de pantalla y para el atributo title. */
export const priceAria = (amount: number, billing: "unico" | "mes") =>
  billing === "mes"
    ? `${amount.toLocaleString("es-CO")} pesos al mes`
    : `${amount.toLocaleString("es-CO")} pesos, pago único`;
