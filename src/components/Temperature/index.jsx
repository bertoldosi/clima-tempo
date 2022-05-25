import React from "react";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";

import CeuLimpo from "../../icons/CeuLimpo";

import { Container, Temperature as Temp, Weather, MaxMin } from "./styles";

const Temperature = ({
  maxDay = "27",
  maxNigth = "17",
  temperature = "19",
  sensation = "22",
  textWeather = "Claro com nuvens periódicas",
}) => {
  return (
    <Container>
      <Temp>
        <MaxMin>
          <span>
            Dia {maxDay}°
            <VscArrowSmallUp />
          </span>

          <span>
            Noite {maxNigth}°
            <VscArrowSmallDown />
          </span>
        </MaxMin>

        <strong>
          {temperature}
          <p>°c</p>
        </strong>

        <span>Sensação {sensation}°</span>
      </Temp>
      <Weather>
        <CeuLimpo width={100} height={96} />
        <p>{textWeather}</p>
      </Weather>
    </Container>
  );
};

export default Temperature;
