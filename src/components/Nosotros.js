import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";


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




function Nosotros() {
    return (
        <MainConten>
         <MainH1>Nosotros</MainH1>
      
        </MainConten>
    );
}

export default Nosotros;