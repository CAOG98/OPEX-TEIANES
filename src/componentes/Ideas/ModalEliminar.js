import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tooltip from '@mui/material/Tooltip';

const ModalEliminar = (indexIdea) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // CAMBIAR EL ESTADO A ELIMINADAS
  const cambiarEstadoEliminadas = (ideaEliminada) => {
    const iE = ideaEliminada.index
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    fetch(`http://10.30.2.167:4000/api/Ideas/Eliminada/${iE}`, requestOptions)
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Tooltip title="Borrar">
          <DeleteIcon />
        </Tooltip>
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Estas seguro que deseas eliminar esta idea?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta idea se eliminara y ya no podra verla</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => cambiarEstadoEliminadas(indexIdea)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalEliminar