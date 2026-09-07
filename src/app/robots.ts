import type { MetadataRoute } from "next";
import { site, INDEXAR } from "@/data/site";

/**
 * robots.txt
 *
 * Mientras INDEXAR sea false (ver src/data/site.ts) esto bloquea a los
 * buscadores por completo. Es lo mismo que dice el <meta robots> de cada
 * página, repetido a propósito: el meta lo lee el rastreador cuando ya
 * entró, y el robots.txt lo lee antes de entrar. Con los dos, no hay
 * ventana por la que se cuele una página al índice.
 */
export default function robots(): MetadataRoute.Robots {
  if (!INDEXAR) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
