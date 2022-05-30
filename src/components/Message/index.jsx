import React from "react";

import { Container } from "./styles";

const Message = ({ date }) => {
  return (
    <Container>
      <h2>{date}</h2>
      <h3>Rio Branco - AC</h3>
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
