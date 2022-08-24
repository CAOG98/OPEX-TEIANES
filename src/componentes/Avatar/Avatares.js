import React from 'react'
import { Badge } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import style from './Avatares.module.css'


const Avatares = () => {
  // Estilos generales
  const AataresStyle = style.AataresStyle
  const AvatarImage = style.AvatarImage
  const badgeNameUser = style.badgeNameUser

  // Metodo para extraer los nombres del usuario desde el localStorage
  const nombre = window.localStorage.getItem('nombre')
  const apellido = window.localStorage.getItem('apellido')

  return (
    <div className={badgeNameUser} >
        {/* <Badge pill bsPrefix style={{background:"#016dbb", padding:"5px 10px", color:"#fff"}}>
          {nombre_empleado}
        </Badge>  */}
        <h5 style={{color:"#fff", fontSize:"16px",fontWeight:"lighter", }}>{nombre} {apellido} </h5>
        {/* <p style={{color:"#000", fontSize:"10px"}}>{nombre_Completo} </p> */}
      </div>
  )
}
export default Avatares

