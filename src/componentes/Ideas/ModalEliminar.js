import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

const ModalEliminar = () => {

  const [show, setShow] = useState(false);
  const [ideas, setIdeas] = useState([])

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchIdeas = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setIdeas(data.results)
    })
    .catch(error => console.log(error))
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const DeleteItems = (indexItem) => {
    setIdeas((prevState) =>
      prevState.filter((todo, index) => index !== indexItem)
    );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <DeleteIcon/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            ¿Esta seguro?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas seguro que deseas eliminar la idea de mejora?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEliminar

