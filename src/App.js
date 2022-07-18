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



const cont = styles.cont

const App = () => {
  const [ideas, setIdeas] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "http://10.30.2.167:4000/api/ideas"

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeas(data)
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeas(initialUrl)
  }, [])

  return (
    <div className={cont}>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<FormularioLogin />} />
        <Route path="/Login" element={<FormularioLogin />} />
        <Route path="Teian/Formideas" element={<FormIdea />} />
        <Route path="Teian/TableIdeas" element={<TableIdeas />} />
        <Route path="Teian/ApproveIdeas" element={<ApprovedIdeas />} />
        <Route path="Teian/DetalleTeian/:titulo_Idea" element={<DetallesTeian ideas={ideas} />} />
        <Route path="Teian/TeianesAccepted" element={<AcceptedTeianes />} />
        <Route path="Teian/TeianesRechazados" element={<TeianesRechazados />} />
        <Route path="Teian/Perfil" element={<Perfil />} />
        <Route path="Teian/Dudas" element={<Dudas />} />
      </Routes>
    </div>
  )
}
export default App