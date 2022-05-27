import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";
import { formatDate } from "../../helpers/formatDate";
import ParcialmenteNublado from "../../icons/ParcialmenteNublado";

export const bolerplate = (data) => {
  const weather = data.map((weather, index) => {
    if (index === 0) {
      return {
        day: "Hoje",
        temp_max: kelvinToCelsius(weather.temp.max),
        temp_min: kelvinToCelsius(weather.temp.min),
        textWeather: weather.weather[0].description,
        icon: <ParcialmenteNublado width={40} height={40} />,
      };
    } else {
      return {
        day: formatDate(weather.dt),
        temp_max: kelvinToCelsius(weather.temp.max),
        temp_min: kelvinToCelsius(weather.temp.min),
        textWeather: weather.weather[0].description,
        icon: <ParcialmenteNublado width={40} height={40} />,
      };
    }
  });

  return weather;
};
