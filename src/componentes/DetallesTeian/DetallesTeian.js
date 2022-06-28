import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesDetallesTeian from './ImagesDetallesTeian'
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import BannerTeianDetalles from './BannerTeianDetalles'
import styles from './DetallesTeian.module.css'

// Estilos
const fondoDetalleIdea = styles.fondoDetalleIdea
const DetallesInfoCategorias = styles.DetallesInfoCategorias
const tituloCategorias = styles.tituloCategorias
const DetallesInfoGeneral = styles.DetallesInfoGeneral
const bodyDetalles = styles.bodyDetalles
const DetallesImageGeneral = styles.DetallesImageGeneral

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
  const [value, setValue] = useState(0);
  const [ideas, setIdeas] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{maxWidth:"100%", width:"100%"}} >
      <BannerTeianDetalles/>
    <Box sx={{ width: '100%'}} className={fondoDetalleIdea}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="IDEA CREADA" {...a11yProps(0)} />
          <Tab label="IMPLEMENTADA" {...a11yProps(1)} />
          <Tab label="Hola" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p> DETALLES DEL TEIAN</p>
        <hr/>
        <Row className={bodyDetalles}>
          <Col xs={6} className={DetallesInfoGeneral}>
            <p class="mb-0">Trabajadores que conocen a profundidad los problemas de la operación y sus probables soluciones, no conocen la metodología de ideas de mejora.
            Crear un kiosko con una cuenta de Rever siempre abierta donde la persona capture su idea con asistencia de personal administrativo de RH / OPEX.
          Incrementar exponencialmente el número de ideas de mejora en el sistema.</p>
            <Container className={DetallesInfoCategorias}>
                <Row className={tituloCategorias}>
                  <Col lg="2"><h5>Categorias:</h5></Col>
                  <Col lg="11"><span className="badge rounded-pill" style={{ color:"#000", background:"#D0D0D0"}}>Mejora Continua</span></Col>
                </Row>
                <Row className={tituloCategorias}>
                  <Col lg="2"><h5>Coach:</h5></Col>
                  <Col lg="11"><span className="badge rounded-pill" style={{ color:"#000", background:"#D0D0D0"}}>Christian Valenzuela</span></Col>
                </Row>
              </Container>
          </Col>
          <Col xs={4}className={DetallesImageGeneral} >
            <ImagesDetallesTeian/>
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        DO
      </TabPanel>
      <TabPanel value={value} index={2}>
        CHECK
      </TabPanel>
    </Box>
    </Container>
  );
}
export default DetallesTeian