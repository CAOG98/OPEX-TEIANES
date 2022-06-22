import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const IdeasCanceladas = ({ideas = [], DeleteItems}) =>{

  const [imagen, setImagen] = useState(false)
  const [lista, setlista] = useState([]);
    return(
      <div style={{display:"flex", flexWrap:"wrap", margin:"20px", justifyContent:"center"}}>
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
                <span class="badge rounded-pill bg-danger" style={{position:"absolute", margin:"10px"}}>Cancelada</span>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                   {item.gender}
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button variant="secondary" style={{marginRight:"10px"}}>Deshacer</Button>
                    <Tooltip title="Borrar">
                      <IconButton onClick={() => DeleteItems(index)}>
                        <DeleteIcon />
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
  export default IdeasCanceladas