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
        <h2>Marlon Araujo</h2>
        <p><samp className='bold-eventos-card-2'>Localización:</samp> Calle cromo</p>
        <p><samp className='bold-eventos-card-2'>Fecha del evento:</samp> Mayo 2023</p>
        <p><samp className='bold-eventos-card-2'>Hora:</samp> 13:00</p>
        <p><samp className='bold-eventos-card-2'>Contacto:</samp> 954888888</p>
        <p><samp className='bold-eventos-card-2'>Patrocinado por:</samp></p> <div className='imagen1'><img src= {imagenlogo1}></img></div>
        <div className='imagen2'><img src={imgagenlogo2}></img></div>
      </div>
    </div>

</div>
  )
}
