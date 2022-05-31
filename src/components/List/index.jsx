import React from "react";

import { Container, Day, Weather } from "./styles";

import SkeletonList from "../SkeletonList";

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
    <SkeletonList />
  );
};

export default List;
