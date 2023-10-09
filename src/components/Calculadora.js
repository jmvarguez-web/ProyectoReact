import React, { useState } from "react";
import styled from "styled-components";


/*main {
  padding: 2% 5%;
} */
const MainConten = styled.main`
padding: 2% 5%;
`;

const MainH1 = styled.h1`
font-family: 'Fjalla One', sans-serif;
text-align: center;
`;

const MainCalculadora = styled.div`
box-shadow: 0 0 2px #1586fb;
background: #1586fb1f;
overflow: hidden;
border-radius: 10px;
box-shadow: 0 8px  #1586fb1f;
height: 355px;
min-width: 690px;
  width: 690px;`;

const TopBar = styled.div`  
display: flex;
width: 100%;`;
const TopBarbutton = styled.button`  
box-shadow: 0 4px 1px #cc8f00;
  background: #890808;
  border-radius: 10px;
  color: #fff;
  flex: 0.9;
  font-size: 22px;
  height: 48px;
  line-height: 48px;
  margin: 10px;`;

const TopBardisplay = styled.div`  
background: #c6e5ff;
  border-radius: 10px;
  box-shadow: inset 0 4px 5px #000;
  color: #262626;
  flex: 4;
  font-size: 28px;
  height: 26px;
  margin: 10px;
  padding: 12px;
  text-align: right;`;


const CalcKeys = styled.div`  
font-size: xx-large;
display: flex;
flex-flow: column wrap;
height: 290px;`;
const KeysButton = styled.button`  
font-size: xx-large;
box-shadow: 0 4px 1px #142c41;
background:  #1586fb1f;
color: #fcfcfc;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 175px;
transition: background-color 0.3s, color 0.3s; /* Transición de color en hover */

&:hover:before {
  -webkit-animation: shine .75s;
  animation: shine .75s;
}

@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}

@keyframes shine {
  100% {
    left: 125%;
  }
}

`;

const KeysButtonOperacion = styled.button`  
font-size: xx-large;
box-shadow: 0 4px 1px #cc8f00;
background: #f7af13;
color: #000;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;
`;
const KeysButtonIgual = styled.button` 
font-size: xx-large; 
box-shadow: 0 4px 1px #048c68;
background: #0caf84;
color: #000;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;`;

const DivCalculadora=styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;`;

function Calculadora() {

  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(displayValue));
      setDisplayValue('0');
      setOperator(op);
    } else {
      // Realizar cálculo y mostrar resultado
      const currentValue = parseFloat(displayValue);
      let result;

      switch (operator) {
        case '+':
          result = previousValue + currentValue;
          break;
        case '-':
          result = previousValue - currentValue;
          break;
        case '*':
          result = previousValue * currentValue;
          break;
        case '/':
          result = previousValue / currentValue;
          break;
        default:
          break;
      }

      setPreviousValue(result);
      setDisplayValue('0');
      setOperator(op);
    }
  };

  const handleEqualsClick = () => {
    if (previousValue !== null) {
      const currentValue = parseFloat(displayValue);
      let result;

      switch (operator) {
        case '+':
          result = previousValue + currentValue;
          break;
        case '-':
          result = previousValue - currentValue;
          break;
        case '*':
          result = previousValue * currentValue;
          break;
        case '/':
          result = previousValue / currentValue;
          break;
        default:
          break;
      }

      setPreviousValue(null);
      setDisplayValue(result.toString());
    }
  };

  const handleClearClick = () => {
    alert("Limpiar");
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <MainConten>
      <MainH1>Calculadora</MainH1>
      <DivCalculadora>
      <MainCalculadora>
        <TopBar>
          <TopBarbutton onClick={handleClearClick}>C</TopBarbutton>
          <TopBardisplay >{displayValue}</TopBardisplay>
        </TopBar>
        <CalcKeys>
          <div >
            <KeysButton onClick={() => handleNumberClick('7')}>7</KeysButton>
            <KeysButton onClick={() => handleNumberClick('8')}>8</KeysButton>
            <KeysButton onClick={() => handleNumberClick('9')}>9</KeysButton>
            <KeysButtonOperacion onClick={() => handleOperatorClick('*')}>x</KeysButtonOperacion>
          </div>
          <div >
            <KeysButton onClick={() => handleNumberClick('4')}>4</KeysButton>
            <KeysButton onClick={() => handleNumberClick('5')}>5</KeysButton>
            <KeysButton onClick={() => handleNumberClick('6')}>6</KeysButton>
            <KeysButtonOperacion onClick={() => handleOperatorClick('/')}>/</KeysButtonOperacion>
          </div>
          <div >
            <KeysButton onClick={() => handleNumberClick('1')}>1</KeysButton>
            <KeysButton onClick={() => handleNumberClick('2')}>2</KeysButton>
            <KeysButton onClick={() => handleNumberClick('3')}>3</KeysButton>
            <KeysButtonOperacion onClick={() => handleOperatorClick('+')}>+</KeysButtonOperacion>
          </div>
          <div >
            <KeysButtonOperacion onClick={() => handleNumberClick('.')}>.</KeysButtonOperacion>
            <KeysButton onClick={() => handleNumberClick('0')}>0</KeysButton>
            <KeysButtonIgual onClick={handleEqualsClick}>=</KeysButtonIgual>
            <KeysButtonOperacion onClick={() => handleOperatorClick('-')}>-</KeysButtonOperacion>
          </div>{/* <TopBardisplay >numeroAnterior: {numeroAnterior} operacion:  {actualOperacion} numeroActual:{numeroActual}</TopBardisplay> */}
        </CalcKeys>




      </MainCalculadora>
      </DivCalculadora>

    </MainConten>
  );
}

export default Calculadora;