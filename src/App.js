import React, { Component } from "react"
import { Route, Routes} from 'react-router-dom';
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
const cont = styles.cont

const App = () =>(
  // <FormularioLogin/>
    // <div>
    // <Routes>
    //   <Route path="/" element={<FormPrincipal/>} />
    // </Routes>
    // </div>

  <div className={cont}>
  <SideBar />
  <NavBar/>
  <Routes>
    <Route path="Teian/Login" element={<FormularioLogin/>}/>
    <Route path="Teian/Formideas" element={<FormIdea />} />
    <Route path="Teian/TableIdeas" element={<TableIdeas/>}/>
    <Route path="Teian/ApproveIdeas" element={<ApprovedIdeas/>}/>
    <Route path="Teian/DetalleTeian/:id" element={<DetallesTeian/>}/>
    <Route path="Teian/TeianesAccepted" element={<AcceptedTeianes/>}/>
    <Route path="Teian/DetalleTeian/:id" element={<DetallesTeian/>}/>
    <Route path="Teian/TeianesRechazados" element={<TeianesRechazados/>}/>
    <Route path="Teian/Perfil" element={<Perfil/>}/>
    <Route path="Teian/DetalleTeian" element={<DetallesTeian/>}/>
    <Route path="Teian/Dudas" element={<Dudas/>}/>
  </Routes>
  </div> 

 

  )
export default App