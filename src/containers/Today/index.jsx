import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Message from "../../components/Message";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";
import { GetWeatherToDay } from "../../api/weather";
import { bolerplate } from "./bolerplate";
import Loading from "../../components/Loading";

const Today = () => {
  const [weatherToDay, setWeatherToDay] = React.useState();

  React.useEffect(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherToDay(
          position.coords.latitude,
          position.coords.longitude
        );
        setWeatherToDay(bolerplate(data));
      });
    }
  }, []);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      {weatherToDay ? (
        <Temperature weather={weatherToDay} />
      ) : (
        <Loading width={150} height={150} />
      )}
      <Message />
    </Wrapper>
  );
};

export default Today;
