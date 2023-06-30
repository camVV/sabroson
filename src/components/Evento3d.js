import React from 'react';
import imagentest2 from '../images/grid4imagen.jpg';
import imagenlogo1 from '../images/sabroson.png';
import imgagenlogo2 from '../images/logo.png';


export const Evento3d = () => {
  return (
    <div class="flex-container">
   
    <div class="item1"><img src={imagentest2}></img></div>
    <div class="item2">
      <div className='card-texto'>
        <h2>3D Corazones y Leka El Poeta</h2>
        <p><samp className='bold-eventos-card-2'>Localización:</samp> Calle cromo 15, El Sabroson</p>
        <p><samp className='bold-eventos-card-2'>Fecha del evento:</samp> Viernes 7 de Julio</p>
        <p><samp className='bold-eventos-card-2'>Hora:</samp> 23:30 </p>
        <p><samp className='bold-eventos-card-2'>Contacto:</samp> 610 071 324 | 602 500 591</p>
        <p><samp className='bold-eventos-card-2'>Precio:</samp> General 10€ | Puerta 15€ </p>
        <p><samp className='bold-eventos-card-2'>Patrocinado por:</samp></p> <div className='imagen1'><img src= {imagenlogo1}></img></div>
        <div className='imagen2'><img src={imgagenlogo2}></img></div>
      </div>
    </div>

</div>
  )
}
