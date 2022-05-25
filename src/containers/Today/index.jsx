import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Clock from "../../components/Clock";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";

const Today = () => {
  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <Temperature />
      <Clock />
    </Wrapper>
  );
};

export default Today;
