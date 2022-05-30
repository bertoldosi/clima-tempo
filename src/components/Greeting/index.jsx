import React from "react";

import { Container } from "./styles";

import { UseAppContext } from "../../hooks/AppContextProvider";
import { greetingMessage } from "../../helpers/greetingMessage";

const Greeting = ({ date }) => {
  const { city } = UseAppContext();

  const greeting = greetingMessage();

  return (
    <Container>
      <h2>{date}</h2>
      <h3>{`${city?.nome} - ${city?.uf.nome}`}</h3>

      <h4>{greeting}</h4>
    </Container>
  );
};

export default Greeting;
