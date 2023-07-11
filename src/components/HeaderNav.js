import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import {AiOutlineMenu} from 'react-icons/ai';



export const HeaderNav = () => {

  const [menu, setMenu] = useState (false);
  const handleMenu = () =>{
  setMenu( !menu );
  console.log(menu);
}


  return (
    <header className="header">
        <div className="logo-menu">
        <div className="logo">
        <NavLink to="/"><img src={logo}></img></NavLink>
       
        <div className="button-menu">
              <button className="navmovil menu-ul" onClick={handleMenu}>
        <AiOutlineMenu /></button></div>

        <nav>

        <div className="escritorionavbar">
            <p className="inicio-barra">
              <NavLink to="/">Inicio</NavLink>
            </p>
            <p>
              <NavLink to="/eventos">Eventos</NavLink>
            </p>
          {/*<li>
              <NavLink to="/discoteca">Discoteca</NavLink>
  </li>*/}
            <p>
              <NavLink to="/contacto">Contacto</NavLink>
            </p></div>
       
          <div className={`header-nav ${ menu ? 'isActivate' : ''}`}>
          <ul className="navmovilmenu">
            <li> <NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/eventos">Eventos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul></div>
            
        
        </nav>
        </div> </div>
    </header>
  );
};

