import React from "react";
import Loading from "../Loading";

import { Container, Day, Weather } from "./styles";

const List = ({ listWeather, isResponse }) => {
  return isResponse ? (
    listWeather.map((weather, index) => (
      <Container key={index}>
        <Day>
          <strong>{weather.day}</strong>
          <span>{weather.textWeather}</span>
        </Day>

        <Weather>
          {weather.icon}
          <span>
            <strong>{weather.temp_max}°</strong>
            <strong>{weather.temp_min}°</strong>
          </span>
        </Weather>
      </Container>
    ))
  ) : (
    <Loading width={150} height={150} />
  );
};

export default List;
