import React, { useState, useEffect } from 'react';
import {Col, Container, Row } from 'react-bootstrap';


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
            <div >
                <Container >
                    <Row>
                        <Col lg={12}>    
                        <p class="mb-0">Trabajadores que conocen a profundidad los problemas de la operación y sus probables soluciones, no conocen la metodología de ideas de mejora.
                        Crear un kiosko con una cuenta de Rever siempre abierta donde la persona capture su idea con asistencia de personal administrativo de RH / OPEX.
                      Incrementar exponencialmente el número de ideas de mejora en el sistema.</p>
                          <Row style={{marginTop:"10px"}}>
                            <Col lg="2"><h5>Categorias:</h5></Col>
                            <Col lg="11"><span className="badge rounded-pill" style={{ color:"#000", background:"#D0D0D0"}}>Mejora Continua</span></Col>
                          </Row>
                          <Row style={{marginTop:"10px"}}>
                            <Col lg="2"><h5>Coach:</h5></Col>
                            <Col lg="11"><span className="badge rounded-pill" style={{ color:"#000", background:"#D0D0D0"}}>Christian Valenzuela</span></Col>
                          </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  )
}
