import { formatDate } from "../../helpers/formatDate";
import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";

export const bolerplate = (data) => {
  const icon = data.weather[0].icon;
  const iconSize = 4;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@${iconSize}x.png`;

  const weather = {
    tempDay: kelvinToCelsius(data.temp.day),
    tempNight: kelvinToCelsius(data.temp.night),
    temp: kelvinToCelsius(data.temp.day),
    sensation: kelvinToCelsius(data.feels_like.day),
    textWeather: data.weather[0].description,
    iconUrl,
    date: formatDate(data.dt),
  };

  return weather;
};
