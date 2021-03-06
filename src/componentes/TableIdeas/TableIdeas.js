import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './TableIdeas.module.css'
import 'styled-components'
import './TableIdeas.css'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';
import { formatFecha } from '../Ideas/formatFecha'

//1. Configuramos las columnas para DataTable
const columns = [
  {
    field: 'iD_IDEA',
    headerName: 'ID', width: 50,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'fechA_CREACION_IDEA',
    headerName: 'FECHA',  width: 130,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'titulO_IDEA',
    headerName: 'TITULO', width: 400,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'categoria',
    headerName: 'CATEGORÍA', width: 127,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'coaches',
    headerName: 'COACH', width: 200,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'areA_SOPORTE',
    headerName: 'AREA DE SOPORTE', width: 200,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'ideA_TEXTO',
    headerName: 'DESCRIPCION DE LA IDEA', width: 200,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
]

const idUsuario = window.localStorage.getItem('usuario')

const baseUrl = `http://10.30.2.167:4000/api/Ideas/Usuario${idUsuario}`

const TableIdeas = () => {
  //1 Configurar los hooks
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(5);
  const [arrayDatos, setArrayDatos] = useState()


  useEffect(() => {
    fetch(baseUrl)
      .then((data) => data.json())
      .then((data) => {
        setTableData(data)
        console.log(data)
      })
  }, [])

  tableData.map((exam) => {
    exam['id'] = exam.examId
  })

  const dataFilter = tableData.map(({ iD_IDEA, fechA_CREACION_IDEA, titulO_IDEA, categoria, coaches, areA_SOPORTE, ideA_TEXTO }) => ({ iD_IDEA, fechA_CREACION_IDEA, titulO_IDEA, categoria, coaches, areA_SOPORTE, ideA_TEXTO }))
  console.log(dataFilter)

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
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        experimentalFeatures={{ newEditingApi: true }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        getRowHeight={() => 'auto'}
      />
    </Container>
  );
}

export default TableIdeas