import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import React, { useState, Suspense, useEffect } from "react";
import styles from './Perfil.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import gerberInfo from '../FormularioLogin/images/GerberInfo.png';
import Fade from 'react-reveal/Fade';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

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
  const puntosPerfil = styles.puntosPerfil
  const puntosIdeas = styles.puntosIdeas
  const perfilContCard = styles.perfilContCard

  var data = {
    labels: ['Total ideas', 'Ideas pendientes por aprobar', 'Ideas rechazadas', 'Ideas aceptadas', 'Ideas implementadas'],
    datasets: [{
      label: 'TOTAL IDEAS',
      data: [13, 5, 5, 2, 1],
      backgroundColor: [
        'rgba(107, 58, 135,0.2)',
        'rgba(42, 46, 49, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(25, 135, 84, 0.2)',
        'rgba(13, 110, 253, 0.2)'
      ],
      borderColor: [
        'rgba(107, 58, 135,1)',
        'rgba(42, 46, 49, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(10, 53, 33, 1)',
        'rgba(1, 30, 74, 1)'
      ],
      borderWidth: 1
    }]
  }
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    }
  }

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
                <div className={perfilContCard}>
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
                        {/* <div className={puntosPerfil}>

                          <div className={puntosIdeas}>
                            <Card.Text>
                              <h5>Total ideas:</h5>
                            </Card.Text>
                            <Card.Text>
                              #13
                            </Card.Text>
                          </div>

                          <div className={puntosIdeas}>
                            <Card.Text>
                              <h5>Ideas pte aprobar:</h5>
                            </Card.Text>
                            <Card.Text>
                              #5
                            </Card.Text>
                          </div>

                          <div className={puntosIdeas}>
                            <Card.Text>
                              <h5>Ideas rechazadas:</h5>
                            </Card.Text>
                            <Card.Text>
                              #5
                            </Card.Text>
                          </div>


                          <div className={puntosIdeas}>
                            <Card.Text>
                              <h5>Ideas aceptadas:</h5>
                            </Card.Text>
                            <Card.Text>
                              #2
                            </Card.Text>
                          </div>

                          <div className={puntosIdeas}>
                            <Card.Text>
                              <h5>Ideas implementadas</h5>
                            </Card.Text>
                            <Card.Text>
                              #1
                            </Card.Text>
                          </div>

                        </div> */}
                      </Card.Body>
                    </Card>
                    <div>
                      <Bar
                        data={data}
                        height={400}
                        options={options}
                      />
                    </div>
                  </Container>
                  {/* <div>
                    <img src={gerberInfo} style={{ display:"block", margin:"auto", maxWidth: "100%" }} />
                  </div> */}
                </div>

              </Fade>
            </Suspense>
          )
      }
    </>
  )
}

export default Perfil