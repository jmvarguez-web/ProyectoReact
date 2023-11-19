import styled from "styled-components";
import devices from "../helpers/MediaQuery";


const FooterSection = styled.section`
        display: flex;
        gap: 30px;
        margin-bottom: 2rem;
        line-height: 1.7rem;
        padding: 5rem;
        flex-direction: column;
        background: #121f2e !important;
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



const BoxFotter = styled.div`
flex-basis: 1;
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



const BoxNav = styled.nav`list-style: none;`;
const BoxUl = styled.ul`list-style: none;
padding: 0;
margin: 0;`;
const Boxli = styled.li`
color: white;
  text-decoration: none;`;

const BoxAlink = styled.a`
  color: white;
  text-decoration: none;`;

const BoxH3 = styled.h3`
font-family: 'Fjalla One', sans-serif;
font-weight: 400;
font-size: 1.5rem;
margin-bottom: 15px;`;

/*const FooterA = styled.a`
        color: white;
        text-decoration: none;
        `;*/



function Footer() {
  return (

    <FooterSection>
      <BoxFotter>
        <BoxH3>Categorías</BoxH3>
        <BoxNav>
          <BoxUl >
            <Boxli>
              <BoxAlink> Cocina</BoxAlink>
            </Boxli>
          </BoxUl>
          <BoxUl >
            <Boxli><BoxAlink> Cocina</BoxAlink></Boxli>
            <Boxli><BoxAlink> Oficina</BoxAlink></Boxli>
            <Boxli><BoxAlink> Jardín</BoxAlink></Boxli>
            <Boxli><BoxAlink> Cochera</BoxAlink></Boxli>
            <Boxli><BoxAlink> Dormitorios</BoxAlink></Boxli>
          </BoxUl>
        </BoxNav>
      </BoxFotter>
      <BoxFotter>
        <BoxH3>Sobre Nosotros</BoxH3>
        <BoxNav>
          <BoxUl >
            <Boxli><BoxAlink> Nuestra Historia</BoxAlink></Boxli>
            <Boxli><BoxAlink> Misión, visión y valores</BoxAlink></Boxli>
            <Boxli><BoxAlink> Carrera</BoxAlink></Boxli>
            <Boxli><BoxAlink> Políticas de privacidad</BoxAlink></Boxli>
            <Boxli><BoxAlink> Términos del servicio.</BoxAlink></Boxli>
          </BoxUl>
        </BoxNav>
      </BoxFotter>
      <BoxFotter widthBasis100>
        <BoxH3>Soporte</BoxH3>
        <BoxNav>
          <BoxUl >
            <Boxli><BoxAlink> Preguntas frecuentes</BoxAlink></Boxli>
            <Boxli><BoxAlink> Ayuda en línea</BoxAlink></Boxli>
            <Boxli><BoxAlink> Confianza y seguridad.</BoxAlink></Boxli>
          </BoxUl>
        </BoxNav>
      </BoxFotter>
    </FooterSection>


  );
}

export default Footer;