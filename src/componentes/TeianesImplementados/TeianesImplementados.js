import React, { useEffect, useState, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '../Ideas/Pagination';
// import IdeasAceptadas from '../Ideas/IdeasAceptadas';
import styles from './TeianesImplementados.module.css'
import Cargando from '../Ideas/Cargando'
import { Container } from 'react-bootstrap';
const IdeasImplementadas = lazy(() => import('../Ideas/IdeasImplementadas'))


const titleTeian = styles.titleTeian
const titleTeianCont = styles.titleTeianCont
const conImplementados = styles.conImplementados


const TeianesImplementados = () => {
  return (
    <>
      <Container className={conImplementados} >
        {/* <h5 style={{ textAlign: "end" }}>
          <Clock format={'h:mm:ssa'} ticking={true} timezone={'MX/Pacific'} />
        </h5> */}
        <div className={titleTeianCont}>
          <h1 className={titleTeian}>TEIANES IMPLEMENTADOS</h1>
        </div>
        <Suspense fallback={<Cargando />}>
          <IdeasImplementadas />
        </Suspense>
      </Container>
    </>
  );
}
export default TeianesImplementados