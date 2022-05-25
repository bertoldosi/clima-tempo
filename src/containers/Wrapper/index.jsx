import React from "react";
import Clock from "../../containers/Clock";
import Search from "../../components/Search";

import { Container } from "./styles";

const Wrapper = () => {
  return (
    <Container>
      <Search />
      <Clock />
    </Container>
  );
};

export default Wrapper;
