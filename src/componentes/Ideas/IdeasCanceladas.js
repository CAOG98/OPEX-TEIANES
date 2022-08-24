import React, { useState, useEffect } from 'react';
import { Badge, Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import formatDate from './formatFecha';
// import ModalEliminar from './ModalEliminar';
// import ModalDeshacer from './ModalDeshacer';
import ReactLoading from 'react-loading';
import styles from './Ideas.module.css'
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import Slide from 'react-reveal/Slide';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';

const UrlServer = "http://10.30.2.167:4000/"
// Metdo de CARGANDO al momento de dar click en la tarjeta para mandarte a
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


const IdeasCanceladas = () => {
  // Hooks para el fetch y el cargando
  const [ideas, setIdeas] = useState([])
  const [done, setDone] = useState(undefined)


  // Api ideas rechazadas
  const initialUrl = "http://10.30.2.167:4000/api/Ideas/Rechazadas"

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
  //--------------------------------------------------------------------------------
  const ModalDeshacer = (indexEstatus) => {
    // console.log(indexEstatus)

    const [indexItem, setIndexItem] = useState()


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const IdUsuario = window.localStorage.getItem('usuario')
    // CAMBIAR EL ESTADO A ELIMINADAS
    const cambiarEstadoDeshacer = (ideaDeshacer) => {
      const ID = ideaDeshacer.index
      const IndexID = ideaDeshacer.indexCard
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React PUT Request Example' })
      };
      fetch(`http://10.30.2.167:4000/api/Ideas/EnProceso/?id=${ID}&numEmpleado=${IdUsuario}`, requestOptions)
      setShow(false);
      setTimeout(() => {
        setIdeas((prevState) =>
          prevState.filter((todo, index) => index !== IndexID)
        );
      }, 100)
    }


    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          <Tooltip title="Deshacer">
            <UndoIcon />
          </Tooltip>
        </Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>¿Estas seguro que deseas regresar al estado anterior?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esta idea la podra volver a ver en "TEIANES POR APROBAR"</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => cambiarEstadoDeshacer(indexEstatus)}>
              Deshacer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  //--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------
  const ModalEliminar = (indexEstatus) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const IdUsuario = window.localStorage.getItem('usuario')
    // CAMBIAR EL ESTADO A ELIMINADAS
    const cambiarEstadoEliminadas = (ideaEliminada) => {
      const iE = ideaEliminada.index
      const indexIE = ideaEliminada.indexCard
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React PUT Request Example' })
      };
      fetch(`http://10.30.2.167:4000/api/Ideas/Eliminada/?id=${iE}&numEmpleado=${IdUsuario}`, requestOptions)
      setShow(false);
      setTimeout(() => {
        setIdeas((prevState) =>
          prevState.filter((todo, index) => index !== indexIE)
        );
      }, 100)
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          <Tooltip title="Borrar">
            <DeleteIcon />
          </Tooltip>
        </Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>¿Estas seguro que deseas eliminar esta idea?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esta idea se eliminara y ya no podra verla</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Cerrar
            </Button>
            <Button variant="primary" onClick={() => cambiarEstadoEliminadas(indexEstatus)}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  //--------------------------------------------------------------------------------
  const loadingCard = styles.loadingCard
  const zoomTarjeta = styles.zoomTarjeta
  return (
    <>
      {
        !done ? (
          <div className={loadingCard}>
            {/*<ReactLoading type={"spinningBubbles"} color={"#0d6efd"} height={300} width={300} />*/}
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
                      {/* <span class="badge rounded-pill bg-danger" style={{ position: "absolute", margin: "10px" }}>{item.estatus}</span> */}
                      <Badge style={{ position: "absolute", margin: "10px" }} bg="danger">{item.estatuto}</Badge>
                      <Card.Body>
                        <Card.Title>{item.titulO_IDEA.length >= 28 ? item.titulO_IDEA.substr(0, 28) + "..." : item.titulO_IDEA}</Card.Title>
                        <Card.Text>
                          {
                            formatDate(item.fechA_CREACION_IDEA)
                          }
                        </Card.Text>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <Tooltip title="Deshacer">
                            <ModalDeshacer index={item.iD_IDEA} indexCard={index} />
                          </Tooltip>
                          <Tooltip title="Borrar">
                            <ModalEliminar index={item.iD_IDEA} indexCard={index} />
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
export default IdeasCanceladas