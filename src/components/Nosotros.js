import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
// import devices  from "./helpers/MediaQuery";
import SectionCardNosotros from "./nosotros/CardNosotros";
import SectionNosotros from "./nosotros/ContainerNosotros";
import Categorias from "./home/Categorias";
import ServiciosNosotros from "./nosotros/ServiciosNosotros";

import ContainerMarcas from "./nosotros/ContainerMarcas";


const MainConten = styled.main`
padding: 2% 5%;
`;


function Nosotros() {
    return (
        <MainConten> 
            <SectionNosotros/>
            <SectionCardNosotros/>
            <ServiciosNosotros/>
            <ContainerMarcas/>
         
            <Categorias/>
            
        </MainConten>
    );
}

export default Nosotros;