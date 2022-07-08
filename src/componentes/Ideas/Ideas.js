import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import { Button, Input} from '@mui/material';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import formatDate from './formatFecha';

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

const Ideas = ({ideas = []}) =>{
  const [imagen, setImagen] = useState(false)


  // CAMBIAR DE ESTADO LA IDEA ACEPTADA CUANDO ESTA EN PROGRESO 
  const cambiarEstadoAceptadas = (idIdea) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
  };
  fetch(`http://10.30.2.167:4000/api/Ideas/Rechazar/${idIdea}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }

  // CAMBIAR DE ESTADO LA IDEA A REACHAZA CUANDO ESTA EN PROGRESO
  const cambiarEstadoReachazadas = (idIdea) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
  };
  fetch(`http://10.30.2.167:4000/api/Ideas/Aceptar/${idIdea}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }
    return(
      
      <div style={{display:"flex", flexWrap:"wrap", margin:"20px", justifyContent:"center"}}>
        {
          ideas.map((item, index) =>(
            <div key={index} className="column" >
              <Card style={{ width: '20rem', margin:"25px", borderRadius:"10px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px"}}>
              <Link to={`/Teian/DetalleTeian/${item.titulO_IDEA}`} style={{textDecoration:"none", color:"#000"}} onClick={Cargando}>
              <div style={{height:"250px", overflow:"hidden"}}>
              { item.archivos.length === 0 ?(
                  <Card.Img variant="top" src={notFound} />
                ) : (
                  item.archivos.map((item2, index) => (
                   index === 0 ?(
                     <Card.Img variant="top" src={UrlServer + item2.urL_MULTIMEDIA}  />
                   ):(
                    <></>
                   )
                  )))
                }
                </div>
                </Link>
                <span className="badge rounded-pill bg-secondary" style={{position:"absolute", margin:"10px"}}>{item.estatus}</span>
                <Card.Body>
                  <Card.Title>{item.titulO_IDEA}</Card.Title>
                  <Card.Text>
                  {
                    formatDate(item.fechA_CREACION_IDEA)
                  }
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                  <Button variant="contained" type="submit" style={{backgroundColor:'#20BA81'}} onClick={() => cambiarEstadoAceptadas (item.iD_IDEA)} >Aceptar</Button>
                  <Button variant="contained" style={{backgroundColor:'#DB5F58'}} onClick={() => cambiarEstadoReachazadas(item.iD_IDEA)}>Rechazar</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        }
        
      </div>
    )
  }
  export default Ideas