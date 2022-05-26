import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Message from "../../components/Message";
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
      <Message />
    </Wrapper>
  );
};

export default Tomorrow;
