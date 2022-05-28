import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Message from "../../components/Message";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";
import { GetWeatherToday } from "../../api/weather";
import { bolerplate } from "./bolerplate";
import Loading from "../../components/Loading";
import { UseAppContext } from "../../hooks/AppContextProvider";

const Today = () => {
  const { city } = UseAppContext();
  const [weatherToday, setWeatherToday] = React.useState();

  const getSearchWeatherToday = async () => {
    const { data } = await GetWeatherToday(city?.latitude, city?.longitude);
    setWeatherToday(bolerplate(data));
  };

  const getWeatherToday = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherToday(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherToday(bolerplate(data));
      });
    }
  };

  React.useEffect(() => {
    if (city?.nome) {
      getSearchWeatherToday();
    } else {
      getWeatherToday();
    }
  }, []);

  React.useEffect(() => {
    getSearchWeatherToday();
  }, [city]);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      {weatherToday ? (
        <>
          <Temperature weather={weatherToday} />
          <Message date={weatherToday.date} />
        </>
      ) : (
        <Loading width={150} height={150} />
      )}
    </Wrapper>
  );
};

export default Today;
