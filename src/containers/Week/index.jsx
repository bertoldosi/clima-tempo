import React from "react";

import Search from "../../components/Search";
import Wrapper from "../../components/Wrapper";
import HeaderToggle from "../../components/HeaderToggle";
import List from "../../components/List";
import { GetWeatherWeek } from "../../api/weather";
import { bolerplate } from "./bolerplate";
import { UseAppContext } from "../../hooks/AppContextProvider";
import { useValidationCurrentPosition } from "../../hooks/useValidationCurrentPosition";
import { errorResponse } from "../../helpers/errorResponse";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/ErrorMessage";

const Week = () => {
  const [validationCurrentPosition] = useValidationCurrentPosition();
  const [weatherWeek, setWeatherWeek] = React.useState();
  const [isResponse, setIsResponse] = React.useState(false);
  const { city } = UseAppContext();

  const getWeatherWeek = () => {
    setIsResponse(false);

    validationCurrentPosition()
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

  const getSearchWeatherWeek = async () => {
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
