import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import React, { useState, Suspense  } from "react";
import styles from './Perfil.module.css'


const Perfil = () => {

    const cardPerfil = styles.cardPerfil
    return (
        <Suspense fallback={null}>
            <Container className={cardPerfil}>
                <Card className="text-center" style={{ borderRadius: "10px" }}>
                    <Card.Header style={{ backgroundColor: "#0d6efd", color: "#fff" }} >PERFIL</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Nombre: <p>PEPE</p>
                        </Card.Text>
                        <Card.Text>
                            Puesto: <p>Gerente General</p>
                        </Card.Text>
                        <Card.Text>
                            Área: <p>INGENIERIA</p>
                        </Card.Text>
                        <Card.Text>
                            Correo: <p>Pedro@hotmail.com</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Suspense>
    );
}

export default Perfil