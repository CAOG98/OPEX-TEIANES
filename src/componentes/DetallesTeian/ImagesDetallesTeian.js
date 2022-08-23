import React, { useState } from 'react';
import styles from './DetallesTeian.module.css'
// Libreria para los slides de las imagenes 
import FsLightbox from 'fslightbox-react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



const contentImagenesCarrousel = styles.contentImagenesCarrousel
const imagenPreview = styles.imagenPreview

//Url necesaria para poder abrir las imagenes desde el server
const UrlServer = "http://10.30.2.167:4000/"

const ImagesDetallesTeian = ({ ideasDetalles }) => {
  const [toggler, setToggler] = useState(false);
  const arrayImagenes = [];
  return (
    <div className={contentImagenesCarrousel}>
      {/* Recorrer el array y agarrar la primera imagen que encuentre y mostrarla en la preview */}
      {ideasDetalles.archivos.map((item, index) => (
        index === 0 ? (
          <img key={index} src={UrlServer + item.urL_MULTIMEDIA} alt="" className={imagenPreview} onClick={() => setToggler(!toggler)} />
        ) : (
          <></>
        )
      ))}
      {ideasDetalles.archivos.map((item, index) => (
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

export default ImagesDetallesTeian