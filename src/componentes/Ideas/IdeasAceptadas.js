import { Backdrop, Button} from '@mui/material';
import React, { useState} from 'react';
import { Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Modal from './Modal'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const IdeasAceptadas = ({ideas = []}) =>{
  const [imagen, setImagen] = useState(false)  
  const [tab, setTab] = useState(false)  

  const Implementada = () => {
    setTab(true)
  };


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

    return(
      <div style={{display:"flex", flexWrap:"wrap", margin:"20px",justifyContent:"center"}}>
        {
          ideas.map((item, index) =>(
            <div key={index} className="column" >
              <Card style={{ width: '20rem', margin:"25px", borderRadius:"10px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px"}}>
              <Link to={`/Teian/DetalleTeian/${item.name}`} style={{textDecoration:"none", color:"#000"}}  onClick={Cargando}>
              { imagen ?(
                  <Card.Img variant="top" src={notFound} />
                ) : (
                  <Card.Img variant="top" src={item.image} />
                )
                }
                </Link>
                <span class="badge rounded-pill bg-success text-white" style={{position:"absolute", margin:"10px"}}>{item.status}</span>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                   {item.gender}
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button variant="contained" style={{backgroundColor:'#445CF5'}} onClick={() => Implementada()}>Implementar</Button>
                    {/* <Button variant="contained" style={{backgroundColor:"#8A94AB"}} >Deshacer</Button> */}
                  </div>
                  <div style={{display:"flex", justifyContent:"end"}}>
                    {/* <label htmlFor="contained-button-file">
                      <input accept="image/*,video/*" id="contained-button-file" multiple type="file" style={{display:"none"}} />
                      <Button variant="contained" component="span" style={{marginTop:"10px", backgroundColor:"#fff", color:"#000", border:"1px solid"}}>
                         <AddPhotoAlternateIcon/> Subir
                      </Button>
                    </label> */}
                    <Tooltip title="Información">
                      <IconButton>
                        <Modal/>
                      </IconButton>
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
  export default IdeasAceptadas