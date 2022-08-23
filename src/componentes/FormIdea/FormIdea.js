import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styles from './FormIdea.module.css'
import { Outlet } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import 'typeface-quicksand';
import jwt from 'jwt-decode'
import gerberLogo from '../FormularioLogin/images/GerberLogo.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Stack from '@mui/material/Stack';
import { data } from 'autoprefixer';

import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const FormIdea = () => {
    // hooks
    const [categ, setCateg] = useState([])
    const [coaches, setCoaches] = useState([])
    const [areaSoporte, setAreaSoporte] = useState([])
    const [inversion, setInversion] = useState([])

    // Pedir los Areas
    const initialUrlSoporte = "http://10.30.2.167:4000/api/Areas"

    const fetchSoporte = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAreaSoporte(data)
            })
            // .catch(error => console.log(error))
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
            // .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCategorias(initialUrl)
    }, [])



    const handlerCargarCoach = async (e, valores) => {
        const id_user = window.localStorage.getItem('usuario')
        // console.log(e.target.value)
        const IdCategoria = e.target.value
        await axios.get(`http://10.30.2.167:4000/api/Coaches/Categoria_stu_coach?id=${IdCategoria}&id_user=${id_user}`).then(response => {
            setCoaches(response.data)
        })
        // .catch(error => {
        //     console.log(error)
        // })
    }
    // -------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------
    
     // Pedir las inversiones
     const initialUrlInversion = "http://10.30.2.167:4000/api/Deptos/Req_Inversion"

     const fetchInversiones = (url) => {
         fetch(url)
             .then(response => response.json())
             .then(data => {
                setInversion(data)
             })
            //  .catch(error => (console.logrror))
     }
 
     useEffect(() => {
        fetchInversiones(initialUrlInversion)
     }, [])
    // --------------------------------------------------------------------------------------------

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
    const imageLogo = styles.imageLogo
    const contTextIdeaInfo = styles.contTextIdeaInfo
    const contInfoIdea = styles.contInfoIdea
    const txtAreaTeianEjemplo = styles.txtAreaTeianEjemplo
    // Estilos RadioButton
    const radioButton = styles.radioButton
    const radioContainer = styles.radioContainer
    const labelRadio = styles.labelRadio

    //Obtener el nombre del usuario
    const sesion = window.localStorage.getItem('loggedIdeaAppUser')
    const sesionJson = JSON.parse(sesion)
    const token = sesionJson.token;
    const user2 = jwt(token);

    //Para subir multiples archivos
    const [archivos, setArchivos] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [successMessage, setSuccessMessage] = useState(null)
    const inputRef = useRef(null);
    const [openAlert, setOpenAlert] = React.useState(false);
    // Boton
    const [isDisabled, setIsDisabled] = useState(false);

    // Check para activar y desactivar el select
    const [visible, setVisible] = useState(false);

    //     const [currency, setCurrency] = useState('');

    //   const handleChange = (event) => {
    //     setCurrency(event.target.value);
    //   };


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
        var id_inverPrueba = 0
        if(valores.inver > 1){
            id_inverPrueba = valores.inver
        }else{
            id_inverPrueba = 1
        }
        
        await axios.post(`http://10.30.2.167:4000/api/Ideas?titulo=${valores.teian}` + `&id_user=${user2.nameid}` +
            `&id_coach=${valores.coach}` + `&idea_texto=${valores.mensajeTeian}` + `&id_categoria=${valores.categoria}` + `&id_soporte=${valores.soporte}` + `&id_inversion=${id_inverPrueba}`, f, { headers: { 'Content-Type': 'application/json' } }).then(response => {
                // console.log(valores)
                inputRef.current.value = null;
            }).catch(error => {
                // console.log(error)
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
    const textoAyudaCoach = "Tu idea se enviara al coach que selecciones"
    const textoAyudaAreaSoporte = "Tu idea se enviara al area de soporte que selecciones"
    const textoEjemploIdea = `¿Porqué? Los baches generan grietas en la taza
¿Cuánto? 2 Meses
¿Cómo? Buscar Proveedor de llantas, hacer un análisis de opciones y sellar baches en el camino del carrito 
¿Dónde? Vaciado`

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
                    inver:'',
                    mensajeTeian: '',
                    picked: false,
                    file: []
                }}
                // Validacion nombre
                validate={(valores) => {
                    let errores = {};
                    if (!valores.teian) {
                        errores.teian = 'Porfavor ingresa un nombre'
                    }
                    if (!valores.categoria) {
                        errores.categoria = 'Porfavor elije una categoría'
                    }
                    if (!valores.coach) {
                        errores.coach = 'Porfavor elija un coach'
                    }
                    if (!valores.mensajeTeian) {
                        errores.mensajeTeian = 'Porfavor escribe tu teian'
                    }
                    if (!valores.picked) {
                        errores.picked = 'Selecciona una opcion'
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
                            <label htmlFor="TEIAN">TÍTULO DEL TEIAN*</label>
                            <Field className={titleTeianInput} type="text" id="nombre" name="teian" placeholder="Aquí va el título de tu idea" maxLength="100" />
                            <ErrorMessage name="teian" component={() => (
                                <div className={errorMess}>{errors.teian}</div>
                            )} />
                        </div>
                        <div className={inputTeian}>
                            <Tooltip title={textoAyuda} placement="bottom-start">
                                <div style={{ display: "flex" }}>

                                    <Field as="select" name="categoria" className={selectOption} onClick={handlerCargarCoach}>
                                        <option value="">¿EN QUÉ AYUDARÁ TU TEIAN? (Selecciona a dónde impactará tu teian)*</option>
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
                            {/* <Tooltip title={textoAyuda} placement="bottom-start">
                                <div style={{ display: "flex" }}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="¿EN QUÉ AYUDARÁ TU TEIAN? (Selecciona a dónde impactará tu teian)*"
                                        name="categoria"
                                        // value={currency}
                                        // onChange={handleChange}
                                        onChange={handlerCargarCoach}
                                        // helperText="Please select your currency"
                                        style={{width:"100%"}}
                                    >
                                        {categ.map((item, i) => (
                                            <MenuItem key={i} value={item.iD_CATEGORIAS}>
                                                {item.categorias}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </Tooltip>
                            <ErrorMessage name="categoria" component={() => (
                                <div className={errorMess}>{errors.categoria}</div>
                            )} />  */}



                            <Tooltip title={textoAyudaCoach} placement="bottom-start">
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

                            <Tooltip title={textoAyudaAreaSoporte} placement="bottom-start">
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
                        <label>
                            ¿REQUIERE INVERSIÓN?
                        </label>
                        <div role="group" aria-labelledby="my-radio-group" className={radioContainer}>
                            <Field type="radio" name="picked" value="true" onClick={() => setVisible(true)} className={radioButton} />
                            <label className={labelRadio}>
                                Si
                            </label>
                            <Field type="radio" name="picked" value="false" onClick={() => setVisible(false)} className={radioButton} />
                            <label className={labelRadio}>
                                No
                            </label>
                        </div>
                        <ErrorMessage name="picked" component={() => (
                                <div className={errorMess}>{errors.picked}</div>
                            )} />
                        {visible &&
                            <Tooltip title="Monto aproximado que requiere tu idea" placement="bottom-start">
                                <div style={{ display: "flex" }}>
                                    <Field as="select" name="inver" className={selectOption}>
                                        <option value="">SELECCIONA EL MONTO APROXIMADO DE INVERSIÓN EN TU IDEA</option>
                                        {
                                            inversion.map((item, i) => (
                                                <option key={i} value={item.iD_INVERSION}>{item.textO_INVERSION}</option>
                                            ))
                                        }
                                    </Field>
                                </div>
                            </Tooltip>
                        }
                        <ErrorMessage name="inver" component={() => (
                                <div className={errorMess}>{errors.inver}</div>
                            )} />


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
                        <button type="submit" className={buttonIdea} disabled={isDisabled}>Enviar teian</button>
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