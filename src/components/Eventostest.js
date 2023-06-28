import React from 'react';
import imagentest from '../images/grid3imagen.jpg';
import { NavLink } from "react-router-dom";

export const Eventostest = () => {
  return (
    <div class="card">
        <div class="ladoIzq"> <img src={imagentest} alt="muestra"></img></div>
        <div class="ladoDer">
          <h2 class="titulo">Marlon Araujo</h2>
          <div class="cuerpo">
            <p>Viernes 30 de Junio</p><p>Horario 22:00-06:00</p>
            <p>Ubicacion: Calle cromo</p>
          </div>  
          <div class="centrahrz"><NavLink to="/evento"><span className='btn'> Más info</span></NavLink></div>
      </div>
    </div>
  )
}
