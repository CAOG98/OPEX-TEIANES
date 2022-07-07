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
  import { NavLink } from 'react-router-dom';
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import styles from './SideBar.module.css'


class SideBar extends React.Component{
    render(){
      const imageLogo = styles.imagesTitle
      const sidebarS = styles.sidebarS

      const handleLogout = () => {
        // noteService.setToken(user.token)
        window.localStorage.removeItem('loggedIdeaAppUser')
        window.location = "/Login"
    }
      return(
        <div className={sidebarS}>
        <CDBSidebar textColor="#333" backgroundColor="#fff">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              <img className={imageLogo} src={gerberLogo} alt='Gerber'/>
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">

              <CDBSidebarMenu>
                <NavLink to="Teian/Formideas"  style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                    : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
                }  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="lightbulb">CREAR TEIAN</CDBSidebarMenuItem>
                </NavLink>


                <NavLink to="Teian/TableIdeas" style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                    : { color: '#545e6f', background: '#f0f0f0',transition: '0.3s', }
                }  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">MIS TEIANES</CDBSidebarMenuItem>
                </NavLink>



                <NavLink to="Teian/ApproveIdeas" style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                    : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
                }  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="clipboard">TEIANES PENDIENTES</CDBSidebarMenuItem>
                </NavLink>


                <NavLink to="Teian/TeianesAccepted" style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                    : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
                }  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="check-circle">TEIANES ACEPTADOS</CDBSidebarMenuItem>
                </NavLink>


                <NavLink to="Teian/TeianesRechazados" style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#006dba',
                        background: '#7600dc',
                        transition: '0.3s',
                      }
                    : { color: '#545e6f', background: '#f0f0f0', transition: '0.3s', }
                }  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="trash">TEIANES RECHAZADOS</CDBSidebarMenuItem>
                </NavLink>
                <NavLink  to="Teian/Perfil" style={({ isActive }) =>
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
          <CDBSidebarMenuItem icon="VscSignOut"><button onClick={handleLogout}style={{background:"#fff", border:"none", color:"#545e6f"}} >CERRAR SESIÓN</button></CDBSidebarMenuItem>
          
  
          <CDBSidebarFooter style={{ textAlign: 'center', borderTop:'1px solid #333', backgroundColor:'#006dba' }}>
            <NavLink to="Teian/Dudas" activeClassName="activeClicked" style={{ textDecoration: 'none', color:'#fff' }}>
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
  }

  export default SideBar