import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import SeccionProducUno from "./home/SeccionProduct_1";
import SeccionProductosDos from "./home/SeccionProduct_2";
import SeccionProductosTres from "./home/SeccionProduct_3";
import Categorias from "./home/Categorias";
import Banner from "./home/Banner";

/*main {
  padding: 2% 5%;
} */
const MainConten = styled.main`
padding: 2% 5%;
`;

const MainH1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;




function Main() {
    return (
      <div>
        <Banner/>
        <MainConten>  
         <MainH1>Contenido principal</MainH1>
         <SeccionProducUno/>
         <SeccionProductosDos/>
         <SeccionProductosTres/>
         <Categorias/>
        </MainConten></div>
    );
}

export default Main;