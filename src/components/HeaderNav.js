import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import {AiOutlineMenu} from 'react-icons/ai';


export const HeaderNav = () => {
  return (
    <header className="header">
        <div className="logo">
        <NavLink to="/">Inicio<img src={logo}></img></NavLink>
        </div>
        <nav>
          <ul>
            <li className="navmovil"><AiOutlineMenu/>
            <ul className="navmovilmenu">
						<li>Submenu1</li>
						<li>dsas</li>
						<li>asfasd</li>
						<li>sadasdas</li>
					</ul>
            
            
            </li>
            <li className="inicio-barra">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/eventos">Eventos</NavLink>
            </li>
            <li>
              <NavLink to="/discoteca">Discoteca</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </nav>

    </header>
  );
};

