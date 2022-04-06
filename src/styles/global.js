import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: #DDDDDD;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
  }
  html, body,#root{
    height: 100%;
  }
  button{
    cursor: pointer
  }

`;
