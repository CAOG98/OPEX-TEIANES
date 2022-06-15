import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';



class NavBar extends React.Component{
    render(){
      const imageLogo = styles.imageLogo
      const linkNavBar = styles.linkNavBar
      const navBarBody = styles.navBarBody
      const navBarColl = styles.navBarColl
      const linkNavBarDrop = styles.linkNavBarDrop
      const bgDropD = styles.bgDropD
      return(
        <Navbar expand="lg" className={navBarBody}>
  <Container style={{maxWidth:'100%', width:'100%'}}>
    <Navbar.Brand href="#home"><img  className={imageLogo} src={gerberLogo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className={navBarColl}>
      <Nav className="me-auto">
        <Nav.Link href="/Formideas" className={linkNavBar}>CREAR TEIAN</Nav.Link>
        <Nav.Link href="/TableIdeas" className={linkNavBar}>MIS TEIANES</Nav.Link>
        <Nav.Link href="/ApproveIdeas" className={linkNavBar}>TEIANES PENDIENTES</Nav.Link>
        <Nav.Link href="/TeianesAccepted" className={linkNavBar}>TEIANES ACEPTADOS</Nav.Link>
        <Nav.Link href="/TeianesRechazados" className={linkNavBar}>TEIANES RECHAZADOS</Nav.Link>
        <Nav.Link href="/Dudas" className={linkNavBar}>DUDAS</Nav.Link>
        <Nav.Link href="#LINK" className={linkNavBar}>PERFIL</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      );
    }
  }

  export default NavBar