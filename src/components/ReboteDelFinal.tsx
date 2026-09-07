"use client";

import { useEffect } from "react";

/**
 * El rebote del final.
 *
 * Llegas al fondo, alcanzas a ver al personaje, y la página te devuelve
 * enseguida dejándolo fuera de pantalla. Es un guiño al que baja de más,
 * no una sección donde te quedas parado.
 *
 * CÓMO LO HACE — y por qué NO tocando el scroll
 * No mueve la página: encoge la sección. Al achicarse el documento, el
 * navegador sube la vista solo, porque ya no hay dónde estar tan abajo. Es
 * una línea de CSS animando la altura, y el rebote sale de regalo.
 *
 * Las dos versiones anteriores movían el scroll a mano y las dos se
 * rompieron, cada una por su lado:
 *
 *   · scrollTo({ behavior: "smooth" }) no siempre corre. Hay navegadores y
 *     configuraciones donde el suave nativo está apagado y la llamada no mueve
 *     nada: no falla, no avisa, simplemente no pasa.
 *
 *   · Animarlo a mano tampoco alcanzó. Cualquier reacomodo de la maquetación
 *     —una fuente que termina de cargar, una imagen que ocupa su sitio— movía
 *     la página unos píxeles, la animación lo confundía con el visitante
 *     tomando el control, y se cancelaba a media vuelta. Peor: fallaba en unas
 *     páginas y en otras no, según cuánto se moviera cada una.
 *
 * Encogiendo la sección no hay nada que sincronizar: el navegador ajusta la
 * vista él mismo, en el mismo cuadro, y no hay forma de que se desincronice.
 *
 * Se rearma al alejarse del fondo, así que si vuelves a bajar, vuelve a estar.
 * Y respeta prefers-reduced-motion: la sección se encoge igual, pero de golpe,
 * sin animar.
 */

/**
 * Cuánto ve el visitante al personaje antes de que la sección se recoja.
 *
 * Corto a propósito. Con 2 segundos se sentía un tiempo de espera —bajas,
 * te quedas mirando, y en algún momento la página reacciona—. Con 420 ms se
 * siente lo que tiene que sentirse: que el fondo te devuelve, como cuando
 * empujas un cajón que ya está cerrado. Alcanza a leerse la frase porque son
 * cuatro palabras, no un párrafo.
 */
const ESPERA = 420;

/** Qué tan visible tiene que estar para que empiece a contar. */
const VISIBILIDAD = 0.8;

export default function ReboteDelFinal({ id }: { id: string }) {
  useEffect(() => {
    const seccion = document.getElementById(id);
    if (!seccion) return;

    let temporizador: number | undefined;

    /* ── Cuándo se recoge ─────────────────────────────────────────────── */

    const observador = new IntersectionObserver(
      ([entrada]) => {
        window.clearTimeout(temporizador);

        // Se recoge solo si de verdad la estás viendo, no de refilón.
        if (entrada.intersectionRatio < VISIBILIDAD) return;
        if (seccion.dataset.encogido === "true") return;

        temporizador = window.setTimeout(() => {
          seccion.dataset.encogido = "true";
        }, ESPERA);
      },
      { threshold: [0, VISIBILIDAD, 1] },
    );

    observador.observe(seccion);

    /* ── Cuándo vuelve ────────────────────────────────────────────────── */

    // Una vez recogida mide cero, así que el observador ya no la ve nunca más.
    // Por eso el rearme va por scroll: cuando el visitante se aleja del fondo,
    // la sección vuelve a su sitio, lista para la próxima bajada.
    const alScroll = () => {
      if (seccion.dataset.encogido !== "true") return;

      const restante =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);

      if (restante > window.innerHeight) delete seccion.dataset.encogido;
    };

    window.addEventListener("scroll", alScroll, { passive: true });

    return () => {
      observador.disconnect();
      window.removeEventListener("scroll", alScroll);
      window.clearTimeout(temporizador);
    };
  }, [id]);

  return null;
}
