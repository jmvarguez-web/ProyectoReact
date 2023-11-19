import React, { useState, useEffect } from "react";
import styled from "styled-components";
import devices from "../helpers/MediaQuery";
import DataTable, { createTheme as themetable  } from 'react-data-table-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme as thememui } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = thememui({
  palette: {
    mode: 'dark',
  },
});


const SectionListProducts = styled.section`

display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
gap: 30px;

@media only screen and ${devices.md}  {
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media only screen and  ${devices.xl} {
    flex-direction: row;
  }
  @media only screen and ${devices["2xl"]} {
    flex-direction: row;
  }

`;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor:'#000',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};
themetable( {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');



const ListProducts = ({ rowlibros }) => {

  const [libros, setLibros] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedLibro, setSelectedLibro] = useState(null);



  const handleOpen = (libro) => {
    setSelectedLibro(libro);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const URL = 'https://proyectobackend-production-6540.up.railway.app/api/libros' //'http://localhost:3010/api/libros'

  
  const showData = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setLibros(data)
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  }

  useEffect(() => {
    showData()
  }, [])

  //3 - Configuramos las columns para Datatable


  const columns = [
    {
     
      cell: (row) =>  <Button variant="contained" color="success" onClick={() => handleOpen(row)}>ver</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'ID',
      selector: row => row.idlibro
    }, {
      name: 'ISBN',
      sortable: true,
      selector: row => row.isbn
    }, {
      name: 'TITULO',
      sortable: true,
      selector: row => row.titulo
    }, {
      name: 'ID-AUTOR',
      selector: row => row.autor_id
    }, {
      name: 'PAGINAS',
      selector: row => row.paginas
    }, {
      name: 'FECHA PUBLICACIÓN',
      sortable: true,
      selector: row => row.fecha_publicacion
    }, {
      name: 'AÑO',
      sortable: true,
      selector: row => row.anio
    }, {
      name: 'EDITORIAL',
      sortable: true,
      selector: row => row.editorial
    }, {
      name: 'EDICION',
      selector: row => row.edicion
    }

  ]
  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

 

  //4 - Mostramos la data en DataTable
  return (
   <div> <SectionListProducts >
      <DataTable

        title="Lista de Libros"
        defaultSortFieldId={1}
        columns={columns}
        data={libros}
        theme="dark"
        pagination paginationComponentOptions={paginationComponentOptions}
        highlightOnHover
        pointerOnHover
      />
    
    </SectionListProducts>
    
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><React.StrictMode>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" >
          {selectedLibro ? "Libro "+ selectedLibro.titulo : ''}
          </Typography>
        
          <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          
      <Typography variant="h6" >
    
      </Typography>
      <Grid container spacing={3}  >
        <Grid item xs={12} sm={6}>
        <TextField
            id="idlibro"
            name="idlibro"
            label="Clave"
            fullWidth
              variant="filled"
            value={selectedLibro ? selectedLibro.idlibro : ''}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="isbn"
            name="isbn"
            label="ISBN"
            fullWidth
            value={selectedLibro ? selectedLibro.isbn : ''}
              variant="filled"
            InputProps={{ xs: { backgroundColor: 'white' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="titulo"
            name="titulo"
            label="Titulo"
            fullWidth
            value={selectedLibro ? selectedLibro.titulo : ''}
              variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="autor_id"
            name="autor_id"
            label="Autor"
            fullWidth
            value={selectedLibro ? selectedLibro.autor_id : ''}
            autoComplete="shipping address-line2"
              variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="paginas"
            name="paginas"
            label="Paginas"
            fullWidth
            value={selectedLibro ? selectedLibro.paginas : ''}
              variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="fecha_publicacion"
            name="fecha_publicacion"
            label="Fecha de publicación"
            fullWidth
            value={selectedLibro ? selectedLibro.fecha_publicacion : ''}
              variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField

            id="anio"
            name="anio"
            label="Año"
            fullWidth
            value={selectedLibro ? selectedLibro.anio : ''}
            autoComplete="shipping postal-code"
              variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField

            id="editorial"
            name="editorial"
            label="Editorial"
            fullWidth
            value={selectedLibro ? selectedLibro.editorial : ''}
              variant="filled"
          />
        </Grid>
     
      </Grid> <Grid container spacing={4}>
  <Grid item xs={3}>
  <Button variant="outlined" color="primary" justifyContent="center" alignItems="center"  sx={{ marginTop: '30px' }}> 
              Editar
            </Button>
  </Grid>
  <Grid item xs={3}>
  <Button variant="outlined" color="primary" justifyContent="center" alignItems="center"  sx={{ marginTop: '30px' }}> 
              Guardar
            </Button>
  </Grid>
  <Grid item xs={3}>
  <Button variant="outlined" color="primary" justifyContent="center" alignItems="center" sx={{ marginTop: '30px' }} > 
              Eliminae
            </Button>
  </Grid>
  <Grid item xs={3}>
  <Button variant="outlined" color="primary" justifyContent="center" alignItems="center" sx={{ marginTop: '30px' }} > 
              Cancelar
            </Button>
  </Grid>
</Grid></ThemeProvider>
        </Box>
      
        </React.StrictMode>
      </Modal>
    </div>
  );
}


export default ListProducts;

