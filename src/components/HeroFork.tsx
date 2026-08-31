"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { fork, hero } from "@/data/home";
import { cop } from "@/lib/format";
import { Container } from "./ui";

/**
 * LA COSTURA — elemento de firma del sitio.
 *
 * El hero es una sola pregunta a pantalla completa, partida en dos por una línea
 * de brasa. En reposo la costura está al 50%. Al acercar el cursor a un lado, el
 * lado que estás considerando crece y el otro cede: la decisión se siente antes
 * de tomarla.
 *
 * Al salir del hero la costura se desvanece justo mientras la barra de progreso
 * (ScrollSeam) entra desde la misma posición y se va al margen izquierdo. Leído
 * de corrido, es la misma línea moviéndose contigo por el resto del sitio.
 *
 * En pantallas táctiles y con prefers-reduced-motion la costura existe, quieta,
 * y las dos opciones se apilan.
 */
/** Fuera del componente: un objeto nuevo en cada render reinicia el muelle. */
const MUELLE = { stiffness: 150, damping: 24, mass: 0.6 } as const;

export function HeroFork() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [activo, setActivo] = useState<"left" | "right" | null>(null);

  // Fracción de ancho del panel izquierdo. 0.5 = costura al centro.
  //
  // El muelle tiene que seguir a una fuente, no recibir .set() en su salida:
  // useSpring(0.5, ...) fija 0.5 como objetivo permanente y devuelve ahí
  // cualquier valor que se le escriba encima. Por eso hay dos valores.
  const objetivo = useMotionValue(0.5);
  const split = useSpring(objetivo, MUELLE);
  const anchoIzq = useTransform(split, (v) => `${v * 100}%`);
  const anchoDer = useTransform(split, (v) => `${(1 - v) * 100}%`);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacidadCostura = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const seguirPuntero = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const lado = e.clientX - left < width / 2 ? "left" : "right";
    setActivo(lado);
    objetivo.set(lado === "left" ? 0.57 : 0.43);
  };

  const soltarPuntero = () => {
    if (reduce) return;
    setActivo(null);
    objetivo.set(0.5);
  };

  /** El teclado mueve la costura igual que el cursor: tabular es elegir. */
  const enfocarLado = (lado: "left" | "right") => () => {
    if (reduce) return;
    setActivo(lado);
    objetivo.set(lado === "left" ? 0.57 : 0.43);
  };

  return (
    <section
      ref={ref}
      onPointerMove={seguirPuntero}
      onPointerLeave={soltarPuntero}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32"
      aria-labelledby="pregunta-central"
    >
      {/* Planos de fondo. Sólo decoración: el contenido va encima. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Escritorio: dos planos y la costura vertical. */}
        <div className="hidden h-full md:block">
          <motion.div
            style={{ width: anchoIzq }}
            className="absolute inset-y-0 left-0 bg-carbon"
          />
          <motion.div
            style={{ width: anchoDer }}
            className="absolute inset-y-0 right-0 bg-pizarra"
          />
          <motion.div
            style={{ left: anchoIzq, opacity: opacidadCostura }}
            className="absolute inset-y-0 -ml-px w-0.5 bg-brasa"
          >
            {/* La línea se apaga hacia los extremos para no parecer un borde. */}
            <div className="h-full w-full bg-gradient-to-b from-carbon via-transparent to-carbon" />
          </motion.div>
        </div>
        {/* Móvil: un solo plano. La costura acompaña la columna de opciones. */}
        <div className="h-full bg-carbon md:hidden" />
      </div>

      <Container>
        <p className="kicker text-niebla">{hero.kicker}</p>

        <h1
          id="pregunta-central"
          className="mt-6 max-w-4xl text-balance text-2xl leading-[1.15] sm:text-3xl lg:text-[2.75rem]"
        >
          {hero.h1}
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-niebla sm:text-base">
          {hero.sub}
        </p>

        {/* Las dos opciones. En móvil se apilan con la costura a la izquierda. */}
        <div className="relative mt-14 border-l-2 border-brasa pl-5 md:mt-20 md:grid md:grid-cols-2 md:gap-x-12 md:border-0 md:pl-0 lg:mt-24">
          {fork.map((op, i) => (
            <Link
              key={op.side}
              href={op.href}
              onFocus={enfocarLado(op.side)}
              onBlur={soltarPuntero}
              className={`group block py-8 md:py-0 ${
                i === 0
                  ? "border-b border-hairline md:border-0 md:pr-6"
                  : "md:pl-6"
              }`}
            >
              <p
                className={`kicker transition-colors duration-300 motion-reduce:transition-none ${
                  activo === op.side ? "text-brasa" : "text-niebla"
                }`}
              >
                {op.eyebrow}
              </p>

              <h2
                className={`display-xl mt-3 text-[2.5rem] transition-colors duration-300 sm:text-5xl lg:text-[4.25rem] motion-reduce:transition-none ${
                  activo && activo !== op.side ? "text-niebla" : "text-tiza"
                }`}
              >
                {op.title}
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-niebla">
                {op.detail}
              </p>

              <p className="tnum mt-6 whitespace-nowrap text-sm text-tiza">
                Desde{" "}
                <span className="text-brasa">{cop(op.priceFrom)} COP</span>
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-tiza">
                {op.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-16 hidden text-xs text-niebla md:block">
          {hero.scrollHint}
        </p>
      </Container>
    </section>
  );
}
