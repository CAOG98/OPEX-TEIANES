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

const ImagesImpDetallesTeian = ({ ideasDetalles }) => {

  const { titulo_Idea } = useParams()
  const [toggler, setToggler] = useState(false);
  const arrayImagenes = [];
  return (
    <div className={contentImagenesCarrousel}>
      <div style={{width:"100%", height:"500px"}}>
      {ideasDetalles.archivosimp.map((item, index) => (
        index === 0 ? (
          <img style={{height:"100%", objectFit:"cover"}} key={index} src={UrlServer + item.urL_MULTIMEDIA} className={imagenPreview} onClick={() => setToggler(!toggler)} />
        ) : (
          <></>
        )
      ))}
      </div>
      {ideasDetalles.archivosimp.map((item, index) => (
        console.log(arrayImagenes.push(UrlServer + item.urL_MULTIMEDIA))
        // console.log(arrayImagenes)
      ))}

      <FsLightbox
        toggler={toggler}
        sources={
          arrayImagenes
        }
        types={[
          ...new Array(arrayImagenes.length).fill('image'),
      //  ...new Array(arrayImagenes.length).fill('video')
        ]
        }
        disableLocalStorage={true}
        slideDistance={0.5}
      />
    </div>
  )
}

export default ImagesImpDetallesTeian