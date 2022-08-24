import { Backdrop } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Badge, Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Modal from './Modal'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import formatDate from './formatFecha';
import ReactLoading from 'react-loading';
import styles from './Ideas.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import Slide from 'react-reveal/Slide';

// URL del servidor para poner antes de la url de la imagen y poder verla
const UrlServer = "http://10.30.2.167:4000/"

const IdeasAceptadas = () => {
  // Hooks para el fetch y el cargando 
  const [ideas, setIdeas] = useState([])
  const [done, setDone] = useState(undefined)


  // Extraer el usuario del local storage
  const idUsuario = window.localStorage.getItem('usuario')
  // Api de ideas del usuario aprobadas
  const initialUrl = `http://10.30.2.167:4000/api/ideas/Aprobadas/?id_user=${idUsuario}`

  // Fetch a esa url para extraer los datos
  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeas(data)
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
            ideas.map((item, index) => (
              <div key={index} className="column" >
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
                  {/* <span className="badge rounded-pill bg-success text-white" style={{ position: "absolute", margin: "10px" }}>{item.estatus}</span> */}
                  <Badge bg="success" style={{position: "absolute", margin: "10px" }} >{item.estatuto}</Badge>
                  <Card.Body>
                    <Card.Title>{item.titulO_IDEA.length >= 28 ? item.titulO_IDEA.substr(0, 28) + "..." : item.titulO_IDEA}</Card.Title>
                    <Card.Text>
                      {
                        formatDate(item.fechA_CREACION_IDEA)
                      }
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      {/* <Button variant="contained" style={{ backgroundColor: '#445CF5' }} onClick={() => Implementada()}>Implementar</Button> */}
                      <Link to={`/Teian/DetalleTeian/${item.iD_IDEA}`} style={{ textDecoration: "none", color: "#fff", background: '#3c3c33', padding: "15px 20px", borderRadius: "5px" }} onClick={Cargando}>Implementar</Link>
                      {/* <Button variant="contained" style={{backgroundColor:"#8A94AB"}} >Deshacer</Button> */}
                      <Tooltip title="Información">
                        <IconButton>
                          <Modal />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </Card.Body>
                </Card>
                </Slide>
              </div>
            ))
          }
        </div>
      )
    }
    </>
  )
}
export default IdeasAceptadas