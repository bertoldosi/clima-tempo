import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Clock from "../../components/Clock";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";
import { GetWeatherToDay } from "../../api/weather";
import { bolerplate } from "./bolerplate";

const Today = () => {
  const [weatherToDay, setWeatherToDay] = React.useState({
    temp_max: "",
    temp_min: "",
    temp: "",
    sensation: "",
    textWeather: "",
  });

  React.useEffect(async () => {
    const { data } = await GetWeatherToDay("-10.0007936", "-67.7937152");

    setWeatherToDay(bolerplate(data));
  }, []);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <Temperature weather={weatherToDay} />
      <Clock />
    </Wrapper>
  );
};

export default Today;
