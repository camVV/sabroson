import React from 'react';
import { BsTelephone } from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import {BsTelephoneFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";

export const Contacto = () => {
  return (
    <div className='layout-2'>
      
      <div className='imgcontacto'>
      <h2>Contacto</h2>        
      <span> <BsTelephone/></span>
      </div>
      <div className='container-contact'>
      <div className='location-contacto'>
       
       <div className='text-location'><span className='log-contact'><IoLocationSharp/></span><span className='text-contacts'>Calle Cromo 15 Poligono Calonge. Sevilla</span></div>
        <div className='text-mail'><span className='log-contact'><HiOutlineMail/></span ><a className='text-contacts' id='email' href='mailto:sabrosonsevilla@gmail.com'>sabrosonsevilla@gmail.com</a></div>
        <div className='tel-text'><span className='log-contact'><BsTelephoneFill/></span><a className='text-contacts' id='tel' href='tel:+34610071324'>610 07 13 24</a></div>
       </div>  
    </div>
    <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12677.105963788068!2d-5.9563329!3d37.4069392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126985f0e5a8f3%3A0x3122be73e9938256!2sEL%20SABROSON%20SEVILLA!5e0!3m2!1ses!2ses!4v1687768241764!5m2!1ses!2ses" ></iframe></div>
    </div>
  )
}
