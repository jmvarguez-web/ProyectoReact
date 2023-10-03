import React,{useState} from "react";
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
display: flex;
flex-flow: column wrap;
height: 290px;`;
const KeysButton = styled.button`  
box-shadow: 0 4px 1px #142c41;
background: #26547c;
color: #fcfcfc;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;`;

const KeysButtonOperacion = styled.button`  
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
box-shadow: 0 4px 1px #048c68;
background: #06d6a0;
color: #7d7d7d;
border-radius: 10px;
height: 50px;
line-height: 48px;
margin: 9px;
width: 75px;`;

function Calculadora() {
    const [displayValue, setDisplayValue] = useState('0');
    // const [curNumber, setCurNumber] = useState(0);
    // const [prevNumber, setPrevNumber] = useState(0);
    // const [afterOperation, setAfterOperation] = useState(false);
    // const [curOperation, setCurOperation] = useState(null);
  
    const handleClearClick = () => {
        alert("xxxxx");
        clearAll();
      };

      const clearAll = () => {
      
        setDisplayValue('r');
      };
    return (
    <MainConten>
        <MainH1>Calculadora</MainH1>
        <MainCalculadora>
            <TopBar>
            <TopBarbutton  onClick={handleClearClick}>C</TopBarbutton>
            <TopBardisplay class="display">0</TopBardisplay>
            </TopBar>
           <CalcKeys>
           <div class="row">
        <KeysButton class="num">7</KeysButton>
        <KeysButton class="num">8</KeysButton>
        <KeysButton class="num">9</KeysButton>
        <KeysButtonOperacion class="op multiply">x</KeysButtonOperacion>
      </div>
      <div class="row">
        <KeysButton class="num">4</KeysButton>
        <KeysButton class="num">5</KeysButton>
        <KeysButton class="num">6</KeysButton>
        <KeysButtonOperacion class="op divide">/</KeysButtonOperacion>
      </div>
      <div class="row">
        <KeysButton class="num">1</KeysButton>
        <KeysButton class="num">2</KeysButton>
        <KeysButton class="num">3</KeysButton>
        <KeysButtonOperacion class="op add">+</KeysButtonOperacion>
      </div>
      <div class="row">
        <KeysButtonOperacion class="num">.</KeysButtonOperacion>
        <KeysButton class="num">0</KeysButton>
        <KeysButtonIgual class="equals">=</KeysButtonIgual>
        <KeysButtonOperacion class="op subtract">-</KeysButtonOperacion>
      </div>
           </CalcKeys>
         



        </MainCalculadora>
        
    </MainConten>
    );
}

export default Calculadora;