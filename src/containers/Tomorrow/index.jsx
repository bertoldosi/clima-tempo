import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Clock from "../../components/Clock";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";

const Tomorrow = () => {
  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <Temperature
        maxDay="35"
        maxNigth="20"
        temperature="35"
        sensation="40"
        textWeather="Céu limpo"
      />
      <Clock />
    </Wrapper>
  );
};

export default Tomorrow;
