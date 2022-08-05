import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import Avatares from '../Avatar/Avatares'
// import component 
import Drawer from 'react-modern-drawer'

//import styles 
import 'react-modern-drawer/dist/index.css'
import { MdMenu } from "react-icons/md";
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const imageLogo = styles.imageLogo
  const linkNavBar = styles.linkNavBar
  const navBarBody = styles.navBarBody
  const navBarColl = styles.navBarColl
  const linkNavBarDrop = styles.linkNavBarDrop
  const bgDropD = styles.bgDropD

  const handleLogout = () => {
    // noteService.setToken(user.token)
    window.localStorage.removeItem('loggedIdeaAppUser')
    window.location = "/Login"
  }
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  const nameUsuario = window.localStorage.getItem('nombre_empleado')
  const rol = window.localStorage.getItem('rol')
  const rutaServidor = ""
  return (
    <Navbar expand="lg" className={navBarBody}>
      <Container style={{ maxWidth: '100%', width: '100%' }}>
        <Navbar.Brand href="#home"><img className={imageLogo} src={gerberLogo} /></Navbar.Brand>
        {
          rol == 1 ?
            (
              <div>
                <Button onClick={toggleDrawer}><MdMenu /></Button>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction='left'
                  style={{ borderRight: "2px solid", width:"300px" }}
                >
                  <div>
                    <CDBSidebarHeader prefix={<i className='fas fa-solid fa-user-check'></i>}>
                      <Avatares />
                    </CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">
                      <CDBSidebarMenu>
                        <NavLink to={"Teian/CrearIdea"} style={({ isActive }) =>
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


                        <NavLink to={"Teian/TablaIdeas"} style={({ isActive }) =>
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

                        <NavLink to={"Teian/IdeasUsuario"} style={({ isActive }) =>
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


                        <NavLink to={"Teian/IdeasGenerales"} style={({ isActive }) =>
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


                        <NavLink to={"Teian/Perfil"} style={({ isActive }) =>
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

                    <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
                      <CDBSidebarHeader prefix={<i className="fas fa-sign-out-alt"></i>}>
                        <button onClick={handleLogout} style={{ background: "#fff", border: "none", color: "#545e6f" }} >CERRAR SESIÓN</button>
                      </CDBSidebarHeader>

                      <CDBSidebarFooter style={{ textAlign: 'center', borderTop: '1px solid #333', backgroundColor: '#006dba' }}>
                        <NavLink to={"Teian/Dudas"} activeClassName="activeClicked" style={{ textDecoration: 'none', color: '#fff' }}>
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
                    </div>
                  </div>
                </Drawer>
              </div>
            ) :
            (
              <div>
                <Button onClick={toggleDrawer}><MdMenu /></Button>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction='left'
                  
                  style={{ borderRight: "2px solid", width:"300px" }}
                >
                  <div>
                    <CDBSidebarHeader prefix={<i className='fas fa-solid fa-user-check'></i>}>
                      <Avatares />
                    </CDBSidebarHeader>
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
                    <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
                      <CDBSidebarHeader prefix={<i className="fas fa-sign-out-alt"></i>}>
                        <button onClick={handleLogout} style={{ background: "#fff", border: "none", color: "#545e6f" }} >CERRAR SESIÓN</button>
                      </CDBSidebarHeader>

                      <CDBSidebarFooter style={{ textAlign: 'center', borderTop: '1px solid #333', backgroundColor: '#006dba' }}>
                        <NavLink to={"Teian/Dudas"} activeClassName="activeClicked" style={{ textDecoration: 'none', color: '#fff' }}>
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
                    </div>
                  </div>
                </Drawer>
              </div>
            )
        }
      </Container >
    </Navbar >
  );
}

export default NavBar