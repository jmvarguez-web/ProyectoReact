import React, { useState, useEffect } from "react";
import styled from "styled-components";
import devices from "../helpers/MediaQuery";
import DataTable, { createTheme as themetable } from 'react-data-table-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme as thememui } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



import axios from "axios";
// import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const darkTheme = thememui({
  palette: {
    mode: 'dark',
  },
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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
  bgcolor: '#000',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};
themetable({
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
  const [mostrarBotonNew, setMostrarBotonNew] = useState(true);
  const [mostrarBotonSave, setMostrarBotonSave] = useState(true);
  const [mostrarBotonEdit, setMostrarBotonEdit] = useState(true);
  const [mostrarBotonDelete, setMostrarBotonDelete] = useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openAlertError, setOpenAlertError] = React.useState(false);
  const [MensajeAccion, setMensajeAccion] = React.useState('');

  const [formDataBusqueda, setFormDataBusqueda] = useState({
    // Inicia el estado con los campos del formulario
    idlibro: '',
    palabra: '',
  });
  const [formData, setFormData] = useState({
    // Inicia el estado con los campos del formulario
    idlibro: '',
    isbn: '',
    titulo: '',
    autor_id: '',
    paginas: '',
    fecha_publicacion: '',
    anio: '',
    editorial: '',
    edicion: '',
    accion: 'list'
  });
  const URL = 'https://proyectobackend-production-6540.up.railway.app/api/libros';




  // const handleClickAlert = () => {
  //   setOpenAlert(true);
  // };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };



  // const handleClickAlertError = () => {
  //   setOpenAlertError(true);
  // };

  const handleCloseAlertError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlertError(false);
  };

  const handleChange = (e) => {
    // Actualiza el estado cuando se cambia un campo del formulario
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     *
     * insertar nuevo registro
     *
     */


    axios.post(URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setOpenAlertError(false);
        setOpenAlert(true);
        setMensajeAccion('Se ha registrado un nuevo libro con clave: ' + response.data.id);
        handleNew();
        showData();
      })
      .catch(error => {
        setMensajeAccion(error.response.data.message);
        setOpenAlert(false);
        setOpenAlertError(true);

      });




  };



  const handleNew = () => {

    setOpenAlertError(false);

    setFormData({
      idlibro: '',
      isbn: '',
      titulo: '',
      autor_id: '',
      paginas: '',
      fecha_publicacion: '',
      anio: '',
      editorial: '',
      edicion: '',
    });
    setMostrarBotonNew(false);
    setMostrarBotonSave(true);
    setMostrarBotonEdit(false);
    setMostrarBotonDelete(false);
    console.log("nuevo");

  };

  const handleEdit = (libro) => {

    /**
     *
     * Editar libro seleccionado
     *
     */


    axios.patch(URL + `/${formData.idlibro}`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setOpenAlertError(false);
        setOpenAlert(true);
        console.log(response.data);
        setMensajeAccion('Se ha editado el libro con clave: ' + response.data.idlibro);
        showData();
      })
      .catch(error => {
        setMensajeAccion(error.response.data.message);
        setOpenAlert(false);
        setOpenAlertError(true);

      });


  };

  const handleDelete = (libro) => {
   
   /**
    *
    * Eliminar registro
    *
    */
   
   axios.delete(URL + `/${formData.idlibro}`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      setOpenAlertError(false);
     
      if(response.status===204){
        setOpenAlert(true);
        setMensajeAccion('Se ha Eliminado el libro con clave: ',formData.idlibro );
        handleNew();
      }else{
        setOpenAlertError(true);
        setMensajeAccion('No se pudo Eliminar el libro con clave: ',formData.idlibro );
      }
      
      showData();
    })
    .catch(error => {
      setMensajeAccion(error.response.data.message);
      setOpenAlert(false);
      setOpenAlertError(true);

    });

   

  };


  /**habre la modal del formulario con los datos del libro */
  const handleOpen = (libro) => {
    setFormData(libro);
    setOpenAlert(false);
    setMostrarBotonNew(true);
    setMostrarBotonSave(false);
    setMostrarBotonEdit(true);
    setMostrarBotonDelete(true);
    setOpen(true);
  };
  /**cierra modal */
  const handleClose = () => setOpen(false);



  const showData = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
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

      cell: (row) => <Button variant="contained" color="success" onClick={() => handleOpen(row)}>ver</Button>,
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
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openAlert} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          {MensajeAccion}
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openAlertError} onClose={handleCloseAlertError}>
        <Alert onClose={handleCloseAlertError} severity="error" sx={{ width: '100%' }}>
          {MensajeAccion}
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          handleCloseAlert();
          handleCloseAlertError();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <React.StrictMode>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Typography id="modal-modal-title" variant="h4" >

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
                      value={formData ? formData.idlibro : ''}
                      onChange={handleChange}
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
                      value={formData ? formData.isbn : ''}
                      onChange={handleChange}


                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="titulo"
                      name="titulo"
                      label="Titulo"
                      fullWidth
                      value={formData ? formData.titulo : ''}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="autor_id"
                      name="autor_id"
                      label="Autor"
                      fullWidth
                      value={formData ? formData.autor_id : ''}
                      onChange={handleChange}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="paginas"
                      name="paginas"
                      label="Paginas"
                      fullWidth
                      value={formData ? formData.paginas : ''}
                      onChange={handleChange}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>

                    <TextField
                      id="fecha_publicacion"
                      name="fecha_publicacion"
                      label="Fecha de publicación  DD/MM/AAAA"
                      fullWidth
                      value={formData ? formData.fecha_publicacion : ''}
                      onChange={handleChange}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField

                      id="anio"
                      name="anio"
                      label="Año"
                      fullWidth
                      value={formData ? formData.anio : ''}
                      onChange={handleChange}
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
                      value={formData ? formData.editorial : ''}
                      onChange={handleChange}
                      variant="filled"
                    />
                  </Grid>

                </Grid> <Grid container spacing={4}>
                  <Grid item xs={3}>
                    {mostrarBotonSave && (
                      <Button type="submit" disabled={!mostrarBotonSave} variant="outlined" color="primary" sx={{ marginTop: '30px' }}>
                        GUARDAR
                      </Button>)}
                    {mostrarBotonNew && (
                      <Button disabled={!mostrarBotonNew} onClick={handleNew} variant="outlined" color="primary" sx={{ marginTop: '30px' }}>
                        Nuevo
                      </Button>)}
                  </Grid>
                  <Grid item xs={3}>
                    <Button disabled={!mostrarBotonEdit} onClick={() => handleEdit(formData)} variant="outlined" color="primary" sx={{ marginTop: '30px' }}>
                      Editar
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button disabled={!mostrarBotonDelete} onClick={() => handleDelete(formData)} variant="outlined" color="primary" sx={{ marginTop: '30px' }} >
                      Eliminar
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" onClick={handleClose} color="primary" sx={{ marginTop: '30px' }} >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid></ThemeProvider>
            </form>
          </Box>

        </React.StrictMode>
      </Modal>
    </div>
  );
}


export default ListProducts;

