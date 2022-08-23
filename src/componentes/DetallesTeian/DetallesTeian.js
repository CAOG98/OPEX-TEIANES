import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesDetallesTeian from './ImagesDetallesTeian'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
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
import gerberLogoLoad from '../FormularioLogin/images/GerberLogoLoad.gif';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import PdfDatos from './PdfDatos';
import { FcMoneyTransfer } from "react-icons/fc";
import GaugeChart from 'react-gauge-chart'

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


//Funciones de las tabs de Detalles del teian
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
//--------------------------------------------------------------

const DetallesTeian = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
  const [value, setValue] = useState(0);
  const [ideasDetalle, setIdeasDetalle] = useState([])
  const [isLoading, setIsLoading] = useState(undefined);

  const { iD_IDEA } = useParams()
  //Con esta api traemos los datos de la idea que esta pidiendo el usuario
  const initialUrlDetalle = `http://10.30.2.167:4000/api/Ideas/Detalle_Idea/${iD_IDEA}`

  const fetchIdeasDetalle = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIdeasDetalle(data)
        console.log(data)
        setTimeout(() => {
          setIsLoading(true);
        }, 600)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeasDetalle(initialUrlDetalle)
  }, [])


  //Estilos de las pestañas de detalle de la idea
  const textoIdea = styles.textoIdea
  const tabsNav = styles.tabsNav
  const tabNav = styles.tabNav

  //Estados Errores
  const [errorMessage, setErrorMessage] = useState(null)
  const [openAlert, setOpenAlert] = React.useState(false)
  const inputRef = useRef(null);


  // ESTOS METODOS SIRVEN PARA SUBIR ARCHIVOS 
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
    const mensajeTexto = valores.mensajeTeian
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
  //Algunos estilos del banner 
  const imageBanner = styles.imageBanner
  const bannerCont = styles.bannerCont
  const titleBanner = styles.titleBanner
  const dateBanner = styles.dateBanner
  const loadingCard = styles.loadingCard
  const ideaTeianEjemplo = styles.ideaTeianEjemplo
  const contEjemploImplementacion = styles.contEjemploImplementacion
  const txtAreaTeianEjemplo = styles.txtAreaTeianEjemplo

  //Texto de ejemplo de la implementacion
  const textoImplementacion = `¿Cómo lo solucionaste? Se hizo un plan de restauración de los carritos, se vio con mantenimiento reparación de baches y se trabajo la disciplina con los carreros.
¿Qué impacto tuvo? Logramos disminuir las grietas en 2% de forma semanal.`

  const UrlServer = "http://10.30.2.167:4000/"

  return (
    <>
      {
        !isLoading ?
          (
            <div className={loadingCard}>
              <img src={gerberLogoLoad} width="400" />
            </div>
          ) :
          (
            <Container style={{ maxWidth: "100%", paddingRight: "2px", paddingLeft: "2px" }} >

              {/* Banner de la pagina detalle del Teian */}
              <Card className={bannerCont}>
                {
                  ideasDetalle.archivos.length > 0 ? (
                    ideasDetalle.archivos.map((item, index) => (
                      index === 0 ? (
                        <Card.Img key={index} variant="top" src={UrlServer + item.urL_MULTIMEDIA} className={imageBanner} />
                      ) : (
                        <></>
                      )
                    ))
                  ) : (
                    <Card.Img variant="top" src={notFound} className={imageBanner} />
                  )
                }
                <Card.ImgOverlay  >
                  {ideasDetalle.iD_ESTATUS === 1 ? (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="secondary">{ideasDetalle.estatuto}</Badge>
                  ) : ideasDetalle.iD_ESTATUS === 2 ? (
                    // <span className="badge rounded-pill bg-success text-white" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="success">{ideasDetalle.estatuto}</Badge>
                  ) : ideasDetalle.iD_ESTATUS === 3 ? (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="danger">{ideasDetalle.estatuto}</Badge>
                  ) : ideasDetalle.iD_ESTATUS === 4 ? (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge bg="warning">{ideasDetalle.estatuto}</Badge>
                  ) : (
                    // <span className="badge rounded-pill bg-secondary" style={{ marginBottom: "10px" }}>{item.estatus}</span>
                    <Badge style={{ backgroundColor: "#0D6EFD" }}>{ideasDetalle.estatuto}</Badge>
                  )
                  }
                  <h3  className={titleBanner}>{ideasDetalle.titulO_IDEA}</h3>
                  <div className={dateBanner}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Card.Text>Fecha de creación de idea:</Card.Text>
                    <PdfDatos id={iD_IDEA} />
                    </div>
                      <Card.Text>
                        {
                          formatDate(ideasDetalle.fechA_CREACION_IDEA)
                        }
                      </Card.Text> 
                  </div>
                </Card.ImgOverlay>
              </Card>
              {/*---------------------------------------------Aqui termina el banner  --------------------------------------------------- */}

              {/* -------------------------Pestañas dependiendo en que estado se encuentre la idea ------------------------------------------------ */}
              <Box sx={{ width: '100%' }} className={fondoDetalleIdea}>
                {
                  ideasDetalle.iD_ESTATUS === 1 ? (
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                          [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0 },
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
                            '&.Mui-disabled': { opacity: 0 },
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
                            '&.Mui-disabled': { opacity: 0 },
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
                            '&.Mui-disabled': { opacity: 0 },
                          },
                        }}>
                        <Tab label="IDEA CREADA" {...a11yProps(0)} />
                        <Tab label="IMPLEMENTAR" {...a11yProps(1)} disabled />
                        <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} />
                      </Tabs>
                    </Box>
                  ) : (
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs className={tabsNav} value={value} onChange={handleChange} variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                          [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0 },
                          },
                        }}>
                        <Tab label="IDEA CREADA" {...a11yProps(0)} />
                        <Tab label="IMPLEMENTAR" {...a11yProps(1)} disabled />
                        <Tab label="IDEA IMPLEMENTADA" {...a11yProps(2)} disabled />
                      </Tabs>
                    </Box>
                  )
                }
                {/* -------------------------Aqui termina Pestañas dependiendo en que estado se encuentre la idea ------------------------------------------------ */}

                {/*------------------------------------------------ Primera Pestaña ------------------------------------------------*/}
                <TabPanel className={tabNav} value={value} index={0}>
                  <p> DETALLES DEL TEIAN</p>
                  <hr />
                  <Row className={bodyDetalles}>
                    <Col xs={4} className={DetallesInfoGeneral}>
                      <div style={{ display: "flex" }}>
                        <div className={DetallesInfoCategorias}>
                          <div style={{ marginBottom: "30px" }}>
                            <h5 style={{fontSize:"23px"}}>Idea creada por:</h5><span className="badge rounded-pill" style={{ color: "#fff", background: "#016dbb", marginRight: "10px",fontSize:"13px" }}>{ideasDetalle.nombrE_USUARIO}</span>
                            <span className="badge rounded-pill" style={{ color: "#fff", background: "#016dbb",fontSize:"13px" }}>{ideasDetalle.departamento}</span>
                          </div>
                          <div className={textoIdea}>
                            <h5 style={{fontSize:"23px"}} >Descripción: </h5>
                            <p style={{fontSize:"20px"}} className="mb-0">{ideasDetalle.ideA_TEXTO}</p>
                          </div>
                          <Row className={tituloCategorias}>
                            <Col lg="2"><h5 style={{fontSize:"23px"}}>Categoría:</h5></Col>
                            <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd",fontSize:"13px"}}>{ideasDetalle.categoria.toUpperCase()}</span></Col>
                          </Row>
                          <Row className={tituloCategorias}>
                            <Col lg="2"><h5 style={{fontSize:"23px"}}>Coach:</h5></Col>
                            <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd",fontSize:"13px" }}>{ideasDetalle.coaches}</span></Col>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col xs={4} className={DetallesInfoGeneral} >
                      <div style={{ width: "100%", color: "#000", margin: "0 auto" }}>
                      <center><h5><FcMoneyTransfer size="30px" />Inversión estimada requerida:</h5></center>
                        <GaugeChart id="gauge-chart6"
                        fontSize='16px'
                          nrOfLevels={14}
                          colors={["#D1301B","#449E4B"]}
                          arcWidth={0.3}
                          percent={ideasDetalle.porcenT_INVERSION}
                          textColor={"#f5f5f5"}
                          needleBaseColor={"#464A4F"}
                          needleColor={"#D1301B"}
                          animate={true}
                          animDelay={500}
                          animateDuration={3000}
                          formatTextValue={value => ''}
                          arcWidth={0.2}
                        />
                        <center><h5>{ideasDetalle.inversion}</h5></center>
                        
                      </div>
                    </Col>
                    {/* --------------------------Imagenes y videos que suben los usuarios en un slider----------------------------------  */}
                    <Col xs={4} className={DetallesImageGeneral} >
                      <div style={{ display: "flex", flexDirection: "column" }} >
                        <ImagesDetallesTeian ideasDetalles={ideasDetalle} />
                        <VideosDetallesTeian ideasDetalles={ideasDetalle} />
                      </div>
                    </Col>
                    {/* --------------------------Aqui termina las Imagenes y videos que suben los usuarios en un slider----------------------------------  */}

                  </Row>
                </TabPanel>
                {/*------------------------------------------------Aqui termina Primera Pestaña ------------------------------------------------*/}

                {/*------------------------------------------------ Segunda Pestaña ------------------------------------------------*/}
                <TabPanel className={tabNav} value={value} index={1}>
                  <p>REGISTRO DE LA IMPLEMENTACIÓN</p>
                  <hr />
                  {/* -----------------------------------------Formulario de implementar idea ------------------------------------------------- */}
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
                          <div className={contEjemploImplementacion} >
                            <div className={ideaTeian}>
                              <label htmlFor="TEIAN">DESCRIPCIÓN DE LA IMPLEMENTACIÓN</label>
                              <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" placeholder="Escribe los detalles de la ejecución de la idea" />
                              <ErrorMessage name="mensajeTeian" component={() => (
                                <div className={errorMess}>{errors.mensajeTeian}</div>
                              )} />
                            </div>
                            <div className={ideaTeianEjemplo}>
                              <label htmlFor="TEIAN">EJEMPLO</label>
                              <Field className={txtAreaTeianEjemplo} disabled name="mensajeTeianEjemplo" as="textarea" placeholder={textoImplementacion} />
                            </div>
                          </div>
                          <input ref={inputRef} accept="image/*,video/*" type="file" name="files" multiple onChange={(e) => subirArchivos(e.target.files)} style={{ maxWidth: "100%" }} />
                          {openAlert &&
                            <Stack sx={{ marginTop: '20px', width: '100%' }} spacing={2}>
                              <Alert severity="error">
                                <strong>{errorMessage}</strong>
                              </Alert>
                            </Stack>
                          }
                          <button type="submit" className={buttonIdea}>Guardar Implementación</button>
                          {formularioEnviado && <div><p className={messageExito}>Formulario enviado con exito!</p></div>}
                        </Form>
                      )}
                    </Formik>
                  </Container>
                  {/* -----------------------------------------Aqui Formulario de implementar idea ------------------------------------------------- */}
                </TabPanel>
                {/*------------------------------------------------Aqui termina Segunda Pestaña ------------------------------------------------*/}


                {/*------------------------------------------------ Tercera Pestaña ------------------------------------------------*/}
                <TabPanel className={tabNav} value={value} index={2}>
                  <Row className={bodyDetalles}>
                    <p>RESULTADOS DEL TEIAN</p>
                    <hr />
                    <Col xs={6} className={DetallesInfoGeneral}>
                      <div style={{ marginBottom: "30px" }}>
                        <h5  style={{fontSize:"23px"}}>Idea implementada por:</h5><span className="badge rounded-pill" style={{ color: "#fff", background: "#016dbb", marginRight: "10px",fontSize:"13px" }}>{ideasDetalle.nombrE_USUARIO}</span>
                        <span className="badge rounded-pill" style={{ color: "#fff", background: "#016dbb",fontSize:"13px" }}>{ideasDetalle.departamento}</span>
                      </div>
                      <div className={textoIdea}>
                        <h5  style={{fontSize:"23px"}}>Descripción de la idea implementada:</h5>
                        <p style={{fontSize:"20px"}} className="mb-0">{ideasDetalle.comentario}</p>
                      </div>

                      <Row className={tituloCategorias}>
                        <Col lg="2"><h5  style={{fontSize:"23px"}}>Categoría:</h5></Col>
                        <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd", fontSize:"13px" }}>{ideasDetalle.categoria.toUpperCase()}</span></Col>
                      </Row>
                      <Row className={tituloCategorias}>
                        <Col lg="2"><h5  style={{fontSize:"23px"}}>Coach:</h5></Col>
                        <Col lg="11"><span className="badge rounded-pill" style={{ color: "#fff", background: "#0d6efd", fontSize:"13px" }}>{ideasDetalle.coaches}</span></Col>
                      </Row>

                    </Col>
                    <Col xs={4} className={DetallesImageGeneral} >
                      <div style={{ display: "flex", flexDirection: "column" }} >
                        <ImagesImpDetallesTeian ideasDetalles={ideasDetalle} />
                        <VideosImpDetallesTeian ideasDetalles={ideasDetalle} />
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
                {/*------------------------------------------------Aqui termina Tercera Pestaña ------------------------------------------------*/}

              </Box>
            </Container>
          )
      }
    </>
  );
}
export default DetallesTeian