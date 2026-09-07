"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Aparición al hacer scroll.
 *
 * Sin librería de animación: un IntersectionObserver y dos clases de CSS.
 * Framer Motion para esto sería traer 40 kB para mover opacidad.
 *
 * Se desconecta apenas dispara: la animación pasa una sola vez, no cada vez
 * que el elemento vuelve a entrar en pantalla.
 */
export default function Revelar({
  children,
  /** Retraso en ms, para escalonar varios elementos de una fila. */
  retraso = 0,
  className = "",
}: {
  children: ReactNode;
  retraso?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin soporte de IntersectionObserver, se muestra y ya.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      // Dispara un poco antes de que el elemento toque el borde inferior.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    obs.observe(el);

    /**
     * Red de seguridad.
     *
     * Este componente esconde contenido y espera a que el observer lo
     * muestre. Si el observer no dispara —por un salto de scroll raro, un
     * navegador con una implementación floja, una extensión metiendo mano— el
     * texto se queda invisible para siempre. En un sitio que vende, eso no es
     * una animación fallida: es una sección que el cliente nunca vio.
     *
     * A los 2 segundos se muestra pase lo que pase. Si el observer ya
     * disparó, esto no hace nada.
     */
    const red = window.setTimeout(() => {
      setVisible(true);
      obs.disconnect();
    }, 2000);

    return () => {
      obs.disconnect();
      window.clearTimeout(red);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${retraso}ms` }}
      className={`revelar ${className}`}
    >
      {children}
    </div>
  );
}
