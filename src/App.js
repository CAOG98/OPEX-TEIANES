import React, { Component, useEffect, useState } from "react"
import { Route, Routes, Navigate } from 'react-router-dom';
import FormPrincipal from "./componentes/FormPrincipal"
import FormIdea from "./componentes/FormIdea";
import TableIdeas from "./componentes/TableIdeas";
import ApprovedIdeas from "./componentes/ApprovedIdeas";
import AcceptedTeianes from "./componentes/AcceptedTeianes/AcceptedTeianes";
import TeianesRechazados from "./componentes/TeianesRechazados";
import Dudas from "./componentes/Dudas";
import SideBar from "./componentes/SideBar";
import NavBar from "./componentes/NavBar";
import styles from './index.module.css'
import FormularioLogin from "./componentes/FormularioLogin";
import DetallesTeian from "./componentes/DetallesTeian";
import Perfil from "./componentes/Perfil";
import FormIdeaTest from "./componentes/FormIdea";
import Avatares from './componentes/Avatar/Avatares'
import IdeasGenerales from "./componentes/Ideas/IdeasGenerales";
import { PageNotFound } from "./componentes/Ideas/PageNotFound";
import TeianesImplementados from "./componentes/TeianesImplementados/TeianesImplementados";
import TeianesGenerales from "./componentes/TeianesGenerales/TeianesGenerales";
import TeianesUsuario from "./componentes/TeianesUsuario";

// Estilo general
const cont = styles.cont

const App = () => {
  // Hooks para extraer las ideas
  const [ideas, setIdeas] = useState([])
  // const [info, setInfo] = useState({})

  // Api para extraer todas las ideas
  const initialUrl = "http://10.30.2.167:4000/api/Ideas"

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeas(data)
      })
      // .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeas(initialUrl)
  }, [])

  const tokenSesion = window.localStorage.getItem('tokenSesion')
  // console.log(tokenSesion)

  const rutaServidor = "" //Pruebas
  //const rutaServidor="/teianes/" //Produccions
  return (
    <>
    {/* Condicion para saber si tiene iniciada sesion o no */}
    {
      !tokenSesion ? 
      (
        <Routes>
          <Route path={rutaServidor + "/Login/*"} element={<FormularioLogin />} />
          <Route path="*" element={<FormularioLogin />} />
        </Routes>
      ):
      (
        <div className={cont}>
          <SideBar />
          <NavBar />
          <Routes>
            <Route path={rutaServidor + "Teian/CrearIdea"} element={<FormIdea />} />
            <Route path={rutaServidor + "Teian/TablaIdeas"} element={<TableIdeas />} />
            <Route path={rutaServidor + "Teian/IdeasUsuario"} element={<TeianesUsuario />} />
            <Route path={rutaServidor + "Teian/IdeasGenerales"} element={<TeianesGenerales />} />
            <Route path={rutaServidor + "Teian/IdeasPorAprobar"} element={<ApprovedIdeas />} />
            <Route path={rutaServidor + "Teian/DetalleTeian/:iD_IDEA"} element={<DetallesTeian />} />
            <Route path={rutaServidor + "Teian/IdeasAceptadas"} element={<AcceptedTeianes />} />
            <Route path={rutaServidor + "Teian/IdeasImplementadas"} element={<TeianesImplementados />} />
            <Route path={rutaServidor + "Teian/IdeasRechazadas"} element={<TeianesRechazados />} />
            <Route path={rutaServidor + "Teian/Perfil"} element={<Perfil />} />
            <Route path={rutaServidor + "Teian/Dudas"} element={<Dudas />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      )
    }
    </>
  )
}
export default App