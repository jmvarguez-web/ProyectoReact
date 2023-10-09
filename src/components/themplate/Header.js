import React from "react";
import styled from "styled-components";


const Headerpage = styled.header`
padding: 1.5rem 0;
`;
const Span=styled.span`color:#037bc0`;
const H1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;




function Header() {
    return (
        <Headerpage>
         <H1>Proyecto <Span>React</Span></H1>
        </Headerpage>
    );
}

export default Header;