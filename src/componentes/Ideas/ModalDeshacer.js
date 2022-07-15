import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UndoIcon from '@mui/icons-material/Undo';
import Tooltip from '@mui/material/Tooltip';

const ModalDeshacer = (indexEstatus) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DeshacerItems = (ideaDeshacer) => {
    console.log("Idea actualizada")
    console.log(ideaDeshacer.index)
    // setIdeas((prevState) =>
    //   prevState.filter((todo, index) => index !== indexIdea)
    // );
    setShow(false);
  };


  // REGRESAR AL ESTADO ANTERIOR OSEA EN PROGRESO
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

  // CAMBIAR EL ESTADO A ELIMINADAS
  const cambiarEstadoReachazadas = (idIdea) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    fetch(`http://10.30.2.167:4000/api/Ideas/Aceptar/${idIdea}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }


  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <Tooltip title="Deshacer">
          <UndoIcon />
        </Tooltip>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Estas seguro que deseas regresar al estado anterior?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta idea la podra volver a ver en "TEIANES POR APROBAR"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => DeshacerItems(indexEstatus)}>
            Deshacer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDeshacer