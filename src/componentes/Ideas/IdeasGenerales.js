import React, { useState, useEffect } from 'react';
import { Badge, Card, Container } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
// import { Button, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import formatDate from './formatFecha';
// import Tooltip from '@mui/material/Tooltip';
import ModalAceptadas from './ModalAceptadas'
import ModalRechazadas from './ModalRechazadas'
import ReactLoading from 'react-loading';
import styles from './Ideas.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import Slide from 'react-reveal/Slide';
import { AiOutlineArrowRight } from "react-icons/ai";


// URL del servidor para poner antes de la url de la imagen y poder verla
const UrlServer = "http://10.30.2.167:4000/"

// Metdo de CARGANDO
const Cargando = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

const IdeasGenerales = () => {
  // ------------------------
  const [ideasGenerales, setIdeasGenerales] = useState([])
  const [done, setDone] = useState(undefined)

   // Api de ideas del usuario aprobadas
  const initialUrl = "http://10.30.2.167:4000/api/Ideas/Exepc_aceptadas"

  // Fetch a esa url para extraer los datos
  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeasGenerales(data)
        setDone(true)
      })
      // .catch(error => console.log(error))
  }

  useEffect(() => {
    setTimeout(() => {
      fetchIdeas(initialUrl)
    }, 2000)
  }, [])
  // ------------------------

  const loadingCard = styles.loadingCard
  const zoomTarjeta = styles.zoomTarjeta

  return (
    <>
    {/* Pantalla de carga en lo que el servidor trae la informacion */}
      {
        !done ? (
          <div className={loadingCard}>
            {/* <ReactLoading type={"spinningBubbles"} color={"#0d6efd"} height={300} width={300} /> */}
            <img src={gerberLogoLoad} width="400" />
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "center" }}>
            {
              ideasGenerales.map((item, index) => (
                <div className="column" key={index} >
                  <Slide bottom>
                  <Card style={{ width: '20rem', margin: "25px", borderRadius: "5px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px" }} className={zoomTarjeta}>
                    <Link to={`/Teian/DetalleTeian/${item.iD_IDEA}`} style={{ textDecoration: "none", color: "#000" }} onClick={Cargando}>
                      <div style={{ height: "250px", overflow: "hidden" }}>
                        {item.archivos.length === 0 ? (
                          <Card.Img style={{height:"100%", objectFit:"cover"}} key={index} variant="top" src={notFound} />
                        ) : (
                          item.archivos.map((item2, index) => (
                            index === 0 ? (
                              <Card.Img style={{height:"100%", objectFit:"cover"}} key={index} variant="top" src={UrlServer + item2.urL_MULTIMEDIA} />
                            ) : (
                              <Card.Img style={{height:"100%", objectFit:"cover"}} key={index} variant="top" src={notFound} />
                            )
                          )))
                        }
                      </div>
                    </Link>
                    {/* <span className="badge rounded-pill bg-secondary" style={{position:"absolute", margin:"10px"}}>{item.estatus}</span> */}
                    {item.iD_ESTATUS === 1 ? (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="secondary" style={{ position: "absolute", margin: "10px" }}>{item.estatuto}</Badge>
                  ) : item.iD_ESTATUS === 2 ? (
                    // <span className="badge rounded-pill bg-success text-white" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="success" style={{ position: "absolute", margin: "10px" }}>{item.estatuto}</Badge>
                  ) : item.iD_ESTATUS === 3 ? (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="danger" style={{ position: "absolute", margin: "10px" }}>{item.estatuto}</Badge>
                  ) : item.iD_ESTATUS === 4 ? (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="warning" style={{ position: "absolute", margin: "10px" }}>{item.estatuto}</Badge>
                  ) : (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge style={{ backgroundColor: "#0D6EFD",  position: "absolute", margin: "10px" }}>{item.estatuto}</Badge>
                  )
                  }
                    <Card.Body>
                      <Card.Title>{item.titulO_IDEA.length >= 28 ? item.titulO_IDEA.substr(0, 23) + "..." : item.titulO_IDEA }</Card.Title>
                      <Card.Text>
                        {
                          formatDate(item.fechA_CREACION_IDEA)
                        }
                      </Card.Text>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Link to={`/Teian/DetalleTeian/${item.iD_IDEA}`} style={{ textDecoration: "none", color: "#fff", background:"#3c3c33", padding: "10px 30px", borderRadius: "5px" }} onClick={Cargando}>Ir a detalles <AiOutlineArrowRight/> </Link>
                      </div>
                    </Card.Body>
                  </Card>
                  </Slide>
                </div>
              ))}
          </div>
        )
      }
    </>
  )
}
export default IdeasGenerales