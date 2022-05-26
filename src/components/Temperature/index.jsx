import React from "react";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";

import CeuLimpo from "../../icons/CeuLimpo";

import { Container, Temperature as Temp, Weather, MaxMin } from "./styles";

const Temperature = ({ weather }) => {
  const { tempDay, tempNight, temp, sensation, textWeather } = weather;

  return (
    <Container>
      <Temp>
        <MaxMin>
          <span>
            Dia {tempDay}°
            <VscArrowSmallUp />
          </span>

          <span>
            Noite {tempNight}°
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
