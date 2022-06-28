import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Lightbox from 'react-lightbox-component';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Link } from 'react-router-dom';

const imagenDetalle = styles.imagenDetalle

export default function ImagesDetallesTeian() {
  const [ideas, setIdeas] = useState([])
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
};
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
  const onInit = () => {
    console.log('lightGallery has been initialized');
};


  return ( 
    <Container >
    <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
    >
      {
        ideas.map((item, index)=>(
          <a href={item.image}>
            <img src={item.image}/>
          </a>
        ))
      }
    </LightGallery>
</Container>
        
  )
}
