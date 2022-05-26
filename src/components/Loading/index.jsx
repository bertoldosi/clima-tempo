import React from "react";
import { Loading as LoadingSVG } from "../../icons/Loading";

import { Container } from "./styles";

const Loading = ({ width, height }) => {
  return (
    <Container>
      <LoadingSVG width={width} height={height} />

      <span>
        Verifique se você habilitou o navegador acessar sua localização
      </span>
      <a
        rel="stylesheet"
        href="https://support.google.com/chrome/answer/142065?hl=pt&co=GENIE.Platform%3DDesktop"
      >
        Como habilitar
      </a>
    </Container>
  );
};

export default Loading;
