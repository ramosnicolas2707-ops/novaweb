import { whatsapp } from "@/data/site";
import type { Textos } from "@/i18n/textos";
import { Boton } from "./ui";
import Mascota from "./Mascota";

/**
 * Hero. Dos columnas: la promesa a la izquierda, el personaje a la derecha.
 *
 * Una sola frase, un solo botón principal. Todo lo que se agregue aquí le
 * resta fuerza a lo único que el visitante tiene que entender.
 */
export default function Hero({ t }: { t: Textos }) {
  return (
    <section className="relative overflow-hidden pt-30 pb-16 md:pt-40 md:pb-24">
      <div className="contenedor">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 bg-nieve px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-grafito">
              <span aria-hidden="true" className="h-2 w-2 bg-naranja" />
              {t.heroBadge}
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,4.75rem)]">{t.heroPromesa}</h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-grafito md:text-xl">
              {t.heroBajada}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Boton href={whatsapp(t.waGeneral)} externo>
                {t.escribemePorWhatsapp}
              </Boton>
              <Boton href="#precios" tono="linea">
                {t.verPrecios}
              </Boton>
            </div>

            <p className="mt-6 text-sm text-grafito">{t.heroRespuesta}</p>
          </div>

          {/* El personaje. Ver Mascota.tsx: es el único archivo a cambiar.
              En celular va DEBAJO del titular, no encima: la primera pantalla
              del teléfono tiene que ser la promesa, no la decoración. */}
          <div className="max-w-[17rem] lg:max-w-none">
            <Mascota />
          </div>
        </div>
      </div>
    </section>
  );
}
