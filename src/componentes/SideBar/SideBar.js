import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBDropDown
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import styles from './SideBar.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatares from '../Avatar/Avatares';


const SideBar = () =>{
    const imageLogo = styles.imagesTitle
    const sidebarS = styles.sidebarS
    const navigate = useNavigate()

    const handleLogout = () => {
      window.localStorage.removeItem('loggedIdeaAppUser')
      navigate("/Login")
      // window.location = "/Login"
    }

    //const rutaServidor="/teianes/" //Produccion
    const rutaServidor = "" //Pruebas

    return (
      <div className={sidebarS}>
        <CDBSidebar textColor="#333" backgroundColor="#fff">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              <img className={imageLogo} src={gerberLogo} alt='Gerber' />
            </a>
          </CDBSidebarHeader>
          <CDBSidebarHeader prefix={<i className="fas fa-solid fa-user-check"></i>}>     
            <Avatares />
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">

            <CDBSidebarMenu>
              <NavLink to={rutaServidor + "Teian/Formideas"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="lightbulb">CREAR TEIAN</CDBSidebarMenuItem>
              </NavLink>


              <NavLink to={rutaServidor + "Teian/TableIdeas"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">MIS TEIANES</CDBSidebarMenuItem>
              </NavLink>



              <NavLink to={rutaServidor + "Teian/IdeasGenerales"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="th-large">TEIANES GENERALES</CDBSidebarMenuItem>
              </NavLink>



              <NavLink to={rutaServidor + "Teian/ApproveIdeas"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="clipboard">TEIANES PENDIENTES</CDBSidebarMenuItem>
              </NavLink>


              <NavLink to={rutaServidor + "Teian/TeianesAccepted"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="check-circle">TEIANES ACEPTADOS</CDBSidebarMenuItem>
              </NavLink>


              <NavLink to={rutaServidor + "Teian/TeianesRechazados"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="trash">TEIANES RECHAZADOS</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to={rutaServidor + "Teian/Perfil"} style={({ isActive }) =>
                isActive
                  ? {
                    color: '#006dba',
                    background: '#7600dc',
                    transition: '0.3s',
                  }
                  : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
              } activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">PERFIL</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          {/* <CDBSidebarMenuItem icon="LogoutIcon"><LogoutIcon/><button onClick={handleLogout}style={{background:"#fff", border:"none", color:"#545e6f"}} >CERRAR SESIÓN</button></CDBSidebarMenuItem> */}

          <CDBSidebarHeader prefix={<i className="fas fa-sign-out-alt"></i>}>
            <button onClick={handleLogout} style={{ background: "#fff", border: "none", color: "#545e6f" }} >CERRAR SESIÓN</button>
          </CDBSidebarHeader>


          <CDBSidebarFooter style={{ textAlign: 'center', borderTop: '1px solid #333', backgroundColor: '#006dba' }}>
            <NavLink to={rutaServidor + "Teian/Dudas"} activeClassName="activeClicked" style={{ textDecoration: 'none', color: '#fff' }}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: '20px 5px',
                }}
              >
                Dudas
              </div>
            </NavLink>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
}

export default SideBar