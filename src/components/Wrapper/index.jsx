import React from "react";

import { Container } from "./styles";

const Wrapper = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <footer>
        <p>
          <span>© 2023 por Matheus Bertoldo&nbsp;</span>
        </p>
      </footer>
    </Container>
  );
};

export default Wrapper;
