import React, { Suspense, useEffect, useState, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import Ideas from '../Ideas';
import Pagination from '../Ideas/Pagination';
import styles from './TeianesUsuario.module.css'
import Cargando from '../Ideas/Cargando'
import IdeasUsuario from '../Ideas/IdeasUsuario';
const Ideas = lazy(() => import('../Ideas/IdeasUsuario'))


const TeianesUsuario = () => {
  const contUsuario = styles.contUsuario
  const titleTeian = styles.titleTeian
  const titleTeianCont = styles.titleTeianCont

  // const [ideas, setIdeas] = useState([])
  // const [done, setDone] = useState(undefined)

  // const initialUrl = "http://10.30.2.167:4000/api/ideas"

  // const fetchIdeas = (url) => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setIdeas(data)
  //       setDone(true)
  //     })
  //     .catch(error => console.log(error))
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchIdeas(initialUrl)
  //   }, 2000)
  // }, [])


  return (
    <>
      <Container className={contUsuario}>
        {/* <h5 style={{textAlign:"end"}}>
        <Clock  format={'h:mm:ssa'} ticking={true} timezone={'MX/Pacific'} />
        </h5> */}
        <div className={titleTeianCont}>
          <h1 className={titleTeian}>TEIANES DEL USUARIO</h1>
        </div>
        {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
        <Suspense fallback={<Cargando />}>
          <IdeasUsuario/>
        </Suspense>
        {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
      </Container>

    </>
  );
}
export default TeianesUsuario