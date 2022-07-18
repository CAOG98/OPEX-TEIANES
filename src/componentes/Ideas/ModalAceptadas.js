import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAceptadas = (indexEstatus) => {
    console.log(indexEstatus.index)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const AceptarItems = (ideaAceptada) => {
        console.log("Idea Aceptada")
        console.log(ideaAceptada.index)
        // setIdeas((prevState) =>
        //   prevState.filter((todo, index) => index !== indexIdea)
        // );
        setShow(false);
    };


    // Cambiar el estado a Aceptadas
    const cambiarEstadoAceptadas = (idIdea) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch(`http://10.30.2.167:4000/api/Ideas/Rechazar/${idIdea}`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
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
                    <Button variant="secondary" style={{ backgroundColor: '#20BA81' }} onClick={() => AceptarItems(indexEstatus)}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalAceptadas