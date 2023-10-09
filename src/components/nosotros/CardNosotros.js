import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import FondoImagen1 from '../../assets/photo1.jpg';
import devices from "../helpers/MediaQuery";


const Section = styled.section`
margin: 2.5rem 0;
`;

const BackgroundNosotros = styled.div`

background-size: cover;
background-position: center; 
background-image: url(${props => props.backgroundImage});
flex: 50%;
order: ${props => (props.orden ? props.orden : 0)};
    min-height: 35vh;
    padding: 3rem;
    margin-top: auto;
    margin-bottom: auto;
`;



const CardNosotros = styled.article`
display: flex;
align-items: center;
box-shadow: 2px 3px 6px 1px #00000061;
text-align: center;
flex-direction: column;
overflow: hidden;
@media only screen and ${devices.xl} {
  flex-direction: row;
}
@media only screen and ${devices.sm} {
  flex-direction: row;
 
}
`;


const ColumnaDos = styled.div`
flex-basis: 50%;
background: #121f2e;
color:#fff;
padding: 3rem;
margin-top: auto;
margin-bottom: auto;
min-height: 35vh;
display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ColumnaDosH3 = styled.h3`
font-family: 'Playfair Display', serif;
font-weight: 400;
font-size: 2em;
margin-bottom: 15px;
`;


// const MainH1 = styled.h1`
// font-family: 'Fjalla One', sans-serif;
// text-align: center;

// `;


const TxtDescripcion = styled.p`

margin: 2.5rem 0;
`;




function SectionCardNosotros() {
    return (

        <Section>
            <CardNosotros>

                <BackgroundNosotros backgroundImage={FondoImagen1} orden={2} />

                <ColumnaDos>
                    <ColumnaDosH3>
                    Misión
                    </ColumnaDosH3>
                    <TxtDescripcion>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.
                    </TxtDescripcion>
                </ColumnaDos>
            </CardNosotros>
            <CardNosotros>

                <BackgroundNosotros backgroundImage={FondoImagen1} orden={0} />

                <ColumnaDos>
                    <ColumnaDosH3>
                    Visión
                    </ColumnaDosH3>
                    <TxtDescripcion>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem quo, obcaecati adipisci
                        ipsa
                        commodi sit incidunt consequuntur consectetur nemo harum neque, magnam dolorem architecto ad
                        eveniet
                        cupiditate pariatur dignissimos.
                    </TxtDescripcion>
                </ColumnaDos>
            </CardNosotros>
        </Section>

    );
}

export default SectionCardNosotros;