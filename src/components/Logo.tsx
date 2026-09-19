/* =============================================================================
   LA MARCA — NOVAWEB
   =============================================================================

   Dos piezas que casi siempre van juntas:

     · <Isotipo>  la N: dos columnas y una diagonal roja.
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
   Tres formas rectas en una caja de 40: las dos astas (de 5 a 13 y de 27 a
   35) y la diagonal que las cruza de esquina a esquina, pintada encima. Sin
   curvas ni detalles finos, así que aguanta hasta 16 px sin empastarse.

   Las astas van en currentColor: negras en la barra, blancas en el pie. La
   diagonal es siempre roja, pero sobre fondo oscuro usa --rojo-claro, porque
   el rojo de marca sobre negro se apaga (2.6:1).

   La misma geometría vive en tres lugares más. Si tocas la N, tócala en todos:
     · src/app/icon.svg   el favicon
     · src/lib/og.tsx     la imagen para compartir enlaces
     · Marketing/         las imágenes sueltas del logo y los videos
   ========================================================================== */

/** La diagonal, de la esquina de arriba a la izquierda a la de abajo a la derecha. */
const DIAGONAL = "5,5 13,5 35,35 27,35";

/* ─────────────────────────────────────────────────────────────── ISOTIPO ── */

export function Isotipo({
  className = "",
  sobreOscuro = false,
}: {
  className?: string;
  sobreOscuro?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <rect x="5" y="5" width="8" height="30" fill="currentColor" />
      <rect x="27" y="5" width="8" height="30" fill="currentColor" />
      <polygon
        points={DIAGONAL}
        fill={sobreOscuro ? "var(--color-rojo-claro)" : "var(--color-rojo)"}
      />
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
  sobreOscuro = false,
}: {
  className?: string;
  /** En el pie: astas y nombre en blanco, diagonal en rojo claro. */
  sobreOscuro?: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 items-center gap-3 text-xl tracking-tight ${
        sobreOscuro ? "text-blanco" : "text-tinta"
      } ${className}`}
    >
      <Isotipo sobreOscuro={sobreOscuro} className="h-9 w-9 shrink-0" />
      <span>
        <span className="font-extrabold">NOVA</span>
        <span className="font-normal">WEB</span>
      </span>
    </span>
  );
}
