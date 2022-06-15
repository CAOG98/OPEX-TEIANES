import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import styles from './FormIdea.module.css'
import { Outlet } from 'react-router-dom';
import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormIdea = () =>{
    const[formularioEnviado, cambiarFormularioEnviado] = useState(false)
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
                    file:''
                }}
                // Validacion nombre
                validate={(valores)=>{
                    let errores ={};
                    if(!valores.teian){
                        errores.teian ='Porfavor ingresa un nombre'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,109}$/.test(valores.teian)){
                        errores.teian = 'El nombre solo puede contener letras y espacios'
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
                            <label htmlFor="TEIAN">TITULO DEL TEIAN</label>
                            <Field className={titleTeianInput} type ="text" id="nombre" name="teian" placeholder="TITULO DEL TEIAN" maxlength="109"/>
                            <ErrorMessage name ="teian" component={() =>(
                                <div className={errorMess}>{errors.teian}</div>
                                )}/>
                        </div>
                        <div className={inputTeian}>
                           
                            <Field as="select" name="categoria" className={selectOption}>
                            <option value="">ELIJE TU CATEGORÍA</option>
                                <option value="CATEGORIA1">CATEGORIA1</option>
                                <option value="CATEGORIA2">CATEGORIA2</option>
                                <option value="CATEGORIA3">CATEGORIA3</option>
                            </Field>
                            <ErrorMessage name ="categoria" component={() =>(
                                <div className={errorMess}>{errors.categoria}</div>
                                )}/>

                            
                            <Field as="select" name="coach" className={selectOption}>
                            <option value="">ELIJE TU COACH</option>
                                <option value="COACH1">COACH1</option>
                                <option value="COACH2">COACH2</option>
                                <option value="COACH3">COACH3</option>
                            </Field>
                            <ErrorMessage name ="coach" component={() =>(
                                <div className={errorMess}>{errors.coach}</div>
                                )}/>
                            
                            <Field as="select" name="soporte" className={selectOption}>
                            <option value="">ELIJE TU ÁREA DE SOPORTE (Opcional)</option>
                                <option value="SOPORTE1">SOPORTE1</option>
                                <option value="SOPORTE2">SOPORTE2</option>
                                <option value="SOPORTE3">SOPORTE3</option>
                            </Field>
                        </div>
                        <div className={ideaTeian}>
                            <label htmlFor="TEIAN">ESCRIBE TU TEIAN</label>
                            <Field className={txtAreaTeian} name="mensajeTeian" as="textarea" maxlength="800" placeholder="ESCRIBE TU TEIAN (800)"/>
                            <ErrorMessage name ="mensajeTeian" component={() =>(
                                <div className={errorMess}>{errors.mensajeTeian}</div>
                                )}/>
                        </div>
                        <div>
                            <Field type="file" name="file" className={fileTeian}/>
                            <ErrorMessage name ="file" component={() =>(
                                <div className={errorMess}>{errors.file}</div>
                                )}/>
                        </div>
                        <button type="submit" className={buttonIdea}>Enviar teian</button>
                        {formularioEnviado && <p className={messageExito}>Formulario enviado con exito!</p>}
                    </Form>
                )}
            </Formik>
            <Outlet />
        </Container>
    );
}

  export default FormIdea