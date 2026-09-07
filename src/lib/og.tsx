import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/**
 * La imagen que aparece cuando alguien pega un enlace del sitio en WhatsApp,
 * en Instagram o en un chat. Se genera al compilar, una por página.
 *
 * Mismo lenguaje que el sitio: blanco, un bloque naranja y el texto en negro.
 * No se cargan fuentes externas a propósito — traer un binario de tipografía
 * en tiempo de build hace que el deploy dependa de que Google esté arriba.
 */

export const tamanoOg = { width: 1200, height: 630 };
export const tipoOg = "image/png";

export function imagenOg({
  titulo,
  precio,
  etiqueta,
}: {
  titulo: string;
  /** El "desde $X", si la página tiene precio. */
  precio?: string;
  /** El renglón chico de arriba. */
  etiqueta?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* El personaje, en su versión escrita. Satori no dibuja bien los
              trazos del SVG, pero esta cara justamente funciona como texto:
              ese es medio el punto del personaje. */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "17px",
              backgroundColor: "#ff5a00",
              color: "#0d0d0d",
              fontSize: "30px",
              fontWeight: 800,
              letterSpacing: "-1px",
              paddingBottom: "4px",
            }}
          >
            &lt;_&gt;
          </div>
          <div
            style={{ display: "flex", fontSize: "34px", fontWeight: 800, color: "#0d0d0d" }}
          >
            {site.name}
          </div>
        </div>

        {/* Título */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {etiqueta && (
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#c73f00",
                marginBottom: "24px",
              }}
            >
              {etiqueta}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: titulo.length > 46 ? "72px" : "88px",
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1.02,
              color: "#0d0d0d",
              maxWidth: "1000px",
            }}
          >
            {titulo}
          </div>
        </div>

        {/* Pie: precio a la izquierda, ciudad a la derecha */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "3px solid #0d0d0d",
            paddingTop: "28px",
          }}
        >
          {precio ? (
            <div
              style={{
                display: "flex",
                backgroundColor: "#ff5a00",
                color: "#0d0d0d",
                fontSize: "32px",
                fontWeight: 800,
                padding: "12px 24px",
              }}
            >
              {precio}
            </div>
          ) : (
            <div style={{ display: "flex", fontSize: "28px", color: "#5c5c5c" }}>
              {site.domain}
            </div>
          )}

          {/* Una sola cadena, no {ciudad}, {país}: Satori cuenta cada trozo
              como un hijo y exige display:flex apenas hay más de uno. */}
          <div style={{ display: "flex", fontSize: "28px", color: "#5c5c5c" }}>
            {`${site.address.city}, ${site.address.country}`}
          </div>
        </div>
      </div>
    ),
    tamanoOg,
  );
}
