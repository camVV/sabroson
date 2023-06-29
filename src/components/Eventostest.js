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
            <p>
              <span className='bold-eventos-card'>Fecha:</span> Viernes 30 de Junio</p>
           <p> 
            <span className='bold-eventos-card'>Horario:</span> 22:00-06:00</p>
            <p>
            <span className='bold-eventos-card'>&nbsp;&nbsp;&nbsp;&nbsp;Ubicacion:</span> Calle cromo</p>
          </div>  
          <div class="centrahrz"><NavLink to="/evento"><span className='btn'> Más info</span></NavLink></div>
      </div>
    </div>
  )
}
