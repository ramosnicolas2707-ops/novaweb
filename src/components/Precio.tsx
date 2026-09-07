import { obtenerTasa } from "@/lib/tasa";
import { cop, usd } from "@/lib/format";

/**
 * Un precio, en las dos monedas.
 *
 * Escribe las dos cifras en el HTML y deja que el CSS muestre la que el
 * visitante eligió (ver [data-moneda] en globals.css). Suena redundante, pero
 * es lo correcto aquí:
 *
 *   · No hay salto ni parpadeo al cambiar de moneda: las dos ya están.
 *   · Funciona sin JavaScript — se ven los pesos, que es lo que espera la
 *     mayoría de los visitantes.
 *   · Google indexa las dos cifras.
 *
 * Es un componente async porque pide la tasa del día. Como obtenerTasa está
 * envuelta en cache(), veinte precios en la misma página hacen una sola
 * consulta.
 */
export default async function Precio({
  valor,
  className = "",
}: {
  /** El precio en pesos colombianos. Es siempre la fuente de verdad. */
  valor: number;
  className?: string;
}) {
  const tasa = await obtenerTasa();

  return (
    <span className={className}>
      <span data-moneda="cop">{cop(valor)}</span>
      <span data-moneda="usd">{usd(valor, tasa)}</span>
    </span>
  );
}
