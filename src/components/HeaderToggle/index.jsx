import React from "react";

import { Container, Link } from "./styles";

import { UseAppContext } from "../../hooks/AppContextProvider";

const HeaderToggle = () => {
  const { wrapperType, setWrapperType } = UseAppContext();

  return (
    <Container>
      <ul>
        <li>
          <Link
            isSelected={wrapperType === "TO_DAY"}
            href="#today"
            onClick={() => {
              setWrapperType("TO_DAY");
            }}
          >
            Hoje
          </Link>
        </li>
        <li>
          <Link
            isSelected={wrapperType === "TOMORROW"}
            href="#tomorrow"
            onClick={() => {
              setWrapperType("TOMORROW");
            }}
          >
            Amanhã
          </Link>
        </li>
        <li>
          <Link
            isSelected={wrapperType === "TEN_DAY"}
            href="#ten-day"
            onClick={() => {
              setWrapperType("TEN_DAY");
            }}
          >
            10 dias
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default HeaderToggle;
