import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Message from "../../components/Message";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";
import { bolerplate } from "./bolerplate";
import { GetWeatherTomorrow } from "../../api/weather";
import Loading from "../../components/Loading";

const Tomorrow = () => {
  const [weatherTomorrow, setWeatherTomorrow] = React.useState();

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await GetWeatherTomorrow(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeatherTomorrow(bolerplate(data));
      });
    }
  }, []);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      {weatherTomorrow ? (
        <>
          <Temperature weather={weatherTomorrow} />
          <Message date={weatherTomorrow.date} />
        </>
      ) : (
        <Loading width={150} height={150} />
      )}
    </Wrapper>
  );
};

export default Tomorrow;
