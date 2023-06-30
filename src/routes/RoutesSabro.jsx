import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Articulo } from "../components/Articulo";
import { Front } from "../components/Front";
import { HeaderNav } from "../components/HeaderNav";
import { Footer } from "../components/Footer";
import { Discoteca } from "../components/Discoteca";
import { Contacto } from "../components/Contacto";
import { Description } from "../components/Description";
import { Eventostest } from "../components/Eventostest";
import { Evento } from "../components/Evento";
import { Evento3d } from "../components/Evento3d";
import {Eventodan} from "../components/Eventodan";




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
                <Route path="/evento-dan" element={<Eventodan/> }/>
                <Route path="/evento-3d" element={<Evento3d/>}/>
                <Route path="/discoteca" element={<Discoteca/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/descripcion" element={<Description/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}