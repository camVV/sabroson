import React from 'react';
import imagentest2 from '../images/grid5imagen.jpg';
import imagenlogo1 from '../images/sabroson.png';
import imgagenlogo2 from '../images/logo.png';
import { Player } from 'video-react';
import dan from '../images/dan.mp4';
import { NavLink } from "react-router-dom";


export const Eventodan = () => {
  return (
    <div class="flex-container">

    <div class="item1"><img src={imagentest2}></img></div>
    <div class="item2">
      <div className='card-texto'>
      <Player>
      <source src={dan} />
    </Player>
        <h2>Paulito FG y Orqueta Dan Den de Cuba</h2>
        <p><samp className='bold-eventos-card-2'>Localización:</samp> C. Economía, 19, Theatre Sevilla</p>
        <p><samp className='bold-eventos-card-2'>Fecha del evento:</samp> Viernes 14 de Julio</p>
        <p><samp className='bold-eventos-card-2'>Hora:</samp> 23:30 </p>
        <p><samp className='bold-eventos-card-2'>Contacto:</samp> 610 071 324 | 697 301 940 | 763 939 116 | 623 493 476</p>
        <p><samp className='bold-eventos-card-2'>Precio:</samp> General 35€ | SuperVip 45€ </p>
        <p><samp className='bold-eventos-card-2'>Patrocinado por:</samp></p> <div className='imagen1'><img src= {imagenlogo1}></img></div>
        <div className='imagen2'><img src={imgagenlogo2}></img></div>
        <div className='buttom-ticket'>
        <NavLink to="https://www.monsterticket.es/comprar-entrada/?ee=2303"><span className='btn boton-comprar'> Comprar Entradas</span></NavLink>
        </div>
      </div>
      
    </div>

</div>
  )
}
