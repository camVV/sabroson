import React from "react";
import { Evento } from "./Evento";
import imagentest from '../images/grid3imagen.jpg';

export const Eventos = () => {
  return (
    <div className="layout">
      <h2 className="text_title">Eventos</h2>
      <div className="card-caja">
        <div className="card-image">
          <img src={imagentest}></img>
        </div>
        <div className="card-text">
        <p className="fecha-card">Viernes 4 de Junio</p>
        <p className="titulo-card">Marlon Araujo</p>
        <p className="direccion-card">Calle Cromo 15 Poligono Calonge. Sevilla</p>
        </div>
        <div className="card-boton">
          <button>Ver</button>

        </div>
      </div>
      <div className="card-caja">
        <div className="card-image"></div>
        <div className="card-text">
        <p>sadasdasd</p>
        </div>
        <div className="card-boton"></div>
      </div>
      <div className="card-caja">
        <div className="card-image"></div>
        <div className="card-text">
          <p>sadasdasd</p>
        </div>
        <div className="card-boton"></div>
      </div>
      <div className="card-caja">
        <div className="card-image"></div>
        <div className="card-text">
        <p>sadasdasd</p>
        </div>
        <div className="card-boton"></div>
      </div>
    </div>
  );
};
