import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import notFound from '../Ideas/ImagesIdeas/ImageNotFound.jpg'
import { Button, Input} from '@mui/material';

const Ideas = ({ideas = []}) =>{
  const [imagen, setImagen] = useState(false)
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
                <span class="badge rounded-pill bg-secondary" style={{position:"absolute", margin:"10px"}}>En progreso</span>
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