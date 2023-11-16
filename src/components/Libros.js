import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import ListLibros from "./libros/ListLibros";

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

  

    return (
        <MainConten>
         <MainH1>Librería</MainH1>
          <ListLibros   /> 
      
        </MainConten>
    );
}

export default Productod;