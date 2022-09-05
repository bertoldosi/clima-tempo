import React from "react";
import HeaderToggle from "../HeaderToggle";
import Search from "../Search";

import { Container } from "./styles";

const Wrapper = ({ children }) => {
  return (
    <Container>
      <main>
        <Search />
        <HeaderToggle />
        {children}
      </main>
      <footer>
        <p>
          <span>© 2022 por Matheus Bertoldo&nbsp;</span>
        </p>
      </footer>
    </Container>
  );
};

export default Wrapper;
