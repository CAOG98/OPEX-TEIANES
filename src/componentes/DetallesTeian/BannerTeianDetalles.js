import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'


const imageBanner = styles.imageBanner
const bannerCont = styles.bannerCont
const titleBanner = styles.titleBanner
const dateBanner = styles.dateBanner


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
      <Card className={bannerCont}>
          <Card.Img src="../imagen.jpeg" alt="Card image" className={imageBanner} />
          <Card.ImgOverlay>
          <span className="badge rounded-pill bg-success text-white" style={{marginBottom:"10px"}}>Aceptada</span>
              <h3 className={titleBanner}>Acercamiento de la metodología de ideas de mejora a personal operativo</h3>
              <div className={dateBanner}>
                <Card.Text>Ultima Actualización:</Card.Text>
                <Card.Text>23/06/2022</Card.Text>
              </div>
          </Card.ImgOverlay>
      </Card>
    </>
  );
}
  export default BannerTeianDetalles