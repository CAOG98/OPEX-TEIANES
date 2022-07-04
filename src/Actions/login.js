import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'

const login = async credentials =>{
    const {data} = await axios.post(baseUrl, credentials)
    return data
}

export default {login}