import React, { useEffect, useState, lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import Pagination from '../Ideas/Pagination';
// import IdeasCanceladas from '../Ideas/IdeasCanceladas';
import styles from './TeianesRechazados.module.css'
import Cargando from '../Ideas/Cargando'
const IdeasCanceladas = lazy(() => import('../Ideas/IdeasCanceladas'))

const TeianesRechazados = () => {
  // 
  // const [info, setInfo] = useState({})

  const contRechazados = styles.contRechazados
  const titleTeian = styles.titleTeian
  const titleTeianCont = styles.titleTeianCont

  // const initialUrl = "https://rickandmortyapi.com/api/character"

  // const fetchIdeas = (url) =>{
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data =>{
  //     setIdeas(data.results)
  //     setInfo(data.info)
  //   })
  //   .catch(error => console.log(error))
  // }

  // const onPrevious = () =>{
  //   fetchIdeas(info.prev)
  // }
  // const onNext = () =>{
  //   fetchIdeas(info.next)
  // }
  // const DeleteItems = (indexItem) => {
  //   setIdeas((prevState) =>
  //     prevState.filter((todo, index) => index !== indexItem)
  //   );
  // };
  // useEffect(() =>{
  //   fetchIdeas(initialUrl)
  // }, [])

  // const initialUrl = "http://10.30.2.167:4000/api/Ideas/Rechazada"

  // const fetchIdeas = (url) => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setIdeas(data)
  //       // console.log(data)
  //     })
  //     .catch(error => console.log(error))
  // }

  // useEffect(() => {
  //   fetchIdeas(initialUrl)
  // }, [])


  return (
    <>
      <Container style={{ maxWidth: "100%", overflow: "scroll" }} className={contRechazados} >
        {/* <h5 style={{ textAlign: "end" }}>
          <Clock format={'h:mm:ssa'} ticking={true} timezone={'MX/Pacific'} />
        </h5> */}
        <div className={titleTeianCont}>
          <h1 className={titleTeian}>TEIANES RECHAZADOS</h1>
        </div>
        {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
        <Suspense fallback={<Cargando />}>
          <IdeasCanceladas />
        </Suspense>
        {/* <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} /> */}
      </Container>

    </>
  );
}
export default TeianesRechazados