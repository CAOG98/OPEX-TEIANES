import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './TableIdeas.module.css'
import 'styled-components'
import './TableIdeas.css'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import {Container} from 'react-bootstrap';

 //1. Configuramos las columnas para DataTable
  const columns = [
    {
      field:'id',
      headerName: 'ID',
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field:'Fecha',
      headerName: 'Fecha',
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field: 'Titulo',
      headerName: 'Titulo', width: 400,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field: 'Categoria',
      headerName: 'CATEGORÍA',width: 400,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field: 'Coach',
      headerName: 'COACH', width: 400,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field: 'AreaSoporte',
      headerName: 'AREA DE SOPORTE',width: 380,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },

    
  ]
const TableIdeas = () =>{
  //1 Configurar los hooks
  const [tableData, setTableData] = useState([])


  useEffect(() =>{
    fetch("http://localhost:3000/Personas")
    .then((data) => data.json())
    .then((data) => setTableData(data))
  }, [])


  return(
    <Container className="contTable" >
      <h1 className="titleTable">Mis Teianes</h1>
      <DataGrid
      name="MIS TEIANES"
      rows={tableData}
      columns={columns}
      components={{ Toolbar: GridToolbar}}
      checkboxSelection
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      pageSize={16}
      experimentalFeatures={{ newEditingApi: true }}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      getRowHeight={() => 'auto'}
      />
      </Container>
  );
}

  export default TableIdeas