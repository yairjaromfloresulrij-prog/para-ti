import { useState } from "react";
import { pantallas } from "./pantallas";
import type { IdPantalla } from "./pantallas";
import "./App.css";

export default function App() {
  const [actual, setActual] = useState<IdPantalla>("p1");
  const pantalla = pantallas[actual];

  return (
    // key={actual} hace que React "reinicie" el div y se repita la animación
    <main className="pantalla" key={actual}>
      {pantalla.imagen && <img src={pantalla.imagen} alt="" />}
      {pantalla.titulo && <h1>{pantalla.titulo}</h1>}
      {pantalla.texto && <p>{pantalla.texto}</p>}

      {pantalla.carta && (
        <div className="papel">
          {pantalla.carta.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </div>
      )}

      {pantalla.botones && (
        <div className="botones">
          {pantalla.botones.map((b) => (
            <button key={b.texto} onClick={() => setActual(b.ir)}>
              {b.texto}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
