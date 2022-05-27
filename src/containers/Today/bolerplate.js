import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";
import { formatDate } from "../../helpers/formatDate";
import { Weathers } from "../../icons/Weathers";

export const bolerplate = (data) => {
  const weather = {
    tempDay: kelvinToCelsius(data.temp.day),
    tempNight: kelvinToCelsius(data.temp.night),
    temp: kelvinToCelsius(data.temp.day),
    sensation: kelvinToCelsius(data.feels_like.day),
    textWeather: data.weather[0].description,
    icon: Weathers(data.weather[0].icon, 4),
    date: formatDate(data.dt),
  };

  return weather;
};
