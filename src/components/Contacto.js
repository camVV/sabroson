import React from 'react';
import imagentest from '../images/grid3imagen.jpg';
import { NavLink } from "react-router-dom";
import imagencontacto from '../images/fron4.jpg';
import imgagenlogo2 from '../images/logo.png';
import { BsTelephone } from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import {BsTelephoneFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";

export const Contacto = () => {
  return (

<div class="card cardContacto">
      
<div class="ladoIzq ladoizqContacto"><img src={imagencontacto}></img> </div>
    <div class="ladoDer">
      <h2 class="titulo">Contacto</h2>
      <div class="cuerpo cuerpo-texto">
        <p>
          <span className='bold-eventos-card'>Email:</span> sabrosonsevilla@gmail.com</p>
       <p> 
        <span className='bold-eventos-card'>Telefono:</span> 954 55 55 55</p>
        <p>
        <span className='bold-eventos-card'>Localización:</span> Calle Cromo 15</p>
      </div>  
      <div class="centrahrz"><NavLink to="https://goo.gl/maps/TqNJP56JzCtZEYxE7" target='_blanc'><span className='btn'> Ver en el Mapa</span></NavLink></div>
  </div>
   
    </div>
  )
}
