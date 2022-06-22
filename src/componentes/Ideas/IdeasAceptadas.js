import { Backdrop, Button, Input} from '@mui/material';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Modal from './Modal'
import Cargando from './Cargando'

const IdeasAceptadas = ({ideas = []}) =>{
  const [imagen, setImagen] = useState(false)  
    return(
      <div style={{display:"flex", flexWrap:"wrap", margin:"20px",justifyContent:"center"}}>
        {
          ideas.map((item, index) =>(
            <div key={index} className="column" >
              <Card style={{ width: '20rem', margin:"25px", borderRadius:"10px", boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px"}}>
              { imagen ?(
                  <Card.Img variant="top" src={notFound} />
                ) : (
                  <Card.Img variant="top" src={item.image} />
                )
                }
                <span class="badge rounded-pill bg-success text-white" style={{position:"absolute", margin:"10px"}}>Aceptada</span>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                   {item.gender}
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button variant="contained" color="success">Implementar</Button>
                    <Button variant="contained" style={{backgroundColor:"gray"}} >Deshacer</Button>
                  </div>
                  <div style={{display:"flex", justifyContent:"space-between", marginTop:"50px"}}>
                    <label htmlFor="contained-button-file">
                      <input accept="image/*,video/*" id="contained-button-file" multiple type="file" style={{display:"none"}} />
                      <Button variant="contained" component="span" style={{marginTop:"10px"}}>
                        Subir
                        <AddPhotoAlternateIcon/>
                      </Button>
                    </label>
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