import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import FsLightbox from 'fslightbox-react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { useParams } from 'react-router-dom';
import Lightbox, { ImagesListType } from 'react-spring-lightbox';
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'


const imagenDetalle = styles.imagenDetalle
const contentImagenesCarrousel = styles.contentImagenesCarrousel
const imagenPreview = styles.imagenPreview
const UrlServer = "http://10.30.2.167:4000/"

const ImagesDetallesTeian = ({ ideas }) => {
  console.log(ideas)

  const { titulo_Idea } = useParams()
  const [toggler, setToggler] = useState(false);
  

  return (
    <div className={contentImagenesCarrousel}>
      <img src={gerberLogo} className={imagenPreview} onClick={() => setToggler(!toggler)} />
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ]}
        disableLocalStorage={true}
        slideDistance={0.5}
      />
    </div>
  )
}

export default ImagesDetallesTeian