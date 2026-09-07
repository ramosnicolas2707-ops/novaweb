import { Boton } from "@/components/ui";

/**
 * 404. Corto y con salida.
 *
 * Vive dentro de [lang] porque el layout raíz también vive ahí. Como no
 * recibe params, los textos van en español: es el idioma por defecto y quien
 * cae en un 404 casi nunca llegó por el menú.
 */
export default function NoEncontrado() {
  return (
    <section className="contenedor flex min-h-[70vh] flex-col justify-center py-32">
      <p className="cifra text-[clamp(5rem,18vw,11rem)] font-extrabold leading-none tracking-tight text-naranja">
        404
      </p>
      <h1 className="mt-4 text-[clamp(1.75rem,5vw,3rem)]">
        Esta página no existe
      </h1>
      <p className="mt-5 max-w-md text-lg text-grafito">
        O la borré, o el enlace venía mal escrito. Te dejo por dónde seguir.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Boton href="/es">Ir al inicio</Boton>
        <Boton href="/es/proyectos" tono="linea">
          Ver el trabajo
        </Boton>
      </div>
    </section>
  );
}
