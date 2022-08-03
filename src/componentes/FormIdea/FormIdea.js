import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styles from './FormIdea.module.css'
import { Outlet } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import Clock from 'react-live-clock';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import 'typeface-quicksand';
import jwt from 'jwt-decode'
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Avatares from '../Avatar/Avatares';
import { data } from 'autoprefixer';

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import Box from '@mui/material/Box';

const FormIdea = () => {
    //Hooks validacion de formulario
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [ideas, setIdeas] = useState([])
    const [info, setInfo] = useState({})
    const [archivosVacios, setArchivosVacios] = useState(false)


    // hooks
    const [categ, setCateg] = useState([])
    const [categorias, setCategorias] = useState(0)
    const [coaches, setCoaches] = useState([])
    const [areaSoporte, setAreaSoporte] = useState([])

    // Pedir los Areas
    const initialUrlSoporte = "http://10.30.2.167:4000/api/Areas"

    const fetchSoporte = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAreaSoporte(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchSoporte(initialUrlSoporte)
    }, [])
    // Aqui termina pedir los Areas

    // Pedir las categorias
    const initialUrl = "http://10.30.2.167:4000/api/categorias"

    const fetchCategorias = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCateg(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCategorias(initialUrl)
    }, [])



    const handlerCargarCoach = async (e, valores) => {
        const IdCategoria = e.target.value
        await axios.get(`http://10.30.2.167:4000/api/Coaches/CATEGORIA/${IdCategoria}`).then(response => {
            setCoaches(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    // -------------------------------------------------------------------

    // Estilos
    const contFormIdea = styles.contFormIdea
    const titleForm = styles.titleForm
    const selectOption = styles.selectOption
    const buttonIdea = styles.buttonIdea
    const titleTeian = styles.titleTeian
    const inputTeian = styles.inputTeian
    const ideaTeian = styles.ideaTeian
    const titleTeianInput = styles.titleTeianInput
    const txtAreaTeian = styles.txtAreaTeian
    const messageExito = styles.messageExito
    const errorMess = styles.errorMess
    const fileTeian = styles.fileTeian
    const imageLogo = styles.imageLogo
    const contTextIdeaInfo = styles.contTextIdeaInfo
    const contInfoIdea = styles.contInfoIdea
    const txtAreaTeianEjemplo = styles.txtAreaTeianEjemplo

    //Obtener el nombre del usuario
    const sesion = window.localStorage.getItem('loggedIdeaAppUser')
    const sesionJson = JSON.parse(sesion)
    const token = sesionJson.token;
    const user2 = jwt(token);

    //Para subir multiples archivos
    const [archivos, setArchivos] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [successMessage, setSuccessMessage] = useState(null)
    const inputRef = useRef(null);
    const [openAlert, setOpenAlert] = React.useState(false);
    // Boton
    const [isDisabled, setIsDisabled] = useState(false);


    // Subir Archivos e idea //
    const subirArchivos = e => {
        let sumaTamanio = 0
        for (let i = 0; i < e.length; i++) {
            sumaTamanio += e[i].size
        }
        if (sumaTamanio > 10000000) {
            setErrorMessage('El archivo supera los 10Mb.');
            setOpenAlert(true)
            setIsDisabled(true)
            setTimeout(() => {
                setErrorMessage(null)
                setOpenAlert(false)
                inputRef.current.value = null;
                setIsDisabled(false)
            }, 3500)

        } else {
            setArchivos(e)
        }
    }
    const insertarArchivos = async (valores) => {
        const f = new FormData()
        if (archivos != null) {
            for (let index = 0; index < archivos.length; index++) {
                f.append("archivito", archivos[index])
            }
        }
        await axios.post(`http://10.30.2.167:4000/api/Ideas?titulo=${valores.teian}` + `&id_user=${user2.nameid}` +
            `&id_coach=${valores.coach}` + `&idea_texto=${valores.mensajeTeian}` + `&id_categoria=${valores.categoria}`, f, { headers: { 'Content-Type': 'application/json' } }).then(response => {
                console.log(valores)
                inputRef.current.value = null;
            }).catch(error => {
                console.log(error)
            })

    }
    // Aqui termina subir archivos e ideas

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    })
    const [state, setState] = React.useState({
        open2: false,
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal, open2 } = state;

    const textoAyuda = "Tu idea se enviara a la categoría que selecciones"
    const textoEjemploIdea = `¿Porque? Los baches generan grietas en la taza
¿Cuanto? 2 Meses
¿Como? Buscar Proveedor de llantas, hace un análisis de opciones y sellar baches en el camino del carrito 
¿Donde? Vaciado`

    return (
        <Container className={contFormIdea}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={gerberLogo} className={imageLogo} alt='Gerber' />
            </div>
            <h1 className={titleForm}>CREAR TEIAN</h1>

            <Formik
                initialValues={{
                    teian: '',
                    categoria: '',
                    coach: '',
                    soporte: '',
                    mensajeTeian: '',
                    file: []
                }}
                // Validacion nombre
                validate={(valores) => {
                    let errores = {};
                    if (!valores.teian) {
                        errores.teian = 'Porfavor ingresa un nombre'
                    }
                    if (!valores.categoria) {
                        errores.categoria = 'Porfavor elije una CATEGORÍA'
                    }
                    if (!valores.coach) {
                        errores.coach = 'Porfavor elija un COACH'
                    }
                    if (!valores.mensajeTeian) {
                        errores.mensajeTeian = 'Porfavor escribe tu TEIAN'
                    }
                    if (!valores.file) {
                        errores.file = 'Porfavor suba un archivo'
                    }
                    return errores
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm()
                    insertarArchivos(valores)
                    setOpen(true);
                    setSuccessMessage("Su idea ha sido enviada")
                    setTimeout(() => {
                        setSuccessMessage(null)
                        setOpen(false)
                    }, 5000)
                }}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <div className={titleTeian}>
                            <label htmlFor="TEIAN">TITULO DEL TEIAN*</label>
                            <Field className={titleTeianInput} type="text" id="nombre" name="teian" placeholder="Aquí va el titulo de tu idea" maxLength="100" />
                            <ErrorMessage name="teian" component={() => (
                                <div className={errorMess}>{errors.teian}</div>
                            )} />
                        </div>
                        <div className={inputTeian}>
                            <Tooltip title={textoAyuda} placement="bottom-start">
                                <div style={{ display: "flex" }}>

                                    <Field as="select" name="categoria" className={selectOption} onClick={handlerCargarCoach}>
                                        <option value="">CATEGORÍA (Selecciona la categoría de tu idea)*</option>
                                        {
                                            categ.map((item, i) => (
                                                <option key={i} value={item.iD_CATEGORIAS}>{item.categorias}</option>
                                            ))
                                        }
                                    </Field>

                                </div>
                            </Tooltip>
                            <ErrorMessage name="categoria" component={() => (
                                <div className={errorMess}>{errors.categoria}</div>
                            )} />
                            <Tooltip title={textoAyuda} placement="bottom-start">
                                <div style={{ display: "flex" }}>
                                    <Field as="select" name="coach" className={selectOption}>
                                        <option value="">COACH (El coach es el guía para llevar tu idea de mejora)*</option>
                                        {
                                            coaches.map((item, i) => (
                                                <option key={i} value={item.iD_COACH}>{item.coach}</option>
                                            ))

                                        }

                                    </Field>
                                </div>
                            </Tooltip>
                            <ErrorMessage name="coach" component={() => (
                                <div className={errorMess}>{errors.coach}</div>
                            )} />

                            <Tooltip title={textoAyuda} placement="bottom-start">
                                <div style={{ display: "flex" }}>
                                    <Field as="select" name="soporte" className={selectOption}>
                                        <option value="">ÁREA DE SOPORTE (Opcional) (Selecciona el área que pueda apoyar tu idea)</option>
                                        {
                                            areaSoporte.map((item, i) => (
                                                <option key={i} value={item.iD_AREA_SOPORTE}>{item.areA_SOPORTE}</option>
                                            ))
                                        }
                                    </Field>
                                </div>
                            </Tooltip>
                        </div>
                        <div className={contTextIdeaInfo}>
                            <div className={ideaTeian}>
                                <label htmlFor="TEIAN">ESCRIBE TU TEIAN*</label>
                                <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" placeholder="Aquí escribe tu idea de mejora" />
                                <ErrorMessage name="mensajeTeian" component={() => (
                                    <div className={errorMess}>{errors.mensajeTeian}</div>
                                )} />
                            </div>
                            <div className={contInfoIdea} >
                                <label htmlFor="TEIAN">EJEMPLO</label>
                                <Field disabled className={txtAreaTeianEjemplo} name="mensajeEjemplo" as="textarea" placeholder={textoEjemploIdea} />

                            </div>
                        </div>
                        <div>
                            <input ref={inputRef} accept="image/*,video/*" type="file" name="files" multiple onChange={(e) => subirArchivos(e.target.files)} style={{ maxWidth: "100%" }} />
                            {openAlert &&
                                <Stack sx={{ marginTop: '20px', width: '100%' }} spacing={2}>
                                    <Alert severity="error">
                                        <strong>{errorMessage}</strong>
                                    </Alert>
                                </Stack>
                            }
                        </div>
                        <button type="submit" className={buttonIdea} disabled={isDisabled} >Enviar teian</button>
                        {open && <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000}>
                            <Alert severity="success" sx={{ width: '100%' }}>
                                {successMessage}
                            </Alert>
                        </Snackbar>}
                    </Form>
                )}
            </Formik>
            <Outlet />
        </Container >
    );
}

export default FormIdea