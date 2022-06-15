import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css'
import { Container, Form, ModalFooter } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import ideaLogo from '../FormularioLogin/images/idea.png';    
import {Outlet } from 'react-router-dom';



class Login extends React.Component{
    render(){
        const clases = styles.login
        const footer = styles.footerLogin
        const txtFooter = styles.txtFooter
        const titleCard = styles.titleCard
        const imageTitle = styles.imageTitle
        const imageFootCard = styles.imageFootCard
        const footCard = styles.footCard
        const button = styles.buttonLogin
        const bodyLogin = styles.bodyLogin

      return(
          <div>
              <div className={bodyLogin}>
                    <Container className={clases}>
                        <img className={imageTitle} src={ideaLogo} alt='Teian'></img>
                        <h1 className={titleCard}>TEIANES</h1>
                        <h5 className={titleCard}>(IDEAS DE MEJORA)</h5>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Numero del trabajador</Form.Label>
                            <Form.Control maxlength="9" keyboardType = "numeric" type="email" placeholder="Colocar el numero del trabajador" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control maxlength="9" pattern="[A-Za-z]{4-16}" type="password" placeholder="Colocar la contraseña" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        </Form.Group>
                        <a className={button} href='https://react-bootstrap.github.io/components/alerts/'>
                            ENTRAR
                        </a>
                        <div className={footCard}>
                            <img  className={imageFootCard} src={gerberLogo} alt='gerber'/>
                        </div>
                        <div className={footCard}>
                            <span>DESIGN BY OPEX</span>
                        </div>
                    </Form>
                    </Container>

                    <ModalFooter className={footer}>
                        <Marquee  className={txtFooter} direction='right'>Soy parte de la mejora y en mi esta la solución</Marquee>
                    </ModalFooter>
                </div>
                <Outlet />
            </div>
      )
    }
  }

  export default Login