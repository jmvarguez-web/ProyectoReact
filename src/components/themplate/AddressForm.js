import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox'; 
/*import Button from '@mui/material/Button';*/
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function AddressForm(rowlibros) {
  const { idlibro, isbn, titulo, autor_id, paginas, fecha_publicacion, anio, editorial } = rowlibros;
     console.log(idlibro);
  
  return (
   
    <div> 

    
        
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          
      <Typography variant="h6" >
        Shipping address
      </Typography>
      <Grid container spacing={3}  >
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="idlibro"
            name="idlibro"
            label="Clave"
            fullWidth
            variant="standard"
            defaultValue={idlibro}
            InputProps={{ xs: { backgroundColor: 'white' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="isbn"
            name="isbn"
            label="ISBN"
            fullWidth
            variant="standard"
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
            
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="autor_id"
            name="autor_id"
            label="Autor"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="paginas"
            name="paginas"
            label="Paginas"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="fecha_publicacion"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="anio"
            name="anio"
            label="Año"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="editorial"
            name="editorial"
            label="Editorial"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid></ThemeProvider>
    </div>
  );
}