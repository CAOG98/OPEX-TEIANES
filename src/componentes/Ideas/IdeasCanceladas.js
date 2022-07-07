import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ModalEliminar from './ModalEliminar'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import formatDate from './formatFecha';


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


const IdeasCanceladas = ({ideas = [], DeleteItems}) =>{

  const [imagen, setImagen] = useState(false)
  const [lista, setlista] = useState([]);



    return(
      <div style={{display:"flex", flexWrap:"wrap", margin:"20px", justifyContent:"center"}}>
        {
          ideas.map((item, index) =>(
            <div key={index} className="column" >
              <Card style={{ width: '20rem', margin:"25px", borderRadius:"10px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px"}}>
              <Link to={`/Teian/DetalleTeian/${item.titulO_IDEA}`} style={{textDecoration:"none", color:"#000"}} onClick={Cargando}>
              { item.archivos.length === 0 ?(
                  <Card.Img variant="top" src={notFound} />
                ) : (
                  <Card.Img variant="top" src={item.archivos} />
                )
                }
                </Link>
                <span class="badge rounded-pill bg-danger" style={{position:"absolute", margin:"10px"}}>{item.iD_ESTATUS}</span>
                <Card.Body>
                  <Card.Title>{item.titulO_IDEA}</Card.Title>
                  <Card.Text>
                  {
                    formatDate(item.fechA_CREACION_IDEA)
                  }
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button variant="secondary" style={{marginRight:"10px"}}>Deshacer</Button>
                    <Tooltip title="Borrar">        
                        <ModalEliminar />
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
  export default IdeasCanceladas