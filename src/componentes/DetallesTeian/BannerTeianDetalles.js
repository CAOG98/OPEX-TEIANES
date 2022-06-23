import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'


const imageBanner = styles.imageBanner

const BannerTeianDetalles = () =>{
  const [ideas, setIdeas] = useState([])

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchIdeas = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setIdeas(data.results)
      console.log(data.results)
    })
    .catch(error => console.log(error))
  }

  useEffect(() =>{
    fetchIdeas(initialUrl)
  }, [])

  return(
    <>
    <Card className="bg-dark text-white">
        <Card.Img src="../logo512.png" alt="Card image" className={imageBanner}/>
        <Card.ImgOverlay>
        <span class="badge rounded-pill bg-success text-white" style={{marginBottom:"10px"}}>Aceptada</span>
            <Card.Title>TEIAN</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
    </>
  );
}
  export default BannerTeianDetalles