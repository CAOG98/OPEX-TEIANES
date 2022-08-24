import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './TableIdeas.module.css'
import 'styled-components'
import './TableIdeas.css'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';
import formatDate, { formatFecha } from '../Ideas/formatFecha'
import { height, width } from '@mui/system';


// Metodo para extraer el id del usuario desde localStorage
const idUsuario = window.localStorage.getItem('usuario')

// Api para extraer las ideas de un usuario en especifico
const baseUrl = `http://10.30.2.167:4000/api/Ideas/Usuario${idUsuario}`

const TableIdeas = () => {
  //1 Configurar los hooks
  const [tableData, setTableData] = useState([])
  // Hook especial para saber cuantos registros queremos en cada pagina
  const [pageSize, setPageSize] = React.useState([12]);
  const [arrayDatos, setArrayDatos] = useState()


  useEffect(() => {
    // Fetch para pedir la informacion de la api
    fetch(baseUrl)
      .then((data) => data.json())
      .then((data) => {
        setTableData(data)
        // console.log(data)
      })
  }, [])

  //1. Configuramos las columnas para DataTable
const columns = [
  {
    field: 'iD_IDEA',
    // headerName: 'ID', width: 50,
    renderHeader: () => (
      <strong>
        {'ID '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 50,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'fechA_CREACION_IDEA',
    // headerName: 'FECHA',  width: 130,
    renderHeader: () => (
      <strong>
        {'FECHA '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 130,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'titulO_IDEA',
    // headerName:'TITULO',
    renderHeader: () => (
      <strong>
        {'TITULO '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ), width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'categoria',
    // headerName: 'CATEGORÍA', width: 127,
    renderHeader: () => (
      <strong>
        {'CATEGORÍA '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 127,
    headerAlign: 'center',
    align:  'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'coaches',
    // headerName: 'COACH', width: 200,
    renderHeader: () => (
      <strong>
        {'COACH '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'areA_SOPORTE',
    // headerName: 'ÁREA DE SOPORTE', width: 200,
    renderHeader: () => (
      <strong>
        {'ÁREA DE SOPORTE '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'ideA_TEXTO',
    // headerName: 'DESCRIPCIÓN DE LA IDEA', width: 200,
    renderHeader: () => (
      <strong>
        {'DESCRIPCIÓN DE LA IDEA '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'departamento',
    // headerName: 'DEPARTAMENTO', width: 200,
    renderHeader: () => (
      <strong>
        {'DEPARTAMENTO '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'estatuto',
    // headerName: 'ESTADO', width: 200,
    renderHeader: () => (
      <strong>
        {'ESTADO '}
        {/* <span role="img" aria-label="enjoy">
          🎂
        </span> */}
      </strong>
    ),width: 200,
    headerAlign: 'center',
    align:'center',
  },

]

// Metodo para crear un array solo con los campos que necesitamos para poder meterlos en la tabla
  const dataFilter = tableData.map(({ iD_IDEA, fechA_CREACION_IDEA, titulO_IDEA, categoria, coaches, areA_SOPORTE, ideA_TEXTO, departamento, estatuto }) => ({ iD_IDEA, fechA_CREACION_IDEA, titulO_IDEA, categoria, coaches, areA_SOPORTE, ideA_TEXTO, departamento, estatuto }))
  // console.log(dataFilter)

  return (
    <Container className="contTable" >
      <h1 className="titleTable">Mis Teianes</h1>
      <DataGrid
        // Columnas que creamos arriba
        columns={columns}
        // Filas que filtramos previamente con los datos 
        rows={dataFilter}
        // Aqui se define que campo sera el id
        getRowId={(row) => row.iD_IDEA}
        components={{ Toolbar: GridToolbar }}
        alignItems="center"
        justifyContent="center"
        checkboxSelection
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 15, 20]}
        pagination
        experimentalFeatures={{ newEditingApi: true }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        getRowHeight={() => 'auto'}
      />
    </Container>
  );
}

export default TableIdeas