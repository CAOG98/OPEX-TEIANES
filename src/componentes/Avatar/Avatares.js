import React from 'react'
import { Badge } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import style from './Avatares.module.css'


const Avatares = () => {
  const AataresStyle = style.AataresStyle
  const AvatarImage = style.AvatarImage
  const badgeNameUser = style.badgeNameUser

  const nombre = window.localStorage.getItem('nombre')
  const apellido = window.localStorage.getItem('apellido')

  return (
    <div className={badgeNameUser} >
        {/* <Badge pill bsPrefix style={{background:"#016dbb", padding:"5px 10px", color:"#fff"}}>
          {nombre_empleado}
        </Badge>  */}
        <p style={{color:"#000", fontSize:"16px", marginTop:"10px",fontWeight:"lighter"}}>{nombre} {apellido} </p>
        {/* <p style={{color:"#000", fontSize:"10px"}}>{nombre_Completo} </p> */}
      </div>
  )
}
export default Avatares

