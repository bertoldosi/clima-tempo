import React from "react";

import { Container, Day, Weather } from "./styles";

const List = ({ listWeather }) => {
  return listWeather.map((weather, index) => (
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
  ));
};

export default List;
