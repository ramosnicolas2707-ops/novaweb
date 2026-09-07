/**
 * Datos estructurados.
 *
 * Va como <script type="application/ld+json">, que es lo que leen Google y los
 * buscadores con IA. El contenido sale siempre de /src/data, nunca de la
 * entrada de un usuario, así que serializarlo con JSON.stringify es seguro.
 *
 * El reemplazo de "<" evita que una cadena que contenga "</script>" cierre
 * la etiqueta antes de tiempo. Es cinturón y tirantes, pero cuesta nada.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
