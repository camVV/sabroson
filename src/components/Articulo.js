import React from "react";
import { saveEvent } from "../aplication/api";

export const Articulo = () => {
  return (
    <div>
      <div className="portada">
      <h1> Fonorrea imagen</h1>
      <h2>Nombre evento</h2>
      <p><b>Artista</b> La sonora ponseña y sus amigos</p>
      <p><b>Invitados</b> Karol G</p>
      <p><b>Horario</b> 00:00 - 06:00</p>
      <p><b>Entrada</b> 15€</p>
      </div>

      <button onClick={(e) => saveEvent()}>Prueba</button>
    </div>
  );
};
