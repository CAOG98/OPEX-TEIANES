import React, { Suspense, useEffect, useState, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import Ideas from '../Ideas';
import Pagination from '../Ideas/Pagination';
import styles from './ApprovedIdeas.module.css'
import Cargando from '../Ideas/Cargando'
const Ideas = lazy(() => import('../Ideas/Ideas'))


const ApprovedIdeas = () =>{
  const contAprovadas = styles.contAprovadas

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
    <Container className={contAprovadas}>
    <h1 className="text-center">TEIANES POR APROBAR</h1>
      {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
      <Suspense fallback={<Cargando/>}>
      <Ideas ideas ={ideas}/>
      </Suspense>
      {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
    </Container>
    
    </>
  );
}
  export default ApprovedIdeas