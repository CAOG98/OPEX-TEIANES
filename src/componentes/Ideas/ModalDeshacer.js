import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UndoIcon from '@mui/icons-material/Undo';
import Tooltip from '@mui/material/Tooltip';

const ModalDeshacer = (indexEstatus) => {


  const[indexItem, setIndexItem] = useState()


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const IdUsuario = window.localStorage.getItem('usuario')
  // CAMBIAR EL ESTADO A ELIMINADAS
  const cambiarEstadoDeshacer = (ideaDeshacer) => {
    const ID = ideaDeshacer.index
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    fetch(`http://10.30.2.167:4000/api/Ideas/EnProceso/?id=${ID}&numEmpleado=${IdUsuario}`, requestOptions)
    setShow(false);
  }


  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <Tooltip title="Deshacer">
          <UndoIcon />
        </Tooltip>
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Estas seguro que deseas regresar al estado anterior?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta idea la podra volver a ver en "TEIANES POR APROBAR"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => cambiarEstadoDeshacer(indexEstatus)}>
            Deshacer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDeshacer