"use client";

import { useEffect, useRef } from "react";

import {
  BOCA,
  BOCA_O,
  CABEZA,
  CSS_CARA,
  OJOS_ABIERTOS,
  OJOS_CERRADOS,
  OJOS_SUSTO,
} from "./Mascota";

/* =============================================================================
   EL PERSONAJE DEL HERO — el que esquiva el cursor
   =============================================================================

   El dibujo, el ciclo de parpadeos y los gestos viven en Mascota.tsx. Aquí
   está solo el comportamiento: qué hace la cara cuando el mouse se le acerca.

   LA IDEA
   El personaje te ve venir de lejos —los ojos siguen al cursor— y cuando te
   le acercas demasiado se corre para el lado contrario con cara de susto
   (xOx). No es un hover: no hay que tocarlo para que reaccione, y de hecho
   tocarlo cuesta trabajo. Esa es la gracia.

   Pero si lo persigues tres veces, se rinde: se queda quieto en el centro y
   se deja atrapar, con la cara de siempre. Un juguete que nunca se deja
   atrapar frustra; uno que se rinde al cuarto intento premia. Cuando alejas
   el mouse se le olvida todo y vuelve a ser esquivo.

   POR QUÉ ASÍ Y NO CON ESTADOS DE REACT
   El cursor se mueve a 120 cuadros por segundo y React no tiene por qué
   enterarse. Todo se escribe directo en variables CSS del elemento
   (--mc-x, --mc-y, --mc-rot, --mc-esc) desde un requestAnimationFrame, y el
   navegador resuelve la transición en la tarjeta gráfica. Cero renders.

   DÓNDE NO CORRE
   · en pantallas sin mouse                (no hay cursor que esquivar)
   · con prefers-reduced-motion            (nadie pidió una cara saltando)
   · debajo de lg                          (allí va <CaraSello>, ver Hero.tsx)
   En todos esos casos queda el ciclo de CSS: la cara parpadea sola.
   ========================================================================== */

/** Desde qué distancia (px) empieza a ponerse nervioso. */
const RADIO = 210;

/** Cuánto llega a correrse (px) cuando el cursor está justo encima. */
const SALTO = 62;

/** Cuánto se mueven los ojos siguiendo al cursor, en unidades del viewBox. */
const MIRADA = 1.7;

/** Cuántas veces esquiva antes de rendirse. */
const RENDICION = 3;

/** Alejarse más de esto (px) le borra la cuenta y vuelve a ser esquivo. */
const OLVIDO = RADIO * 1.8;

export default function MascotaHero() {
  /** La caja que NO se mueve: es la que mide dónde está el personaje. */
  const caja = useRef<HTMLDivElement>(null);
  /** Lo que sí se mueve. */
  const cuerpo = useRef<HTMLDivElement>(null);
  /** El <svg>, que es donde se pide el gesto con data-gesto. */
  const cara = useRef<SVGSVGElement>(null);
  /** El grupo de los ojos, que es lo único que sigue al cursor. */
  const mirada = useRef<SVGGElement>(null);
  /** El grupo que se ladea. Ver el porqué en el CSS de .mc-inclina. */
  const inclina = useRef<SVGGElement>(null);

  useEffect(() => {
    const conMouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!conMouse.matches || quieto.matches) return;

    /** Última posición conocida del cursor, en coordenadas de ventana. */
    let raton: { x: number; y: number } | null = null;
    /** Cuadro pedido y todavía sin pintar. */
    let cuadro = 0;
    /** Si el cursor estaba dentro del radio en el cuadro anterior. */
    let dentro = false;
    /** Esquives acumulados en esta visita. */
    let esquives = 0;
    /** Si ya se rindió y se dejó atrapar. */
    let rendido = false;

    const escribir = (x: number, y: number, rot: number, esc: number) => {
      const c = cuerpo.current;
      const g = inclina.current;
      if (!c || !g) return;
      c.style.setProperty("--mc-x", `${x.toFixed(2)}px`);
      c.style.setProperty("--mc-y", `${y.toFixed(2)}px`);
      g.style.setProperty("--mc-rot", `${rot.toFixed(2)}deg`);
      g.style.setProperty("--mc-esc", esc.toFixed(3));
    };

    // Ojo: las variables van en el grupo mismo, no en el <svg>. El valor por
    // defecto está declarado en .mc-mirada, y una variable declarada en el
    // propio elemento le gana a la que hereda del padre.
    const mirar = (x: number, y: number) => {
      const g = mirada.current;
      if (!g) return;
      g.style.setProperty("--mc-ojo-x", `${x.toFixed(2)}px`);
      g.style.setProperty("--mc-ojo-y", `${y.toFixed(2)}px`);
    };

    const gesto = (cual: "susto" | null) => {
      const c = cara.current;
      if (!c) return;
      if (cual) c.dataset.gesto = cual;
      else delete c.dataset.gesto;
    };

    const pintar = () => {
      cuadro = 0;
      const marco = caja.current;
      if (!marco || !raton) return;

      const r = marco.getBoundingClientRect();
      // Si está oculto (celular) mide 0×0: no hay nada que calcular.
      if (r.width === 0) return;

      const dx = raton.x - (r.left + r.width / 2);
      const dy = raton.y - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const ux = dx / dist;
      const uy = dy / dist;

      // Te alejaste lo suficiente: se le olvida la persecución.
      if (dist > OLVIDO) {
        dentro = false;
        esquives = 0;
        rendido = false;
      }

      const cerca = dist < RADIO;
      if (cerca && !dentro) {
        dentro = true;
        esquives += 1;
        if (esquives > RENDICION) rendido = true;
      }
      if (!cerca) dentro = false;

      const huye = cerca && !rendido;
      cuerpo.current?.setAttribute("data-huyendo", String(huye));

      if (huye) {
        // 0 en el borde del radio, 1 con el cursor encima.
        const fuerza = 1 - dist / RADIO;
        escribir(
          -ux * SALTO * fuerza,
          -uy * SALTO * fuerza,
          -ux * 8 * fuerza,
          1 - 0.05 * fuerza,
        );
        // Retrocede también con la mirada: los ojos huyen del cursor.
        mirar(-ux * MIRADA * 0.9, -uy * MIRADA * 0.9);
        gesto("susto");
        return;
      }

      // De vuelta en su sitio, con la cara normal, mirando al cursor.
      escribir(0, 0, 0, 1);
      mirar(ux * MIRADA, uy * MIRADA);
      gesto(null);
    };

    const pedirCuadro = () => {
      if (!cuadro) cuadro = requestAnimationFrame(pintar);
    };

    const alMover = (e: PointerEvent) => {
      raton = { x: e.clientX, y: e.clientY };
      pedirCuadro();
    };

    // Al hacer scroll el cursor no se mueve pero el personaje sí: hay que
    // recalcular con la última posición conocida o se queda con cara de susto
    // por un cursor que ya no tiene cerca.
    const alScroll = () => {
      if (raton) pedirCuadro();
    };

    const alSalir = () => {
      raton = null;
      dentro = false;
      esquives = 0;
      rendido = false;
      cuerpo.current?.setAttribute("data-huyendo", "false");
      escribir(0, 0, 0, 1);
      mirar(0, 0);
      gesto(null);
    };

    window.addEventListener("pointermove", alMover, { passive: true });
    window.addEventListener("scroll", alScroll, { passive: true });
    document.addEventListener("pointerleave", alSalir);
    window.addEventListener("blur", alSalir);

    return () => {
      if (cuadro) cancelAnimationFrame(cuadro);
      window.removeEventListener("pointermove", alMover);
      window.removeEventListener("scroll", alScroll);
      document.removeEventListener("pointerleave", alSalir);
      window.removeEventListener("blur", alSalir);
    };
  }, []);

  return (
    <div
      ref={caja}
      aria-hidden="true"
      data-mascota
      className="relative mx-auto aspect-square w-full max-w-[26rem]"
    >
      <div ref={cuerpo} className="mc-cuerpo h-full w-full" data-huyendo="false">
        <svg ref={cara} viewBox="0 0 40 40" className="mc-cara h-full w-full">
          <g ref={inclina} className="mc-inclina">
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
              {/* Todos los ojos van juntos en el grupo que sigue al cursor. */}
              <g ref={mirada} className="mc-mirada">
                <g className="mc-ojos">
                  {OJOS_ABIERTOS.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>

                <g className="mc-parpadeo">
                  {OJOS_CERRADOS.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>

                <g className="mc-susto">
                  {OJOS_SUSTO.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
              </g>

              {/* Las dos bocas, cruzándose. Se quedan quietas a propósito:
                  si todo se mueve, no se nota que los ojos siguen al
                  cursor. */}
              <path className="mc-boca" d={BOCA} />
              <circle
                className="mc-boca-o"
                cx={BOCA_O.cx}
                cy={BOCA_O.cy}
                r={BOCA_O.r}
                strokeWidth={BOCA_O.grosor}
              />
            </g>
          </g>
        </svg>
      </div>

      <style>{`
        ${CSS_CARA}

        /* El cuerpo: lo que el cursor empuja. Solo se desplaza. Huir es
           rápido, volver es blando — así el esquive se siente como un
           respingo y el regreso como un resorte que asienta. */
        .mc-cuerpo {
          --mc-x: 0px;
          --mc-y: 0px;
          transform: translate(var(--mc-x), var(--mc-y));
          transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* El ladeo y el encogerse van DENTRO del svg, no en el div de
           afuera, y esto no es un capricho: al rotar un elemento HTML que
           contiene un svg, Chrome rota el mapa de bits ya pintado y los
           bordes de la cabeza salen ondulados. Rotando un <g> por dentro,
           el dibujo se vuelve a trazar como vector y queda limpio.

           En SVG, transform-origin va en unidades del viewBox: 20 20 es el
           centro exacto de la caja de 40×40. */
        .mc-inclina {
          --mc-rot: 0deg;
          --mc-esc: 1;
          transform: rotate(var(--mc-rot)) scale(var(--mc-esc));
          transform-origin: 20px 20px;
          transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mc-cuerpo[data-huyendo="true"],
        .mc-cuerpo[data-huyendo="true"] .mc-inclina {
          transition-duration: 240ms;
        }

        /* Los ojos. En SVG un px de transform es una unidad del viewBox, así
           que 1,7 es 1,7 de 40: se nota y no deforma la cara. */
        .mc-mirada {
          --mc-ojo-x: 0px;
          --mc-ojo-y: 0px;
          transform: translate(var(--mc-ojo-x), var(--mc-ojo-y));
          transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* El brinco de siempre, respirando por debajo de todo lo demás. */
        .mc-cara {
          animation: mc-brinco 2.8s cubic-bezier(0.34, 1.4, 0.5, 1) infinite;
          transform-origin: center bottom;
        }

        @keyframes mc-brinco {
          0%, 100% { transform: translateY(0) scaleY(1); }
          40%      { transform: translateY(-2.5%) scaleY(1.03); }
          70%      { transform: translateY(0) scaleY(0.97); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mc-cara { animation: none; }
          .mc-cuerpo,
          .mc-inclina,
          .mc-mirada { transition: none; transform: none; }
        }
      `}</style>
    </div>
  );
}
