import React, { useState, useEffect } from 'react';
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
import { Link, NavLink, useNavigate } from 'react-router-dom';
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import styles from './SideBar.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatares from '../Avatar/Avatares';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcIdea } from 'react-icons/fa';


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    console.log(value)
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


const SideBar = () => {

  const imageLogo = styles.imagesTitle
  const sidebarS = styles.sidebarS
  const sideBarHead = styles.sideBarHead
  const userNameSidebar = styles.userNameSidebar
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.clear()
    navigate("/Login")
  }
  //const rutaServidor="/teianes/" //Produccion
  const rutaServidor = "" //Pruebas
  const rol = window.localStorage.getItem('rol')

  return (
    <div className={sidebarS}>
      <CDBSidebar textColor="#333" backgroundColor="#fff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img className={imageLogo} src={gerberLogo} alt='Gerber' />
          </a>
        </CDBSidebarHeader>
        <CDBSidebarHeader className={userNameSidebar} prefix={<i className='fas fa-solid fa-user-check'></i>}>
          <Avatares />
        </CDBSidebarHeader>

        {
          rol == 1 ?
            (
              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink to={rutaServidor + "Teian/CrearIdea"} style={({ isActive }) =>
                    isActive
                      ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                      : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
                  } activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="fa-solid fa-highlighter">CREAR TEIAN</CDBSidebarMenuItem>
                  </NavLink>


                  <NavLink to={rutaServidor + "Teian/TablaIdeas"} style={({ isActive }) =>
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

                  <NavLink to={rutaServidor + "Teian/IdeasUsuario"} style={({ isActive }) =>
                    isActive
                      ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                      : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
                  } activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="lightbulb ">TEIANES USUARIO</CDBSidebarMenuItem>

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
            )
          :
        (
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to={rutaServidor + "Teian/CrearIdea"} style={({ isActive }) =>
              isActive
                ? {
                  color: '#006dba',
                  background: '#7600dc',
                  transition: '0.3s',
                }
                : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
            } activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-highlighter">CREAR TEIAN</CDBSidebarMenuItem>
            </NavLink>


            <NavLink to={rutaServidor + "Teian/TablaIdeas"} style={({ isActive }) =>
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

            <NavLink to={rutaServidor + "Teian/IdeasUsuario"} style={({ isActive }) =>
              isActive
                ? {
                  color: '#006dba',
                  background: '#7600dc',
                  transition: '0.3s',
                }
                : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
            } activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="lightbulb ">TEIANES USUARIO</CDBSidebarMenuItem>

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



            <NavLink to={rutaServidor + "Teian/IdeasPorAprobar"} style={({ isActive }) =>
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


            <NavLink to={rutaServidor + "Teian/IdeasAceptadas"} style={({ isActive }) =>
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

            <NavLink to={rutaServidor + "Teian/IdeasImplementadas"} style={({ isActive }) =>
              isActive
                ? {
                  color: '#006dba',
                  background: '#7600dc',
                  transition: '0.3s',
                }
                : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
            } activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-book">TEIANES IMPLEMENTADOS</CDBSidebarMenuItem>
            </NavLink>

            <NavLink to={rutaServidor + "Teian/IdeasRechazadas"} style={({ isActive }) =>
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
        )
        }

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