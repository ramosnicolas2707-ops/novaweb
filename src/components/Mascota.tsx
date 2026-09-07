/* =============================================================================
   EL PERSONAJE — la cara de código
   =============================================================================

   Los ojos son dos chevrones y la boca un guion bajo: <_>

   La idea es que se lea como cara y como código al mismo tiempo, y que
   funcione incluso escrito: se puede firmar un WhatsApp con <_> y sigue
   siendo él.

   CÓMO SE COMPORTA
   El ciclo dura 14 segundos y no lleva ni una línea de JavaScript — son
   grupos de trazos cruzándose por CSS:

     · casi todo el tiempo:  <_>   ojos normales
     · dos veces por ciclo:  -_-   parpadea (126 ms, apenas se nota)
     · una vez por ciclo:    -‿>   guiña un ojo y sonríe, por 1,8 s

   Al pasarle el mouse por encima guiña y se queda sonriendo. En celular no
   hay hover, pero igual guiña solo cada 14 s, así que nadie se pierde el
   gesto.

   El guiño y la sonrisa van juntos a propósito: un guiño con la boca recta
   se lee como un tic, no como un gesto de complicidad.

   DÓNDE VIVE
   · <Mascota> es la versión grande del hero, con movimiento.
   · <CaraMarca> es la versión chica y quieta: barra de navegación, pie de
     página y cualquier lugar donde haga de logo.
   · El favicon es el mismo dibujo en src/app/icon.svg. Si cambias la cara
     aquí, cámbiala también allá — es el único sitio duplicado, y está
     duplicado porque un favicon no puede ser un componente de React.
   ========================================================================== */

/* Geometría compartida. Todo vive en una caja de 40×40. */
const CABEZA = { x: 4, y: 4, w: 32, h: 32, rx: 11 };

/** Los ojos normales: < y > mirando hacia adentro. */
const OJOS_ABIERTOS = ["M15 14.5 L11 19 L15 23.5", "M25 14.5 L29 19 L25 23.5"];

/** Los ojos del parpadeo: dos rayitas. */
const OJOS_CERRADOS = ["M11.2 19 L15 19", "M25 19 L28.8 19"];

/** El guiño: el izquierdo cerrado, el derecho sigue siendo chevrón. */
const OJOS_GUINO = ["M11.2 19 L15 19", "M25 14.5 L29 19 L25 23.5"];

/** La boca normal: el guion bajo. */
const BOCA = "M15.5 29 L24.5 29";

/** La sonrisa. Va siempre con el guiño, nunca sola. */
const SONRISA = "M15 27.6 Q20 32 25 27.6";

/* ──────────────────────────────────────────────────────────── HERO ── */

export default function Mascota() {
  return (
    <div
      aria-hidden="true"
      data-mascota
      className="relative mx-auto aspect-square w-full max-w-[26rem]"
    >
      <svg viewBox="0 0 40 40" className="mc-cara h-full w-full">
        <rect
          x={CABEZA.x}
          y={CABEZA.y}
          width={CABEZA.w}
          height={CABEZA.h}
          rx={CABEZA.rx}
          fill="var(--color-naranja)"
        />

        <g
          fill="none"
          stroke="var(--color-tinta)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Ojos normales */}
          <g className="mc-ojos">
            {OJOS_ABIERTOS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>

          {/* Ojos del parpadeo */}
          <g className="mc-parpadeo">
            {OJOS_CERRADOS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>

          {/* El guiño */}
          <g className="mc-guino">
            {OJOS_GUINO.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>

          {/* Las dos bocas, cruzándose */}
          <path className="mc-boca" d={BOCA} />
          <path className="mc-sonrisa" d={SONRISA} />
        </g>
      </svg>

      <style>{`
        .mc-cara {
          animation: mc-brinco 2.8s cubic-bezier(0.34, 1.4, 0.5, 1) infinite;
          transform-origin: center bottom;
        }

        @keyframes mc-brinco {
          0%, 100% { transform: translateY(0) scaleY(1); }
          40%      { transform: translateY(-2.5%) scaleY(1.03); }
          70%      { transform: translateY(0) scaleY(0.97); }
        }

        /* Todos los estados comparten el mismo ciclo de 14 s y usan steps(1):
           cambian de golpe, sin desvanecerse. Un parpadeo que hace fundido no
           parece un parpadeo, parece un error de carga.

           El reparto del ciclo:
             21%  y  48%   parpadea (0,9% = 126 ms cada uno)
             62% a 75%     guiña y sonríe (12,9% = 1,8 s)
             el resto      cara normal                                        */
        .mc-ojos,
        .mc-parpadeo,
        .mc-guino,
        .mc-boca,
        .mc-sonrisa {
          animation-duration: 14s;
          animation-timing-function: steps(1);
          animation-iteration-count: infinite;
        }

        .mc-ojos     { animation-name: mc-ciclo-ojos; }
        .mc-parpadeo { animation-name: mc-ciclo-parpadeo; opacity: 0; }
        .mc-guino    { animation-name: mc-ciclo-guino;    opacity: 0; }
        .mc-boca     { animation-name: mc-ciclo-boca; }
        .mc-sonrisa  { animation-name: mc-ciclo-sonrisa;  opacity: 0; }

        @keyframes mc-ciclo-ojos {
          0%, 20.9%    { opacity: 1; }
          21%, 21.9%   { opacity: 0; }   /* parpadeo */
          22%, 47.9%   { opacity: 1; }
          48%, 48.9%   { opacity: 0; }   /* parpadeo */
          49%, 61.9%   { opacity: 1; }
          62%, 74.9%   { opacity: 0; }   /* guiño */
          75%, 100%    { opacity: 1; }
        }

        @keyframes mc-ciclo-parpadeo {
          0%, 20.9%    { opacity: 0; }
          21%, 21.9%   { opacity: 1; }
          22%, 47.9%   { opacity: 0; }
          48%, 48.9%   { opacity: 1; }
          49%, 100%    { opacity: 0; }
        }

        @keyframes mc-ciclo-guino {
          0%, 61.9%    { opacity: 0; }
          62%, 74.9%   { opacity: 1; }
          75%, 100%    { opacity: 0; }
        }

        @keyframes mc-ciclo-boca {
          0%, 61.9%    { opacity: 1; }
          62%, 74.9%   { opacity: 0; }
          75%, 100%    { opacity: 1; }
        }

        @keyframes mc-ciclo-sonrisa {
          0%, 61.9%    { opacity: 0; }
          62%, 74.9%   { opacity: 1; }
          75%, 100%    { opacity: 0; }
        }

        /* Con el mouse encima guiña y se queda sonriendo. */
        .mc-cara:hover .mc-ojos,
        .mc-cara:hover .mc-parpadeo,
        .mc-cara:hover .mc-boca {
          animation: none;
          opacity: 0;
        }

        .mc-cara:hover .mc-guino,
        .mc-cara:hover .mc-sonrisa {
          animation: none;
          opacity: 1;
        }

        /* Quien pidió menos movimiento se queda con la cara quieta: ojos
           abiertos, boca recta, sin parpadeos ni guiños apareciendo solos. */
        @media (prefers-reduced-motion: reduce) {
          .mc-cara,
          .mc-cara .mc-ojos,
          .mc-cara .mc-parpadeo,
          .mc-cara .mc-guino,
          .mc-cara .mc-boca,
          .mc-cara .mc-sonrisa {
            animation: none !important;
          }
          .mc-cara .mc-ojos,
          .mc-cara .mc-boca     { opacity: 1; }
          .mc-cara .mc-parpadeo,
          .mc-cara .mc-guino,
          .mc-cara .mc-sonrisa  { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── MARCA ── */

/**
 * La versión chica y quieta. Va donde el personaje hace de logo: la barra de
 * navegación y el pie de página.
 *
 * NO es el mismo dibujo encogido, y eso es a propósito. A tamaño chico la
 * cara del hero se empasta: la boca se pega a los ojos y queda un borrón. Esta
 * versión está corregida ópticamente para los 24–48 px en los que se usa:
 *
 *   · la cabeza llena más la caja (borde de 2,5 contra 4)
 *   · los ojos son más chicos y suben, para abrir el espacio de la boca
 *   · la boca baja a y=29,5 y adelgaza, para que se lea como boca y no como
 *     una tercera mancha
 *
 * Debajo de unos 28 px la boca deja de funcionar por más que se ajuste. Ahí
 * ya se usa la versión del favicon (src/app/icon.svg), que la suelta y se
 * queda solo con los ojos.
 */
export function CaraMarca({
  className = "",
  tono = "var(--color-tinta)",
}: {
  /** Tamaño y color se controlan desde afuera con clases. */
  className?: string;
  /** El color de los ojos y la boca. Sobre fondo negro, pásale el blanco. */
  tono?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="35" height="35" rx="11.5" fill="var(--color-naranja)" />
      <g
        fill="none"
        stroke={tono}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.5 12 L11 17 L15.5 22" />
        <path d="M24.5 12 L29 17 L24.5 22" />
        <path d="M14.5 29.5 L25.5 29.5" />
      </g>
    </svg>
  );
}
