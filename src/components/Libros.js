import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import ListLibros from "./libros/ListLibros";

const MainConten = styled.main`
padding: 2% 5%;
`;

const MainH1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;



function Productod() {

  

    return (
        <MainConten>
         <MainH1>Librería</MainH1>
          <ListLibros   /> 
      
        </MainConten>
    );
}

export default Productod;