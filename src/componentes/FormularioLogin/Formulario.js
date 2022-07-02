import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Container } from "react-bootstrap";
import gerberLogo from './images/GerberLogo.png';
import ideaLogo from './images/idea.png';
import ideaPrendida from './images/ideaPrendida.png';
import styles from './FormularioLogin.module.css'
import { ModalFooter } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { loginUsuario } from "../../Actions/UsuarioAction";


const Formulario = () => {
    // METODOS LOGIN
    const [usuario, setUsuario] = useState({
        numeroTrabajador: '',
        contraseña: ''
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
        setImagen(prevState => !prevState)
    }
    // METODOS LOGIN END

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
                    // Validacion nombre
                    // validate={(valores) => {
                    //     let errores = {};
                    //     if (!valores.numeroTrabajador) {
                    //         errores.numeroTrabajador = 'Porfavor ingresa el numero de trabajador'
                    //     } else if (!/^[0-9]{1,40}$/.test(valores.numeroTrabajador)) {
                    //         errores.numeroTrabajador = 'El numero del trabajador solo puede contener numeros'
                    //     }
                    //     if (!valores.contraseña) {
                    //         errores.contraseña = 'Porfavor ingresa una contraseña valida'
                    //     } else if (!/^[a-zA-Z0-9]+$/.test(valores.contraseña)) {
                    //         errores.contraseña = 'La contraseña solo puede contener letras y numeros'
                    //     }
                    //     return errores
                    // }}
                    // EN la funcion onSubmit podemos tomar los datos y enviarlos a una api o una base de datos
                    onSubmit={(valores, { resetForm }) => {
                        resetForm()
                        console.log(valores);
                        cambiarFormularioEnviado(true)
                        setTimeout(() => cambiarFormularioEnviado(false), 500)
                    }}
                >
                    {({ errors }) => (
                        <Form>
                            <div className={contFormInput}>
                                <label className={titleInput} htmlFor="Numero del trabajador">Numero del Trabajador</label>
                                <Field className={inputForm}  type="text" id="numeroTrabajador" name="numeroTrabajador" placeholder="Escribe el Numero del Trabajador" autoComplete="off" />
                                <ErrorMessage name="numeroTrabajador" component={() => (
                                    <div className={errorMess}>{errors.numeroTrabajador}</div>
                                )} />
                            </div>
                            <div className={contFormInput}>
                                <label htmlFor="Contraseña">Contraseña</label>
                                <div className={passwordField}>
                                    <Field className={inputFormPassword} type={eye ? "text" : "password"} id="password" name="contraseña" placeholder="Colocar la contraseña" autoComplete="off" value={usuario.contraseña} onChange={ingresarValoresMemoria}/>
                                    <Button className={btnHidePassword} onClick={toggleBtn}>{eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</Button>
                                </div>
                                <ErrorMessage name="contraseña" component={() => (
                                    <div className={errorMess}>{errors.contraseña}</div>
                                )} />
                            </div>
                            <button className={buttonLogin} type="submit" onClick={loginUsuarioBoton}>Iniciar Sesión</button>
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

    );
}

export default Formulario