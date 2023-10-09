import styled from "styled-components";
import FooterSection from "./FooterSection";
import Disclaimern from "./SectionDisclaimer";
import devices  from "../helpers/MediaQuery";
const FooterContainer = styled.footer`
text-align: center;
background: #3f3f3f;
display: flex;
flex-direction: column;
color: white;
@media only screen and ${devices.xl} {
  
   
  }
`;



function Footer() {
    return (
        <FooterContainer>
             <FooterSection/>
             <Disclaimern/>
        </FooterContainer>
       
    );
}

export default Footer;
