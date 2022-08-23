import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './TableIdeas.module.css'
import 'styled-components'
import './TableIdeas.css'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';
import formatDate, { formatFecha } from '../Ideas/formatFecha'
import { height, width } from '@mui/system';



const idUsuario = window.localStorage.getItem('usuario')

const baseUrl = `http://10.30.2.167:4000/api/Ideas/Usuario${idUsuario}`

const TableIdeas = () => {
  //1 Configurar los hooks
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(12);
  const [arrayDatos, setArrayDatos] = useState()


  useEffect(() => {
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
    headerName: 'ID', width: 50,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'fechA_CREACION_IDEA',
    headerName: 'FECHA',  width: 130,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'titulO_IDEA',
    headerName: 'TÍTULO', width: 400,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'categoria',
    headerName: 'CATEGORÍA', width: 127,
    headerAlign: 'center',
    align:  'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'coaches',
    headerName: 'COACH', width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'areA_SOPORTE',
    headerName: 'ÁREA DE SOPORTE', width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'ideA_TEXTO',
    headerName: 'DESCRIPCIÓN DE LA IDEA', width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'departamento',
    headerName: 'DEPARTAMENTO', width: 200,
    headerAlign: 'center',
    align:'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'estatuto',
    headerName: 'ESTADO', width: 200,
    headerAlign: 'center',
    align:'center',
  },

]

  const dataFilter = tableData.map(({ iD_IDEA, fechA_CREACION_IDEA, titulO_IDEA, categoria, coaches, areA_SOPORTE, ideA_TEXTO, departamento, estatuto }) => ({ iD_IDEA, fechA_CREACION_IDEA, titulO_IDEA, categoria, coaches, areA_SOPORTE, ideA_TEXTO, departamento, estatuto }))
  // console.log(dataFilter)

  return (
    <Container className="contTable" >
      <h1 className="titleTable">Mis Teianes</h1>
      <DataGrid
        name="MIS TEIANES"
        columns={columns}
        rows={dataFilter}
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