import axios from 'axios'

//URL de la api
const baseUrl = 'http://10.30.2.167:4000/api/usuarios'

//En esta clase es para verificar si los usuarios y contraseñas existen 
const login = async credentials =>{
    console.log(credentials)
    const {data} = await axios.post(baseUrl + `?num_empleado=${credentials.username}` + `&password=${credentials.password}`, credentials)
    return data
}

export default {login}