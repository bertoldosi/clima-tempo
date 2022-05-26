import { formatDate } from "../../helpers/formatDate";
import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";

export const bolerplate = (data) => {
  localStorage.setItem("@date-clima-tomorrow", formatDate(data.dt));

  const weather = {
    tempDay: kelvinToCelsius(data.temp.day),
    tempNight: kelvinToCelsius(data.temp.night),
    temp: kelvinToCelsius(data.temp.day),
    sensation: kelvinToCelsius(data.feels_like.day),
    textWeather: data.weather[0].description,
  };

  return weather;
};
