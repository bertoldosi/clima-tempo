import React from "react";

import Wrapper from "../../components/Wrapper";
import List from "../../components/List";
import { GetWeatherWeek } from "../../services/weather";
import { bolerplate } from "./bolerplate";
import { UseAppContext } from "../../hooks/AppContextProvider";
import usePosition from "../../hooks/usePosition";
import { errorResponse } from "../../helpers/errorResponse";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/ErrorMessage";

const Week = () => {
  const { currentPosition } = usePosition();

  const [weatherWeek, setWeatherWeek] = React.useState();
  const [isResponse, setIsResponse] = React.useState(false);
  const { city } = UseAppContext();

  const getWeather = () => {
    setIsResponse(false);

    currentPosition()
      .then(async (position) => {
        const { data } = await GetWeatherWeek(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherWeek(bolerplate(data));
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
      const { data } = await GetWeatherWeek(city?.latitude, city?.longitude);
      setWeatherWeek(bolerplate(data));
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
      <List listWeather={weatherWeek} isResponse={isResponse} />
    </Wrapper>
  );
};

export default Week;
