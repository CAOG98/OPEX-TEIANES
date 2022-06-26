import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Carousel, Container } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import ContentTeianDetallado from './ContentTeianDetallado'
import FsLightbox from 'fslightbox-react';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const carouselTeian = styles.carouselTeian
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
        <a href="../imagen.jpeg">
            <img alt="img1" src="../imagen.jpeg" className={imagenDetalle} style={{marginBottom:"20px"}} />
        </a>
        <a href="../tanque.jpeg" >
            <img alt="img2" src="../tanque.jpeg" className={imagenDetalle} />
        </a>
        ...
    </LightGallery>
</Container>
        
  )
}
