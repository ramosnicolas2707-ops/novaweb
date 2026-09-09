# Sitio del estudio

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · 100% estático.

> **El nombre es NovaWeb** y vive en una sola variable de `src/data/site.ts`.
> El logo —la N de circuito y el logotipo NOVA/WEB— está en
> `src/components/Logo.tsx`. El personaje `<_>` sigue existiendo, pero ya no
> firma nada: vive en la portada y al final del scroll.
>
> **El dominio todavía dice `meridiano`.** Hay que renombrar el proyecto en
> Vercel y después actualizar `url` y `domain` en `src/data/site.ts`.

---

## Arrancar

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build        # compila y prerenderiza las 34 rutas (17 páginas × 2 idiomas)
npm run build:check  # igual, pero en .next-check: no rompe el dev que tengas corriendo
npm run start        # sirve el build de producción
npm run typecheck    # tsc --noEmit
```

> **Si tienes `npm run dev` corriendo, compila con `build:check`.** Los dos
> comandos escriben en `.next`, así que un `build` con el dev arriba le borra
> los trozos que ese servidor tiene cargados y empieza a devolver
> `Cannot find module './611.js'` en media web. Parece que rompiste el código,
> pero el código está bien: solo hay que reiniciar el dev. `build:check`
> compila en otra carpeta y no se pisan.

> **El proyecto vive dentro de OneDrive.** Eso hace que OneDrive intente
> sincronizar `.next`, que son miles de archivos que cambian en cada
> compilación. Ya provocó un build fallido con `EBUSY: resource busy or
> locked`. Si te vuelve a pasar, vuelve a correr el comando; y si se pone
> pesado, excluye la carpeta del proyecto desde la configuración de OneDrive
> o muévelo fuera de OneDrive.

Node 18.18 o superior. La primera compilación descarga la fuente Archivo y la
deja dentro del build: en producción el sitio no le pide nada a ningún dominio
externo.

---

## Lo que falta antes de publicar

| Qué | Dónde |
|---|---|
| **Nombre definitivo** | `src/data/site.ts` → `name`, `legalName`, `url`, `domain`. También a mano en `public/llms.txt`. |
| ~~Precios de rediseño~~ | Confirmados el 7 de septiembre de 2026: $950.000 y $2.100.000. |
| **URLs de los proyectos** | `src/data/proyectos.es.ts` y `.en.ts` → campo `url`, hoy en `null` en los dos. Eclipse está protegida con contraseña y Sexta Rueda solo corre en local. |
| **Catálogo de Sexta Rueda** | Falta agregar esa captura cuando el sitio tenga fotos de producto reales (hoy son cuadros grises). |

---

## Dónde se edita cada cosa

**Todos los textos y precios están en `/src/data`.** No hay ni un precio
escrito dentro de un componente. Para cambiar el sitio no hace falta tocar JSX.

| Archivo | Qué contiene |
|---|---|
| `src/data/site.ts` | Lo que NO se traduce: nombre, dominio, WhatsApp, correo, ciudad. Y las condiciones comerciales, esas sí en los dos idiomas. |
| `src/data/servicios.es.ts` · `.en.ts` | Los cuatro servicios completos: títulos, planes con precio, qué incluye, qué **no**, para quién es, FAQ y metadatos. |
| `src/data/proyectos.es.ts` · `.en.ts` | Los proyectos, con sus capturas y el pie de cada una. |
| `src/data/tipos.ts` | La forma que tiene el contenido. Si el inglés se olvida de un campo, la compilación falla. |
| `src/i18n/textos.ts` | Los textos cortos y repetidos: botones, títulos de sección, etiquetas. En los dos idiomas. |

### Cambiar un precio

Editas el plan en `src/data/servicios.es.ts` **y en `.en.ts`**. El número nuevo aparece solo en la
tarjeta del plan, en la tabla del home, en el "desde $X", en el JSON-LD de
`Service`/`Offer` y en la imagen de Open Graph.

**Acuérdate de actualizar `public/llms.txt` a mano**: es texto plano y no se
genera desde los datos.

### Agregar un servicio

1. Agregas la entrada al array `servicios` de `src/data/servicios.es.ts` **y de
   `servicios.en.ts`**. Si te falta una, el compilador te avisa.
2. Ya está: la ruta (`src/app/[lang]/servicios/[slug]/`), el menú, el pie, la
   imagen de Open Graph y el `sitemap.xml` salen todos del mismo array.

### Agregar un proyecto

1. Pones las capturas en `public/proyectos/`.
2. Agregas la entrada a `proyectos` en `src/data/proyectos.es.ts` y en `.en.ts`.

El `alt` de cada captura describe **la imagen**, no el proyecto: si cambias la
captura, cambia el alt en el mismo commit.

---

## Dos idiomas y dos monedas

**Idioma: una dirección por idioma.** `/es/…` y `/en/…`, con `/` redirigiendo
a `/es`. No es un interruptor que cambia el texto en la misma página: eso
haría que Google viera un solo documento en dos idiomas mezclados, que es
peor que no traducir. Con direcciones separadas más `hreflang`, indexa las
dos versiones y cada una compite en su idioma.

Todo el sitio vive dentro de `src/app/[lang]/`, y **ese es el layout raíz**:
no existe `src/app/layout.tsx`. Tiene que ser así porque el `<html lang="…">`
depende del idioma y un layout en la raíz no recibe el parámetro.

Los slugs no se traducen (`/en/servicios/paginas-web`). Traducirlos daría
direcciones más limpias en inglés pero duplicaría el árbol de rutas. Vale la
pena cuando el tráfico en inglés lo justifique.

**Moneda: las dos cifras van en el HTML.** Cada precio se escribe dos veces
(ver `src/components/Precio.tsx`) y el CSS muestra la que el visitante eligió,
según `data-precios` en `<html>`. Ventajas sobre calcularlo en el navegador:
no hay parpadeo al cambiar, funciona sin JavaScript (se ven los pesos) y
Google indexa las dos.

La tasa se consulta al compilar y se refresca cada 24 horas
(`src/lib/tasa.ts`). Si la consulta falla se usa **3.500** como respaldo: un
precio en dólares desactualizado es un problema, una página que no compila
porque una API de terceros no contestó es un problema peor.

> **Los precios se guardan siempre en pesos.** El dólar es una conversión de
> cara al visitante. Nunca escribas un precio en USD en los datos: se
> desactualiza y queda contradiciendo al que sí se calcula.

---

## Decisiones que conviene no deshacer sin querer

**Los botones naranjas llevan texto negro, no blanco.** Blanco sobre `#ff5a00`
da 2.9:1 de contraste y no pasa accesibilidad; negro da 6:1. Además se ve más
técnico. Por lo mismo hay dos naranjas en `globals.css`: `--naranja` para
bloques y `--naranja-texto` (más oscuro, 5.1:1) para texto chico.

**El menú de celular vive fuera del `<header>`.** El header tiene
`backdrop-blur`, y un elemento con `backdrop-filter` se convierte en el bloque
contenedor de sus descendientes `position: fixed`. Adentro, el panel quedaba
encerrado en los 72 px de la barra y salía con altura cero. Si lo vuelves a
meter dentro, se rompe otra vez.

**No hay librería de animación.** Las apariciones al hacer scroll son un
`IntersectionObserver` (`src/components/Revelar.tsx`) y dos clases de CSS.
Framer Motion serían 40 kB para animar opacidad. Ese componente esconde
contenido y espera al observer para mostrarlo, así que lleva una red de
seguridad: a los 2 segundos se muestra pase lo que pase. Si el observer no
dispara, el visitante ve la sección igual — no la pierde.

**El personaje son tres dibujos, no uno encogido.** La cara `<_>` vive en
`src/components/Mascota.tsx` (`<Mascota>` para el hero, `<CaraMarca>` para la
barra y el pie) y en `src/app/icon.svg` (favicon). Son distintos a propósito:
la boca deja de leerse por debajo de unos 28 px, así que el favicon la suelta
y se queda solo con los ojos. Si cambias la cara, cámbiala en los tres — está
anotado dentro de cada archivo.

Sus gestos —parpadeo y guiño con sonrisa— son un ciclo de 14 s hecho con
`opacity` y `steps(1)`, sin una línea de JavaScript. Van con `steps` y no con
fundido porque un parpadeo que se desvanece no parece un parpadeo, parece un
error de carga.

**Los hovers se mueven, no cambian de color.** `.barrido`, `.panel-sube` y
`.subraya` en `globals.css`: un fondo que entra barriendo, un panel que sube,
una línea que crece. El color cambia también, pero como consecuencia del
movimiento y para que el texto siga siendo legible, no como el efecto. Las
tres animan `transform` —nunca `width` ni `height`— para que el navegador lo
resuelva en la tarjeta gráfica sin recalcular la página en cada cuadro.

**El rebote del final no mueve el scroll: encoge la sección.** La sección
del personaje que va debajo del pie (`FinDelScroll` + `ReboteDelFinal`) tiene
altura propia y se recoge sola a los 2 segundos de que la ves. Al acortarse
el documento, el navegador sube la vista él mismo.

Llegué ahí después de que dos versiones que sí movían el scroll se rompieran:

- `scrollTo({ behavior: "smooth" })` no siempre corre. Hay navegadores y
  configuraciones donde el suave nativo está apagado y la llamada no mueve
  nada: no falla, no avisa, simplemente no pasa.
- Animarlo a mano tampoco alcanzó. Cualquier reacomodo de maquetación —una
  fuente que termina de cargar, una imagen que ocupa su sitio— movía la
  página unos píxeles, la animación lo confundía con el visitante tomando el
  control y se cancelaba a media vuelta. Fallaba en unas páginas y en otras
  no, según cuánto se acomodara cada una, que es la peor clase de error.

Encogiendo no hay nada que sincronizar. Si vuelves a tocarlo, no lo
conviertas otra vez en un `scrollTo`.

**Las páginas de servicio comparten una sola plantilla**
(`src/components/PaginaServicio.tsx`). Cada `page.tsx` son diez líneas que le
pasan su objeto de datos. Arreglar algo ahí lo arregla en las cuatro.

---

## SEO

No hay plugin. Son tres cosas hechas a mano en `src/lib/seo.ts`:

- Título y descripción propios por página, escritos pensando en qué escribe la
  gente en Google.
- JSON-LD de `ProfessionalService`, `Service` con sus `Offer` (o sea, con los
  precios), `FAQPage` y `BreadcrumbList`.
- `sitemap.xml` y `robots.txt` generados desde los datos.

Las FAQ están en las páginas de servicio, no en el home: ahí es donde hacen el
trabajo de posicionamiento sin alargar la portada.

`public/llms.txt` es para los buscadores con IA. Se mantiene a mano.
