import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card, Container} from 'react-bootstrap';
import Pagination from '../Ideas/Pagination';
import IdeasAceptadas from '../Ideas/IdeasAceptadas';
import styles from './AcceptedTeianes.module.css'


const titleTeian = styles.titleTeian
const titleTeianCont = styles.titleTeianCont
const AcceptedTeianes = () =>{
  const [ideas, setIdeas] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchIdeas = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setIdeas(data.results)
      setInfo(data.info)
    })
    .catch(error => console.log(error))
  }
  
  const onPrevious = () =>{
    fetchIdeas(info.prev)
  }
  const onNext = () =>{
    fetchIdeas(info.next)
  }


  useEffect(() =>{
    fetchIdeas(initialUrl)
  }, [])

  return(
    <>
    <Container style={{maxWidth:"100%",overflow:"scroll"}}>
      <div className={titleTeianCont}>
        <h1 className={titleTeian}>TEIANES ACEPTADOS</h1>
      </div>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <IdeasAceptadas ideas ={ideas}/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </Container>
    
    </>
  );
}
  export default AcceptedTeianes