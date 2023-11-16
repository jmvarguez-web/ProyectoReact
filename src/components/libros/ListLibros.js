import React,{useState,useEffect} from "react";
import styled from "styled-components";
import devices from "../helpers/MediaQuery";
import DataTable,{createTheme} from 'react-data-table-component';

import Modal from 'react-modal';




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
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zindex:1000
  },
};
createTheme('solarized', {
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



const  ListProducts = () => {
 
   const [libros, setLibros] = useState( [] )

  
   const URL ='https://proyectobackend-production-6540.up.railway.app' //'http://localhost:3010/api/libros'
   const showData = async () => {
   try{
     const response = await fetch(URL)
     const data     = await response.json()
     console.log(data)
     setLibros(data)
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
   }
 
   useEffect( ()=>{
     showData()
   }, [])

  //3 - Configuramos las columns para Datatable

  
  const columns = [
    {
				
      cell: () => <button color="danger" onClick={openModal}>Ver</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
{
      name: 'ID',
      selector: row =>row.idlibro
    },{
      name: 'ISBN',
      sortable: true,
    selector: row =>row.isbn 
    },{
      name: 'TITULO',
      sortable: true,
    selector: row =>row.titulo
    },{
      name: 'ID-AUTOR',
    selector: row =>row.autor_id
    },{
      name: 'PAGINAS',
    selector: row =>row.paginas
    },{
      name: 'FECHA PUBLICACIÓN',
      sortable: true,
    selector: row =>row.fecha_publicacion
    },{
      name: 'AÑO',
      sortable: true,
    selector: row =>row.anio
    },{
      name: 'EDITORIAL',
      sortable: true,
    selector: row =>row.editorial
    },{
      name: 'EDICION',
    selector: row =>row.edicion
    }

  ]
  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}

  //4 - Mostramos la data en DataTable
  return (
    <SectionListProducts >
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
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </SectionListProducts>
  );
}


export default ListProducts;

