import React, { useState, useEffect } from "react";
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
background-color: #ef476f;
border-radius: 10px;
box-shadow: 0 8px #eb184a;
height: 355px;
min-width: 690px;
  width: 690px;`;

const TopBar = styled.div`  
display: flex;
width: 100%;`;
const TopBarbutton = styled.button`  
box-shadow: 0 4px 1px #cc8f00;
  background: #ffd166;
  border-radius: 10px;
  color: #7d7d7d;
  flex: 0.9;
  font-size: 22px;
  height: 48px;
  line-height: 48px;
  margin: 10px;`;

const TopBardisplay = styled.div`  
background: #c6e5ff;
  border-radius: 10px;
  box-shadow: inset 0 4px 5px #900d2c;
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
background: #26547c;
color: #fcfcfc;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;`;

const KeysButtonOperacion = styled.button`  
font-size: xx-large;
box-shadow: 0 4px 1px #cc8f00;
background: #ffd166;
color: #7d7d7d;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;
`;
const KeysButtonIgual = styled.button` 
font-size: xx-large; 
box-shadow: 0 4px 1px #048c68;
background: #06d6a0;
color: #7d7d7d;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;`;

function Calculadora() {

  const [visualizaValor, setVisualizaValor] = useState('0');
  const [resultadoActual, setResultadoActual] = useState(0);
  const [numeroActual, setNumeroActual] = useState(0);
  const [numeroAnterior, setNumeroAnterior] = useState(0);
  const [despuesOperacion, setDespuesOperacion] = useState(false);
  const [actualOperacion, setActualOperacion] = useState(null);

  const handleNumberClick = (numString) => {
    changeDisplayVal(numString);
  };

  const handleClearClick = () => {
    clearAll();
  };

  const handleOperationClick = (operation) => {
    doOperation(operation);
  };

  const handleEvaluateClick = () => {
    evaluate(actualOperacion);
  };

  const doOperation = (operation) => {
  
    if (!actualOperacion) {
      alert(operation+"--");
      setVisualizaValor('');
      setNumeroAnterior(numeroActual);
      setActualOperacion(operation);
      setDespuesOperacion(true);
    } else if (!despuesOperacion) {
      alert(operation+"++");
      evaluate(actualOperacion);
      setNumeroAnterior(numeroActual);
      setActualOperacion(operation);
      setDespuesOperacion(true);
      
    } else { 
      setActualOperacion(operation);
    }
  };

  const clearAll = () => {
    setNumeroActual(0);
    setNumeroAnterior(0);
    setActualOperacion(null);
    setDespuesOperacion(false);
    setVisualizaValor('0');
  };

  const changeDisplayVal = (numString) => {
  
    if (visualizaValor === '0' || despuesOperacion) {
      setVisualizaValor('');
      setDespuesOperacion(false);
    }

    if (numString === '.' && visualizaValor.indexOf('.') > -1) {
      numString = '';
    } 

    if (visualizaValor.length >= 16) {
      alert("No se puede tener mas de  16 digitos");
    } else { 
      setVisualizaValor(visualizaValor + numString);
      setNumeroActual((numeroActual) =>Number(visualizaValor + numString));
      
    }

  };

  const evaluate = (operation) => {
  
    if (!despuesOperacion) {
      switch (operation) {
        case '+':
          setResultadoActual(numeroAnterior + numeroActual);
          break;
        case '-':
          setResultadoActual(numeroAnterior - numeroActual);
          break;
        case '*':
          setResultadoActual(numeroAnterior * numeroActual);
          break;
        case '/':
          setResultadoActual(numeroAnterior / numeroActual);
          break;       
        default:
          break;
      }
      alert(resultadoActual);

    }
    setDespuesOperacion(true);
    setActualOperacion(null);
  };
  return (
    <MainConten>
      <MainH1>Calculadora</MainH1>
      <MainCalculadora>
        <TopBar>
          <TopBarbutton onClick={handleClearClick}>C</TopBarbutton>
          <TopBardisplay >{visualizaValor}</TopBardisplay>
        </TopBar>
        <CalcKeys>
          <div >
            <KeysButton onClick={() => handleNumberClick('7')}>7</KeysButton>
            <KeysButton onClick={() => handleNumberClick('8')}>8</KeysButton>
            <KeysButton onClick={() => handleNumberClick('9')}>9</KeysButton>
            <KeysButtonOperacion onClick={() => handleOperationClick('*')}>x</KeysButtonOperacion>
          </div>
          <div >
            <KeysButton onClick={() => handleNumberClick('4')}>4</KeysButton>
            <KeysButton onClick={() => handleNumberClick('5')}>5</KeysButton>
            <KeysButton onClick={() => handleNumberClick('6')}>6</KeysButton>
            <KeysButtonOperacion onClick={() => handleOperationClick('/')}>/</KeysButtonOperacion>
          </div>
          <div >
            <KeysButton onClick={() => handleNumberClick('1')}>1</KeysButton>
            <KeysButton onClick={() => handleNumberClick('2')}>2</KeysButton>
            <KeysButton onClick={() => handleNumberClick('3')}>3</KeysButton>
            <KeysButtonOperacion onClick={() => handleOperationClick('+')}>+</KeysButtonOperacion>
          </div>
          <div >
            <KeysButtonOperacion onClick={() => handleNumberClick('.')}>.</KeysButtonOperacion>
            <KeysButton onClick={() => handleNumberClick('0')}>0</KeysButton>
            <KeysButtonIgual onClick={handleEvaluateClick}>=</KeysButtonIgual>
            <KeysButtonOperacion onClick={() => handleOperationClick('-')}>-</KeysButtonOperacion>
          </div>{/* <TopBardisplay >numeroAnterior: {numeroAnterior} operacion:  {actualOperacion} numeroActual:{numeroActual}</TopBardisplay> */}
        </CalcKeys>




      </MainCalculadora>

    </MainConten>
  );
}

export default Calculadora;