import React from "react";

import Search from "../../components/Search";
import Wrapper from "../../components/Wrapper";
import HeaderToggle from "../../components/HeaderToggle";
import List from "../../components/List";

import ParcialmenteNublado from "../../icons/ParcialmenteNublado";
import CeuLimpo from "../../icons/CeuLimpo";

const listWeather = [
  {
    date: "Hoje",
    textWeather: "Claro com nuvens",
    icon: <ParcialmenteNublado width={60} />,
    max: "20",
    min: "17",
  },

  {
    date: "Quinta, 25 Mai",
    textWeather: "Céu limpo",
    icon: <CeuLimpo width={50} />,
    max: "31",
    min: "28",
  },

  {
    date: "Hoje",
    textWeather: "Claro com nuvens",
    icon: <ParcialmenteNublado width={60} />,
    max: "20",
    min: "17",
  },

  {
    date: "Quinta, 25 Mai",
    textWeather: "Céu limpo",
    icon: <CeuLimpo width={50} />,
    max: "31",
    min: "28",
  },
  {
    date: "Hoje",
    textWeather: "Claro com nuvens",
    icon: <ParcialmenteNublado width={60} />,
    max: "20",
    min: "17",
  },

  {
    date: "Quinta, 25 Mai",
    textWeather: "Céu limpo",
    icon: <CeuLimpo width={50} />,
    max: "31",
    min: "28",
  },
  {
    date: "Hoje",
    textWeather: "Claro com nuvens",
    icon: <ParcialmenteNublado width={60} />,
    max: "20",
    min: "17",
  },

  {
    date: "Quinta, 25 Mai",
    textWeather: "Céu limpo",
    icon: <CeuLimpo width={50} />,
    max: "31",
    min: "28",
  },
  {
    date: "Hoje",
    textWeather: "Claro com nuvens",
    icon: <ParcialmenteNublado width={60} />,
    max: "20",
    min: "17",
  },

  {
    date: "Quinta, 25 Mai",
    textWeather: "Céu limpo",
    icon: <CeuLimpo width={50} />,
    max: "31",
    min: "28",
  },
];

const TenDay = () => {
  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <List listWeather={listWeather} />
    </Wrapper>
  );
};

export default TenDay;
