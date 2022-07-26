import React, { Component, useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom';
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
import LoginSecundario from "./Actions/LoginSecundario";
import FormIdeaTest from "./componentes/FormIdea";
import Avatares from './componentes/Avatar/Avatares'
import IdeasGenerales from "./componentes/Ideas/IdeasGenerales";




const cont = styles.cont

const App = () => {
  const [ideas, setIdeas] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "http://10.30.2.167:4000/api/Ideas"

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeas(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeas(initialUrl)
  }, [])


  const rutaServidor = "" //Pruebas
  //const rutaServidor="/teianes/" //Produccions
  return (
    <div className={cont}>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path={rutaServidor + "Login"} element={<FormularioLogin />} />
        <Route path={rutaServidor + "Teian/Formideas"} element={<FormIdea />} />
        <Route path={rutaServidor + "Teian/TableIdeas"} element={<TableIdeas />} />
        <Route path={rutaServidor + "Teian/IdeasGenerales"} element={<IdeasGenerales />} />
        <Route path={rutaServidor + "Teian/ApproveIdeas"} element={<ApprovedIdeas />} />
        <Route path={rutaServidor + "Teian/DetalleTeian/:iD_IDEA"} element={<DetallesTeian />} />
        <Route path={rutaServidor + "Teian/TeianesAccepted"} element={<AcceptedTeianes />} />
        <Route path={rutaServidor + "Teian/TeianesRechazados"} element={<TeianesRechazados />} />
        <Route path={rutaServidor + "Teian/Perfil"} element={<Perfil />} />
        <Route path={rutaServidor + "Teian/Dudas"} element={<Dudas />} />
      </Routes>
    </div>
  )
}
export default App