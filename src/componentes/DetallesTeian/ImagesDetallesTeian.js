import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Carousel, Container } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'
import ContentTeianDetallado from './ContentTeianDetallado'


const carouselTeian = styles.carouselTeian

export default function ImagesDetallesTeian() {
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
  return ( 
      <Carousel>
        {
          ideas.map((item, index) =>(
            <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
      </Carousel>
  )
}
