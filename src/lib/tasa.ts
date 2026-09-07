import { cache } from "react";

/**
 * La tasa del dólar.
 *
 * Se consulta al compilar y se vuelve a consultar cada 24 horas en Vercel
 * (revalidate). Si la consulta falla —la API caída, sin internet en el
 * build, una respuesta rara— se usa el respaldo y el sitio sigue andando.
 * Un precio en dólares desactualizado es un problema; una página que no
 * compila porque una API de terceros no contestó es un problema peor.
 */

/** Lo que se usa si la consulta falla. Ajústalo si se desfasa mucho. */
export const TASA_RESPALDO = 3500;

/** Fuera de este rango la respuesta es basura y se descarta. */
const MINIMO = 2000;
const MAXIMO = 10000;

/**
 * cache() hace que, aunque veinte precios la pidan en la misma página, la
 * consulta salga una sola vez.
 */
export const obtenerTasa = cache(async (): Promise<number> => {
  try {
    const r = await fetch("https://open.er-api.com/v6/latest/USD", {
      // Se refresca una vez al día. No hace falta más: nadie cotiza al minuto.
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(4000),
    });

    if (!r.ok) return TASA_RESPALDO;

    const datos = (await r.json()) as { rates?: Record<string, number> };
    const cop = datos?.rates?.COP;

    if (typeof cop !== "number" || cop < MINIMO || cop > MAXIMO) {
      return TASA_RESPALDO;
    }

    return Math.round(cop);
  } catch {
    return TASA_RESPALDO;
  }
});
