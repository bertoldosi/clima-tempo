import React from "react";

import Wrapper from "../../components/Wrapper";
import Temperature from "../../components/Temperature";
import ErrorMessage from "../../components/ErrorMessage";
import { toast } from "react-toastify";
import { bolerplate } from "./bolerplate";
import { errorResponse } from "../../helpers/errorResponse";

import { GetWeatherCity, GetWeatherToday } from "../../services/weather";
import { UseAppContext } from "../../hooks/AppContextProvider";
import usePosition from "../../hooks/usePosition";

const Today = () => {
  const { currentPosition } = usePosition();
  const { city, setCity } = UseAppContext();

  const [weatherToday, setWeatherToday] = React.useState();
  const [isResponse, setIsResponse] = React.useState(false);

  const getWeather = async () => {
    setIsResponse(false);

    currentPosition()
      .then(async (position) => {
        const { data } = await GetWeatherToday(
          position.coords.latitude,
          position.coords.longitude
        );

        const city = await GetWeatherCity(
          position.coords.latitude,
          position.coords.longitude
        );

        setCity(city.data);

        setWeatherToday(bolerplate(data));
        setIsResponse(true);
      })
      .catch((error) => {
        const erroData = errorResponse(error);
        toast.error(<ErrorMessage text={erroData.message} />);
      });
  };

  const searchWeather = async () => {
    setIsResponse(false);

    try {
      const { data } = await GetWeatherToday(city?.latitude, city?.longitude);
      setWeatherToday(bolerplate(data));
      setIsResponse(true);
    } catch (error) {
      const erroData = errorResponse(error);
      toast.error(<ErrorMessage text={erroData.message} />);
    }
  };

  React.useEffect(() => {
    if (city?.nome) {
      searchWeather();
    } else {
      getWeather();
    }
  }, [city]);

  return (
    <Wrapper>
      <Temperature weather={weatherToday} isResponse={isResponse} />
    </Wrapper>
  );
};

export default Today;
