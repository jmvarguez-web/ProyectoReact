import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import Categoriaimg1 from '../../assets/photo1.jpg';
import Categoriaimg2 from '../../assets/photo2.jpg';
import Categoriaimg3 from '../../assets/photo-.jpg';
import devices  from "../helpers/MediaQuery";

const ImgServicio=styled.img`
width: 100%;
display: block;
border-radius: 10px 10px 0 0;
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
const SectionCategorias = styled.section`
margin: 2.5rem 0;
display: flex;
gap: 30px;
flex-direction: column;
@media only screen and ${devices.xl} {
    flex-direction: row;
   
  }

  @media only screen and ${devices.sm} {
    flex-direction: row;
   
  }
`;
const ServicioH2=styled.h2 `
font-family: 'Fjalla One', sans-serif;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    
 `;

 
// const MainH1 = styled.h1`
// font-family: 'Fjalla One', sans-serif;
// text-align: center;
// `;


const Servicio = styled.div`
flex-basis: 33.33333%;
box-shadow: 0 0 2px #1586fb;
padding: 0px;
border-radius: 10px 10px 0 0;
background: #1586fb1f;
overflow: hidden;
box-shadow: 2px 3px 6px 1px #00000061;
display: flex;
flex-direction: column;
`;
const Plead=styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0 auto;
  
  padding: 3rem;
}
`;

const BackgroundNosotros = styled.div`

background-size: cover;
background-position: center; 
background-image: url(${props => props.backgroundImage});
flex: 50%;
order: ${props => (props.orden ? props.orden : 0)};
height: 550px;
    padding: 3rem;
    margin-top: auto;
    margin-bottom: auto;
`;


function Servicios() {
    return (
        <SectionCategorias>
        <Servicio>
        <ServicioH2>Servicios</ServicioH2>
            {/* <ImgServicio src={Categoriaimg1} alt="Servicio 1"/> */}

            <BackgroundNosotros backgroundImage={Categoriaimg1} orden={2} />

            
        </Servicio>
        <Servicio>
            <ImgServicio src={Categoriaimg2} alt="Servicio 2"/>
            <ServicioH2>Servicios 1</ServicioH2>
            <Plead >mos una empresa 100% mexicana que inició su actividad desde hace más de 50
                            años. Nuestra ética empresarial y el genuino interés en la satisfacción de las necesidades
                            de nuestros clientes, profesándoles un trato cálido, amable y respetuoso han sido los
                            pilares para consolidar el prestigio que nos distingue, y posicionar nuestra marca como una
                            de las más queridas del mercado.</Plead>
        </Servicio>
        <Servicio>
<ServicioH2>Servicios 3</ServicioH2>
        <Plead >mos una empresa 100% mexicana que inició su actividad desde hace más de 50
                            años. Nuestra ética empresarial y el genuino interés en la satisfacción de las necesidades
                            de nuestros clientes, profesándoles un trato cálido, amable y respetuoso han sido los
                            pilares para consolidar el prestigio que nos distingue, y posicionar nuestra marca como una
                            de las más queridas del mercado.</Plead>
                            
            <ImgServicio src={Categoriaimg3} alt="Servicio 3"/>
            
        </Servicio>
        </SectionCategorias>
    );
}

export default Servicios;