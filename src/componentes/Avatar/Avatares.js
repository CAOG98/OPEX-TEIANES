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

  const nameUsuario = window.localStorage.getItem('usuario')
  const nombre_empleado = window.localStorage.getItem('nombre_empleado')
  return (
    <div className={badgeNameUser} >
        <Badge pill bg="primary">
          {nombre_empleado}
        </Badge>
      </div>
  )
}
export default Avatares
