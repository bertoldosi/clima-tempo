import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";
import { formatDate } from "../../helpers/formatDate";
import { Weathers } from "../../icons/Weathers";

export const bolerplate = (data) => {
  console.log(data);

  const weather = data.map((weather, index) => {
    if (index === 0) {
      return {
        day: "Hoje",
        temp_max: kelvinToCelsius(weather.temp.max),
        temp_min: kelvinToCelsius(weather.temp.min),
        textWeather: weather.weather[0].description,
        icon: Weathers(weather.weather[0].icon, 2),
      };
    } else {
      return {
        day: formatDate(weather.dt),
        temp_max: kelvinToCelsius(weather.temp.max),
        temp_min: kelvinToCelsius(weather.temp.min),
        textWeather: weather.weather[0].description,
        icon: Weathers(weather.weather[0].icon, 2),
      };
    }
  });

  return weather;
};
