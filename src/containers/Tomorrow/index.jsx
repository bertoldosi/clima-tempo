import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Clock from "../../components/Clock";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";

const Tomorrow = () => {
  const [weatherTomorrow, setWeatherTomorrow] = React.useState({
    temp_max: "25",
    temp_min: "24",
    temp: "25",
    sensation: "28",
    textWeather: "ceú limpo",
  });

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <Temperature weather={weatherTomorrow} />
      <Clock />
    </Wrapper>
  );
};

export default Tomorrow;
