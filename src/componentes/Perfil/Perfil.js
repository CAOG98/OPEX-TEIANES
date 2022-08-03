import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import React, { useState, Suspense, useEffect } from "react";
import styles from './Perfil.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import gerberInfo from '../FormularioLogin/images/GerberInfo.png';
import Fade from 'react-reveal/Fade';


const Perfil = () => {
  const [usuarios, setUsuarios] = useState([])
  const initialUrl = "http://10.30.2.167:4000/api/usuarios"
  const [done, setDone] = useState(undefined)

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsuarios(data)
        setDone(true)
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeas(initialUrl)
  }, [])



  const nameUsuario = window.localStorage.getItem('usuario')
  const nombre_empleado = window.localStorage.getItem('nombre_empleado')
  const puesto = window.localStorage.getItem('puesto')
  const depto = window.localStorage.getItem('depto')
  const correo = window.localStorage.getItem('correo')
  const cardPerfil = styles.cardPerfil
  const loadingCard = styles.loadingCard
  return (
    <>
      {
        !done ? (
          
          <div className={loadingCard}>
            <img src={gerberLogoLoad} width="400" />
          </div>

        ) :
          (
            <Suspense fallback={null}>
              <Fade>
              <div style={{display:"flex", flexDirection:"column", margin:"auto auto"}}>
                <Container className={cardPerfil}>
                  <Card className="text-center" style={{ borderRadius: "10px" }}>
                    <Card.Header style={{ backgroundColor: "#0d6efd", color: "#fff" }} ><h4>PERFIL</h4></Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <h5>Nombre:</h5> <p>{nombre_empleado}</p>
                      </Card.Text>
                      <Card.Text>
                        <h5>Puesto:</h5> <p>{puesto}</p>
                      </Card.Text>
                      <Card.Text>
                        <h5>Área:</h5> <p>{depto}</p>
                      </Card.Text>
                      <Card.Text>
                        <h5>Correo electronico:</h5> <p>{correo}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
                <Container>
                  <img src={gerberInfo} style={{maxWidth:"100%"}}/>
                </Container>
              </div>
              </Fade>
            </Suspense>
          )
      }
    </>
  )
}

export default Perfil