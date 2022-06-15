import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Dudas.module.css'
import { Accordion } from 'react-bootstrap';

 
class FormIdea extends React.Component{
    render(){
        const correo = styles.correo
        const accordionEmails = styles.accordionEmails
      return(
          <Accordion className={accordionEmails} defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Correos de Información</h2></Accordion.Header>
            <Accordion.Body>
                    <a className={correo} href="mailto:claudia.macias@globeunion.com">claudia.macias@globeunion.com</a>
                    <a className={correo} href="mailto:christian.valenzuela@globeunion.com">christian.valenzuela@globeunion.com</a>
                    <a className={correo} href="mailto:benjamin.lopez@globeunion.com">benjamin.lopez@globeunion.com</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )
    }
  }

  export default FormIdea