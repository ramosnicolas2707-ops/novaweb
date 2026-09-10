/* =============================================================================
   LA MARCA — NOVAWEB
   =============================================================================

   Dos piezas que casi siempre van juntas:

     · <Isotipo>  la N de circuito.
     · <Marca>    el isotipo más el nombre escrito. Es lo que va en la barra
                  de navegación y en el pie.

   EL LOGOTIPO
   NOVA en 800 y WEB en 400, todo en mayúsculas y sin espacio entre las dos
   mitades. El peso es lo único que las separa, y con eso alcanza: la palabra
   se lee como una sola cosa y aun así se ve dónde termina el nombre y dónde
   empieza lo que hace.

   No hay 900 cargado en Archivo (ver el layout: 400, 600, 700, 800), y
   globals.css apaga font-synthesis, así que un 900 se dibujaría como 800 sin
   avisar. Por eso el peso alto se pide como 800 y no como "black".

   EL ISOTIPO
   Una N de bloque con un circuito grabado encima. Tiene tres clases de
   elemento, y cada una se dibuja distinto:

     · los CANALES   las líneas del circuito. No son blancas: son huecos.
     · los NODOS     los puntos donde termina un canal. Dentro de la letra
                     son una isla rodeada de hueco, como una vía de circuito
                     impreso de verdad.
     · las PATAS     los nodos que quedan por fuera del contorno. Como afuera
                     no hay nada que agujerear, van sólidos y se amarran a la
                     letra con un palito.

   POR QUÉ HUECOS Y NO LÍNEAS BLANCAS
   Porque el logo tiene que servir en negro sobre la barra blanca y en blanco
   sobre el pie negro. Si los canales fueran blancos, en el pie se verían
   blancos sobre blanco y la N quedaría maciza. Siendo huecos —una máscara—
   siempre dejan ver el fondo que haya detrás, sea el que sea. Y como la
   letra se pinta con currentColor, el color lo decide quien lo use.

   TAMAÑO MÍNIMO
   Los canales miden 1 de 40, así que a 36 px son 0,9 px: se ven, pero es el
   piso. Por debajo de unos 28 px se empastan y la N se vuelve una mancha.
   Para eso está el favicon (src/app/icon.svg), que es la misma letra sin
   canales y con un solo nodo. Si tocas la N aquí, tócala también allá.
   ========================================================================== */

/**
 * El contorno de la N, en el orden en que se recorre: sube el asta izquierda,
 * baja la diagonal, sube el asta derecha.
 *
 * Va con relleno Y con borde del mismo color: el borde no se ve como borde,
 * lo que hace es redondear las esquinas (linejoin round) igual que el logo
 * original, que no las tiene en punta.
 */
const ENE =
  "M6.5 4.5 L13.5 4.5 L26.5 21 L26.5 4.5 L33.5 4.5 L33.5 35.5 " +
  "L26.5 35.5 L13.5 19 L13.5 35.5 L6.5 35.5 Z";

/** Los canales. Todos en tramos rectos y de 45°, como una placa de verdad. */
const CANALES = [
  // Del nodo de abajo del asta izquierda, sube y cruza a la diagonal.
  "M9.8 30 L9.8 13 L15.4 13 L19.5 17.1 L19.5 18",
  // La segunda línea del asta izquierda, que no va a ninguna parte.
  "M12 20 L12 27.5",
  // Del nodo de arriba del asta derecha, baja en zigzag hasta la diagonal.
  "M30 8.5 L30 17 L27.5 19.5 L27.5 22.6 L24.8 25.3",
  // La que baja pegada al borde derecho.
  "M32.3 19 L32.3 25 L30.3 27 L30.3 33",
  // Un tramo suelto en la diagonal.
  "M18.5 21 L18.5 23.5 L22 27 L22 28",
];

/** Los nodos de adentro: isla de color rodeada de hueco. */
const NODOS = [
  { cx: 9.8, cy: 30 },
  { cx: 19.5, cy: 18 },
  { cx: 30, cy: 8.5 },
  { cx: 24.8, cy: 25.3 },
];

/** Los nodos de afuera, con el palito que los amarra a la letra. */
const PATAS = [
  { cx: 4.2, cy: 23.5, hasta: "M4.2 23.5 L7.6 20.1" },
  { cx: 23.2, cy: 5.8, hasta: "M23.2 5.8 L27 9.6" },
  { cx: 17.2, cy: 33.2, hasta: "M17.2 33.2 L13 29" },
  { cx: 35.4, cy: 14.2, hasta: "M35.4 14.2 L33 16.6" },
];

/** Radio del hueco que rodea a un nodo de adentro. */
const HUECO = 1.8;
/** Radio de la isla que queda en el centro de ese hueco. */
const ISLA = 1;

/* ─────────────────────────────────────────────────────────────── ISOTIPO ── */

export function Isotipo({
  className = "",
  /**
   * Cada máscara necesita un id único en el documento. La barra y el pie
   * montan el isotipo en la misma página, así que el segundo tiene que pedir
   * el suyo o los dos apuntarían al mismo y uno se quedaría sin circuito.
   */
  id = "novaweb-circuito",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
        {/* Blanco = se ve. Negro = se agujerea. */}
        <rect x="0" y="0" width="40" height="40" fill="#fff" />
        <g
          fill="none"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {CANALES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g fill="#000">
          {NODOS.map((n) => (
            <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r={HUECO} />
          ))}
        </g>
      </mask>

      <path
        d={ENE}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
        mask={`url(#${id})`}
      />

      {/* Los palitos van por fuera de la máscara, o el hueco del nodo los
          cortaría justo donde tienen que agarrarse. */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        {PATAS.map((p) => (
          <path key={p.hasta} d={p.hasta} />
        ))}
      </g>

      <g fill="currentColor">
        {NODOS.map((n) => (
          <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r={ISLA} />
        ))}
        {PATAS.map((p) => (
          <circle key={`${p.cx}-${p.cy}`} cx={p.cx} cy={p.cy} r="1.5" />
        ))}
      </g>
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────────── MARCA ── */

/**
 * El logo completo: isotipo y logotipo, en una línea.
 *
 * El nombre va escrito como texto de verdad y no dentro del SVG. Así lo lee
 * un lector de pantalla, lo encuentra el buscador de la página y se ajusta al
 * tamaño de letra que tenga puesto el visitante.
 */
export function Marca({
  className = "",
  tono = "text-tinta",
  id,
}: {
  className?: string;
  /** La clase de color. La usan tanto la letra del logo como el nombre. */
  tono?: string;
  /** El id de la máscara. Ver <Isotipo>. */
  id?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center gap-3 text-xl tracking-tight ${tono} ${className}`}
    >
      <Isotipo id={id} className="h-9 w-9 shrink-0" />
      <span>
        <span className="font-extrabold">NOVA</span>
        <span className="font-normal">WEB</span>
      </span>
    </span>
  );
}
