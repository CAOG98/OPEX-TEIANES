import React, { Suspense, useEffect, useState, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import Ideas from '../Ideas';
import Pagination from '../Ideas/Pagination';
import styles from './ApprovedIdeas.module.css'
import Cargando from '../Ideas/Cargando'
const Ideas = lazy(() => import('../Ideas/Ideas'))


const ApprovedIdeas = () => {
  const contAprovadas = styles.contAprovadas
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
      <Container className={contAprovadas}>
        {/* <h5 style={{textAlign:"end"}}>
        <Clock  format={'h:mm:ssa'} ticking={true} timezone={'MX/Pacific'} />
        </h5> */}
        <div className={titleTeianCont}>
          <h1 className={titleTeian}>TEIANES POR APROBAR</h1>
        </div>
        {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
        <Suspense fallback={<Cargando />}>
          <Ideas/>
        </Suspense>
        {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
      </Container>

    </>
  );
}
export default ApprovedIdeas