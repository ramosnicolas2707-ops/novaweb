import { whatsapp } from "@/data/site";
import type { Textos } from "@/i18n/textos";
import { Boton } from "./ui";

/**
 * Hero. Una columna, puro texto y botones.
 *
 * Una sola frase, un solo botón principal. Todo lo que se agregue aquí le
 * resta fuerza a lo único que el visitante tiene que entender.
 */
export default function Hero({ t }: { t: Textos }) {
  return (
    <section className="relative overflow-hidden pt-30 pb-16 md:pt-40 md:pb-24">
      <div className="contenedor">
        <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center bg-nieve px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-grafito">
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
      </div>
    </section>
  );
}
