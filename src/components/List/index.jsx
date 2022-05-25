import React from "react";

import { Container, Day, Weather } from "./styles";

const List = ({ listWeather }) => {
  return listWeather.map((weather) => (
    <Container>
      <Day>
        <strong>{weather.date}</strong>
        <span>{weather.textWeather}</span>
      </Day>

      <Weather>
        {weather.icon}
        <span>
          <strong>{weather.max}°</strong>
          <strong>{weather.min}°</strong>
        </span>
      </Weather>
    </Container>
  ));
};

export default List;
