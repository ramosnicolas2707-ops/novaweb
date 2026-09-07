import type { Textos } from "@/i18n/textos";
import ReboteDelFinal from "./ReboteDelFinal";

/* =============================================================================
   EL PREMIO POR LLEGAR HASTA ABAJO
   =============================================================================

   Lo último de todo, debajo del pie de página. Quien llega aquí ya leyó el
   sitio entero o venía bajando por bajar: en los dos casos se merece algo.

   Es el mismo personaje de siempre pero confundido — un ojo normal, el otro
   al revés, la boca torcida — preguntando qué haces tan abajo.

   Va en gris muy claro y a media opacidad a propósito: es un chiste, no una
   sección. Si compite con el pie de página deja de ser gracioso.

   Y no te deja quedarte: a los dos segundos la sección se recoge y el
   navegador sube la vista solo, porque el documento se acortó. Eso lo maneja
   ReboteDelFinal, que va aparte porque necesita correr en el cliente. La
   altura y la animación viven en .fin-scroll, en globals.css.
   ========================================================================== */

export default function FinDelScroll({ t }: { t: Textos }) {
  return (
    <aside
      id="fin-del-scroll"
      className="fin-scroll flex items-center justify-center bg-tinta text-center"
    >
      <ReboteDelFinal id="fin-del-scroll" />
      <div className="contenedor flex flex-col items-center gap-5">
        <svg
          viewBox="0 0 40 40"
          className="fds-cara h-24 w-24"
          role="img"
          aria-label={t.finTitulo}
        >
          <rect
            x="4"
            y="4"
            width="32"
            height="32"
            rx="11"
            fill="rgb(255 255 255 / 0.13)"
          />
          <g
            fill="none"
            stroke="rgb(255 255 255 / 0.5)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Un ojo normal y el otro al revés: la cara no entiende nada. */}
            <path d="M15 14.5 L11 19 L15 23.5" />
            <path d="M25 19 L29 14.5" />
            <path d="M25 19 L29 23.5" />
            {/* Boca torcida */}
            <path d="M15.5 29.5 L24.5 27.5" />
          </g>
        </svg>

        <div className="space-y-1.5">
          <p className="text-xl font-extrabold tracking-tight text-white/70">
            {t.finTitulo}
          </p>
          <p className="text-sm text-white/35">{t.finBajada}</p>
        </div>
      </div>

      <style>{`
        /* Se ladea despacio, como quien no entiende qué está pasando. */
        .fds-cara {
          animation: fds-ladeo 5s ease-in-out infinite;
          transform-origin: center 70%;
        }

        @keyframes fds-ladeo {
          0%, 100% { transform: rotate(-7deg); }
          50%      { transform: rotate(7deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .fds-cara { animation: none; transform: rotate(-7deg); }
        }
      `}</style>
    </aside>
  );
}
