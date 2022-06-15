import React from 'react';
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
                <NavLink exact to="/Formideas"  style={({ isActive }) =>
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


                <NavLink exact to="/TableIdeas" style={({ isActive }) =>
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



                <NavLink exact to="/ApproveIdeas" style={({ isActive }) =>
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


                <NavLink exact to="/TeianesAccepted" style={({ isActive }) =>
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


                <NavLink exact to="/TeianesRechazados" style={({ isActive }) =>
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
                <NavLink exact to="/Perfil" style={({ isActive }) =>
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
          
  
          <CDBSidebarFooter style={{ textAlign: 'center', borderTop:'1px solid #333', backgroundColor:'#006dba' }}>
            <NavLink exact to="/Dudas" activeClassName="activeClicked" style={{ textDecoration: 'none', color:'#fff' }}>
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