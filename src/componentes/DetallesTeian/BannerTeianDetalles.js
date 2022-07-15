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


const BannerTeianDetalles = ({ ideas }) => {
  const { titulo_Idea } = useParams()
  return (
    <>
      {ideas.filter(item => item.titulO_IDEA === titulo_Idea).map((item, index) => (
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
          <Card.ImgOverlay>
            {item.iD_ESTATUS == 1 ? (
              // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
              <Badge bg="secondary">{item.estatus}</Badge>
            ) : item.iD_ESTATUS == 2 ? (
              // <span className="badge rounded-pill bg-success text-white" style={{ marginBottom: "10px" }}>{item.estatus}</span>
              <Badge bg="success">{item.estatus}</Badge>
            ) : item.iD_ESTATUS == 3 ? (
              // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
              <Badge bg="warning">{item.estatus}</Badge>
            ) : item.iD_ESTATUS == 4 ? (
              // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
              <Badge bg="danger">{item.estatus}</Badge>
            ) : (
              // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
              <Badge bg="info">{item.estatus}</Badge>
            )
            }
            <h3 className={titleBanner}>{item.titulO_IDEA}</h3>
            <div className={dateBanner}>
              <Card.Text>Ultima Actualización:</Card.Text>
              <Card.Text>
                {
                  formatDate(item.fechA_CREACION_IDEA)
                }
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      ))}
    </>
  );
}
export default BannerTeianDetalles