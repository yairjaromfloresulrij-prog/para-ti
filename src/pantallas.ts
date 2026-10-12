export type IdPantalla = "p1" | "p1b" | "p2" | "p3" | "p4" | "carta";

export interface Boton {
  texto: string;
  ir: IdPantalla;
}

export interface Pantalla {
  titulo?: string;
  texto?: string;
  imagen?: string;
  botones?: Boton[];
  carta?: string[];
}

export const pantallas: Record<IdPantalla, Pantalla> = {
  p1: {
    titulo: "Hey... hice algo para ti 👀",
    texto: "¿Quieres verlo?",
    botones: [
      { texto: "Sí", ir: "p2" },
      { texto: "Mmm... no sé", ir: "p1b" },
    ],
  },
  p1b: {
    titulo: "Tranqui, sin apuro 🙂",
    texto: "Cuando quieras, acá va a estar.",
    botones: [{ texto: "Volver", ir: "p1" }],
  },
  p2: {
    titulo: "Últimamente me he dado cuenta de algo...",
    botones: [{ texto: "Continuar", ir: "p3" }],
  },
  p3: {
    titulo: "Me gusta mucho hablar contigo.",
    texto: "Y sí... también me gustas tú. 💗",
    botones: [{ texto: "Siguiente", ir: "p4" }],
  },
  p4: {
    titulo: "Pero no quiero apresurar nada.",
    texto: "Simplemente me gustaría conocerte mucho más. ✨",
    botones: [{ texto: "Ver carta 💌", ir: "carta" }],
  },
  carta: {
    carta: [
      "No sé exactamente a dónde nos vaya a llevar esto, y tampoco quiero apresurarlo.",
      "Solo sé que me gusta hablar contigo, me gusta ir descubriendo pequeñas cosas sobre ti y, sinceramente, me gustas mucho.",
      "Así que hice esto simplemente para decirte que me encantaría seguir conociéndote, pasar más tiempo contigo y ver qué sucede poquito a poquito. ❤️",
    ],
  },
};
