import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 
  }

  ul, li, a, h1, h2, h3, p{
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    color: black;
  }
  
  html {
    font-size: 62.5%; 
    overflow-y: scroll;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    overflow-x:hidden;
    padding: 0;
    margin: 0;
    box-sizing: border-box;  
    font-size: 1.6rem; 
  }
`;

export default GlobalStyle;
