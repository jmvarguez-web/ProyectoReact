import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductoCuatro from '../../assets/producto4.jpg';
import ProductoCinco from '../../assets/producto5.jpg';
import ProductoSeis from '../../assets/producto-6.jpg';
//import ButtonArt from "./buttons/ButtonArt";
import ButtonEfect from "../buttons/ButtonEfect";
import devices  from "../helpers/MediaQuery";

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
const SectionTres = styled.section`
display: flex;
gap: 30px;
flex-direction: column;
flex-wrap: wrap;
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


const ProductoArticles = styled.article`
flex-basis: 1;

background: #121f2e;
color:#fff;
box-shadow: 2px 3px 6px 1px #00000061;
overflow: hidden;
text-align: center;
transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);
@media only screen and ${devices.sm}  {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: ${props => (props.widthBasis100 ? "100%" : 0)};
   
  } 
@media only screen and ${devices.md}  {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: ${props => (props.widthBasis100 ? "100%" : 0)};
  }  
@media only screen and ${devices.lg}  {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
   
  }
  
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



function SeccionProduct_3() {
    return (
        <SectionTres>
            <ProductoArticles>
            <ImgProduct src={ProductoCuatro} alt="Descripción de la imagen"  />
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
            <ImgProduct src={ProductoCinco} alt="Descripción de la imagen"  />
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
            <ProductoArticles  lastChild widthBasis100>
            <ImgProduct src={ProductoSeis} alt="Descripción de la imagen"  />
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
        </SectionTres>
    );
}

export default SeccionProduct_3;

