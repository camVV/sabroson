import React from 'react'
import logo from '../images/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="footer">

            <div id="menu-footer">
                <img src={logo}></img>          
            </div>
            <div id="contacto">
                <h2>Contacto</h2>
                <p>Calle Cromo 15 Poligono Calonge. Sevilla</p>
                <p><a id='email' href='mailto:sabrosonsevilla@gmail.com'>sabrosonsevilla@gmail.com</a></p>
                <p><a id='tel' href='tel:+34610071324'>610 07 13 24</a>  </p>
               
            </div>
            <div id="redes">
                
                <h2>Redes Sociales</h2>
                <div className='icons-redes'><a href='https://www.facebook.com/p/El-sabros%C3%B3n-sevilla-100069726525368/' target='blank'> <FaFacebook /></a> 
                <a href='https://www.instagram.com/sabrosonsevilla/' target='blank'> <FaInstagram /></a> </div>                  
            </div>
           
    </footer>
   
  )
}
