import React from "react";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";

import CeuLimpo from "../../icons/CeuLimpo";

import { Container, Temperature as Temp, Weather, MaxMin } from "./styles";

const Temperature = ({ weather }) => {
  const { temp_max, temp_min, temp, sensation, textWeather } = weather;

  return (
    <Container>
      <Temp>
        <MaxMin>
          <span>
            Max {temp_max}°
            <VscArrowSmallUp />
          </span>

          <span>
            Min {temp_min}°
            <VscArrowSmallDown />
          </span>
        </MaxMin>

        <strong>
          {temp}
          <p>°c</p>
        </strong>

        <span>Sensação {sensation}°</span>
      </Temp>
      <Weather>
        <CeuLimpo width={90} height={96} />
        <p>{textWeather}</p>
      </Weather>
    </Container>
  );
};

export default Temperature;
