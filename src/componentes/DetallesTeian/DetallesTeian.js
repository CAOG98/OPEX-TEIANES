import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesDetallesTeian from './ImagesDetallesTeian'
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import BannerTeianDetalles from './BannerTeianDetalles'
import styles from './DetallesTeian.module.css'
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Preview from './Preview';
import axios from 'axios'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

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

const DetallesTeian = ({ ideas }) => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
  const [value, setValue] = useState(0);

  // ESTOS METODOS SIRVEN PARA SUBIR ARCHIVOS EN CASO DE QUE NO FUNCIONE EL NUEVO
  // Para subir multiples archivos
  // const [archivos, setArchivos] = useState(null)
  // const subirArchivos = e => {
  //   setArchivos(e)
  // }
  // const insertarArchivos = async () => {
  //   const f = new FormData()

  //   for (let index = 0; index < archivos.length; index++) {
  //     f.append("files", archivos[index])
  //   }
  //   await axios.post("https://rickandmortyapi.com/api/character", f).then(response => {
  //     console.log(response.data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }


  // DROPFILES SIRVE PARA SUBIR ARCHIVOS
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
  // DROPFILES END AQUI TERMINA EL CODIGO DE DROPFILES

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { name } = useParams()
  return (
    <Container style={{ maxWidth: "100%", width: "100%" }} >
      <BannerTeianDetalles ideas={ideas} />
      <Box sx={{ width: '100%' }} className={fondoDetalleIdea}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="IDEA CREADA" {...a11yProps(0)} />
            <Tab label="IMPLEMENTADA" {...a11yProps(1)} />
            {/* <Tab label="Hola" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <p> DETALLES DEL TEIAN</p>
          <hr />
          <Row className={bodyDetalles}>
            {ideas.filter(item => item.name === name).map((item, index) => (
              <Col xs={6} className={DetallesInfoGeneral}>
                <p class="mb-0">{item.status}</p>
                <Container className={DetallesInfoCategorias}>
                  <Row className={tituloCategorias}>
                    <Col lg="2"><h5>Categorias:</h5></Col>
                    <Col lg="11"><span className="badge rounded-pill" style={{ color: "#000", background: "#D0D0D0" }}>{item.name}</span></Col>
                  </Row>
                  <Row className={tituloCategorias}>
                    <Col lg="2"><h5>Coach:</h5></Col>
                    <Col lg="11"><span className="badge rounded-pill" style={{ color: "#000", background: "#D0D0D0" }}>{item.name}</span></Col>
                  </Row>
                </Container>
              </Col>
            ))}
            <Col xs={4} className={DetallesImageGeneral} >
              <ImagesDetallesTeian ideas={ideas} />
            </Col>
          </Row>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>TEIAN IMPLEMENTADO</p>
          <hr />
          <Row className={bodyDetalles}>
            <Col xs={6} className={DetallesInfoGeneral}>

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
                  // insertarArchivos()
                  console.log(valores);
                  cambiarFormularioEnviado(true)
                  setTimeout(() => cambiarFormularioEnviado(false), 5000)
                }}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    {/* <Field accept="image/jpeg,image/png,image/jpe,video/mp4, video/AVI, video/WMV" type="file" name="files" multiple onChange={(e) => subirArchivos(e.target.files)} /> */}
                    <Container className={bodyFiles}>
                      <Dropzone
                        inputContent="Arrastra tus archivos o has click para buscar"
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        onSubmit={handleSubmit}
                        accept="image/*,video/*"
                        maxFiles="6"
                        minSizeBytes="0"
                        classNames={dropzone}
                      />
                    </Container>
                    <div className={ideaTeian}>
                      <label htmlFor="TEIAN">DESCRIPCIÓN IDEA DE MEJOR IMPLEMENTADA*</label>
                      <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" placeholder="Aquí escribe tu idea de mejora" />
                      <ErrorMessage name="mensajeTeian" component={() => (
                        <div className={errorMess}>{errors.mensajeTeian}</div>
                      )} />
                    </div>
                      <button type="submit" className={buttonIdea}>Enviar teian</button>
                      {formularioEnviado && <div><p className={messageExito}>Formulario enviado con exito!</p></div>}
                  </Form>
                )}
              </Formik>
            </Col>
            <Col xs={4} className={DetallesImageGeneral} >
              <ImagesDetallesTeian ideas={ideas} />
            </Col>
          </Row>
        </TabPanel>
        <TabPanel value={value} index={2}>
          CHECK
        </TabPanel>
      </Box>
    </Container>
  );
}
export default DetallesTeian