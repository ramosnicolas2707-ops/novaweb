import Link from "next/link";

/** Migas de pan. La ruta visible; el JSON-LD lo pone cada página aparte. */
export default function Migas({
  items,
  etiqueta,
}: {
  /** Los `path` vienen ya con el idioma delante. */
  items: { name: string; path: string }[];
  etiqueta: string;
}) {
  return (
    <nav aria-label={etiqueta} className="contenedor pt-28 md:pt-32">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-grafito">
        {items.map((item, i) => {
          const ultimo = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {ultimo ? (
                <span aria-current="page" className="text-tinta">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-tinta"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
