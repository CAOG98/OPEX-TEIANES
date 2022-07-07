import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Button, Form, Container, Alert } from "react-bootstrap";
import gerberLogo from './images/GerberLogo.png';
import ideaLogo from './images/idea.png';
import ideaPrendida from './images/ideaPrendida.png';
import styles from './FormularioLogin.module.css'
import { ModalFooter } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Outlet, Navigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import Notificacion from './Notificacion'
// Login
import loginService from '../../Actions/login'
// JWT
import jwt from 'jwt-decode'
import FormIdea from "../FormIdea";


const Formulario = () => {
    // LoginJWT
    // METODOS LOGIN
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedIdeaAppUser')
        console.log(loggedUserJSON)
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
            setErrorMessage('Contraseña o usuario Incorrectos')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    // Hook
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    const clases = styles.login
    const footer = styles.footer
    const txtFooter = styles.txtFooter
    const titleCard = styles.titleCard
    const imageTitle = styles.imageTitle
    const imageFootCard = styles.imageFootCard
    const footCard = styles.footCard
    const button = styles.buttonLogin
    const bodyLogin = styles.bodyLogin
    const inputForm = styles.inputForm
    const messageExito = styles.messageExito
    const errorMess = styles.errorMess
    const contFormInput = styles.contFormInput
    const titleInput = styles.titleInput
    const buttonLogin = styles.buttonLogin
    const btnHidePassword = styles.btnHidePassword
    const passwordField = styles.passwordField
    const inputFormPassword = styles.inputFormPassword

    const [eye, setEye] = useState(false)

    const toggleBtn = () => {
        setEye(prevState => !prevState);
    }



    const RenderFormularioInicioSesion = () => {
        const [imagen, setImagen] = useState(false)
        return (
            <div className={bodyLogin}>
                <Container className={clases}>
                    <img className={imageTitle} src={imagen ? ideaPrendida : ideaLogo} alt='Teian'></img>
                    <h1 className={titleCard}>TEIANES</h1>
                    <h5 className={titleCard}>(IDEAS DE MEJORA)</h5>
                    <Formik
                        initialValues={{
                            numeroTrabajador: '',
                            contraseña: ''
                        }}
                        Validacion nombre
                        validate={(valores) => {
                            let errores = {};
                            if (!valores.numeroTrabajador) {
                                errores.numeroTrabajador = 'Porfavor ingresa el numero de trabajador'
                            } else if (!/^[0-9]{1,40}$/.test(valores.numeroTrabajador)) {
                                errores.numeroTrabajador = 'El numero del trabajador solo puede contener numeros'
                            }
                            if (!valores.contraseña) {
                                errores.contraseña = 'Porfavor ingresa una contraseña valida'
                            } else if (!/^[a-zA-Z0-9]+$/.test(valores.contraseña)) {
                                errores.contraseña = 'La contraseña solo puede contener letras y numeros'
                            }
                            return errores
                        }}
                        // EN la funcion onSubmit podemos tomar los datos y enviarlos a una api o una base de datos
                        onSubmit={(valores, { resetForm }) => {
                            resetForm()
                            console.log(valores);
                            cambiarFormularioEnviado(true)
                            setTimeout(() => cambiarFormularioEnviado(false), 500)
                        }}
                    >
                        {({ errors }) => (
                            <Form onSubmit={handleLogin}>
                                <div className={contFormInput}>
                                    <label className={titleInput} htmlFor="Numero del trabajador">Numero del Trabajador</label>
                                    <Form.Control className={inputForm} type="text" id="numeroTrabajador" name="numeroTrabajador" placeholder="Escribe el Numero del Trabajador" autoComplete="off" onChange={({ target }) => setUsername(target.value)} />
                                    <ErrorMessage name="numeroTrabajador" component={() => (
                                        <div className={errorMess}>{errors.numeroTrabajador}</div>
                                    )} />
                                </div>
                                <div className={contFormInput}>
                                    <label htmlFor="Contraseña">Contraseña</label>
                                    <div className={passwordField}>
                                        <Form.Control className={inputFormPassword} type={eye ? "text" : "password"} id="password" name="contraseña" placeholder="Colocar la contraseña" autoComplete="off" onChange={({ target }) => setPassword(target.value)} />
                                        <Button className={btnHidePassword} onClick={toggleBtn}>{eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</Button>
                                    </div>
                                    <ErrorMessage name="contraseña" component={() => (
                                        <div className={errorMess}>{errors.contraseña}</div>
                                    )} />
                                </div>
                                <p style={{color:"red"}} >{errorMessage}</p>
                                <button type="submit" className={buttonLogin}>Iniciar Sesión</button>
                                {formularioEnviado && <p className={messageExito}>Formulario enviado con exito!</p>}
                                <div className={footCard}>
                                    <img className={imageFootCard} src={gerberLogo} alt='gerber' />
                                </div>
                                <div className={footCard}>
                                    <span>DESIGN BY OPEX</span>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </Container>
                <ModalFooter className={footer}>
                    <Marquee className={txtFooter} direction='right'>Soy parte de la mejora y en mi esta la solución</Marquee>
                </ModalFooter>
                <Outlet />
            </div>
        )
    }




    return (
        <>
            {
                user
                    ? <FormIdea/>
                    : RenderFormularioInicioSesion()
            }
        </>
    );
}

export default Formulario