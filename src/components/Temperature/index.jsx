import React from "react";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";

import { Container, Temperature as Temp, Weather, MaxMin } from "./styles";

const Temperature = ({ weather }) => {
  const { tempDay, tempNight, temp, sensation, textWeather, icon } = weather;

  return (
    <Container>
      <Temp>
        <MaxMin>
          <strong>
            {temp}
            <p>°c</p>
          </strong>
          <span>
            Dia {tempDay}°
            <VscArrowSmallUp />
          </span>

          <span>
            Noite {tempNight}°
            <VscArrowSmallDown />
          </span>
        </MaxMin>

        <span>Sensação {sensation}°</span>
      </Temp>
      <Weather>
        {icon}

        <p>{textWeather}</p>
      </Weather>
    </Container>
  );
};

export default Temperature;
