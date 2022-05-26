import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Message from "../../components/Message";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";
import { GetWeatherToday } from "../../api/weather";
import { bolerplate } from "./bolerplate";
import Loading from "../../components/Loading";

const Today = () => {
  const [weatherToday, setWeatherToday] = React.useState();

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherToday(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherToday(bolerplate(data));
      });
    }
  }, []);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      {weatherToday ? (
        <Temperature weather={weatherToday} />
      ) : (
        <Loading width={150} height={150} />
      )}
      <Message />
    </Wrapper>
  );
};

export default Today;
