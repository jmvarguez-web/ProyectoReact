import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import Categoriaimg1 from '../../assets/categoria1.jpg';
import Categoriaimg2 from '../../assets/categoria2.jpg';
import Categoriaimg3 from '../../assets/categoria3.jpg';
import devices  from "../helpers/MediaQuery";

const ImgCategory=styled.img`
width: 100%;
display: block;
border-radius: 10px 10px 0 0;
max-width: 100%;
  /* Escala la imagen hasta su ancho máximo permitido */
  max-height: 100%;
  /* Escala la imagen hasta su alto máximo permitido */
  transition: transform 0.3s;

&:hover {
  transform: scale(1.1);
  cursor: pointer;
}
`;
const SectionCategorias = styled.section`
margin: 2.5rem 0;
display: flex;
gap: 30px;
flex-direction: column;
@media only screen and ${devices.xl} {
    flex-direction: row;
   
  }

  @media only screen and ${devices.sm} {
    flex-direction: row;
   
  }
`;
const CategoriaH2=styled.h2 `
font-family: 'Fjalla One', sans-serif;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
 `;

const Categoria = styled.div`
flex-basis: 33.33333%;
box-shadow: 0 0 2px #1586fb;
padding: 0px;
border-radius: 10px 10px 0 0;
background: #1586fb1f;
overflow: hidden;
box-shadow: 2px 3px 6px 1px #00000061;
`;

function Categorias() {
    return (
        <SectionCategorias>
        <Categoria>
            <ImgCategory src={Categoriaimg1} alt="Categoria 1"/>
            <CategoriaH2>CATEGORIA 1</CategoriaH2>
        </Categoria>
        <Categoria>
            <ImgCategory src={Categoriaimg2} alt="Categoria 2"/>
            <CategoriaH2>CATEGORIA 2</CategoriaH2>
        </Categoria>
        <Categoria>
            <ImgCategory src={Categoriaimg3} alt="Categoria 3"/>
            <CategoriaH2>CATEGORIA 3</CategoriaH2>
        </Categoria>
        </SectionCategorias>
    );
}

export default Categorias;