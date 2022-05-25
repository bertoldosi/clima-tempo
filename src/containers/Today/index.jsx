import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Clock from "../../components/Clock";
import HeaderToggle from "../../components/HeaderToggle";

import { Container } from "./styles";

const Today = () => {
  return (
    <Wrapper>
      <Container>
        <Search />
        <HeaderToggle />
        <Clock />
      </Container>
    </Wrapper>
  );
};

export default Today;
