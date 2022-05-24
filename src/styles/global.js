import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts[0]};
  }

`;
