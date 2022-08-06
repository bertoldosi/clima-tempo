import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";
import { formatDate } from "../../helpers/formatDate";
import { Weathers } from "../../icons/Weathers";

export const bolerplate = (data) => {
  const icon = data.current.weather[0].icon;
  const iconSize = 4;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@${iconSize}x.png`;

  const weather = {
    tempDay: kelvinToCelsius(data.daily.temp.day),
    tempNight: kelvinToCelsius(data.daily.temp.night),
    temp: kelvinToCelsius(data.current.temp),
    sensation: kelvinToCelsius(data.current.feels_like),
    textWeather: data.current.weather[0].description,
    iconUrl,
    date: formatDate(data.current.dt),
  };

  return weather;
};
