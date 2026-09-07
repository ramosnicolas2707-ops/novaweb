/**
 * Compila el sitio en una carpeta aparte (.next-check) para poder verificar el
 * build SIN romper el `npm run dev` que tengas corriendo.
 *
 * El problema que resuelve: `next build` y `next dev` escriben los dos en
 * .next. Si compilas con el servidor de desarrollo arriba, el build le borra
 * los trozos que ese servidor tiene cargados y empieza a devolver
 * "Cannot find module './611.js'" en media web hasta que lo reinicias. Parece
 * que rompiste el código, pero el código está bien.
 *
 * No se usa `NEXT_DIST_DIR=... next build` directamente en package.json porque
 * esa sintaxis es de bash: en Windows npm corre los scripts con cmd y ahí falla.
 * Este archivo hace lo mismo y funciona en Windows, macOS y Linux.
 *
 * La carpeta que sale de aquí es desechable y está en .gitignore. Para el
 * build de verdad —el que se despliega— sigue siendo `npm run build`.
 */

import { spawn } from "node:child_process";

const proceso = spawn("next", ["build"], {
  stdio: "inherit",
  // shell:true para que encuentre el binario de next en node_modules/.bin
  // también en Windows, donde es un .cmd y no un ejecutable.
  shell: true,
  env: { ...process.env, NEXT_DIST_DIR: ".next-check" },
});

proceso.on("exit", (codigo) => process.exit(codigo ?? 1));
