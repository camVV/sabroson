import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Articulo } from "../components/Articulo";
import { Front } from "../components/Front";
import { HeaderNav } from "../components/HeaderNav";
import { Footer } from "../components/Footer";
import { Eventos } from "../components/Eventos";
import { Discoteca } from "../components/Discoteca";
import { Contacto } from "../components/Contacto";
import { Description } from "../components/Description";
import { Eventostest } from "../components/Eventostest";
import { Evento } from "../components/Evento";



export const RoutesSabro = () => {
    return(
        <BrowserRouter>
        {/*Cabecera*/}
        <HeaderNav/>
            <Routes>
                <Route path="/" element={<Front/>}/>
                <Route path="/sabroson" element={<Front/>}/>
                <Route path="/articulo" element={<Articulo/>}/>
                <Route path="/eventos" element={<Eventostest/>}/>
                <Route path="/evento" element={<Evento/>}/>
                <Route path="/discoteca" element={<Discoteca/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/descripcion" element={<Description/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}