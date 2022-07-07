import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import LightGallery from 'lightgallery/react';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
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
const imageCarrousel = styles.imageCarrousel

const ImagesDetallesTeian = ({ ideas }) => {

  const { name } = useParams()

  return (
    <Container>
        {/* {ideas.filter(item => item.name === name).map((item, index) => (
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a  href={item.archivos} key={index}>
              <img alt="" src={item.archivos} width="250" height="250" className={imageCarrousel} />
            </a>
            

          </LightGallery>
        ))} */}
    </Container>
  )
}

export default ImagesDetallesTeian