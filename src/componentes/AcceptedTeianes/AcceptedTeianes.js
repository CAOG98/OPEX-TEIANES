import React, { useEffect, useState, Suspense, lazy } from 'react';
import Clock from 'react-live-clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import Pagination from '../Ideas/Pagination';
// import IdeasAceptadas from '../Ideas/IdeasAceptadas';
import styles from './AcceptedTeianes.module.css'
import Cargando from '../Ideas/Cargando'
const IdeasAceptadas = lazy(() => import('../Ideas/IdeasAceptadas'))




const titleTeian = styles.titleTeian
const titleTeianCont = styles.titleTeianCont
const contAceptados = styles.contAceptados


const AcceptedTeianes = () => {
  const [ideas, setIdeas] = useState([])
  return (
    <>
      <Container className={contAceptados} >
        {/* <h5 style={{ textAlign: "end" }}>
          <Clock format={'h:mm:ssa'} ticking={true} timezone={'MX/Pacific'} />
        </h5> */}
        <div className={titleTeianCont}>
          <h1 className={titleTeian}>TEIANES ACEPTADOS</h1>
        </div>
        <Suspense fallback={<Cargando />}>
          <IdeasAceptadas />
        </Suspense>
      </Container>
    </>
  );
}
export default AcceptedTeianes