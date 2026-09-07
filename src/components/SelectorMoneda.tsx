"use client";

import { useEffect, useState } from "react";

/**
 * El interruptor de moneda.
 *
 * No recarga nada ni pide nada al servidor: las dos cifras ya están en el
 * HTML (ver Precio.tsx) y esto solo cambia un atributo en <html> que el CSS
 * lee para decidir cuál se ve.
 *
 * La elección queda guardada en el navegador de quien visita. El script del
 * layout la aplica antes de pintar, así que quien ya eligió dólares no ve
 * pesos ni por un cuadro.
 */

type Moneda = "cop" | "usd";

export default function SelectorMoneda({
  etiqueta = "Moneda",
}: {
  etiqueta?: string;
}) {
  // Arranca en pesos para que coincida con lo que pintó el servidor. El
  // useEffect corrige al valor guardado en cuanto monta.
  const [moneda, setMoneda] = useState<Moneda>("cop");

  useEffect(() => {
    const guardada = document.documentElement.dataset.precios;
    if (guardada === "usd" || guardada === "cop") setMoneda(guardada);
  }, []);

  const cambiar = (nueva: Moneda) => {
    setMoneda(nueva);
    document.documentElement.dataset.precios = nueva;
    try {
      localStorage.setItem("moneda", nueva);
    } catch {
      // Modo incógnito o cookies bloqueadas: el cambio funciona igual, solo
      // que no se recuerda en la próxima visita. No es motivo para romper.
    }
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className="sr-only">{etiqueta}</span>
      {(["cop", "usd"] as const).map((m) => {
        const activa = moneda === m;
        return (
          <button
            key={m}
            type="button"
            onClick={() => cambiar(m)}
            aria-pressed={activa}
            className={`px-2 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
              activa
                ? "bg-tinta text-blanco"
                : "text-grafito hover:text-tinta"
            }`}
          >
            {m}
          </button>
        );
      })}
    </div>
  );
}
