import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Ideas from '../Ideas';
import Pagination from '../Ideas/Pagination';

const ApprovedIdeas = () =>{
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
    <h1 className="text-center">TEIANES POR APROBAR</h1>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Ideas ideas ={ideas}/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </Container>
    
    </>
  );
}
  export default ApprovedIdeas