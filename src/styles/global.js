import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`



/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  display: none;
}

*::-webkit-scrollbar-track {
  display: none;
}

*::-webkit-scrollbar-thumb {
  display: none;
}



html,body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;

}

  body {
    width: 100%;
    background: ${(props) => props.theme.backgroundColorPrimary};
    font-family: ${(props) => props.theme.textFontFamilyDefault} ;
    color: ${(props) => props.theme.textColorPrimary} ;
    font-weight: 100;
    overflow-x: hidden;
  }

  h1, h2, h3{
    margin: 0;
    padding: 0;
  }

  input{
    font-family: ${(props) => props.theme.textFontFamilyDefault} ;
    outline: none;
  }

  p{
    margin: 0;
    padding: 0;
  }

`;
