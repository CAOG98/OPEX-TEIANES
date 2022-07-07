import axios from 'axios'

const baseUrl = 'http://10.30.2.167:4000/api/usuarios'

const login = async credentials =>{
    const {data} = await axios.post(baseUrl + `?num_empleado=${credentials.username}` + `&password=${credentials.password}`, credentials)
    console.log(credentials.username)
    return data
}

export default {login}