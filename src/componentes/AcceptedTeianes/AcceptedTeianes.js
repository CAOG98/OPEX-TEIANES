import React, { useEffect, useState, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card, Container} from 'react-bootstrap';
import Pagination from '../Ideas/Pagination';
// import IdeasAceptadas from '../Ideas/IdeasAceptadas';
import styles from './AcceptedTeianes.module.css'
import Cargando from '../Ideas/Cargando'
const IdeasAceptadas = lazy(() => import('../Ideas/IdeasAceptadas'))




const titleTeian = styles.titleTeian
const titleTeianCont = styles.titleTeianCont
const contAceptados = styles.contAceptados


const AcceptedTeianes = () =>{
  const [ideas, setIdeas] = useState([])

  const initialUrl = "http://10.30.2.167:4000/api/ideas"

  const fetchIdeas = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setIdeas(data)
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() =>{
    fetchIdeas(initialUrl)
  }, [])

  return(
    <>
    <Container className={contAceptados} >
      <div className={titleTeianCont}>
        <h1 className={titleTeian}>TEIANES ACEPTADOS</h1>
      </div>
      <Suspense fallback={<Cargando/>}>
      <IdeasAceptadas ideas ={ideas}/>
      </Suspense>
    </Container>
    </>
  );
}
  export default AcceptedTeianes