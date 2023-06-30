import React from 'react';

import imagentest2 from '../images/grid4imagen.jpg';
import imagentest3 from '../images/grid5imagen.jpg';
import { NavLink } from "react-router-dom";
import imagentest from '../images/28jul.jpg';

export const Eventostest = () => {
  return (
    <div className='cards'>
    <div class="card">
        <div class="ladoIzq"> <img src={imagentest2} alt="muestra"></img></div>
        <div class="ladoDer">
          <h2 class="titulo">3D Corazones y Leka El Poeta</h2>
          <div class="cuerpo">
            <p>
              <span className='bold-eventos-card'>Fecha:</span> Viernes 7 de Julio</p>
           <p> 
            <span className='bold-eventos-card'>Hora:</span> 23:30 </p>
            <p>
            <span className='bold-eventos-card'>Ubicacion:</span> Calle cromo 15</p>
          </div>  
          <div class="centrahrz"><NavLink to="/evento-3d"><span className='btn'> Más info</span></NavLink></div>
      </div>
    </div>
        <div class="card">
        <div class="ladoIzq"> <img src={imagentest3} alt="muestra"></img></div>
        <div class="ladoDer">
          <h2 class="titulo">Paulito FG y Orqueta Dan Den de Cuba</h2>
          <div class="cuerpo">
            <p>
              <span className='bold-eventos-card'>Fecha: </span>Viernes 14 Julio</p>
           <p> 
            <span className='bold-eventos-card'>Hora:</span> 23:00</p>
            <p>
            <span className='bold-eventos-card'>Ubicacion:</span> C. Economía, 19</p>
          </div>  
          <div class="centrahrz"><NavLink to="/evento-dan"><span className='btn'> Más info</span></NavLink></div>
      </div>
    </div>
        <div class="card">
        <div class="ladoIzq"> <img src={imagentest} alt="muestra"></img></div>
        <div class="ladoDer">
          <h2 class="titulo">La Salsoteca!</h2>
          <div class="cuerpo">
            <p>
              <span className='bold-eventos-card'>Fecha:</span> Viernes 28 de Julio</p>
           <p> 
            <span className='bold-eventos-card'>Hora:</span> 23:30</p>
            <p>
            <span className='bold-eventos-card'>Ubicacion:</span> Calle cromo 15</p>
          </div>  
          <div class="centrahrz"><NavLink to="/evento"><span className='btn'> Más info</span></NavLink></div>
      </div>
    </div>
    </div>
  )
}
