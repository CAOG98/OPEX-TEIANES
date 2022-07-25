import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAceptadas = (indexEstatus) => {
    // console.log(indexEstatus.index)
    const [show, setShow] = useState(false);
    const [ideas, setIdeas] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Cambiar el estado a Aceptadas
    const cambiarEstadoAceptadas = (ideaAceptada) => {
        const IA = ideaAceptada.index
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch(`http://10.30.2.167:4000/api/Ideas/Aceptada/${IA}`, requestOptions)
        setShow(false);
    }

    return (
        <>
            <Button variant="secondary" style={{ backgroundColor: '#20BA81' }} onClick={handleShow}>
                Aceptar
            </Button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>¿Esta seguro que desea aceptar esta idea?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Esta idea la podra ver en "TEIANES ACEPTADOS"</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" style={{ backgroundColor: '#20BA81' }} onClick={() => cambiarEstadoAceptadas(indexEstatus)}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalAceptadas