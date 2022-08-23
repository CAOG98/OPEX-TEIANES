import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import jsPDF from 'jspdf'
import logoFooter from '../FormularioLogin/images/GerberInfo.png'
import { BsPrinterFill } from "react-icons/bs";
import idea from '../FormularioLogin/images/idea.png'
import formatDate from '../Ideas/formatFecha';
import { FaRegSave } from "react-icons/fa";
import styles from './DetallesTeian.module.css'

const PdfDatos = (iD_IDEA) => {
    const [ideasDetalle, setIdeasDetalle] = useState([])
    const [mortyA, setMortyA] = useState([])
    const id_pdf = iD_IDEA.id
    const UrlServer = "http://10.30.2.167:4000/"


    const buttonsImprimir = styles.buttonsImprimir
    const buttonImprimir = styles.buttonImprimir

    const initialUrlDetalle = `http://10.30.2.167:4000/api/Ideas/Detalle_Idea/${id_pdf}`
    // const mortyinitial = `https://rickandmortyapi.com/api/character`
    
    // const morty = (url) => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setMortyA(data.results)
    //             console.log(data.results)
    //         })
    //         .catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     morty(mortyinitial)
    // }, [])

    const fetchIdeasDetalle = (url) => {
        fetch(url,{
            contentType: "application/json",
            dataType: "json"
        })
            .then(response => response.json())
            .then(data => {
                setIdeasDetalle(data)
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchIdeasDetalle(initialUrlDetalle)
    }, [])

    const hoy = new Date().toLocaleDateString('es-mx', { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric' })
    // let ext = ""
    // let imagenA = ""
    // let extM = ""
    // setTimeout(() => {
    //     ideasDetalle.archivos.map((item, index) => {
    //         if (index == 0) {
    //             ext = item.extension.substring(1)
    //             extM = ext.toUpperCase()
    //             imagenA = UrlServer + item.urL_MULTIMEDIA
    //             console.log(extM)
    //             console.log(imagenA)
    //         }
    //     })
    // }, 4000)



    const pdfGenerate = () => {
        console.log(ideasDetalle.archivos)
        var doc = new jsPDF('landscape', 'px', 'a4', 'false')
        ideasDetalle.archivosimp.map((item, index) => {
            if (index == 0) {
                let ext = item.extension.substring(1)
                console.log(ext)
                let url = UrlServer + item.urL_MULTIMEDIA.toString()
                doc.addImage( url, ext.toUpperCase(), 100, 125, 150, 150)
            }
        })

        //Lineas decoracion
        doc.setDrawColor('#006dba')
        // doc.setLineWidth(10)
        // doc.line(0, 0, 0, 450)
        // doc.line(632, 0, 632, 450)
        doc.setLineWidth(1)
        doc.line(316, 500, 316, 102) //Linea vertical 
        doc.line(60, 102, 580, 102); //Linea horizontal

        doc.setFillColor(255, 255, 200);
        doc.rect(55, 55, 525, 40, 'FD')

        doc.setFontSize(14)
        // doc.setFont(undefined, 'bold');
        doc.setFont('constantine')
        doc.text(150, 115, 'ANTES: ')

        doc.setFontSize(14)
        // doc.setFont(undefined, 'bold');
        doc.setFont('constantine')
        doc.text(420, 115, 'DESPUES: ')

        doc.setFont('constantine')
        doc.setFontSize(14)
        doc.addImage(idea, 'PNG', 10, 0, 50, 50)
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(450, 20, 'Folio: ')
        doc.setFontSize(11)
        doc.setFont(undefined, 'normal');
        doc.text(475, 20, 'No°' + ideasDetalle.iD_IDEA.toString())


        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(510, 20, 'Estatus: ')
        if (ideasDetalle.iD_ESTATUS === 5) {
            doc.setTextColor(13, 130, 235);
        } else if (ideasDetalle.iD_ESTATUS === 4) {
            doc.setTextColor(245, 208, 2);
        } else
            if (ideasDetalle.iD_ESTATUS === 3) {
                doc.setTextColor(246, 21, 37);
            } else
                if (ideasDetalle.iD_ESTATUS === 2) {
                    doc.setTextColor(53, 194, 0);

                } else if (ideasDetalle.iD_ESTATUS === 1) {
                    doc.setTextColor(88, 103, 117);
                }
        doc.setFontSize(11)
        doc.setFont(undefined, 'bold');
        doc.text(545, 20, ideasDetalle.estatuto)

        doc.setTextColor(0, 0, 0);
        //Titulo Idea
        doc.setFontSize(14)
        doc.setFont(undefined, 'bold');
        doc.text(260, 15, 'TEIAN: ')
        doc.setFont(undefined, 'normal');
        doc.text(270, 30, ideasDetalle.titulO_IDEA, { align: 'center', lineHeightFactor: 1.5, maxWidth: 315 })

        //Fecha Creacion idea
        doc.setFontSize(11)
        doc.text(450, 35, 'Fecha creación idea: ' + formatDate(ideasDetalle.fechA_CREACION_IDEA))

        //Fecha de implementacion de idea
        doc.setFontSize(11)
        doc.text(450, 45, 'Fecha imp. idea: ' + formatDate(ideasDetalle.fechA_IMPLEMENTADA))


        //Fecha de impresión
        doc.setFontSize(10)
        doc.text(15, 435, 'Fecha impresión: ' + hoy)



        //Nombre de quien la creo
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 65, 'Creada por:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(110, 65, ideasDetalle.nombrE_USUARIO)

        //DEPARTAMENTO
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(365, 65, 'Departamento:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(431, 65, ideasDetalle.departamento)

        //Categoria
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 78, 'Categoria:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(102, 78, ideasDetalle.categoria.toUpperCase())

        //Area Soporte
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(365, 78, 'Area de soporte:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(431, 78, ideasDetalle.areA_SOPORTE)

        //Coach
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 91, 'Coach:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(90, 91, ideasDetalle.coaches)




        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 300, 'Descripción:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(60, 320, ideasDetalle.ideA_TEXTO, { align: 'justify', lineHeightFactor: 1.5, maxWidth: 230 })
        doc.addImage(logoFooter, 'PNG', 500, 400, 125, 50)


        if (ideasDetalle.iD_ESTATUS === 5) {
            doc.setFontSize(12)
            doc.setFont(undefined, 'bold');
            doc.text(335, 300, 'Descripción:')
            doc.setFontSize(10)
            doc.setFont(undefined, 'normal');
            doc.text(335, 320, ideasDetalle.comentario, { align: 'justify', lineHeightFactor: 1.5, maxWidth: 230 })
            ideasDetalle.archivosimp.map((item, index) => {
                if (index == 0) {
                    let ext = item.extension.substring(1)
                    console.log(ext)
                    let url = UrlServer + item.urL_MULTIMEDIA.toString()
                    doc.addImage( url, ext.toUpperCase(),370, 125, 150, 150)
                }
            })
            doc.addImage(logoFooter, 'PNG', 500, 400, 125, 50)
        }

        doc.save(`${ideasDetalle.titulO_IDEA}.pdf`)


    }
    
    const pdfGenerate2 = () => {
        console.log(ideasDetalle.archivos)
        var doc = new jsPDF('landscape', 'px', 'a4', 'false')
        ideasDetalle.archivos.map((item, index) => {
            if (index == 0) {
                let ext = item.extension.substring(1)
                console.log(ext)
                let url = UrlServer + item.urL_MULTIMEDIA.toString()
                doc.addImage( url, ext.toUpperCase(), 100, 125, 150, 150)
            }
        })
        //Lineas decoracion
        doc.setDrawColor('#006dba')
        // doc.setLineWidth(10)
        // doc.line(0, 0, 0, 450)
        // doc.line(632, 0, 632, 450)
        doc.setLineWidth(1)
        doc.line(316, 500, 316, 102) //Linea vertical 
        doc.line(60, 102, 580, 102); //Linea horizontal

        doc.setFillColor(255, 255, 200);
        doc.rect(55, 55, 525, 40, 'FD')

        doc.setFontSize(14)
        // doc.setFont(undefined, 'bold');
        doc.setFont('constantine')
        doc.text(150, 115, 'ANTES: ')

        doc.setFontSize(14)
        // doc.setFont(undefined, 'bold');
        doc.setFont('constantine')
        doc.text(420, 115, 'DESPUES: ')

        doc.setFont('constantine')
        doc.setFontSize(14)
        doc.addImage(idea, 'PNG', 10, 0, 50, 50)
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(450, 20, 'Folio: ')
        doc.setFontSize(11)
        doc.setFont(undefined, 'normal');
        doc.text(475, 20, 'No°' + ideasDetalle.iD_IDEA.toString())


        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(510, 20, 'Estatus: ')
        if (ideasDetalle.iD_ESTATUS === 5) {
            doc.setTextColor(13, 130, 235);
        } else if (ideasDetalle.iD_ESTATUS === 4) {
            doc.setTextColor(245, 208, 2);
        } else
            if (ideasDetalle.iD_ESTATUS === 3) {
                doc.setTextColor(246, 21, 37);
            } else
                if (ideasDetalle.iD_ESTATUS === 2) {
                    doc.setTextColor(53, 194, 0);

                } else if (ideasDetalle.iD_ESTATUS === 1) {
                    doc.setTextColor(88, 103, 117);
                }
        doc.setFontSize(11)
        doc.setFont(undefined, 'bold');
        doc.text(545, 20, ideasDetalle.estatuto)

        doc.setTextColor(0, 0, 0);
        //Titulo Idea
        doc.setFontSize(14)
        doc.setFont(undefined, 'bold');
        doc.text(260, 15, 'TEIAN: ')
        doc.setFont(undefined, 'normal');
        doc.text(270, 30, ideasDetalle.titulO_IDEA, { align: 'center', lineHeightFactor: 1.5, maxWidth: 315 })

        //Fecha Creacion idea
        doc.setFontSize(11)
        doc.text(450, 35, 'Fecha creación idea: ' + formatDate(ideasDetalle.fechA_CREACION_IDEA))




        //Fecha de impresión
        doc.setFontSize(10)
        doc.text(15, 435, 'Fecha impresión: ' + hoy)



        //Nombre de quien la creo
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 65, 'Creada por:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(110, 65, ideasDetalle.nombrE_USUARIO)

        //DEPARTAMENTO
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(365, 65, 'Departamento:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(431, 65, ideasDetalle.departamento)

        //Categoria
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 78, 'Categoria:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(102, 78, ideasDetalle.categoria.toUpperCase())

        //Area Soporte
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(365, 78, 'Area de soporte:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(431, 78, ideasDetalle.areA_SOPORTE)

        //Coach
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 91, 'Coach:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(90, 91, ideasDetalle.coaches)




        doc.setFontSize(12)
        doc.setFont(undefined, 'bold');
        doc.text(60, 300, 'Descripción:')
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal');
        doc.text(60, 320, ideasDetalle.ideA_TEXTO, { align: 'justify', lineHeightFactor: 1.5, maxWidth: 230 })
        doc.addImage(logoFooter, 'PNG', 500, 400, 125, 50)


        // ideasDetalle.archivos.map((item, index) => {
        //     if (index == 0) {
        //         ext = item.extension.substring(1)
        //         imagenA = UrlServer + item.urL_MULTIMEDIA
        //         console.log(ext)
        //         console.log(imagenA)
        //     }
        // })



        if (ideasDetalle.iD_ESTATUS === 5) {
            doc.setFontSize(12)
            doc.setFont(undefined, 'bold');
            doc.text(335, 300, 'Descripción:')
            doc.setFontSize(10)
            doc.setFont(undefined, 'normal');
            doc.text(335, 320, ideasDetalle.comentario, { align: 'justify', lineHeightFactor: 1.5, maxWidth: 230 })
            doc.addImage(logoFooter, 'PNG', 500, 400, 125, 50)
            console.log(ideasDetalle.archivosimp)
            ideasDetalle.archivosimp.map((item, index) => {
                if (index == 0) {
                    let ext = item.extension.substring(1)
                    console.log(ext)
                    let url = UrlServer + item.urL_MULTIMEDIA.toString()
                    doc.addImage( url, ext.toUpperCase(),370, 125, 150, 150)
                }
            })
            //Fecha de implementacion de idea
            doc.setFontSize(11)
            doc.text(450, 45, 'Fecha imp. idea: ' + formatDate(ideasDetalle.fechA_IMPLEMENTADA))
        }

        doc.output('dataurlnewwindow')


    }
    return (

        <div className={buttonsImprimir}>
            <Button className={buttonImprimir} style={{ background: "#4CAEF4", borderColor: "#016CBA" }} onClick={() => pdfGenerate()} >Guardar <FaRegSave /></Button>
            <Button style={{ background: "#4CAEF4", borderColor: "#016CBA" }} onClick={() => pdfGenerate2()} >Vista previa <BsPrinterFill /></Button>
        </div>


    )
}
export default PdfDatos
