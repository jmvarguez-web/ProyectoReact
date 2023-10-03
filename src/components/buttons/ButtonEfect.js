import styled from "styled-components";

const StyledButton = styled.a`
margin-top: 1rem;
position: relative;
display: inline-block;
width: 277px;
height: 50px;
font-size: 1em;
font-weight: bold;
line-height: 60px;
text-align: center;
text-transform: uppercase;
background-color: transparent;
cursor: pointer;
text-decoration:none;
font-family: 'Roboto', sans-serif;
font-weight:900;
font-size:17px;
letter-spacing: 0.045em;
transition: all 0.3s cubic-bezier(0.25, 0.1, 0.58, 1);
  &:hover {
    background: none;
    border-color: #7ab104;
  }

  & svg {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
    &:hover  {
      stroke-width: 4;
      stroke-dasharray: 196, 527;
      stroke-dashoffset: 437;
    }
  }
  &rect{
    //stroke: #EC0033;
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;

    &:hover  {
      stroke-width: 4;
      stroke-dasharray: 196, 527;
      stroke-dashoffset: 437;
    }
  }
  & span {
    background: rgb(226,0,51);
background: -moz-linear-gradient(left,  rgba(236,0,51,1) 0%, rgba(122,177,4,1) 100%);
background: -webkit-linear-gradient(left,  rgba(236,0,51,1) 0%,rgba(122,177,4,1) 100%);
background: linear-gradient(to right,  rgba(236,0,51,1) 0%,rgba(122,177,4,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EC0033', endColorstr='#7ab104',GradientType=1 );

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  }
`;

const ButtonEfect = () => {
  return (
    <StyledButton href="#" >
      <svg width="277" height="62">
        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="#EC0033" />
            <stop offset="100%" stopColor="#7ab104" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="255" height="50"></rect>
      </svg>
      <span>Agregar al carrito</span>
    </StyledButton>
  );
};

export default ButtonEfect;
