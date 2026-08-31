"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";

const PRESUPUESTOS = [
  "Menos de $1 millón",
  "Entre $1 y $3 millones",
  "Entre $3 y $6 millones",
  "Más de $6 millones",
  "Todavía no lo sé",
];

const campo =
  "w-full border border-hairline-fuerte bg-pizarra px-4 py-3 text-sm text-tiza placeholder:text-niebla focus:border-brasa focus:outline-none";

const etiqueta = "kicker mb-2 block text-niebla";

/**
 * Formulario de contacto.
 *
 * No hay servidor detrás: el formulario redacta el mensaje y lo abre en WhatsApp
 * o en el cliente de correo. Es deliberado — así el sitio se despliega estático y
 * el mensaje llega a un canal que el estudio ya revisa. Los botones dicen
 * exactamente eso: "Abrir WhatsApp con este mensaje".
 */
export function ContactForm() {
  const [datos, setDatos] = useState({
    nombre: "",
    negocio: "",
    servicio: services[0].card,
    presupuesto: PRESUPUESTOS[1],
    mensaje: "",
  });

  const actualizar =
    (campoNombre: keyof typeof datos) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setDatos((d) => ({ ...d, [campoNombre]: e.target.value }));

  const texto = [
    `Hola Meridiano, soy ${datos.nombre || "..."}.`,
    datos.negocio ? `Mi negocio es ${datos.negocio}.` : "",
    `Necesito: ${datos.servicio}.`,
    `Presupuesto: ${datos.presupuesto}.`,
    datos.mensaje ? `\n${datos.mensaje}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const completo = datos.nombre.trim().length > 1;

  const asunto = `Proyecto de ${datos.servicio} — ${datos.nombre || "nuevo contacto"}`;
  const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    asunto,
  )}&body=${encodeURIComponent(texto)}`;

  return (
    <form
      className="max-w-2xl"
      onSubmit={(e) => e.preventDefault()}
      aria-describedby="nota-formulario"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={etiqueta}>
            Tu nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            value={datos.nombre}
            onChange={actualizar("nombre")}
            placeholder="Nombre y apellido"
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="negocio" className={etiqueta}>
            Tu negocio
          </label>
          <input
            id="negocio"
            name="negocio"
            type="text"
            autoComplete="organization"
            value={datos.negocio}
            onChange={actualizar("negocio")}
            placeholder="Nombre de la marca"
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="servicio" className={etiqueta}>
            Qué necesitas
          </label>
          <select
            id="servicio"
            name="servicio"
            value={datos.servicio}
            onChange={actualizar("servicio")}
            className={campo}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.card}>
                {s.card}
              </option>
            ))}
            <option value="Todavía no lo tengo claro">
              Todavía no lo tengo claro
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="presupuesto" className={etiqueta}>
            Presupuesto estimado
          </label>
          <select
            id="presupuesto"
            name="presupuesto"
            value={datos.presupuesto}
            onChange={actualizar("presupuesto")}
            className={campo}
          >
            {PRESUPUESTOS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="mensaje" className={etiqueta}>
          Cuéntanos el proyecto
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={datos.mensaje}
          onChange={actualizar("mensaje")}
          placeholder="Qué vendes, cuántos productos tienes, para cuándo lo necesitas."
          className={campo}
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={completo ? whatsappLink(texto) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!completo}
          className={`inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium transition-colors duration-300 motion-reduce:transition-none ${
            completo
              ? "bg-brasa text-carbon hover:bg-tiza"
              : "pointer-events-none bg-humo text-niebla"
          }`}
        >
          Abrir WhatsApp con este mensaje
          <span aria-hidden="true">→</span>
        </a>

        <a
          href={completo ? mailto : undefined}
          aria-disabled={!completo}
          className={`inline-flex items-center gap-2.5 border px-6 py-3.5 text-sm font-medium transition-colors duration-300 motion-reduce:transition-none ${
            completo
              ? "border-hairline-fuerte text-tiza hover:border-brasa hover:text-brasa"
              : "pointer-events-none border-hairline text-niebla"
          }`}
        >
          Abrir el correo con este mensaje
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <p
        id="nota-formulario"
        role="status"
        className="mt-5 text-sm leading-relaxed text-niebla"
      >
        {completo
          ? "Los botones abren WhatsApp o tu programa de correo con el mensaje ya redactado. Puedes editarlo antes de enviarlo."
          : "Escribe tu nombre para activar los botones. Este formulario no envía nada por su cuenta: redacta el mensaje y lo abre en WhatsApp o en tu correo."}
      </p>
    </form>
  );
}
