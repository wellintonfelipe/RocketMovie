import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased; 
     -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }


  button, a{
    cursor: pointer;
    text-decoration: none;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }
`;
