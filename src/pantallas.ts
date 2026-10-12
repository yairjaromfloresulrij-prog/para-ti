import { imagenes } from "./imagenes";

export type IdPantalla = "p1" | "p1b" | "p2" | "p3" | "p4" | "carta";

export interface Boton {
  texto: string;
  ir: IdPantalla;
}

export interface Pantalla {
  imagen?: string;
  imagenAncha?: boolean;
  titulo?: string;
  texto?: string;
  botones?: Boton[];
  carta?: string[];
}

export const pantallas: Record<IdPantalla, Pantalla> = {
  p1: {
    imagen: imagenes.stitch,
    titulo: "Hey... queria decirte algo 👀",
    texto: "¿Quieres saber?",
    botones: [
      { texto: "Sí", ir: "p2" },
      { texto: "Mmm... no sé", ir: "p1b" },
    ],
  },

  p1b: {
    imagen: imagenes.stitchTriste,
    titulo: "Todo bien, sin presión 🙂",
    texto: "Acá voy a estar cuando quieras.",
    botones: [{ texto: "Volver", ir: "p1" }],
  },

  p2: {
    imagen: imagenes.rododendro,
    titulo: "Últimamente me he dado cuenta de algo...",
    botones: [{ texto: "Continuar", ir: "p3" }],
  },

  p3: {
    imagen: imagenes.corazonAcuarela,
    imagenAncha: true,
    titulo: "Me gusta mucho hablar contigo.",
    texto: "Y sí... también me gustas tú. 💗",
    botones: [{ texto: "Siguiente", ir: "p4" }],
  },

  p4: {
    imagen: imagenes.sobre,
    imagenAncha: true,
    titulo: "Pero no quiero apresurar nada.",
    texto: "Simplemente me gustaría conocerte mucho más. ✨",
    botones: [{ texto: "Ver carta 💌", ir: "carta" }],
  },

  carta: {
    carta: [
      "No quiero apresurar nada, y mucho menos ahora que sé que recién volviste. Sé que cada cosa tiene su momento, y no quiero que sientas que tienes que decidir algo ahora.",
      "Solo me gustaría que pudiéramos darnos la oportunidad de conocernos un poco más, seguir hablando, compartir más de nuestras vidas y descubrir, poquito a poquito, qué puede surgir entre nosotros a pesar de la distancia.",
      "Porque, siendo sincero, me gustaste mucho. Me gustó tu forma de ser, tu diligencia, la manera en que haces las cosas y esas pequeñas cosas que fui descubriendo de ti. Me gustaron tus ojos, tu sonrisa y, sobre todo, la devoción que tenías por la misión y el testimonio que compartías.",
      "No sé exactamente a dónde pueda llevarnos esto, y tampoco quiero apresurarlo. Solo sé que me gustaría tener la oportunidad de conocerte mejor, de que tú también puedas conocerme a mí y, si los dos queremos, darnos la oportunidad de ver qué puede pasar.",
      "Sin presión, sin expectativas y sin necesidad de tener todas las respuestas ahora.",
      "Solo... poquito a poquito. ❤️",
    ],
  },
};
