import { TextField } from "@mui/material";
import React, { useState } from "react"
import { Form, Button, Container } from "react-bootstrap";
import { loginUsuario } from "./UsuarioAction";


const LoginSecundario = () => {
    const [usuario, setUsuario] = useState({
        numeroTrabajador: '',
        password: ''
    })

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name]: value

        }))
    }

    const loginUsuarioBoton = e => {
        e.preventDefault();
        loginUsuario(usuario).then(response => {
            console.log('Login exitoso', response)
            window.localStorage.setItem('token_seguridad', response.data.token);
        })
    }

    return (
        <Container maxWidth="xs">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Numero del trabajador</Form.Label>
                    <Form.Control name="numeroTrabajador" value={usuario.numeroTrabajador} onChange={ingresarValoresMemoria} autoComplete="true" placeholder="Numero del trabajador" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" value={usuario.password} onChange={ingresarValoresMemoria} type="password" autoComplete="true" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={loginUsuarioBoton}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default LoginSecundario