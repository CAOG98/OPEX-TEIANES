import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import styles from './FormIdea.module.css'
import { Outlet } from 'react-router-dom';
import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FormIdea = () =>{
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <Container style={{border:"1px solid #000", borderRadius:"10px", padding:"50px"}}>
            <h1>CREAR TEIAN</h1>
            <TextField style={{width:"100%"}}
          id="outlined-textarea"
          label="TITULO DEL TEIAN"
          placeholder="Aqui va el titulo de tu idea"
          multiline
        />
        <FormControl sx={{width: "100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Categoria"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
            <Outlet />
        </Container>
    );
}

  export default FormIdea