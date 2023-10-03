import styled from "styled-components";



const SectionDisclaimer=styled.section` 
        background: #1e1e1e;
        padding: 15px 1rem;`;

function Disclaimer() {
    return (
  
        <SectionDisclaimer>
            <p>Todos los derechos reservados. Tienda de Muebles</p>
        </SectionDisclaimer>
    );
}

export default Disclaimer;