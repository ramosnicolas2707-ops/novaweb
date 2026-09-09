"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, whatsapp } from "@/data/site";
import type { Idioma } from "@/i18n/idiomas";
import type { Textos } from "@/i18n/textos";

import { Marca } from "./Logo";
import SelectorMoneda from "./SelectorMoneda";
import SelectorIdioma from "./SelectorIdioma";

/**
 * Nav corre en el cliente, y las funciones no cruzan la frontera
 * servidor → cliente. El objeto Textos completo tiene funciones (los
 * mensajes de WhatsApp con parámetros, los títulos con variables), así que
 * aquí se piden solo las claves que este componente usa, todas cadenas.
 */
type TextosNav = Pick<
  Textos,
  | "navPrincipal"
  | "moneda"
  | "idioma"
  | "escribeme"
  | "escribemePorWhatsapp"
  | "waGeneral"
  | "abrirMenu"
  | "cerrarMenu"
>;

/**
 * Barra superior. Fija, blanca, con filete que solo aparece al bajar.
 * En celular es un menú desplegable a pantalla completa.
 *
 * Los enlaces llegan ya traducidos desde el layout: este componente no sabe
 * de contenido, solo de navegación.
 */
export default function Nav({
  lang,
  t,
  enlaces,
}: {
  lang: Idioma;
  t: TextosNav;
  enlaces: { href: string; label: string }[];
}) {
  const [abierto, setAbierto] = useState(false);
  const [bajado, setBajado] = useState(false);
  const ruta = usePathname();

  // El filete inferior aparece recién cuando el contenido pasa por debajo.
  useEffect(() => {
    const alScroll = () => setBajado(window.scrollY > 8);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  // Al cambiar de página el menú se cierra solo.
  useEffect(() => setAbierto(false), [ruta]);

  // Con el menú abierto la página de atrás no se mueve.
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    // El menú de celular va FUERA del <header> a propósito. El header tiene
    // backdrop-blur, y un elemento con backdrop-filter se vuelve el bloque
    // contenedor de sus descendientes "fixed": adentro, el panel quedaba
    // encerrado en los 72 px de la barra y salía con altura cero.
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-blanco/90 backdrop-blur-md transition-shadow duration-300 ${
          bajado ? "shadow-[0_1px_0_0_var(--color-filete)]" : ""
        }`}
      >
        <div className="contenedor flex h-18 items-center justify-between gap-5">
          {/* La marca. El dibujo y el logotipo viven en Logo.tsx. */}
          <Link href={`/${lang}`} aria-label={site.name}>
            <Marca />
          </Link>

          <nav
            aria-label={t.navPrincipal}
            className="hidden items-center gap-6 xl:flex"
          >
            {enlaces.map((item) => {
              const activo = ruta.startsWith(`/${lang}${item.href}`);
              return (
                <Link
                  key={item.href}
                  href={`/${lang}${item.href}`}
                  aria-current={activo ? "page" : undefined}
                  className={`subraya text-[0.9375rem] font-semibold transition-colors ${
                    activo
                      ? "text-naranja-texto"
                      : "text-grafito hover:text-tinta"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Los dos interruptores. En celular se van al menú desplegable
                para no apretar la barra. */}
            <div className="hidden items-center gap-3 lg:flex">
              <SelectorMoneda etiqueta={t.moneda} />
              <span aria-hidden="true" className="h-4 w-px bg-filete-fuerte" />
              <SelectorIdioma lang={lang} etiqueta={t.idioma} />
            </div>

            <a
              href={whatsapp(t.waGeneral)}
              target="_blank"
              rel="noopener noreferrer"
              className="barrido ml-1 hidden bg-naranja px-5 py-2.5 text-[0.9375rem] font-bold tracking-tight text-tinta transition-colors duration-300 hover:text-blanco sm:inline-flex"
            >
              {t.escribeme}
            </a>

            <button
              type="button"
              onClick={() => setAbierto((v) => !v)}
              aria-expanded={abierto}
              aria-controls="menu-movil"
              className="-mr-2 p-2 xl:hidden"
            >
              <span className="sr-only">
                {abierto ? t.cerrarMenu : t.abrirMenu}
              </span>
              <span aria-hidden="true" className="block space-y-[5px]">
                <span
                  className={`block h-0.5 w-6 bg-tinta transition-transform duration-300 ${
                    abierto ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-tinta transition-opacity duration-200 ${
                    abierto ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-tinta transition-transform duration-300 ${
                    abierto ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menú de celular. Hermano del header, no hijo: ver el comentario de
          arriba sobre backdrop-filter. */}
      {abierto && (
        <div
          id="menu-movil"
          className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-blanco xl:hidden"
        >
          <nav aria-label={t.navPrincipal} className="contenedor py-6">
            {enlaces.map((item) => (
              <Link
                key={item.href}
                href={`/${lang}${item.href}`}
                className="block border-b border-filete py-5 text-2xl font-extrabold tracking-tight"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-filete pb-8">
              <SelectorMoneda etiqueta={t.moneda} />
              <SelectorIdioma lang={lang} etiqueta={t.idioma} />
            </div>

            <a
              href={whatsapp(t.waGeneral)}
              target="_blank"
              rel="noopener noreferrer"
              className="barrido mt-8 flex items-center justify-center bg-naranja px-6 py-4 text-base font-bold text-tinta transition-colors duration-300 hover:text-blanco"
            >
              {t.escribemePorWhatsapp}
            </a>
            <p className="mt-4 text-center text-sm text-grafito">
              {site.contact.whatsappDisplay}
            </p>
          </nav>
        </div>
      )}
    </>
  );
}
