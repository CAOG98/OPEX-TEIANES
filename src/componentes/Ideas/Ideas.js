import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import { Button, Input} from '@mui/material';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

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
    return(
      
      <div style={{display:"flex", flexWrap:"wrap", margin:"20px", justifyContent:"center"}}>
        {
          ideas.map((item, index) =>(
            <div key={index} className="column" >
              <Card style={{ width: '20rem', margin:"25px", borderRadius:"10px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px"}}>
              <Link to={`/Teian/DetalleTeian/${item.name}`} style={{textDecoration:"none", color:"#000"}} onClick={Cargando}>
              { imagen ?(
                  <Card.Img variant="top" src={notFound} />
                ) : (
                  <Card.Img variant="top" src={item.image} />
                )
                }
                </Link>
                <span class="badge rounded-pill bg-secondary" style={{position:"absolute", margin:"10px"}}>{item.status}</span>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                   {item.gender}
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                  <Button variant="contained" style={{backgroundColor:'#20BA81'}} >Aceptar</Button>
                  <Button variant="contained" style={{backgroundColor:'#DB5F58'}}>Rechazar</Button>
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