import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {styled,keyframes} from "styled-components";
import devices  from "../helpers/MediaQuery";
import { FaBars } from "react-icons/fa6";


const resalta = keyframes`
0% {
    transform: translateY(3px);
}

50% {
    transform: translateY(0px);
}

100% {
    transform: translateY(3px);
}
`;

const colorChangeAnimation = keyframes`
  0% {
    color: initial;
  }
  100% {
    color: Black; 
  }
`;
const Navmain = styled.nav`
        background: #b30000;
        padding: 10px;
        box-shadow: 0px 9px 4px 2px #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        margin: 0;
      
}
`;

const Menu = styled.ul`
        color: black;
        list-style: none;
        display: flex;
        /*margin: 1rem;*/
        margin: 0;
        padding: 0px;
        flex-direction: column;
        justify-content: space-evenly;
        max-height: fit-content;
        visibility: hidden;
        transition: all 600ms cubic-bezier(0.19, 1, 0.22, 1);
        

        &.open {
            max-height: fit-content;
            visibility: visible;
            opacity: 1;
            transform: rotate(0);
        }

        @media only screen and ${devices.xxs}  {
        
            flex-direction: column;
            max-height: fit-content;
            visibility: hidden;
            max-height: 0;
        }
        @media only screen and ${devices.xs}  {
        
            flex-direction: column;
            max-height: fit-content;
            visibility: hidden;
            max-height: 0;
        }
    @media only screen and ${devices.sm}  {
        
            flex-direction: column;
            max-height: fit-content;
            visibility: hidden;
            max-height: 0;
        }
    @media only screen and ${devices.md}  {
        
            flex-direction: row;
            max-height: fit-content;
            visibility: visible;}   
    @media only screen and  ${devices.xl} {
            margin: 1rem;
            flex-direction: row;
            max-height: fit-content;
            visibility: visible;
        }
    @media only screen and ${devices.lg}  {
            flex-wrap: wrap;
            flex-direction: row;
            max-height: fit-content;
            visibility: visible;}
    @media only screen and ${devices["2xl"]} {
            margin: 1rem;
            flex-direction: row;
            visibility: visible;
            max-height: fit-content;
        
        }  

`;

const Navlink = styled.li`
        list-style: none;   
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;
        color: white;
        cursor: pointer;
        padding: 0.9rem 0;

        &:hover {
            background-color: black;
            border-bottom: 3px solid Black;
        }
`;
const NavlinkActive = styled.li`
        list-style: none;   
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;
        
        background-color: white;
        cursor: pointer;
        padding: 0.9rem 0;

        &:hover {
           
            border-bottom: 3px solid Black;
        }
`;
const NavaActive =  styled(Link)`
font-family: 'Fjalla One', sans-serif;
            color: #037BC0 !important;
            padding: 0.9rem;
            transform: scale(1.3);
            background-color: white;
            animation: ${resalta} 1s ease infinite;
            
`;

const NavaALink =  styled(Link)`
font-family: 'Fjalla One', sans-serif;
            color: white;
            padding: 0.9rem ;
        &:hover {
            background-color: white;
            transform: scale(1.3)
            cursor: pointer;
            animation: ${colorChangeAnimation} 0.5s forwards;
        }
            
`;

const NavaI = styled.i `
display: none;
    padding:20px;
    background: rgba(255,255,255,.75);
    border-radius:3px;
    color: black;
    transition:.25s;
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);
    animation: 1.25s bounce infinite;
    &:hover {
        cursor:pointer;
        background: rgba(255,255,255,.95);
        animation-play-state: paused;
      }
      @media only screen and ${devices.xxs}  {
        display: block; 
 }
      @media only screen and ${devices.xs}  {
        display: block; 
    
    }
      @media only screen and ${devices.sm}  {
        display: block; 
    
    }
@media only screen and ${devices.md}  {
    display: none;
        }   
@media only screen and  ${devices.xl} {
    display: none;
    }
@media only screen and ${devices.lg}  {
    display: none;
        }
@media only screen and ${devices["2xl"]} {
     display: none;
    
    } 

  `;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return (
        

    <Navmain>  <NavaI  onClick={toggleMenu}><FaBars/></NavaI>
        <Menu className={isOpen ? 'open' : ''}>
      
        <NavlinkActive >
                <NavaActive to="/">Inicio</NavaActive>
            </NavlinkActive>
            <Navlink >
                <NavaALink to="/nosotros">Nosotros</NavaALink>
            </Navlink>
            <Navlink >
                <NavaALink to="/productos">Tienda</NavaALink>
            </Navlink>
            <Navlink >
                <NavaALink to="/Blog"> Blog</NavaALink>
            </Navlink>
            <Navlink >
                <NavaALink to="/calculadora">Calculadora</NavaALink>
            </Navlink>
            <Navlink >
                <NavaALink to="/libros">Libros</NavaALink>
            </Navlink>
            <Navlink >
                <NavaALink to="/ubicacion">Ubicación</NavaALink>
            </Navlink>
       

        </Menu>
    </Navmain>

    );
}

export default Navbar;