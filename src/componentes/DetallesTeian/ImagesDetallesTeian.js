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


const imagenDetalle = styles.imagenDetalle
const contentImagenesCarrousel = styles.contentImagenesCarrousel
const imagenPreview = styles.imagenPreview
const UrlServer = "http://10.30.2.167:4000/"

const ImagesDetallesTeian = ({ ideas }) => {

  const { titulo_Idea } = useParams()
  const [toggler, setToggler] = useState(false);

  return (
      <div className={contentImagenesCarrousel}>
        <img src={gerberLogo} className={imagenPreview} onClick={() => setToggler(!toggler)} />
      <FsLightbox
        toggler={toggler}
        sources={[
          <img src={gerberLogo} />,
          <img src={gerberLogo} />,
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

        ]}
      />
    </div>
  )
}

export default ImagesDetallesTeian