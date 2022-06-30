import React from "react";

import { Container, Temperature as Temp, Weather, MaxMin } from "./styles";

import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";
import Loading from "../Loading";
import SkeletonTemperature from "../../components/SkeletonTemperature";
import Greeting from "../Greeting";

const Temperature = ({ weather, isResponse }) => {
  return isResponse ? (
    <main>
      <Container>
        <Temp>
          <MaxMin>
            <strong>
              <p>{weather.temp}</p>
              <p>°c</p>
            </strong>
            <span>
              Dia {weather.tempDay}°
              <VscArrowSmallUp />
            </span>

            <span>
              Noite {weather.tempNight}°
              <VscArrowSmallDown />
            </span>
          </MaxMin>

          <span>Sensação {weather.sensation}°</span>
        </Temp>
        <Weather>
          {weather.icon}

          <p>{weather.textWeather}</p>
        </Weather>
      </Container>
      <Greeting date={weather.date} />
    </main>
  ) : (
    <SkeletonTemperature />
  );
};

export default Temperature;
