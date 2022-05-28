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
  const { city } = UseAppContext();

  const getWeatherWeek = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherWeek(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherWeek(bolerplate(data));
      });
    }
  };

  const getSearchWeatherWeek = async () => {
    const { data } = await GetWeatherWeek(city?.latitude, city?.longitude);
    setWeatherWeek(bolerplate(data));
  };

  React.useEffect(() => {
    if (city?.nome) {
      getSearchWeatherWeek();
    } else {
      getWeatherWeek();
    }
  }, []);

  React.useEffect(() => {
    getSearchWeatherWeek();
  }, [city]);

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
