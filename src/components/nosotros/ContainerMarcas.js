import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
// import devices  from "../helpers/MediaQuery";
import { BsWindows,BsXbox,BsWhatsapp,BsYoutube } from "react-icons/bs";





const MainH1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;

const DivTextCenter = styled.div`
text-align: center;
`;


const ContainerMarcas=styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
padding-right: 1.5rem;
padding-left: 1.5rem;`;

const ContainerTexMarcas=styled.div`
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
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;



const ColumnaDos = styled.div`
flex: 1 0 50%;

color:#fff;
padding: 1rem;
margin-top: auto;
margin-bottom: auto;
min-height: 25vh;
display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`;

// const ColumnaDosH3 = styled.h3`
// font-family: 'Playfair Display', serif;
// font-weight: 400;
// font-size: 2em;
// margin-bottom: 15px;
// `;



const TxtDescripcion = styled.p`
margin: 0 1.5rem;
padding: 1.5rem;
`;
const ContainerMarca =styled.div`display: flex;
flex-direction: row;
column-gap: 30px;`;

function SectionMarcas() {
    return (
  
            <ContainerMarcas >
                <div >
                    <DivTextCenter>
                    <MainH1>Marcas</MainH1>
                    </DivTextCenter>
                </div>
                <ContainerTexMarcas>
                    <DivTextCenter>

                        <Plead >mos una empresa 100% mexicana que inició su actividad desde hace más de 50
                            años. Nuestra ética empresarial y el genuino interés en la satisfacción de las necesidades
                            de nuestros clientes, profesándoles un trato cálido, amable y respetuoso han sido los
                            pilares para consolidar el prestigio que nos distingue, y posicionar nuestra marca como una
                            de las más queridas del mercado.</Plead>
                    </DivTextCenter>
                </ContainerTexMarcas>
                <ContainerMarca>

                <ColumnaDos>
                <BsWindows size={'150px'}/>
                    <TxtDescripcion>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.
                    </TxtDescripcion>
                </ColumnaDos>
                
                <ColumnaDos>
                <BsXbox size={'150px'}/>
                    <TxtDescripcion>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.
                    </TxtDescripcion>
                </ColumnaDos>

                </ContainerMarca>
                <ContainerMarca>

<ColumnaDos>
<BsWhatsapp size={'150px'}/>
    <TxtDescripcion>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
        ipsa
        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
        eveniet
        cupiditate pariatur dignissimos.
    </TxtDescripcion>
</ColumnaDos>

<ColumnaDos>
<BsYoutube size={'150px'}/>
    <TxtDescripcion>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
        ipsa
        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
        eveniet
        cupiditate pariatur dignissimos.
    </TxtDescripcion>
</ColumnaDos>

</ContainerMarca>
            </ContainerMarcas>
    );
}

export default SectionMarcas;