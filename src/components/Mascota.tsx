/* =============================================================================
   EL PERSONAJE — la cara de código
   =============================================================================

   Los ojos son dos chevrones y la boca un guion bajo: <_>

   La idea es que se lea como cara y como código al mismo tiempo, y que
   funcione incluso escrito: se puede firmar un WhatsApp con <_> y sigue
   siendo él.

   ESTE ARCHIVO ES EL DIBUJO. Aquí viven la geometría, el ciclo de gestos en
   CSS y las versiones que no necesitan JavaScript. El personaje grande del
   hero —el que esquiva el cursor— vive en MascotaHero.tsx y usa todo lo que
   se exporta de aquí.

   CÓMO SE COMPORTA
   El ciclo dura 14 segundos y no lleva ni una línea de JavaScript — son
   grupos de trazos cruzándose por CSS:

     · casi todo el tiempo:  <_>   ojos normales
     · dos veces por ciclo:  -_-   parpadea (126 ms, apenas se nota)

   Y hay un gesto que el ciclo nunca saca solo, porque lo dispara el cursor
   acercándose en el hero:

     · susto:  xOx   ojos en equis y boca redonda, cuando lo asustan

   La cara NO guiña ni sonríe. Se probó y se quitó: el personaje funciona
   mejor impasible —parpadea, se asusta y ya— que haciéndose el simpático.

   ESTO NO ES EL LOGO. El logo de NovaWeb —la N de circuito— vive en
   Logo.tsx y es lo que va en la barra, en el pie y en el favicon. El
   personaje es otra cosa: es el que recibe en la portada y el que se
   encuentra quien baja hasta el final. Nunca firma nada.

   DÓNDE SALE
   Solo en el hero, de lg para arriba, y lo monta <MascotaHero> (otro
   archivo). En celular no sale: sin cursor que esquivar no queda gracia,
   y una cara quieta en una pantalla angosta es rellenar espacio.
   ========================================================================== */

/* ───────────────────────────────────────────────────── GEOMETRÍA GRANDE ──

   Todo vive en una caja de 40×40. Estos trazos son los del hero: gruesos,
   con aire de sobra, pensados para verse a 300–420 px.                     */

/** La cabeza. */
export const CABEZA = { x: 4, y: 4, w: 32, h: 32, rx: 11 };

/** Los ojos normales: < y > mirando hacia adentro. */
export const OJOS_ABIERTOS = [
  "M15 14.5 L11 19 L15 23.5",
  "M25 14.5 L29 19 L25 23.5",
];

/** Los ojos del parpadeo: dos rayitas. */
export const OJOS_CERRADOS = ["M11.2 19 L15 19", "M25 19 L28.8 19"];

/**
 * Los ojos del susto: dos equis. `x x` es el gesto de "me mataste" de toda la
 * vida —el emoticón `x_x`— y aquí, junto a la boca redonda, sale un `xOx`
 * que se lee como un aspaviento y no como miedo de verdad.
 *
 * Cada equis son dos trazos cruzados de 6×6,6 unidades: más anchos que los
 * chevrones, porque una equis chica se empasta en el cruce y queda un punto.
 */
export const OJOS_SUSTO = [
  "M10 15.7 L16 22.3",
  "M16 15.7 L10 22.3",
  "M24 15.7 L30 22.3",
  "M30 15.7 L24 22.3",
];

/** La boca normal: el guion bajo. Es la única boca de la cara en reposo. */
export const BOCA = "M15.5 29 L24.5 29";

/** La boca del susto: una O. Va siempre con los ojos en equis. */
export const BOCA_O = { cx: 20, cy: 29.2, r: 2.9, grosor: 2.6 };

/* ──────────────────────────────────────────────────────── EL CICLO CSS ──

   El CSS de la cara. Lo monta <MascotaHero> dentro de su propio <style>,
   junto al CSS del esquive.

   El ciclo es de 14 s y solo tiene dos parpadeos, en el 21% y el 48%
   (0,9% = 126 ms cada uno). Después del segundo se queda siete segundos con
   la cara quieta, y está bien: nadie parpadea a compás.

   Los parpadeos usan steps(1): cambian de golpe, sin desvanecerse. Un
   parpadeo que hace fundido no parece un parpadeo, parece un error de carga.

   La boca no se anima nunca. Solo desaparece cuando algo de afuera pide el
   susto con data-gesto="susto" en el <svg>, y ahí el ciclo se apaga entero.  */
export const CSS_CARA = `
  .mc-ojos,
  .mc-parpadeo {
    animation-duration: 14s;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
  }

  .mc-ojos     { animation-name: mc-ciclo-ojos; }
  .mc-parpadeo { animation-name: mc-ciclo-parpadeo; opacity: 0; }

  /* Estos dos nunca salen solos: no tienen animación, solo se encienden
     cuando alguien pide el susto. */
  .mc-susto,
  .mc-boca-o   { opacity: 0; }

  @keyframes mc-ciclo-ojos {
    0%, 20.9%    { opacity: 1; }
    21%, 21.9%   { opacity: 0; }   /* parpadeo */
    22%, 47.9%   { opacity: 1; }
    48%, 48.9%   { opacity: 0; }   /* parpadeo */
    49%, 100%    { opacity: 1; }
  }

  @keyframes mc-ciclo-parpadeo {
    0%, 20.9%    { opacity: 0; }
    21%, 21.9%   { opacity: 1; }
    22%, 47.9%   { opacity: 0; }
    48%, 48.9%   { opacity: 1; }
    49%, 100%    { opacity: 0; }
  }

  /* El susto manda sobre el ciclo: se apaga todo y se enciende a mano solo
     lo que toca. */
  [data-gesto="susto"] .mc-ojos,
  [data-gesto="susto"] .mc-parpadeo,
  [data-gesto="susto"] .mc-boca {
    animation: none;
    opacity: 0;
  }

  [data-gesto="susto"] .mc-susto,
  [data-gesto="susto"] .mc-boca-o {
    opacity: 1;
  }

  /* Quien pidió menos movimiento se queda con la cara quieta: ojos abiertos
     y boca recta, sin parpadeos apareciendo solos. */
  @media (prefers-reduced-motion: reduce) {
    .mc-ojos,
    .mc-parpadeo {
      animation: none !important;
    }
    .mc-ojos     { opacity: 1; }
    .mc-parpadeo { opacity: 0; }
  }
`;
