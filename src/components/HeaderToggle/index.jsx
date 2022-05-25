import React from "react";

import { Container } from "./styles";

const HeaderToggle = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/">Hoje</a>
        </li>
        <li>
          <a href="/tomohow">Amanhã</a>
        </li>
        <li>
          <a href="/10dias" isSelected={true}>
            10 dias
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default HeaderToggle;
