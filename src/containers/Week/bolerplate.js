import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";
import { formatDate } from "../../helpers/formatDate";

export const bolerplate = (data) => {
  const weather = data.map((weather, index) => {
    const icon = weather.weather[0].icon;
    const iconSize = 2;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@${iconSize}x.png`;

    if (index === 0) {
      return {
        day: "Hoje",
        temp_max: kelvinToCelsius(weather.temp.max),
        temp_min: kelvinToCelsius(weather.temp.min),
        textWeather: weather.weather[0].description,
        iconUrl,
      };
    } else {
      return {
        day: formatDate(weather.dt),
        temp_max: kelvinToCelsius(weather.temp.max),
        temp_min: kelvinToCelsius(weather.temp.min),
        textWeather: weather.weather[0].description,
        iconUrl,
      };
    }
  });

  return weather;
};
