import React from 'react';
import { saveEvent } from "../aplication/api";
import imagentest from '../images/grid3imagen.jpg';
import imagenlogo1 from '../images/sabroson.png';
import imgagenlogo2 from '../images/logo.png';
{/*<button onClick={(e) => saveEvent()}>Prueba</button>*/} 

export const Evento = () => {
  return (
<div class="flex-container">
   
    <div class="item1"><img src={imagentest}></img></div>
    <div class="item2">
      <div className='card-texto'>
        <h2>Nombre del evento</h2>
        <p>Localizacion: Calle cromo</p>
        <p>Fecha del evento: Mayo 2023 hora 13:00</p>
        <p>Contacto: 954888888</p>
        <p>Patrocinado por:</p> <div className='imagen1'><img src= {imagenlogo1}></img></div>
        <div className='imagen2'><img src={imgagenlogo2}></img></div>
      </div>
    </div>

</div>
  )
}
