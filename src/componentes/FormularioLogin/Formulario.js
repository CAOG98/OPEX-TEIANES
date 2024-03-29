import React, { useEffect, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { Button, Form, Container } from "react-bootstrap";
import gerberLogo from './images/GerberLogo.png';
import hormiga from './images/hormiga.png';
import hormiga2 from './images/hormiga2.gif';
import ideaLogo from './images/idea.png';
import ideaPrendida from './images/ideaPrendida.png';
import styles from './FormularioLogin.module.css'
import { ModalFooter } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
// Login
import loginService from '../../Actions/login'
// JWT
import jwt from 'jwt-decode'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormIdea from "../FormIdea";
import TituloLogin from './images/TituloLogin.png'
import Tooltip from '@mui/material/Tooltip';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import IconButton from '@mui/material/IconButton';



const Formulario = () => {
    // LoginJWT
    // METODOS LOGIN
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [imagen, setImagen] = useState(false)
    //Notificación
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [nombreUsuario, setNombreUsuario] = useState(null)


    // Pregunta si existe una sesion
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedIdeaAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }

    }, [user])

    // Metodo para cerrar sesion
    const handleLogout = () => {
        setUser(null)
        // noteService.setToken(user.token)
        window.localStorage.removeItem('loggedIdeaAppUser')
    }


    // Metodo para iniciar sesion
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            // Llama a la clase loginService para saber si existe un usuario 
            const user = await loginService.login({
                username,
                password
            })
            window.localStorage.setItem(
                'loggedIdeaAppUser', JSON.stringify(user)
            )

            // noteService.setToken(user.token)
            const token = user.token;
            console.log(user)
            // Metodos para traer los datos del localStorage
            window.localStorage.setItem('nombre_empleado', user.nomnbre_empleado)
            window.localStorage.setItem('puesto', user.puesto)
            window.localStorage.setItem('depto', user.depto)
            window.localStorage.setItem('correo', user.correo)
            window.localStorage.setItem('nombre', user.nombre)
            window.localStorage.setItem('apellido', user.apellido)
            window.localStorage.setItem('rol', user.rol)


            //Metodo para traer el local sesion del local Storage
            window.localStorage.setItem('tokenSesion', token)


            const user2 = jwt(token); // decode your token here
            // console.log(user2)
            // console.log(user2.nameid)
            setNombreUsuario(user2.nameid)

            const user3 = user2.nameid
            window.localStorage.setItem('usuario', user3)


            setOpen(true);
            setSuccessMessage("Credenciales Correctas usuario: ")
            setImagen(prevState => !prevState);
            setTimeout(() => {
                setUser(user)
                setUsername('')
                setPassword('')
                setSuccessMessage(null)
                setOpen(false)
            }, 1200)

        } catch (e) {
            // Errores si los datos estan incorrectos
            setErrorMessage('Contraseña o usuario Incorrectos')
            setOpenError(true)
            setTimeout(() => {
                setErrorMessage(null)
                setOpenError(false)
            }, 5000)
        }
    }
    // Hook
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

    // Clases de los estilos de Login
    const clases = styles.login
    const footer = styles.footer
    const txtFooter = styles.txtFooter
    const titleCard = styles.titleCard
    const imageTitle = styles.imageTitle
    const imageFootCard = styles.imageFootCard
    const footCard = styles.footCard

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
    const imagenHormiga = styles.imagenHormiga
    const titlesFormLogin = styles.titlesFormLogin
    const formularioLoginCampos = styles.formularioLoginCampos
    const imgTituloLogin = styles.imgTituloLogin

    // Funcion para el ojo (ver la contraseña)
    const [eye, setEye] = useState(false)
    const toggleBtn = () => {
        setEye(prevState => !prevState);
    }


    // Funcion que regresa el formulario
    const RenderFormularioInicioSesion = () => {
        const Alert = React.forwardRef(function Alert(props, ref) {
            return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
        });
        const [state, setState] = React.useState({
            open2: false,
            vertical: 'top',
            horizontal: 'right',
        });

        const { vertical, horizontal, open2 } = state;

        const helpPassword = ``

        return (
            <div className={bodyLogin}>
                <Container className={clases}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "end" }} >
                        <img className={imageTitle} src={imagen ? ideaPrendida : ideaLogo} alt='Teian'></img>
                        <img src={hormiga} className={imagenHormiga} />
                    </div>
                    <div className={titlesFormLogin}>
                        <h1 className={titleCard}>TEIANES</h1>
                        <h5 className={titleCard}>(IDEAS DE MEJORA)</h5>
                        {/* <img src={TituloLogin} className={imgTituloLogin} /> */}
                    </div>
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
                            // console.log(valores);
                            cambiarFormularioEnviado(true)
                            setTimeout(() => cambiarFormularioEnviado(false), 500)
                        }}
                    >
                        {({ errors }) => (
                            <Form onSubmit={handleLogin} className={formularioLoginCampos} >
                                <div className={contFormInput}>
                                    <label className={titleInput} htmlFor="Numero del trabajador">Numero del Trabajador</label>
                                    <Form.Control className={inputForm} type="text" id="numeroTrabajador" name="numeroTrabajador" placeholder="Escribe el Numero del Trabajador" autoComplete="off" onChange={({ target }) => setUsername(target.value)} />
                                    <ErrorMessage name="numeroTrabajador" component={() => (
                                        <div className={errorMess}>{errors.numeroTrabajador}</div>
                                    )} />
                                </div>
                                <div className={contFormInput} >
                                    <div style={{display:"flex"}}>
                                        <label htmlFor="Contraseña">Contraseña</label>
                                        <div style={{marginTop:"-10px"}}>
                                            <Tooltip title="Nota: Tu contraseña es la primera letra de tu nombre,
                                    la primera letra de tu apellido paterno, la primera letra de tu apeliido materno y el numero 2022">
                                                <IconButton>
                                                    <LockOpenIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className={passwordField}>
                                        <Form.Control className={inputFormPassword} type={eye ? "text" : "password"} id="password" name="contraseña" placeholder="Colocar la contraseña" autoComplete="off" onChange={({ target }) => setPassword(target.value)} />
                                        <Button className={btnHidePassword} onClick={toggleBtn}>{eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</Button>
                                    </div>

                                    <ErrorMessage name="contraseña" component={() => (
                                        <div className={errorMess}>{errors.contraseña}</div>
                                    )} />
                                </div>
                                <p style={{ color: "red" }} >{errorMessage}</p>
                                <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={openError} autoHideDuration={6000}>
                                    <Alert severity="error" sx={{ width: '100%' }}>
                                        {errorMessage}
                                    </Alert>
                                </Snackbar>

                                <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000}  >
                                    <Alert severity="success" sx={{ width: '100%' }}>
                                        {successMessage} {nombreUsuario}
                                    </Alert>
                                </Snackbar>


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
                <footer className={footer}>
                    <ModalFooter>
                        <Marquee className={txtFooter} direction='right' pauseOnClick={true} speed='50' delay={1} gradient={false} gradientColor={0, 0, 0}>Soy parte de la mejora y en mi esta la solución </Marquee>
                    </ModalFooter>
                </footer>

                <Outlet />
            </div>
        )
    }
    // Aqui termina la funcion que regresa el formulario


    // Regresa con una condicion si el usuario tiene sesion lo redirigira a la pestaña de crear la idea y si no lo dejara en la misma pantalla de login
    //const rutaServidor="/teianes" //Produccion
    const rutaServidor = "" //Pruebas
    const nav = useNavigate()
    return (
        <>
            {
                user
                    ? window.location.reload(nav("/Teian/CrearIdea"))

                    : RenderFormularioInicioSesion()
            }
        </>
    );
}

export default Formulario