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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";


const imagenDetalle = styles.imagenDetalle
const imageCarrousel = styles.imageCarrousel
const UrlServer = "http://10.30.2.167:4000/"

const ImagesDetallesTeian = ({ ideas }) => {

  const { titulo_Idea } = useParams()

  return (
    <div style={{ width: "55%" }} >
      {/* {ideas.filter(item => item.name === titulo_Idea).map((item, index) => (
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a  href={notFound} key={index}>
                <img alt="" src={notFound} width="250" height="250" className={imageCarrousel} />
              </a>
            </LightGallery>
          ))} */}

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          ideas.map((item, index) => (
            item.archivos.map((item2) => (
            <SwiperSlide key={index}  >
              <div className="swiper-zoom-container">
                {/* {console.log(item2.urL_MULTIMEDIA.substring(item2.urL_MULTIMEDIA.length-3,item2.urL_MULTIMEDIA))} */}
                <img src={UrlServer + item2.urL_MULTIMEDIA}/>
              </div>
            </SwiperSlide>
            ))
          ))}
      </Swiper>




    </div>
  )
}

export default ImagesDetallesTeian