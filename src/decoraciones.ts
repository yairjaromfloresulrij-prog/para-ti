import type { CSSProperties } from "react";
import { imagenes } from "./imagenes";

export interface Decoracion {
  imagen: string;
  estilo: CSSProperties;
}

export const decoraciones: Decoracion[] = [
  // Guirnalda abajo, centrada
  {
    imagen: imagenes.guirnaldaSuave,
    estilo: {
      bottom: -20,
      left: "50%",
      transform: "translateX(-50%)",
      width: "min(520px, 95vw)",
    },
  },
  // Eucalipto arriba a la izquierda
  {
    imagen: imagenes.eucalipto,
    estilo: {
      top: 0,
      left: 8,
      width: "min(80px, 18vw)",
      transform: "rotate(-10deg)",
    },
  },
  // Eucalipto arriba a la derecha (espejado)
  {
    imagen: imagenes.eucalipto,
    estilo: {
      top: 0,
      right: 8,
      width: "min(80px, 18vw)",
      transform: "scaleX(-1) rotate(-10deg)",
    },
  },
];
