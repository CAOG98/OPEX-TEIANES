import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card, Container} from 'react-bootstrap';
import Pagination from '../Ideas/Pagination';
import IdeasCanceladas from '../Ideas/IdeasCanceladas';

const TeianesRechazados = () =>{
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
  const DeleteItems = (indexItem) => {
    setIdeas((prevState) =>
      prevState.filter((todo, index) => index !== indexItem)
    );
  };


  useEffect(() =>{
    fetchIdeas(initialUrl)
  }, [])

  return(
    <>
    <Container style={{maxWidth:"100%",overflow:"scroll"}}>
    <h1 className="text-center">TEIANES RECHAZADOS</h1>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <IdeasCanceladas ideas ={ideas} DeleteItems={DeleteItems}/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </Container>
    
    </>
  );
}
  export default TeianesRechazados