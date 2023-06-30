import React from 'react';
import { saveEvent } from "../aplication/api";
import imagentest from '../images/28jul.jpg';
import imagenlogo1 from '../images/sabroson.png';
import imgagenlogo2 from '../images/logo.png';
import dan from '../images/dan.mp4';
import { Player } from 'video-react';
{/*<button onClick={(e) => saveEvent()}>Prueba</button>*/} 

export const Evento = () => {
  return (
<div class="flex-container">
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
   
    <div class="item1"><img src={imagentest}></img></div>
    <div class="item2">
      <div className='card-texto'>

        <h2>La Salsoteca!</h2>
        <p><samp className='bold-eventos-card-2'>Localización:</samp> Calle cromo 15. El Sabroson</p>
        <p><samp className='bold-eventos-card-2'>Fecha del evento:</samp> Viernes 28 Julio</p>
        <p><samp className='bold-eventos-card-2'>Hora:</samp> 23:30</p>
        <p><samp className='bold-eventos-card-2'>Contacto:</samp> 610 071 324 | 602 500 591 </p>
        <p><samp className='bold-eventos-card-2'>Patrocinado por:</samp></p> <div className='imagen1'><img src= {imagenlogo1}></img></div>
        <div className='imagen2'><img src={imgagenlogo2}></img></div>
      </div>
    </div>

</div>

  )
}
