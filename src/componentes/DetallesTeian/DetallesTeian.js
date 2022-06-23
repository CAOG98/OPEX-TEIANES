import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesDetallesTeian from './ImagesDetallesTeian'
import { Col, Container, Row } from 'react-bootstrap';
import ContentTeianDetalles from './BannerTeianDetalles'
import styles from './DetallesTeian.module.css'
import ContentTeianDetallado from './ContentTeianDetallado'


const fondoDetalleIdea = styles.fondoDetalleIdea
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

export default function DetallesTeian() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{maxWidth:"100%", width:"100%"}} >
      <ContentTeianDetalles/>
    <Box sx={{ width: '100%'}} className={fondoDetalleIdea}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="IDEA CREADA" {...a11yProps(0)} />
          <Tab disabled label="IMPLEMENTADA" {...a11yProps(1)} />
          <Tab label="" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>DETALLES DEL TEIAN</p>
        <hr/>
        <Row>
          <Col xs={8}><ContentTeianDetallado/></Col>
          <Col xs={4}><ImagesDetallesTeian/></Col>
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