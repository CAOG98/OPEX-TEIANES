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
import { Link, useParams } from 'react-router-dom';

const imagenDetalle = styles.imagenDetalle

const ImagesDetallesTeian = ({ideas}) => {

const {name} = useParams()

  return ( 
    <Container>
      {ideas.filter(item => item.name === name).map((item, index) => (
    <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
    >
          <a href={item.image} key={index}>
            <img alt={item.name} src={item.image}/>
          </a>
    </LightGallery>
    ))}   
</Container>  
  )
}

export default  ImagesDetallesTeian