import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './TableIdeas.module.css'
import 'styled-components'
import DataTable from 'react-data-table-component';
import './TableIdeas.css'
import { Container } from 'react-bootstrap';


const TableIdeas = () =>{
  //1 Configurar los hooks
  const [users, setUsers] = useState([])
  //2 Funcion para mosrar los datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async() =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect(() =>{
    showData()
  }, [])

  //3. Configuramos las columnas para DataTable

  const columns = [
    {
      name: 'FECHA',
      selector: row => row.id
    },
    {
      name: 'TITULO',
      selector: row => row.name
    },
    {
      name: 'CATEGORIA',
      selector: row => row.email
    },
    {
      name: 'AREA DE SOPORTE',
      selector: row => row.gender
    },
    {
      name: 'TEIAN',
      selector: row => row.gender
    },
    {
      name: 'STATUS',
      selector: row => row.gender
    },
  ]
  const paginacionOpciones={
    rowsPerPageText:'Filas por pagina',
    rangePerPageText: 'de',
    selectAllRowsText: true,
    selectAllRowsItemText: 'Todos'
  }
  // createTheme creates a new theme named solarized that overrides the build in dark theme
  //4. Mostramos la data en DataTable
  return(
    <Container>
      <h2 style={{textAlign: 'center'}}>MIS TEIANES</h2>
        <DataTable
        columns={columns}
        data={users}
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight='550px'
        />
    </Container>
  );
}

  export default TableIdeas