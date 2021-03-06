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

const UrlServer = "http://10.30.2.167:4000/"

const IdeasAceptadas = () => {
  // const [tab, setTab] = useState(false)
  // ------------------------
  const [ideas, setIdeas] = useState([])
  const [done, setDone] = useState(undefined)

  const initialUrl = "http://10.30.2.167:4000/api/ideas/Aprobadas"

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeas(data)
        setDone(true)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setTimeout(() => {
      fetchIdeas(initialUrl)
    }, 2000)
  }, [])
  // ------------------------




  // const Implementada = () => {
  //   setTab(true)
  // };
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
  return (
    <>
    {
      !done ? (
        <div className={loadingCard}>
          <ReactLoading type={"spinningBubbles"} color={"#0d6efd"} height={300} width={300} />
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "center" }}>
          {
            ideas.map((item, index) => (
              <div key={index} className="column" >
                <Card style={{ width: '20rem', margin: "25px", borderRadius: "10px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px" }}>
                  <Link to={`/Teian/DetalleTeian/${item.iD_IDEA}`} style={{ textDecoration: "none", color: "#000" }} onClick={Cargando}>
                    <div style={{ height: "250px", overflow: "hidden" }}>
                      {item.archivos.length === 0 ? (
                        <Card.Img key={index} variant="top" src={notFound} />
                      ) : (
                        item.archivos.map((item2, index) => (
                          index === 0 ? (
                            <Card.Img key={index} variant="top" src={UrlServer + item2.urL_MULTIMEDIA} />
                          ) : (
                            <Card.Img key={index} variant="top" src={notFound} />
                          )
                        )))
                      }
                    </div>
                  </Link>
                  {/* <span className="badge rounded-pill bg-success text-white" style={{ position: "absolute", margin: "10px" }}>{item.estatus}</span> */}
                  <Badge style={{ position: "absolute", margin: "10px" }} bg="success">{item.estatus}</Badge>
                  <Card.Body>
                    <Card.Title>{item.titulO_IDEA}</Card.Title>
                    <Card.Text>
                      {
                        formatDate(item.fechA_CREACION_IDEA)
                      }
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      {/* <Button variant="contained" style={{ backgroundColor: '#445CF5' }} onClick={() => Implementada()}>Implementar</Button> */}
                      <Link to={`/Teian/DetalleTeian/${item.titulO_IDEA}`} style={{ textDecoration: "none", color: "#fff", background: '#445cf5', padding: "10px 30px", borderRadius: "5px" }} onClick={Cargando}>Implementar</Link>
                      {/* <Button variant="contained" style={{backgroundColor:"#8A94AB"}} >Deshacer</Button> */}
                      <Tooltip title="Informaci??n">
                        <IconButton>
                          <Modal />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </Card.Body>
                </Card>
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