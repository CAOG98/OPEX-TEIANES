import React, { useEffect, useState, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '../Ideas/Pagination';
// import IdeasAceptadas from '../Ideas/IdeasAceptadas';
import styles from './TeianesGenerales.module.css'
import Cargando from '../Ideas/Cargando'
import { Container } from 'react-bootstrap';
const IdeasGenerales = lazy(() => import('../Ideas/IdeasGenerales'))


const titleTeian = styles.titleTeian
const titleTeianCont = styles.titleTeianCont
const conGenerales= styles.conGenerales


const TeianesGenerales = () => {
  return (
    <>
      <Container className={conGenerales} >
        {/* <h5 style={{ textAlign: "end" }}>
          <Clock format={'h:mm:ssa'} ticking={true} timezone={'MX/Pacific'} />
        </h5> */}
        <div className={titleTeianCont}>
          <h1 className={titleTeian}>TEIANES GENERALES</h1>
        </div>
        <Suspense fallback={<Cargando />}>
          <IdeasGenerales />
        </Suspense>
      </Container>
    </>
  );
}
export default TeianesGenerales