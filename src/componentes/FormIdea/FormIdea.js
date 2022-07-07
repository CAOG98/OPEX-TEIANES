import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styles from './FormIdea.module.css'
import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import 'typeface-quicksand';
import jwt from 'jwt-decode'

const categ = [
    {
        "nombre": "Mejora Continua",
        "categoria": ["Christian", "Benajmin", "Chuy"]
    },
    {
        "nombre": "5s",
        "categoria": ["Melissa", "Alex", "Pedro"]
    }
]


console.log(categ)

const FormIdea = () => {
    //Hooks validacion de formulario
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [categorias, setCategorias] = useState(-1)
    const [ideas, setIdeas] = useState([])
    const [info, setInfo] = useState({})


    const handlerCargarCoach = function (e) {
        const opcion = e.target.value
        setCategorias(opcion)
    }


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



    const sesion = window.localStorage.getItem('loggedIdeaAppUser')
    console.log(sesion)
    const sesionJson = JSON.parse(sesion)
    const token = sesionJson.token;
    const user2 = jwt(token);
    console.log(user2)

      //Para subir multiples archivos
  const [archivos, setArchivos] = useState(null)


  const subirArchivos = e => {
    setArchivos(e)
  }

  
  const insertarArchivos = async (valores) => {
    const f = new FormData()
    console.log(f)
    for (let index = 0; index < archivos.length; index++) {
      f.append("archivito", archivos[index])
      console.log(f)
    }
    await axios.post(`http://10.30.2.167:4000/api/Ideas?titulo=${valores.teian}` + `&id_user=${user2.nameid}` + 
         `&id_coach=${2}` + `&idea_texto=${valores.mensajeTeian}` + `&id_categoria=${1}`, f, {headers: { 'Content-Type': 'application/json' }}).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
    // const PostIdea = (valores) => {
    //     console.log(valores);
    //     var a = valores.file
    //     console.log(a)
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: a
    //     };
    //     fetch(`http://10.30.2.167:4000/api/Ideas?titulo=${valores.teian}` + `&id_user=${user2.nameid}` + 
    //     `&id_coach=${2}` + `&idea_texto=${valores.mensajeTeian}` + `&id_categoria=${1}`, requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.setState({ postId: data.id }));
    // }
    //ESTOS METODOS SIRVEN PARA SUBIR ARCHIVOS EN CASO DE QUE NO FUNCIONE EL NUEVO

    return (
        <Container className={contFormIdea}>
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
                    // PostIdea(valores)
                    insertarArchivos(valores)
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false), 5000)
                }}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <div className={titleTeian}>
                            <label htmlFor="TEIAN">TITULO DEL TEIAN*</label>
                            <Field className={titleTeianInput} type="text" id="nombre" name="teian" placeholder="Aquí va el titulo de tu idea" maxLength="109" />
                            <ErrorMessage name="teian" component={() => (
                                <div className={errorMess}>{errors.teian}</div>
                            )} />
                        </div>
                        <div className={inputTeian}>

                            <Field as="select" name="categoria" className={selectOption} onClick={handlerCargarCoach}>
                                <option value={-1}>CATEGORÍA (Selecciona la categoría de tu idea)*</option>
                                {
                                    categ.map((item, i) => (
                                        <option key={"categoria" + i} value={i}>{item.nombre}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="categoria" component={() => (
                                <div className={errorMess}>{errors.categoria}</div>
                            )} />


                            <Field as="select" name="coach" className={selectOption}>
                                <option value="">COACH (El coach es el guía para llevar tu idea de mejora)*</option>
                                {
                                    categorias > -1 &&
                                    (
                                        categ[categorias].categoria.map((item, i) => (
                                            <option key={"categoria" + i} value={i}>{item}</option>
                                        ))
                                    )
                                }

                            </Field>
                            <ErrorMessage name="coach" component={() => (
                                <div className={errorMess}>{errors.coach}</div>
                            )} />

                            <Field as="select" name="soporte" className={selectOption}>
                                <option value="">ÁREA DE SOPORTE (Opcional) (Selecciona el área que pueda apoyar tu idea)</option>
                                <option value="SOPORTE1">SOPORTE1</option>
                                <option value="SOPORTE2">SOPORTE2</option>
                                <option value="SOPORTE3">SOPORTE3</option>
                            </Field>
                        </div>
                        <div className={ideaTeian}>
                            <label htmlFor="TEIAN">ESCRIBE TU TEIAN*</label>
                            <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" placeholder="Aquí escribe tu idea de mejora" />
                            <ErrorMessage name="mensajeTeian" component={() => (
                                <div className={errorMess}>{errors.mensajeTeian}</div>
                            )} />
                        </div>
                        <div>
                            {/* <Field accept="image/*,video/*" type="file" name="file" multiple className={fileTeian} />
                            <ErrorMessage name="file" component={() => (
                                <div className={errorMess}>{errors.file}</div>
                            )} /> */}
                            <input accept="image/*,video/*" type="file" name ="files" multiple onChange={(e) =>subirArchivos(e.target.files)} />
                        </div>
                        <button type="submit" className={buttonIdea} >Enviar teian</button>
                        {formularioEnviado && <div><p className={messageExito}>Formulario enviado con exito!</p></div>}
                    </Form>
                )}
            </Formik>
            <Outlet />
        </Container>
    );
}

export default FormIdea