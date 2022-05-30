import React from "react";

import { Container } from "./styles";

import { UseAppContext } from "../../hooks/AppContextProvider";

const Message = ({ date }) => {
  const { city } = UseAppContext();

  return (
    <Container>
      <h2>{date}</h2>
      <h3>{`${city?.nome} - ${city?.uf.nome}`}</h3>
      <p>
        As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o
        efeito do banho, por isso recomenda-se diariamente.
        <cite>- Zig Ziglar</cite>
      </p>

      <h4>Bom dia!</h4>
    </Container>
  );
};

export default Message;
