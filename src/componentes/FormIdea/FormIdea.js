import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import styles from './FormIdea.module.css'
import { Outlet } from 'react-router-dom';
import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import 'typeface-quicksand';

const categ = [
    {
        "nombre" : "Mejora Continua",
        "categoria": ["Christian", "Benajmin", "Chuy"]
    },
    {
        "nombre" : "5s",
        "categoria": ["Melissa", "Alex", "Pedro"]
    }
]

console.log(categ)

const FormIdea = () =>{
    //Hooks validacion de formulario
    const[formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const [categorias, setCategorias] = useState(-1)

    const handlerCargarCoach = function (e){
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
    
    return(
        <Container className={contFormIdea}>
            <h1 className={titleForm}>CREAR TEIAN</h1>
            <Formik
                initialValues={{
                    teian: '',
                    categoria:'',
                    coach:'',
                    soporte:'',
                    mensajeTeian:'',
                    file:[]
                }}
                // Validacion nombre
                validate={(valores)=>{
                    let errores ={};
                    if(!valores.teian){
                        errores.teian ='Porfavor ingresa un nombre'
                    }
                    if(!valores.categoria){
                        errores.categoria ='Porfavor elije una CATEGORÍA'
                    }
                    if(!valores.coach){
                        errores.coach ='Porfavor elija un COACH'
                    }
                    if(!valores.mensajeTeian){
                        errores.mensajeTeian ='Porfavor escribe tu TEIAN'
                    }
                    if(!valores.file){
                        errores.file = 'Porfavor suba un archivo'
                    }
                    return errores
                }}
                onSubmit={(valores, {resetForm}) =>{
                    resetForm()
                    console.log(valores);
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false), 5000)
                }}
            >
                {({values,errors,touched}) =>(
                    <Form>
                        <div className={titleTeian}>
                            <label htmlFor="TEIAN">TITULO DEL TEIAN*</label>
                            <Field className={titleTeianInput} type ="text" id="nombre" name="teian" placeholder="Aquí va el titulo de tu idea" maxlength="109"/>
                            <ErrorMessage name ="teian" component={() =>(
                                <div className={errorMess}>{errors.teian}</div>
                                )}/>
                        </div>
                        <div className={inputTeian}>
                           
                            <Field as="select" name="categoria" className={selectOption} onClick={handlerCargarCoach}>
                            <option value={-1}>CATEGORÍA (Selecciona la categoría de tu idea)*</option>
                                {
                                    categ.map((item, i) =>(
                                        <option key={"categoria" + i} value ={i}>{item.nombre}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name ="categoria" component={() =>(
                                <div className={errorMess}>{errors.categoria}</div>
                                )}/>

                            
                            <Field as="select" name="coach" className={selectOption}>
                            <option value="">COACH (El coach es el guía para llevar tu idea de mejora)*</option>
                                {
                                    categorias > -1 &&
                                    (
                                        categ[categorias].categoria.map((item,i)=>(
                                            <option key={"categoria" + i} value={i}>{item}</option>
                                        ))
                                    )
                                }
                                
                            </Field>
                            <ErrorMessage name ="coach" component={() =>(
                                <div className={errorMess}>{errors.coach}</div>
                                )}/>
                            
                            <Field as="select" name="soporte" className={selectOption}>
                            <option value="">ÁREA DE SOPORTE (Opcional) (Selecciona el área que pueda apoyar tu idea)</option>
                                <option value="SOPORTE1">SOPORTE1</option>
                                <option value="SOPORTE2">SOPORTE2</option>
                                <option value="SOPORTE3">SOPORTE3</option>
                            </Field>
                        </div>
                        <div className={ideaTeian}>
                            <label htmlFor="TEIAN">ESCRIBE TU TEIAN*</label>
                            <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" placeholder="Aquí escribe tu idea de mejora"/>
                            <ErrorMessage name ="mensajeTeian" component={() =>(
                                <div className={errorMess}>{errors.mensajeTeian}</div>
                                )}/>
                        </div>
                        <div>
                            <Field type="file" name="file" multiple className={fileTeian}/>
                            <ErrorMessage name ="file" component={() =>(
                                <div className={errorMess}>{errors.file}</div>
                                )}/>
                                {/* <input type="file" name ="files" multiple /> */}
                        </div>
                        <button type="submit" className={buttonIdea}>Enviar teian</button>
                        {formularioEnviado && <div><p className={messageExito}>Formulario enviado con exito!</p></div>}
                    </Form>
                )}
            </Formik>
            <Outlet />
        </Container>
    );
}

  export default FormIdea