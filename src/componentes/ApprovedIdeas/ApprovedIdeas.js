import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ApprovedIdeas.module.css'
import { Accordion, Container} from 'react-bootstrap';

const accordionCont = styles.accordionCont
const titleAccordion = styles.titleAccordion
const buttonAccept = styles.buttonAccept
const buttonCancel = styles.buttonCancel
const buttons = styles.buttons
const content = styles.content
const paragaphIdea = styles.paragaphIdea
const accordionMain = styles.accordionMain
const titleAccordionCont = styles.titleAccordionCont

const ApprovedIdeas = () =>{
  //1 Configurar los hooks
  const [users, setUsers] = useState([])
  //2 Funcion para mosrar los datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async() =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }
  const renderAccordion = (item, index) =>{
    return(
      <div>
      <Accordion key={index} className={accordionMain}>
      <Accordion.Item eventKey={item} >
        <Accordion.Header>{item.name}</Accordion.Header>
        <Accordion.Body>
          <div className={content}>
            <h3>{item.name}</h3>
            <h5 className={paragaphIdea}>{item.email}</h5>
          </div>
          <div className={buttons}>
            <button className={buttonAccept}>ACEPTAR</button>
            <button className={buttonCancel}>RECHAZAR</button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    )
  }

  useEffect(() =>{
    showData()
  }, [])
  return(
      <Container className={accordionCont}>
          <h1 className={titleAccordion}>TEIANES POR ACEPTAR O RECHAZAR</h1>
        {users.map(renderAccordion)} 
      </Container>
  );
}
  export default ApprovedIdeas