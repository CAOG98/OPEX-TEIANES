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
      headerName: 'FECHA',
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field:'title',
      headerName: 'TITULO', width: 300,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field: 'body',
      headerName: 'CATEGORIA', width: 550,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    {
      field: 'body',
      headerName: 'AREA DE SOPORTE', width: 580,
      headerAlign: 'center',
      headerClassName: 'headerTable'
    },
    
  ]
const TableIdeas = () =>{
  //1 Configurar los hooks
  const [tableData, setTableData] = useState([])


  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setTableData(data))
  }, [])


  return(
      <DataGrid
      title="MIS TEIANES"
      rows={tableData}
      columns={columns}
      components={{ Toolbar: GridToolbar}}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      pageSize={16}
      checkboxSelection
      experimentalFeatures={{ newEditingApi: true }}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      getRowHeight={() => 'auto'}
      />
  );
}

  export default TableIdeas