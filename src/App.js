import React, { Component } from "react"
import Login from "./componentes/Login"
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

const cont = styles.cont

const App = () =>(
  // <FormularioLogin/>
    // <div>
    // <Routes>
    //   <Route path="/Login" exact element={<Login/>} />
    //   <Route path="/FormPrincipal" index element={<FormPrincipal/>} />
    // </Routes>
    // </div>

    // <FormularioLogin/>
  <div className={cont}>
    
  <SideBar />
  <NavBar/>
  <Routes>
    <Route path="/"  element={<FormIdea />} />
    <Route path="/Formideas" element={<FormIdea />} />
    <Route path="/TableIdeas" element={<TableIdeas/>}/>
    <Route path="/ApproveIdeas" element={<ApprovedIdeas/>}/>
    <Route path="/TeianesAccepted" element={<AcceptedTeianes/>}/>
    <Route path="/TeianesRechazados" element={<TeianesRechazados/>}/>
    <Route path="/Dudas" element={<Dudas/>}/>
  </Routes>
  </div> 
  )
export default App