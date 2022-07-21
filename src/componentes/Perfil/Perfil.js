import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import React, { useState, Suspense, useEffect  } from "react";
import styles from './Perfil.module.css'


const Perfil = () => {
    const [usuarios, setUsuarios] = useState([])
    const initialUrl = "http://10.30.2.167:4000/api/usuarios"

  const fetchIdeas = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsuarios(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchIdeas(initialUrl)
  }, [])



    const nameUsuario = window.localStorage.getItem('usuario')
    const cardPerfil = styles.cardPerfil
    return (
        <Suspense fallback={null}>
            <Container className={cardPerfil}>
                <Card className="text-center" style={{ borderRadius: "10px" }}>
                    <Card.Header style={{ backgroundColor: "#0d6efd", color: "#fff" }} >PERFIL</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Nombre: <p>{nameUsuario}</p>
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