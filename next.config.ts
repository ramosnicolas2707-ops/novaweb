import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primero, WebP como respaldo. Next negocia el formato por Accept header.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 828, 1080, 1280, 1920],
  },
  /**
   * Por defecto compila en .next, como siempre.
   *
   * `npm run build:check` le pasa otra carpeta por NEXT_DIST_DIR. Eso permite
   * compilar con `npm run dev` corriendo: si los dos escriben en .next, el
   * build le borra al servidor de desarrollo los trozos que tiene cargados y
   * este empieza a devolver "Cannot find module './611.js'" en media web,
   * hasta que lo reinicias. Con carpetas distintas no se pisan.
   */
  distDir: process.env.NEXT_DIST_DIR || ".next",

  /**
   * "/" pelado no existe: todo el sitio vive dentro de /es o /en.
   *
   * No es permanente a propósito. Si algún día se detecta el idioma del
   * navegador para mandar a cada quien al suyo, una redirección 308 ya
   * cacheada en los navegadores de medio mundo sería un dolor de cabeza.
   */
  async redirects() {
    return [{ source: "/", destination: "/es", permanent: false }];
  },
};

export default nextConfig;
