import React,{ useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import axios from "axios";
import styled from "styled-components";
import ListProducts from "./productos/ListProducts";

const MainConten = styled.main`
padding: 2% 5%;
`;

const MainH1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;


/* const [listgame, setListgame] = useState([]);


    

    useEffect(() => {
        const fetchListgames = async () => {
            const response = await axios.get(API_URL);
            const data = await response.json();
            setListgame(data.results);

            console.log(data.results);
        };

        fetchListgames();
    }, []); */

function Productod() {

    const [listgames, setListGame] = useState([]);

    useEffect(() => {
        const fetchListGames = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await await response.json(); 
            
            setListGame(data.products);
        };

        fetchListGames();
    }, []);


    return (
        <MainConten>
         <MainH1>Productos</MainH1>
          <ListProducts listgames={listgames}  /> 
      
        </MainConten>
    );
}

export default Productod;