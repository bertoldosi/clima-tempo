import React from "react";

import Search from "../../components/Search";
import Wrapper from "../../components/Wrapper";
import HeaderToggle from "../../components/HeaderToggle";
import List from "../../components/List";

import Loading from "../../components/Loading";
import { GetWeatherWeek } from "../../api/weather";
import { bolerplate } from "./bolerplate";
import { UseAppContext } from "../../hooks/AppContextProvider";

const Week = () => {
  const [weatherWeek, setWeatherWeek] = React.useState();
  const [isResponse, setIsResponse] = React.useState(false);
  const { city } = UseAppContext();

  const getWeatherWeek = () => {
    setIsResponse(false);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherWeek(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherWeek(bolerplate(data));
        setIsResponse(true);
      });
    }
  };

  const getSearchWeatherWeek = async () => {
    setIsResponse(false);

    const { data } = await GetWeatherWeek(city?.latitude, city?.longitude);
    setWeatherWeek(bolerplate(data));
    setIsResponse(true);
  };

  React.useEffect(() => {
    if (city?.nome) {
      getSearchWeatherWeek();
    } else {
      getWeatherWeek();
    }
  }, [city]);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <List listWeather={weatherWeek} isResponse={isResponse} />
    </Wrapper>
  );
};

export default Week;
