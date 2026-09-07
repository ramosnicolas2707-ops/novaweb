/** Formato de dinero. Un solo lugar, para que ningún precio se escriba a mano. */

/**
 * 900000 → "$900.000". Sin decimales: en pesos nadie los escribe.
 *
 * Intl mete un espacio duro entre el "$" y la cifra ("$ 900.000"), que es la
 * norma técnica pero no es como se escribe un precio en Colombia. Se lo quito.
 */
export const precio = (valor: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  })
    .format(valor)
    // \s cubre el espacio duro (U+00A0), que es el que mete Intl.
    .replace(/\s/g, "");

/** Alias explícito, para cuando conviven las dos monedas en el mismo archivo. */
export const cop = precio;

/**
 * Pesos → dólares, redondeado al dólar. 900000 con tasa 3900 → "USD 231".
 *
 * Se escribe "USD 231" y no "$231" a propósito: en un sitio que muestra las
 * dos monedas, un "$" solo es ambiguo — en Colombia el "$" son pesos.
 */
export const usd = (valorEnPesos: number, tasa: number) => {
  const dolares = Math.round(valorEnPesos / tasa);
  return `USD ${new Intl.NumberFormat("en-US").format(dolares)}`;
};

/** 900000 → "900000". Para el JSON-LD, que quiere el número pelado. */
export const precioPlano = (valor: number) => String(valor);

/*
 * "periodo" (pago único / al mes) vivía aquí y estaba quemado en español:
 * salía "pago único" debajo de "USD 1,401" en la versión en inglés. Ahora vive
 * en /src/i18n/textos.ts, que es donde va todo lo que se traduce.
 */
