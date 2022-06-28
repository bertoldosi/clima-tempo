import React from "react";

import { Container, Content, Day, Weather } from "./styles";

import SkeletonList from "../SkeletonList";

const List = ({ listWeather, isResponse }) => {
  return isResponse ? (
    <Container>
      {listWeather.map((weather, index) => (
        <Content key={index}>
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
        </Content>
      ))}
    </Container>
  ) : (
    <SkeletonList />
  );
};

export default List;
