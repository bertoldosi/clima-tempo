import React from "react";

import Search from "../../components/Search";
import Wrapper from "../../components/Wrapper";
import HeaderToggle from "../../components/HeaderToggle";
import List from "../../components/List";

import ParcialmenteNublado from "../../icons/ParcialmenteNublado";
import CeuLimpo from "../../icons/CeuLimpo";
import Loading from "../../components/Loading";
import { GetWeatherWeek } from "../../api/weather";
import { bolerplate } from "./bolerplate";

const Week = () => {
  const [weatherWeek, setWeatherWeek] = React.useState();

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherWeek(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherWeek(bolerplate(data));
      });
    }
  }, []);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      {weatherWeek ? (
        <List listWeather={weatherWeek} />
      ) : (
        <Loading width={150} height={150} />
      )}
    </Wrapper>
  );
};

export default Week;
