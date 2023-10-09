import React from 'react';

import styled from "styled-components";

const StyledButton = styled.a`
    font-family: Courier New;
    color: #ffffff;
    font-size: 17px;
    padding: 10px;
    text-decoration: none;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    -webkit-box-shadow: 0px 1px 13px #f0edf0;
    -moz-box-shadow: 0px 1px 13px #f0edf0;
    box-shadow: 0px 1px 13px #f0edf0;
    text-shadow: 1px 1px 5px #666666;
    border: solid #ffffff 1px;
    margin: 2rem;
    max-width: 150px;
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);

 &:hover {
    color: #000;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#999999), to(#fffcff));
    background: -moz-linear-gradient(top, #999999, #fffcff)
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0B1F36, endColorstr=#f52525);
  
  }
`;


const ButtonEfect = ({ link, text }) => {
  return (
   
       <StyledButton href={link} target="_blank" rel="noreferrer" >
      {text}
    </StyledButton>
 
  
  );
};

export default ButtonEfect;
