import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductoUno from '../../assets/producto1.jpg';
import devices  from "../helpers/MediaQuery";
//import ButtonArt from "./buttons/ButtonArt";
import ButtonEfect from "../buttons/ButtonEfect";


const Section = styled.section`
margin: 2.5rem 0;
`;
const ImgProduct=styled.img`
width: 100%;
display: block;
`;
const Producto = styled.article`
display: flex;
align-items: center;
box-shadow: 2px 3px 6px 1px #00000061;
text-align: center;
flex-direction: column;
overflow: hidden;
@media only screen and ${devices.xl} {
  flex-direction: row;
}
@media only screen and ${devices.sm} {
  flex-direction: row;
 
}
`;

const ColumnaUno = styled.div`
flex-basis: 60%;
  overflow: hidden;
`;

const ColumnaDos = styled.div`
flex-basis: 40%;
padding: 1.5rem;
background: #121f2e;
color:#fff;
`;

const ColumnaDosH3 = styled.h3`
font-family: 'Playfair Display', serif;
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



function SeccionProduct_1() {
    return (
        <Section>
            <Producto>
            <ColumnaUno>
            <ImgProduct src={ProductoUno} alt="Descripción de la imagen"  />
            </ColumnaUno>
            <ColumnaDos>
            <ColumnaDosH3>
            Producto 1
            </ColumnaDosH3>
            <TxtDescripcion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.
            </TxtDescripcion>
            <Precio> $12,000</Precio>
          
                        <ButtonEfect/>
            </ColumnaDos>
            </Producto>
        </Section>
    );
}

export default SeccionProduct_1;
