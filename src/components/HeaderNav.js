import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";


export const HeaderNav = () => {
  return (
    <header className="header">
        <div className="logo">
        <img src={logo}></img>
        </div>
        <nav>
          <ul>
            <li>
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

