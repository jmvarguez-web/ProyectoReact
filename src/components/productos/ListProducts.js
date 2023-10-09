import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

//import ButtonArt from "./buttons/ButtonArt";
import ButtonEfect from "../buttons/ButtonEfect";
import devices from "../helpers/MediaQuery";

const ImgProduct = styled.img`
max-width: 350px;
max-height: 350px;
  transition: transform 0.3s;

&:hover {
  transform: scale(1.1);
  cursor: pointer;
}
`;
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


const ProductoArticles = styled.article`
max-width: 350px;
justify-content: space-around;
background: #121f2e;
color:#fff;
box-shadow: 2px 3px 6px 1px #00000061;
overflow: hidden;
text-align: center;
transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);
@media only screen and ${devices.sm}  {
  
   
  } 
@media only screen and ${devices.md}  {
  
  }  
@media only screen and ${devices.lg}  {
    justify-content: space-around;
   
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


const Genero = styled.span`
display: block;
margin-top: 12px;
font-weight: 600;
font-size: 1.2rem;
`;

const Plataforma = styled.span`
display: block;
margin-top: 12px;
font-weight: 600;
font-size: 1.2rem;
`;

const Desarrollador = styled.span`
display: block;
margin-top: 12px;
font-weight: 600;
font-size: 1.2rem;
`;






function ListProducts({ listgames }) {
  return (
    <SectionListProducts>
      {listgames.map((game) => (
        <ProductoArticles key={game.id} lastChild >
          <ImgProduct src={`${game.thumbnail}`} alt={game.title} />
          <BoxDescripcion>
            <BoxDescripcionH3>Producto Tres</BoxDescripcionH3>
            <TxtDescripcion>{game.description}</TxtDescripcion>
            <Genero>{game.genre}</Genero>
            <Plataforma><span>{game.category}</span></Plataforma>
            <Desarrollador>{game.price}</Desarrollador>
            <ButtonEfect />

          </BoxDescripcion>
        </ProductoArticles>


      ))}
    </SectionListProducts>
  );
}

export default ListProducts;

