# Sitio del estudio

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · 100% estático.

> **El nombre es NovaWeb** y vive en una sola variable de `src/data/site.ts`.
> El logo —la N de dos columnas con diagonal roja y el logotipo NOVA/WEB— está en
> `src/components/Logo.tsx`. El personaje `<_>` se quitó del sitio el 14 de
> septiembre de 2026, del hero y de debajo del pie.

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

## Lo que falta para lanzar

El sitio ya está publicado y se puede visitar. Lo que falta es que Google
lo registre, y eso espera a una sola cosa: el dominio.

### 1. El dominio (casi listo)

`estudionovaweb.com` se compró el 20 de septiembre de 2026, está agregado
al proyecto en Vercel y `url` y `domain` en `src/data/site.ts` ya apuntan
ahí. Es el apex, sin `www`.

En Namecheap quedó un solo registro, que es todo lo que Vercel pide:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `216.198.79.1` |

Falta únicamente que el DNS termine de propagar. Cuando Vercel pase de
"Invalid Configuration" a verde y la dirección cargue, queda el último
paso:

**Poner `INDEXAR = true` en `src/data/site.ts` y desplegar.**

Va de último a propósito. Si Google indexa una dirección que todavía no
responde, o una que después se cambia, el posicionamiento no se traslada
solo y hay que empezar de cero. Por eso sigue en `false`: el sitio
funciona y el enlace se puede mandar por WhatsApp, pero los buscadores no
entran todavía.

### 2. Lo demás (no bloquea, pero se nota)

| Qué | Dónde |
|---|---|
| ~~Nombre definitivo~~ | NovaWeb, decidido el 9 de septiembre de 2026. |
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

**Los botones rojos llevan texto blanco, no negro.** El rojo es oscuro
(`#b00000`): blanco encima da 7.4:1 y negro apenas 2.6:1. Por lo mismo, sobre
los bloques negros ese rojo se apaga como texto, y ahí se usa `--rojo-claro`
(`#ff4d4d`, 5.9:1). Sobre fondo claro, `--rojo` sirve para todo.

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

**Los hovers se mueven, no cambian de color.** `.barrido`, `.panel-sube` y
`.subraya` en `globals.css`: un fondo que entra barriendo, un panel que sube,
una línea que crece. El color cambia también, pero como consecuencia del
movimiento y para que el texto siga siendo legible, no como el efecto. Las
tres animan `transform` —nunca `width` ni `height`— para que el navegador lo
resuelva en la tarjeta gráfica sin recalcular la página en cada cuadro.

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
