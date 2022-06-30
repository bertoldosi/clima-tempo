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
            isSelected={wrapperType === "TODAY"}
            href="#"
            onClick={() => {
              setWrapperType("TODAY");
            }}
          >
            Hoje
          </Link>
        </li>
        <li>
          <Link
            isSelected={wrapperType === "TOMORROW"}
            href="#"
            onClick={() => {
              setWrapperType("TOMORROW");
            }}
          >
            Amanhã
          </Link>
        </li>
        <li>
          <Link
            isSelected={wrapperType === "WEEK"}
            href="#"
            onClick={() => {
              setWrapperType("WEEK");
            }}
          >
            Semana
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default HeaderToggle;
