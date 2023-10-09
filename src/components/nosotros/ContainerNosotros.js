import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
//import devices  from "../helpers/MediaQuery";






const MainH1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;

const DivTextCenter = styled.div`
text-align: center;
`;


const ContainerNosotros=styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
padding-right: 1.5rem;
padding-left: 1.5rem;`;

const ContainerTexNosotros=styled.div`
margin-bottom: 1.5rem; 
margin-right: auto;
  margin-left: auto ;
  text-align: center;
`;
const Plead=styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;




function SectionNosotros() {
    return (
  
            <ContainerNosotros >
                <div >
                    <DivTextCenter>
                    <MainH1>Nosotros</MainH1>
                    </DivTextCenter>
                </div>
                <ContainerTexNosotros>
                    <DivTextCenter>

                        <Plead >mos una empresa 100% mexicana que inició su actividad desde hace más de 50
                            años. Nuestra ética empresarial y el genuino interés en la satisfacción de las necesidades
                            de nuestros clientes, profesándoles un trato cálido, amable y respetuoso han sido los
                            pilares para consolidar el prestigio que nos distingue, y posicionar nuestra marca como una
                            de las más queridas del mercado.</Plead>
                    </DivTextCenter>
                </ContainerTexNosotros>
            </ContainerNosotros>
    );
}

export default SectionNosotros;