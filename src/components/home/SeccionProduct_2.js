import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductoDos from '../../assets/producto2.jpg';
import ProductoTres from '../../assets/producto3.jpg';
import devices  from "../helpers/MediaQuery";
//import ButtonArt from "./buttons/ButtonArt";
import ButtonEfect from "../buttons/ButtonEfect";
const ImgProduct=styled.img`
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
const SectionDos = styled.section`
display: flex;
gap: 30px;
flex-direction: column;
margin: 2.5rem 0;
@media only screen and ${devices.xl} {
    flex-direction: row;
   
  }
@media only screen and ${devices.sm} {
    flex-direction: row;
   
  }
`;


const ProductoArticles = styled.article`
flex-basis: 50%;
background: #121f2e;
color:#FFF;
box-shadow: 2px 3px 6px 1px #00000061;
overflow: hidden;
text-align: center;
transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);

  &:hover {
    transform: translate(0px, -5px);
    cursor: pointer;
  }


`;



const BoxDescripcion = styled.div`
padding: 1.5rem;
`;

const BoxDescripcionH3 = styled.h3`
font-family: 'Fjalla One', sans-serif;
font-weight: 400;
font-size: 1.5rem;
margin-bottom: 15px;
`;

const TxtDescripcion = styled.p`
margin: 2.5rem 0;
`;

const Precio = styled.span`
display: block;
margin-top: 12px;
font-weight: 600;
font-size: 1.2rem;
`;



function SeccionProduct_2() {
    return (
        <SectionDos>
            <ProductoArticles>
            <ImgProduct src={ProductoDos} alt="Descripción de la imagen"  />
            <BoxDescripcion>
                <BoxDescripcionH3>Producto Dos</BoxDescripcionH3>
                <TxtDescripcion>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.</TxtDescripcion>
                        <Precio> $12,000</Precio>
                        <ButtonEfect/>

            </BoxDescripcion>
            </ProductoArticles>
            <ProductoArticles>
            <ImgProduct src={ProductoTres} alt="Descripción de la imagen"  />
            <BoxDescripcion>
                <BoxDescripcionH3>Producto Tres</BoxDescripcionH3>
                <TxtDescripcion>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.</TxtDescripcion>
                        <Precio> $12,000</Precio>
                        <ButtonEfect/>

            </BoxDescripcion>
            </ProductoArticles>
        </SectionDos>
    );
}

export default SeccionProduct_2;

