import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeshacer = (indexEstatus)=> {
    console.log(indexEstatus.index)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const RechazarItems = (ideaRechazada) => {
    console.log("Idea Rechazada")
    console.log(ideaRechazada.index)
    // setIdeas((prevState) =>
    //   prevState.filter((todo, index) => index !== indexIdea)
    // );
    setShow(false);
  };
// CAMBIAR EL ESTADO A RECHAZADAS
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
      <Button variant="secondary" style={{ backgroundColor: '#DB5F58' }}  onClick={handleShow}>
        Rechazar
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Esta seguro que desea rechazar esta idea?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta idea la podras ver en "TEIANES RECHAZADOS"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{ backgroundColor: '#DB5F58' }} onClick={() => RechazarItems(indexEstatus)}>
            Rechazar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDeshacer