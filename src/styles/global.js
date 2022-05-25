import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


html,body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;

}

  body {
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.backgroundColorPrimary};
    font-family: ${(props) => props.theme.textFontFamilyDefault} ;
    color: ${(props) => props.theme.textColorPrimary} ;
    padding: 2rem;
    font-weight: 100;
  }

  h1, h2, h3{
    margin: 0;
    padding: 0;
  }

  input{
    font-family: ${(props) => props.theme.textFontFamilyDefault} ;
    outline: none;
  }

`;
