import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Card} from 'react-bootstrap';
import React, {useState} from "react";
import styles from './Perfil.module.css'


const Perfil = () =>{
    
    const cardPerfil = styles.cardPerfil
    return(
        <Container className={cardPerfil}>
        <Card className="text-center" style={{borderRadius:"10px"}}>
            <Card.Header style={{backgroundColor:"#0d6efd", color:"#fff"}} >PERFIL</Card.Header>
            <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Text>
                Puesto: <p>Pedro</p>
                </Card.Text>
                <Card.Text>
                Área: <p>Mantenimiento</p>
                </Card.Text>
                <Card.Text>
                Correo: <p>Pedro@hotmail.com</p>
                </Card.Text>    
            </Card.Body>
            </Card>
</Container>
    );
}

  export default Perfil