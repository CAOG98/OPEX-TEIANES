import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Card, Container } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import { useParams } from 'react-router-dom';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg';
import formatDate from '../Ideas/formatFecha';

const imageBanner = styles.imageBanner
const bannerCont = styles.bannerCont
const titleBanner = styles.titleBanner
const dateBanner = styles.dateBanner

const UrlServer = "http://10.30.2.167:4000/"


const BannerTeianDetalles = ({ ideaDetalle }) => {
  const [cargando, setCargando] = (false)


  console.log(ideaDetalle)
  // const { iD_IDEA } = useParams()
  const dataImagenes = ideaDetalle
  // console.log(dataImagenes)
  return (
    <>
      <Card className={bannerCont}>
        {/* {ideas.archivos.map((item, index) => (
        <Card key={index} className={bannerCont}>
          {item.archivos.length === 0 ? (
            <Card.Img variant="top" src={notFound} className={imageBanner} />
          ) : (
            item.archivos.map((item2, index) => (
              index === 0 ? (
                <Card.Img variant="top" src={UrlServer + item2.urL_MULTIMEDIA} className={imageBanner} />
              ) : (
                <></>
              )
            )))
          }
      ))} */}
      {dataImagenes.archivos.map((item, index) => (
        index === 0 ? (
          <Card.Img variant="top" src={UrlServer + item.urL_MULTIMEDIA} className={imageBanner} />
        ) : (
          <Card.Img variant="top" src={notFound} className={imageBanner} />
        )
      ))}
      
        <Card.ImgOverlay>
          {dataImagenes.iD_ESTATUS === 1 ? (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="secondary">{dataImagenes.estatuto}</Badge>
          ) : dataImagenes.iD_ESTATUS === 2 ? (
            // <span className="badge rounded-pill bg-success text-white" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="success">{dataImagenes.estatuto}</Badge>
          ) : dataImagenes.iD_ESTATUS === 3 ? (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="warning">{dataImagenes.estatuto}</Badge>
          ) : dataImagenes.iD_ESTATUS === 4 ? (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="danger">{dataImagenes.estatuto}</Badge>
          ) : (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="info">{dataImagenes.estatuto}</Badge>
          )
          }
          <h3 className={titleBanner}>{dataImagenes.titulO_IDEA}</h3>
          <div className={dateBanner}>
            <Card.Text>Ultima Actualizaci??n:</Card.Text>
            <Card.Text>
              {
                formatDate(dataImagenes.fechA_CREACION_IDEA)
              }
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
export default BannerTeianDetalles