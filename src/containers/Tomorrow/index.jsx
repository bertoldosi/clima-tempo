import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";
import { bolerplate } from "./bolerplate";
import { GetWeatherTomorrow } from "../../api/weather";
import { UseAppContext } from "../../hooks/AppContextProvider";

const Tomorrow = () => {
  const [isResponse, setIsResponse] = React.useState(false);
  const [weatherTomorrow, setWeatherTomorrow] = React.useState();
  const { city } = UseAppContext();

  const getWeatherTomorrow = () => {
    setIsResponse(false);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherTomorrow(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherTomorrow(bolerplate(data));
        setIsResponse(true);
      });
    }
  };

  const getSearchWeatherTomorrow = async () => {
    setIsResponse(false);

    const { data } = await GetWeatherTomorrow(city?.latitude, city?.longitude);
    setWeatherTomorrow(bolerplate(data));
    setIsResponse(true);
  };

  React.useEffect(() => {
    if (city?.nome) {
      getSearchWeatherTomorrow();
    } else {
      getWeatherTomorrow();
    }
  }, [city]);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <Temperature weather={weatherTomorrow} isResponse={isResponse} />
    </Wrapper>
  );
};

export default Tomorrow;
