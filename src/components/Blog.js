import React, { useState,useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import styled from "styled-components";
 import ButtonBlog from "./buttons/ButtonBlog";

// import FondoImagen1 from '../assets/photo1.jpg';


// const spacingMedium = '1.6rem';
// const spacingSmall = `${parseFloat(spacingMedium) * 0.5}rem`;
// const spacingSmedium = `${parseFloat(spacingMedium) * 0.707}rem`;
// const spacingLarge = `${parseFloat(spacingMedium) * 2}rem`;
// const spacingXlarge = `${parseFloat(spacingMedium) * 4}rem`;
// const spacingXxlarge = `${parseFloat(spacingMedium) * 8}rem`;
// const boxSize = spacingXxlarge;
// const colortext = '1.6rem';

const MainConten = styled.main`
padding: 2% 5%;
`;
const Cardband = styled.div`
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;

    @media (min-width: 30em) {
        grid-template-columns: 1fr 1fr;
      }
      
      @media (min-width: 60em) {
        grid-template-columns: repeat(4, 1fr);
      }
    `;

const CardArticle = styled.article`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardH1 = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #999;
`;
const Cardp = styled.p`
  flex: 1;
  line-height: 1.4;
  color: #999;
`;
const CardSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 0 0;
`;
const CardThumb = styled.div`
  padding-bottom: 60%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  transition: transform 0.3s;
  &:hover {
    -webkit-transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform: rotateY(180deg);
    transform-style: preserve-3d;}
`;
const Carditem1 = styled.div`
box-shadow: 0 0 2px #1586fb;
background: #1586fb1f;
overflow: hidden;
transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);

  &:hover {
    transform: translate(0px, -5px);
    cursor: pointer;
  }

    @media (min-width: 60em) {
      grid-column: 1 / span 2;
      
      h1 {
        font-size: 24px;
      }
    }
    `;  
    
    const Carditem = styled.div`
    box-shadow: 0 0 2px #1586fb;
background: #1586fb1f;
overflow: hidden;
        h1 {
            font-size: 24px;
        }
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);

  &:hover {
    transform: translate(0px, -5px);
    cursor: pointer;
  }

        `; 

    

function Nosotros() {
    const [data, setData] = useState([]);

    useEffect(() => {
   
      const apiUrl = 'https://www.alphavantage.co/query'; // Reemplaza con la URL de tu API
    
      const params = {
        function: 'NEWS_SENTIMENT',
        ttopics:'technology',
        sort:'RELEVANCE',
        apikey:'H5NY3OH2P1380QUL',
        limit: '1',
      };
  
     
  
      // Realizar la solicitud GET con Axios
      axios.get(apiUrl, {
        params: params,
    
      })
      .then((response) => {
        setData(response.data.feed);
       
      })
      .catch((error) => {
        console.error(' axios Error al realizar la solicitud:', error);
      });
    }, []);
  
    return (
        <MainConten>

            <Cardband >
            {data.map((News,index) => (

index===0 ?(
    <Carditem1 key={index} >
    <CardThumb  backgroundImage={News.banner_image}></CardThumb>
    <CardArticle>
        <CardH1>{News.title}</CardH1>
        <Cardp>{News.summary}</Cardp>
        <CardSpan>{News.source}</CardSpan>
        
        <ButtonBlog link={News.url} text="Leer Mas"/>
    </CardArticle>
</Carditem1>
  
    ):(
        <Carditem key={index} >
        <CardThumb  backgroundImage={News.banner_image}></CardThumb>
        <CardArticle>
            <CardH1>{News.title}</CardH1>
            <Cardp>{News.summary}</Cardp>
            <CardSpan>{News.source}</CardSpan>
            <ButtonBlog link={News.url} text="Leer Mas"/>
        </CardArticle>
    </Carditem>
       )
               
            ))}
            </Cardband>


        </MainConten>
    );
}

export default Nosotros;