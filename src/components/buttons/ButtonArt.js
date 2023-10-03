import styled from "styled-components";


const ButtonArticulo = styled.button`
padding: 8px 13px;
  box-shadow: 1px 2px 5px #002f60;
  margin-top: 13px;
  background: #b30000;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: large;
`;



function ButtonArt() {
    return (
        <ButtonArticulo>
         Agregar al carrito
        </ButtonArticulo>
       
    );
}

export default ButtonArt;
