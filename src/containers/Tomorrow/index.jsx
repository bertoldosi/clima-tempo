import React from "react";

import Wrapper from "../../components/Wrapper";
import Temperature from "../../components/Temperature";
import { bolerplate } from "./bolerplate";
import { GetWeatherTomorrow } from "../../services/weather";
import { UseAppContext } from "../../hooks/AppContextProvider";
import usePosition from "../../hooks/usePosition";
import { errorResponse } from "../../helpers/errorResponse";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/ErrorMessage";

const Tomorrow = () => {
  const { currentPosition } = usePosition();

  const [isResponse, setIsResponse] = React.useState(false);
  const [weatherTomorrow, setWeatherTomorrow] = React.useState();
  const { city } = UseAppContext();

  const getWeather = () => {
    setIsResponse(false);

    currentPosition()
      .then(async (position) => {
        const { data } = await GetWeatherTomorrow(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherTomorrow(bolerplate(data));
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
      const { data } = await GetWeatherTomorrow(
        city?.latitude,
        city?.longitude
      );

      setWeatherTomorrow(bolerplate(data));
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
      <Temperature weather={weatherTomorrow} isResponse={isResponse} />
    </Wrapper>
  );
};

export default Tomorrow;
