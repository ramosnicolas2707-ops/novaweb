/* =============================================================================
   LA MARCA — NOVAWEB
   =============================================================================

   Dos piezas que casi siempre van juntas:

     · <Isotipo>  el cuadro naranja con la N de circuito.
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
   La N va en trazo grueso y encima lleva la pista dorada con sus nodos, que
   es lo que la vuelve un circuito. Ese oro es la única excepción a los tres
   colores del sitio (blanco, naranja, negro) y vive solo aquí: no es un color
   del sistema, no se usa en ningún otro lado y por eso no está en el @theme
   de globals.css.

   Todo el oro va POR ENCIMA del trazo negro, nunca sobre el naranja. Oro
   sobre naranja son dos colores cálidos peleando y a 28 px se vuelve un
   borrón; sobre el negro, la pista se ve limpia.

   Las medidas están pensadas para los 24–48 px en los que se usa. Si algún
   día hace falta el logo grande, este mismo dibujo aguanta: lo que no aguanta
   es al revés, meter las pistas finas del logo original en una caja de 28 px.

   El favicon es este mismo dibujo, más simple, en src/app/icon.svg. Si tocas
   la N aquí, tócala también allá.
   ========================================================================== */

/** El oro de las pistas. Solo de este archivo y del favicon. */
const ORO = "#eab765";

/**
 * La N, en una sola línea: sube por el asta izquierda, baja por la diagonal y
 * vuelve a subir por el asta derecha.
 */
const ENE = "M13 28.5 L13 12.5 L27 28.5 L27 12.5";

/**
 * Las pistas del circuito. Van sobre el eje exacto de la N —los mismos
 * puntos, más delgado— así que por más que se muevan las medidas de arriba,
 * el oro siempre cae dentro del negro y nunca se sale por un borde.
 */
const PISTAS = ["M13 26.4 L13 12.5 L19.9 20.4", "M27 14.6 L27 19.8"];

/** Los nodos: donde una pista termina, hay un punto. */
const NODOS = [
  { cx: 13, cy: 26.4 },
  { cx: 19.9, cy: 20.4 },
  { cx: 27, cy: 14.6 },
];

/* ─────────────────────────────────────────────────────────────── ISOTIPO ── */

export function Isotipo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <rect
        x="2.5"
        y="2.5"
        width="35"
        height="35"
        rx="11.5"
        fill="var(--color-naranja)"
      />

      <path
        d={ENE}
        fill="none"
        stroke="var(--color-tinta)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g
        fill="none"
        stroke={ORO}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PISTAS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <g fill={ORO}>
        {NODOS.map((n) => (
          <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r="1.4" />
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
}: {
  className?: string;
  /** La clase de color del texto. Sobre el pie negro, pásale text-blanco. */
  tono?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2.5 text-lg tracking-tight ${tono} ${className}`}
    >
      <Isotipo className="h-7 w-7 shrink-0" />
      <span>
        <span className="font-extrabold">NOVA</span>
        <span className="font-normal">WEB</span>
      </span>
    </span>
  );
}
