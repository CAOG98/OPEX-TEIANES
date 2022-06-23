import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from './DetallesTeian.module.css'


export default function ContentTeianDetallado() {
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
        <div style={{dislay:"flex"}}>
            <div style={{border:"2px solid",overflow:"scroll"}}>
                <h1>TITULO DEL TEIAN</h1>
                <Container >
                    <Row>
                        <Col lg={12}>
                       
  <p class="mb-0">What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary askjdakjsdassajdasjdsallkjas lkasj lkjas jas aksj sadj sakldjsa dklsa djsa djas kldjsakd jalsjskaljdjsakdasjldasjkdsajkldsaj dasjdsa j kasdka jj jk jklsadjkldsajklsdajdsajlkasdjklsadjkldsajlkdjklsdjsdajkjkasdkjlasdkjlasdjlkdsal k jj  ksa jkasjdl j aj  j jlksajakldjasjdksjsakldjldlk  jksadj  jkjk kjl  lkasj lkjas jas aksj sadj sakldjsa dklsa djsa djas kldjsakd jalsjskaljdjsakdasjldasjkdsajkldsaj dasjdsa j kasdka jj jk jklsadjkldsajklsdajdsajlkasdjklsadjkldsajlkdjklsdjsdajkjkasdkjlasdkjlasdjlkdsal k jj  ksa jkasjdl j aj  j jlksajakldjasjdksjsakldjldlk  jksadj  jkjk kjl  jkl kjj jk  jkldjksajlsdajdajdkjladsjlkdsjkdsjkldsajkljlkdsajlksdajklsadj    j jkljkjklajlkasjlksdakjldaskjlsdajkldsaj s  sjakdksaj kj k kljasjklsajkldajdsjkdsakjldsakjlsdajkldsajweq lkasj lkjas jas aksj sadj sakldjsa dklsa djsa djas kldjsakd jalsjskaljdjsakdasjldasjkdsajkldsaj dasjdsa j kasdka jj jk jklsadjkldsajklsdajdsajlkasdjklsadjkldsajlkdjklsdjsdajkjkasdkjlasdkjlasdjlkdsal k jj  ksa jkasjdl j aj  j jlksajakldjasjdksjsakldjldlk  jksadj  jkjk kjl  jkl kjj jk  jkldjksajlsdajdajdkjladsjlkdsjkdsjkldsajkljlkdsajlksdajklsadj    j jkljkjklajlkasjlksdakjldaskjlsdajkldsaj s  sjakdksaj kj k kljasjklsajkldajdsjkdsakjldsakjlsdajkldsajweq lkasj lkjas jas aksj sadj sakldjsa dklsa djsa djas kldjsakd jalsjskaljdjsakdasjldasjkdsajkldsaj dasjdsa j kasdka jj jk jklsadjkldsajklsdajdsajlkasdjklsadjkldsajlkdjklsdjsdajkjkasdkjlasdkjlasdjlkdsal k jj  ksa jkasjdl j aj  j jlksajakldjasjdksjsakldjldlk  jksadj  jkjk kjl  jkl kjj jk  jkldjksajlsdajdajdkjladsjlkdsjkdsjkldsajkljlkdsajlksdajklsadj    j jkljkjklajlkasjlksdakjldaskjlsdajkldsaj s  sjakdksaj kj k kljasjklsajkldajdsjkdsakjldsakjlsdajkldsajweq jkl kjj jk  jkldjksajlsdajdajdkjladsjlkdsjkdsjkldsajkljlkdsajlksdajklsadj    j jkljkjklajlkasjlksdakjldaskjlsdajkldsaj s  sjakdksaj kj k kljasjklsajkldajdsjkdsakjldsakjlsdajkldsajwequioewquioewquioewquioewquioewquiowquioewuioewquioewquioqweuioeqw</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  )
}
