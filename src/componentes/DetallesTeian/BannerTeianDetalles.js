import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Card, Container } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import { useParams } from 'react-router-dom';
//Imagen de No encontrado por si no hay ninguna imagen
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg';
//Clase para darle formato a la fecha
import formatDate from '../Ideas/formatFecha';

const imageBanner = styles.imageBanner
const bannerCont = styles.bannerCont
const titleBanner = styles.titleBanner
const dateBanner = styles.dateBanner

const UrlServer = "http://10.30.2.167:4000/"


//Banner de la imagen de la pantalla de Detalles del teian
const BannerTeianDetalles = ({ ideaDetalle }) => {
  const [cargando, setCargando] = (false)
  const dataImagenes = ideaDetalle
  return (
    <>
      <Card className={bannerCont}>
        {/* Imagen del banner */}
      {dataImagenes.archivos.map((item, index) => (
        index === 0 ? (
          <Card.Img key={index} variant="top" src={UrlServer + item.urL_MULTIMEDIA} className={imageBanner} />
        ) : (
          <Card.Img key={index} variant="top" src={notFound} className={imageBanner} />
        )
      ))}
      {/* Datos del banner Fecha titulo en que estado se encuentra */}
        <Card.ImgOverlay>
          {dataImagenes.iD_ESTATUS === 1 ? (
            <Badge bg="secondary">{dataImagenes.estatuto}</Badge>
          ) : dataImagenes.iD_ESTATUS === 2 ? (
            <Badge bg="success">{dataImagenes.estatuto}</Badge>
          ) : dataImagenes.iD_ESTATUS === 3 ? (
            <Badge bg="warning">{dataImagenes.estatuto}</Badge>
          ) : dataImagenes.iD_ESTATUS === 4 ? (
            <Badge bg="danger">{dataImagenes.estatuto}</Badge>
          ) : (
            <Badge bg="info">{dataImagenes.estatuto}</Badge>
          )
          }
          <h3 className={titleBanner}>{dataImagenes.titulO_IDEA}</h3>
          <div className={dateBanner}>
            <Card.Text>Ultima Actualización:</Card.Text>
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