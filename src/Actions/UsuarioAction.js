import HttpCliente from '../Servicios/HttpCliente'


export const loginUsuario = usuario =>{
    return new Promise((resolve,eject) =>{
        //Aqui Indicamos la parte final del END POINT parte del controller
        HttpCliente.post("/usuario/login", usuario).then(response =>{
            resolve(response);
        })
    })
}