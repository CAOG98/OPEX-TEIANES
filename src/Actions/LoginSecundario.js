import React, { useEffect, useState } from "react"
import { Form, Button, Container } from "react-bootstrap";
import loginService from './login'
import FormIdea from "../componentes/FormIdea";
import jwt from 'jwt-decode'
import styles from './LoginSecundario.module.css'


const LoginSecundario = () => {
    // METODOS LOGIN
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedIdeaAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)

        }
    }, [])

    const handleLogout = () => {
        setUser(null)
        // noteService.setToken(user.token)
        window.localStorage.removeItem('loggedIdeaAppUser')
    }


    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedIdeaAppUser', JSON.stringify(user)
            )

            // noteService.setToken(user.token)

            console.log(user)
            const token = user.token;
            const user2 = jwt(token); // decode your token here
            console.log(user2)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (e) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
                alert('Contraseña o Usuario incorrecto')
            }, 5000)
        }
    }

    const renderLoginForm = () => {
        const LoginCont = styles.LoginCont

        return (
            <Container className={LoginCont} >
                <p message={errorMessage} />
                <Form onSubmit={handleLogin} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Numero del trabajador</Form.Label>
                        <Form.Control name="numeroTrabajador" autoComplete="true" placeholder="Numero del trabajador" onChange={({ target }) => setUsername(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control name="password" type="password" autoComplete="true" placeholder="Contraseña" onChange={({ target }) => setPassword(target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
    const renderNewPage = () => {
        return (
            <Container maxWidth="xs">
                <h1>Hola has iniciado sesion</h1>
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </Container>
        )
    }
    return (
        <>
            {
                user
                    ? <FormIdea />
                    : renderLoginForm()
            }
        </>
    )
}

export default LoginSecundario