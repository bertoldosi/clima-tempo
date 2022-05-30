import React from "react";

import { Container } from "./styles";

import { UseAppContext } from "../../hooks/AppContextProvider";
import { greetingMessage, formatStringAddressWriting } from "../../helpers";

const Greeting = ({ date }) => {
  const { city } = UseAppContext();

  const greeting = greetingMessage();
  const displayCity = formatStringAddressWriting(city);

  return (
    <Container>
      <h2>{date}</h2>
      <h3>{displayCity}</h3>
      <h4>{greeting}</h4>
    </Container>
  );
};

export default Greeting;
