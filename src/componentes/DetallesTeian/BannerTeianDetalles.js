import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import { useParams } from 'react-router-dom';


const imageBanner = styles.imageBanner
const bannerCont = styles.bannerCont
const titleBanner = styles.titleBanner
const dateBanner = styles.dateBanner


const BannerTeianDetalles = ({ ideas}) => {
  const { name } = useParams()
  return (
    <>
    {ideas.filter(item => item.name === name).map((item, index) => (
        <Card key={index} className={bannerCont}>
          <Card.Img src={item.image} alt="Card image" className={imageBanner} />
          <Card.ImgOverlay>
            <span className="badge rounded-pill bg-success text-white" style={{ marginBottom: "10px" }}>{item.status}</span>
            <h3 className={titleBanner}>{item.name}</h3>
            <div className={dateBanner}>
              <Card.Text>Ultima Actualización:</Card.Text>
              <Card.Text>23/06/2022</Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      ))}
    </>
  );
}
export default BannerTeianDetalles