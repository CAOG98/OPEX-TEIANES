import React, { useState, useEffect } from 'react';
import { Badge, Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
// import { Button, Input } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import formatDate from './formatFecha';
// import Tooltip from '@mui/material/Tooltip';
// import ModalAceptadas from './ModalAceptadas'
// import ModalRechazadas from './ModalRechazadas'
import styles from './Ideas.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import coachPersonaje from '../FormularioLogin/images/coachPersonaje.png';
import Slide from 'react-reveal/Slide';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

const Ideas = () => {
  // ------------------------
  const [ideas, setIdeas] = useState([])
  const [done, setDone] = useState(undefined)
  const id_user = window.localStorage.getItem('usuario')
  const initialUrl = `http://10.30.2.167:4000/api/Coaches/IDEAS/${id_user}`

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

  //----------------------------------------------
  //ModalAceptada
  const ModalAceptadas = (indexEstatus) => {
    // console.log(indexEstatus)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const IdUsuario = window.localStorage.getItem('usuario')
    // Cambiar el estado a Aceptadas
    const cambiarEstadoAceptadas = (ideaAceptada) => {
      // console.log(indexEstatus)
      const IA = ideaAceptada.ideaIndex
      // console.log(IA)
      const indexIA = ideaAceptada.indexCard
      // console.log(indexIA)


      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React PUT Request Example' })
      };
      fetch(`http://10.30.2.167:4000/api/Ideas/Aceptada/?id=${IA}&numEmpleado=${IdUsuario}`, requestOptions)
      setShow(false);
      setTimeout(() => {
        setIdeas((prevState) =>
          prevState.filter((todo, index) => index !== indexIA)
        );
      }, 100)
    }

    return (
      <>
        <Button variant="secondary" style={{ backgroundColor: '#20BA81' }} onClick={handleShow}>
          Aceptar
        </Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>¿Estás seguro que desea aceptar esta idea?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esta idea se podra ver en "TEIANES ACEPTADOS"</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{ backgroundColor: '#20BA81' }} onClick={() => cambiarEstadoAceptadas(indexEstatus)}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  //----------------------------------------------


  //-----------------------------------------------
  const ModalRechazadas = (indexEstatus) => {
    console.log(indexEstatus)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const IdUsuario = window.localStorage.getItem('usuario')
    // CAMBIAR EL ESTADO A RECHAZADAS
    const cambiarEstadoReachazadas = (ideaRechazada) => {
      console.log(ideaRechazada)
      const IR = ideaRechazada.index
      const indexIR = ideaRechazada.indexCard
      console.log(indexIR)
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React PUT Request Example' })
      };
      fetch(`http://10.30.2.167:4000/api/Ideas/Rechazar/?id=${IR}&numEmpleado=${IdUsuario}`, requestOptions)
      setShow(false);
      setTimeout(() => {
        setIdeas((prevState) =>
          prevState.filter((todo, index) => index !== indexIR)
        )
      }, 100)
    }


    return (
      <>
        <Button variant="secondary" style={{ backgroundColor: '#DB5F58' }} onClick={handleShow}>
          Rechazar
        </Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>¿Estás seguro que desea rechazar esta idea?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esta idea se podrá ver en "TEIANES RECHAZADOS"</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{ backgroundColor: '#DB5F58' }} onClick={() => cambiarEstadoReachazadas(indexEstatus)}>
              Rechazar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  //-----------------------------------------------




  // const DeleteItems = (indexItem) => {
  //   setIdeas((prevState) =>
  //     prevState.filter((todo, index) => index !== indexItem)
  //   );
  // };

  const loadingCard = styles.loadingCard
  const zoomTarjeta = styles.zoomTarjeta
  return (
    <>
      {
        !done ? (
          <div className={loadingCard}>
            <img src={gerberLogoLoad} width="400" alt="" />
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "center" }}>
            {
              ideas.map((item, index) => (
                <div className="column" key={index} >
                  <Slide bottom>
                    <Card style={{ width: '20rem', margin: "25px", borderRadius: "5px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px" }} className={zoomTarjeta} >
                      <NavLink exact to={`/Teian/DetalleTeian/${item.iD_IDEA}`} style={{ textDecoration: "none", color: "#000" }} onClick={Cargando}>
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
                      </NavLink>
                      {/* <span className="badge rounded-pill bg-secondary" style={{position:"absolute", margin:"10px"}}>{item.estatuto}</span> */}
                      <Badge style={{ position: "absolute", margin: "10px" }} bg="secondary">{item.estatuto}</Badge>
                      <Card.Body>
                        <Card.Title>{item.titulO_IDEA.length >= 28 ? item.titulO_IDEA.substr(0, 23) + "..." : item.titulO_IDEA}</Card.Title>
                        <Card.Text>
                          {
                            formatDate(item.fechA_CREACION_IDEA)
                          }
                        </Card.Text>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          {/* <Button variant="contained" type="submit" style={{ backgroundColor: '#20BA81' }} onClick={() => cambiarEstadoAceptadas(item.iD_IDEA)} >Aceptar</Button>
                  <Button variant="contained" style={{ backgroundColor: '#DB5F58' }} onClick={() => cambiarEstadoReachazadas(item.iD_IDEA)}>Rechazar</Button> */}
                          <ModalAceptadas ideaIndex={item.iD_IDEA} indexCard={index} />
                          <ModalRechazadas index={item.iD_IDEA} indexCard={index} />
                          {/* <button onClick={() => DeleteItems(index)}>Aceptar</button> */}
                        </div>
                      </Card.Body>
                    </Card>
                  </Slide>
                </div>
              ))}
            <img src={coachPersonaje} width="100" style={{ position: "fixed", bottom: "0", right: "0" }} alt="" />
          </div>
        )
      }
    </>
  )
}
export default Ideas