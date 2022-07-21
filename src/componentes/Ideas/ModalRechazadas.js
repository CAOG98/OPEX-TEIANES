import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeshacer = (indexEstatus) => {
  // console.log(indexEstatus.index)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // CAMBIAR EL ESTADO A RECHAZADAS
  const cambiarEstadoReachazadas = (ideaRechazada) => {
    const IR = ideaRechazada.index
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    fetch(`http://10.30.2.167:4000/api/Ideas/Rechazar/${IR}`, requestOptions)
    setShow(false);
  }


  return (
    <>
      <Button variant="secondary" style={{ backgroundColor: '#DB5F58' }} onClick={handleShow}>
        Rechazar
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Esta seguro que desea rechazar esta idea?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta idea la podras ver en "TEIANES RECHAZADOS"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{ backgroundColor: '#DB5F58' }} onClick={() => cambiarEstadoReachazadas(indexEstatus)}>
            Rechazar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDeshacer