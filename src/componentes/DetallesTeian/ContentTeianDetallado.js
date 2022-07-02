import React, {useParams } from 'react';
import {Col, Container, Row } from 'react-bootstrap';


 const ContentTeianDetallado = () => {
 
  return (
    <>
        <div style={{dislay:"flex"}}>
            <div >
                <Container >
                    <Row>
                        <Col lg={12}>    
                        <p class="mb-0"></p>
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
        </>
  )
}

export default ContentTeianDetallado