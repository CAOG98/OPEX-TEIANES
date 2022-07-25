import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesDetallesTeian from './ImagesDetallesTeian'
import { Col, Container, Row } from 'react-bootstrap';
import BannerTeianDetalles from './BannerTeianDetalles'
import styles from './DetallesTeian.module.css'
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios'
import { Badge, Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg';
import formatDate from '../Ideas/formatFecha';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import VideosImpDetallesTeian from './VideosImpDetallesTeian';
import VideosDetallesTeian from './VideosDetallesTeian';
import ImagesImpDetallesTeian from './ImagesImpDetallesTeian';


// Estilos
const fondoDetalleIdea = styles.fondoDetalleIdea
const DetallesInfoCategorias = styles.DetallesInfoCategorias
const tituloCategorias = styles.tituloCategorias
const DetallesInfoGeneral = styles.DetallesInfoGeneral
const bodyDetalles = styles.bodyDetalles
const DetallesImageGeneral = styles.DetallesImageGeneral


// Estilos Formulario pestaña Implementada
const buttonIdea = styles.buttonIdea
const txtAreaTeian = styles.txtAreaTeian
const errorMess = styles.errorMess
const messageExito = styles.messageExito
const ideaTeian = styles.ideaTeian
const fileTeian = styles.fileTeian
const contImplementar = styles.contImplementar

// Estilos al drop de archivos
const dropzone = styles.dropzone
const bodyFiles = styles.bodyFiles

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const DetallesTeian = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
  const [value, setValue] = useState(0);
  const [ideasDetalle, setIdeasDetalle] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const { iD_IDEA } = useParams()
  const initialUrlDetalle = `http://10.30.2.167:4000/api/Ideas/Detalle_Idea/${iD_IDEA}`

  const fetchIdeasDetalle = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeasDetalle(data)
        setIsLoading(false);
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeasDetalle(initialUrlDetalle)
  }, [])


  const textoIdea = styles.textoIdea
  const tabsNav = styles.tabsNav
  const tabNav = styles.tabNav

  //Estados Errores
  const [errorMessage, setErrorMessage] = useState(null)
  const [openAlert, setOpenAlert] = React.useState(false)
  const inputRef = useRef(null);


  // ESTOS METODOS SIRVEN PARA SUBIR ARCHIVOS EN CASO DE QUE NO FUNCIONE EL NUEVO
  // Para subir multiples archivos
  const [archivos, setArchivos] = useState(null)
  const subirArchivos = e => {
    let sumaTamanio = 0
    for (let i = 0; i < e.length; i++) {
      sumaTamanio += e[i].size
    }
    if (sumaTamanio > 10000000) {
      setErrorMessage('El archivo supera los 10Mb.');
      setOpenAlert(true)
      setIsDisabled(true)
      setTimeout(() => {
        setErrorMessage(null)
        setOpenAlert(false)
        inputRef.current.value = null;
        setIsDisabled(false)
      }, 3500)

    } else {
      setArchivos(e)
    }
  }
  const insertarArchivos = async (valores) => {
    const sesion = window.localStorage.getItem('usuario')
    console.log(sesion)
    const mensajeTexto = valores.mensajeTeian
    console.log(mensajeTexto)
    const f = new FormData()
    if (archivos != null) {
      for (let index = 0; index < archivos.length; index++) {
        f.append("archivito", archivos[index])
      }
    }
    await axios.put(`http://10.30.2.167:4000/api/Ideas/Implementa?id=${iD_IDEA}&numEmpleado=${sesion}&textoImplementado=${mensajeTexto}`,
      f, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
        window.location.reload();
      }).catch(error => {
        console.log(error)
      })
  }

  // DROPFILES END AQUI TERMINA EL CODIGO DE DROPFILES

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [isDisabled, setIsDisabled] = useState(false);
  const imageBanner = styles.imageBanner
  const bannerCont = styles.bannerCont
  const titleBanner = styles.titleBanner
  const dateBanner = styles.dateBanner

  const UrlServer = "http://10.30.2.167:4000/"

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <Container style={{ maxWidth: "100%" }} >
      <Card className={bannerCont}>
        {
          ideasDetalle.archivos.length > 0 ? (
            ideasDetalle.archivos.map((item, index) => (
              index === 0 ? (
                <Card.Img variant="top" src={UrlServer + item.urL_MULTIMEDIA} className={imageBanner} />
              ) : (
                <></>
              )
            ))
          ) : (
            <Card.Img variant="top" src={notFound} className={imageBanner} />
          )
        }
        <Card.ImgOverlay>
          {ideasDetalle.iD_ESTATUS === 1 ? (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="secondary">{ideasDetalle.estatuto}</Badge>
          ) : ideasDetalle.iD_ESTATUS === 2 ? (
            // <span className="badge rounded-pill bg-success text-white" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="success">{ideasDetalle.estatuto}</Badge>
          ) : ideasDetalle.iD_ESTATUS === 3 ? (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="warning">{ideasDetalle.estatuto}</Badge>
          ) : ideasDetalle.iD_ESTATUS === 4 ? (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge bg="danger">{ideasDetalle.estatuto}</Badge>
          ) : (
            // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
            <Badge style={{ backgroundColor: "#0D6EFD" }}>{ideasDetalle.estatuto}</Badge>
          )
          }
          <h3 className={titleBanner}>{ideasDetalle.titulO_IDEA}</h3>
          <div className={dateBanner}>
            <Card.Text>Ultima Actualización:</Card.Text>
            <Card.Text>
              {
                formatDate(ideasDetalle.fechA_CREACION_IDEA)
              }
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Box sx={{ width: '100%' }} className={fondoDetalleIdea}>
        {
          ideasDetalle.iD_ESTATUS === 1 ? (
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                  },
                }}>
                <Tab label="IDEA CREADA" {...a11yProps(0)} />
                <Tab label="IMPLEMENTAR" {...a11yProps(1)} disabled />
                <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} disabled />
              </Tabs>
            </Box>
          ) : ideasDetalle.iD_ESTATUS === 2 ? (
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                  },
                }}>
                <Tab label="IDEA CREADA" {...a11yProps(0)} />
                <Tab label="IMPLEMENTAR" {...a11yProps(1)} />
                <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} disabled />
              </Tabs>
            </Box>
          ) : ideasDetalle.iD_ESTATUS === 3 ? (
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                  },
                }}>
                <Tab label="IDEA CREADA" {...a11yProps(0)} />
                <Tab label="IMPLEMENTAR" {...a11yProps(1)} disabled />
                <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} disabled />
              </Tabs>
            </Box>
          ) : ideasDetalle.iD_ESTATUS === 5 ? (
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                  },
                }}>
                <Tab label="IDEA CREADA" {...a11yProps(0)} />
                <Tab label="IMPLEMENTAR" {...a11yProps(1)} disabled />
                <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} />
              </Tabs>
            </Box>
          ) : (
            <></>
          )
        }
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}>
            <Tab label="IDEA CREADA" {...a11yProps(0)} />
            <Tab label="IMPLEMENTAR" {...a11yProps(1)} />
            <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} />
          </Tabs>
        </Box> */}
        <TabPanel className={tabNav} value={value} index={0}>
          <p> DETALLES DEL TEIAN</p>
          <hr />
          <Row className={bodyDetalles}>
            <Col xs={6} className={DetallesInfoGeneral}>
            <Container className={DetallesInfoCategorias}>
              <div className={textoIdea}>
                <div style={{marginBottom:"30px"}}>
                  <h5>Idea creada por:</h5><span className="badge rounded-pill" style={{ color: "#fff", background: "#016dbb", marginRight:"10px" }}>{ideasDetalle.nombrE_USUARIO}</span>
                  <span className="badge rounded-pill" style={{ color: "#fff", background: "#016dbb" }}>{ideasDetalle.departamento}</span>
                </div>
                <h5>Descripción: </h5>
                <p className="mb-0">{ideasDetalle.ideA_TEXTO}</p>
              </div>
                <Row className={tituloCategorias}>
                  <Col lg="2"><h5>Categoria:</h5></Col>
                  <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd" }}>{ideasDetalle.categoria}</span></Col>
                </Row>
                <Row className={tituloCategorias}>
                  <Col lg="2"><h5>Coach:</h5></Col>
                  <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd" }}>{ideasDetalle.coaches}</span></Col>
                </Row>
              </Container>
            </Col>

            <Col xs={4} className={DetallesImageGeneral} >
              <div style={{ display: "flex", flexDirection: "column" }} >
                <ImagesDetallesTeian ideasDetalles={ideasDetalle} />
                <VideosDetallesTeian ideasDetalles={ideasDetalle} />
              </div>
            </Col>
          </Row>
        </TabPanel>
        <TabPanel className={tabNav} value={value} index={1}>
          <p>REGISTRO DE LA IMPLEMENTACIÓN</p>
          <hr />
          <Container className={contImplementar} >
            <Formik
              initialValues={{
                mensajeTeian: '',
                file: []
              }}
              // Validacion nombre
              validate={(valores) => {
                let errores = {};
                if (!valores.mensajeTeian) {
                  errores.mensajeTeian = 'Escribe una descripción'
                }
                if (!valores.file) {
                  errores.file = 'Porfavor suba un archivo'
                }
                return errores
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm()
                insertarArchivos(valores)
                console.log(valores);
                cambiarFormularioEnviado(true)
                setTimeout(() => cambiarFormularioEnviado(false), 5000)
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className={ideaTeian}>
                    <label htmlFor="TEIAN">DESCRIPCIÓN IDEA DE MEJORA IMPLEMENTADA*</label>
                    <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" placeholder="Escribe los detalles de la ejecución de la idea" />
                    <ErrorMessage name="mensajeTeian" component={() => (
                      <div className={errorMess}>{errors.mensajeTeian}</div>
                    )} />
                  </div>
                  <input ref={inputRef} accept="image/*,video/*" type="file" name="files" multiple onChange={(e) => subirArchivos(e.target.files)} style={{ maxWidth: "100%" }} />
                  {openAlert &&
                    <Stack sx={{ marginTop: '20px', width: '100%' }} spacing={2}>
                      <Alert severity="error">
                        <strong>{errorMessage}</strong>
                      </Alert>
                    </Stack>
                  }
                  <button type="submit" className={buttonIdea}>Enviar idea</button>
                  {formularioEnviado && <div><p className={messageExito}>Formulario enviado con exito!</p></div>}
                </Form>
              )}
            </Formik>
          </Container>
        </TabPanel>
        <TabPanel className={tabNav} value={value} index={2}>
          <Row className={bodyDetalles}>
            <p>RESULTADOS DEL TEIAN</p>
            <hr />
            <Col xs={6} className={DetallesInfoGeneral}>
              <div className={textoIdea}>
                <h5>Texto de la idea:</h5>
                <p className="mb-0">{ideasDetalle.comentario}</p>
              </div>
              <Container className={DetallesInfoCategorias}>
                <Row className={tituloCategorias}>
                  <Col lg="2"><h5>Categoria:</h5></Col>
                  <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd" }}>{ideasDetalle.categoria}</span></Col>
                </Row>
                <Row className={tituloCategorias}>
                  <Col lg="2"><h5>Coach:</h5></Col>
                  <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd" }}>{ideasDetalle.coaches}</span></Col>
                </Row>
              </Container>
            </Col>
            <Col xs={4} className={DetallesImageGeneral} >
              <div style={{ display: "flex", flexDirection: "column" }} >
                <ImagesImpDetallesTeian ideasDetalles={ideasDetalle} />
                <VideosImpDetallesTeian ideasDetalles={ideasDetalle} />
              </div>
            </Col>
          </Row>
        </TabPanel>
      </Box>
    </Container>
  );
}
export default DetallesTeian