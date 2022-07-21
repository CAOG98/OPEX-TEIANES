import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './TableIdeas.module.css'
import 'styled-components'
import './TableIdeas.css'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';

//1. Configuramos las columnas para DataTable
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'Fecha',
    headerName: 'FECHA',
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'Titulo',
    headerName: 'TITULO', width: 400,
    headerAlign: 'center',
    headerClassName: 'headerTable'
  },
  {
    field: 'Categoria',
    headerName: 'CATEGORÍA', width: 400,
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
    headerName: 'AREA DE SOPORTE', width: 380,
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
        // console.log(data)
        var datosArray = [];
        var fila = 0
        const mappedResults =
          Object.keys(data).map(key => {
            const value = data[key]
          })

        data.forEach(index => {
          datosArray[fila] = [];
          datosArray[fila].push(index.iD_IDEA, index.fechA_CREACION_IDEA, index.titulO_IDEA, index.categoria, index.coaches, index.areA_SOPORTE);
          fila += 1;
        })

        // data.forEach(index2 =>{
        //   const rows: RowsProp =[
        //     {id: index2.iD_IDEA, Fecha: index2.fechA_CREACION_IDEA, Titulo: index2.titulO_IDEA, Categoria: index2.categoria, Coach: index2.coaches, AreaSoporte: index2.areA_SOPORTE }
        //   ]
        //   setArrayDatos(rows)
        // })




        // const datosArray2 = JSON.stringify(datosArray)
        // console.log(datosArray2)
        // setArrayDatos(datosArray2)

        setArrayDatos(datosArray)
        console.log(datosArray)
      })
    // .then((data) => setTableData(data))
  }, [])

  return (
    <Container className="contTable" >
      <h1 className="titleTable">Mis Teianes</h1>
      <DataGrid
        name="MIS TEIANES"
        rows={tableData}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
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