import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import React, { useState, Suspense, useEffect } from "react";
import styles from './Perfil.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import gerberInfo from '../FormularioLogin/images/GerberInfo.png';
import Fade from 'react-reveal/Fade';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Legend, Tooltip, ArcElement } from 'chart.js'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement
)

const Perfil = () => {

  const idUsuario = window.localStorage.getItem('usuario')
  const [usuarios, setUsuarios] = useState([])
  const [numeroDeIdeas, setNumeroDeIdeas] = useState([])
  const initialUrl = "http://10.30.2.167:4000/api/usuarios"
  const [done, setDone] = useState(undefined)

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsuarios(data)
        setDone(true)
        // console.log(data)
      })
      // .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeas(initialUrl)
  }, [])


  const initialUrlNumeroIdeas = `http://10.30.2.167:4000/api/usuarios/NumeroDeIdeas/${idUsuario}`

  const fetchIdeasNumero = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNumeroDeIdeas(data)
        // console.log(data)
      })
      // .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeasNumero(initialUrlNumeroIdeas)
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
  const graficaIdeas = styles.graficaIdeas
  const logotipoPerfil = styles.logotipoPerfil
  const perfilBar = styles.perfilBar
  const segundaGraficaIdeas = styles.segundaGraficaIdeas
  const pointsUser = styles.pointsUser
  const datosPerso = styles.datosPerso
  const bgImage = styles.bgImage


  var data = {
    labels: ['Por aprobar', 'Rechazadas', 'Aceptadas', 'Implementadas'],
    datasets: [{
      label: 'Ideas',
      data: [ numeroDeIdeas.ideas_proceso, numeroDeIdeas.ideas_rechazadas, numeroDeIdeas.ideas_aceptadas, numeroDeIdeas.ideas_implementadas],
      backgroundColor: [
        'rgba(123, 133, 143, 1)',
        'rgba(235, 56, 74, 1)',
        'rgba(25, 135, 84, 1)',
        'rgba(83, 145, 238, 1)'
      ],
      borderColor: [
        'rgba(123, 133, 143, 1)',
        'rgba(220, 53, 69, 1)',
        'rgba(25, 135, 84, 1)',
        'rgba(13, 110, 253, 1)'
      ],
      borderWidth: 0,
      hoverOffset: 40
    }]
  }
  var options = {
    spacing: 2,
    rotation: (-0.5 * Math.PI) - (25 / 180 * Math.PI),
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "NÚMERO DE IDEAS"
      }
    },
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

  var dataD = {
    labels: ['Por aprobar', 'Rechazadas', 'Aceptadas', 'Implementadas'],
    datasets: [{
      label: 'Ideas',
      data: [numeroDeIdeas.ideas_proceso, numeroDeIdeas.ideas_rechazadas, numeroDeIdeas.ideas_aceptadas, numeroDeIdeas.ideas_implementadas],
      backgroundColor: [
        'rgba(123, 133, 143, 1)',
        'rgba(235, 56, 74, 1)',
        'rgba(25, 135, 84, 1)',
        'rgba(83, 145, 238, 1)'
      ],
      borderColor: [
        'rgba(123, 133, 143, 1)',
        'rgba(220, 53, 69, 1)',
        'rgba(25, 135, 84, 1)',
        'rgba(13, 110, 253, 1)'
      ],
      borderWidth: 0,
      hoverOffset: 40
    }]
  }
  var optionsD = {
    spacing: 2,
    rotation: (-0.5 * Math.PI) - (25 / 180 * Math.PI),
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "NÚMERO DE IDEAS"
      }
    },
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
                <div style={{ width: "100%", overflow: "auto" }}>
                  <div className={perfilContCard}>
                    <div className={cardPerfil}>
                      <Card className="text-center" style={{ borderRadius: "10px" }}>
                        <Card.Header style={{ backgroundColor: "#3c3c33", color: "#fff" }} ><h4>PERFIL DE: {nombre_empleado}</h4></Card.Header>
                        <Card.Body>
                          <div className={perfilBar} >
                            <div className={datosPerso}>
                                <h3>Descripción del perfil:</h3>
                                <Card.Text>
                                  <h5>Puesto:</h5> <p>{puesto}</p>
                                </Card.Text>
                                <Card.Text>
                                  <h5>Área:</h5> <p>{depto}</p>
                                </Card.Text>
                                <Card.Text>
                                  <h5>Correo electrónico:</h5>
                                  {/* <p>{correo}</p> */}
                                </Card.Text>
                              </div>

                            <div className={graficaIdeas}>
                              <Bar
                                data={data}
                                height={400}
                                options={options}
                              />

                            </div>
                          </div>
                          <div className={segundaGraficaIdeas} >
                            <div className={graficaIdeas}>
                              <Doughnut
                                data={dataD}
                                height={400}
                                options={optionsD}
                              />
                            </div>
                            <div className={pointsUser}>
                              <h1>IDEAS TOTALES:</h1>
                              <h3 >{numeroDeIdeas.ideas_totales}</h3>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
                {/* <div className={logotipoPerfil} >
                            <img src={gerberInfo} style={{ display: "block", margin: "auto", maxWidth: "100%", width: "500px" }} />
                          </div> */}
              </Fade>
            </Suspense>
          )
      }
    </>
  )
}

export default Perfil