import React from "react"
import { Alert } from "react-bootstrap"



const Notificacion = (message) => {
    
    return (
        <>
            <Alert variant="danger">
                <Alert.Heading>{message.message}</Alert.Heading>
            </Alert>
        </>
    )
}

export default Notificacion




