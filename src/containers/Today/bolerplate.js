import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";

export const bolerplate = (data) => {
  const weather = {
    temp_min: kelvinToCelsius(data.main.temp_min),
    temp_max: kelvinToCelsius(data.main.temp_max),
    temp: kelvinToCelsius(data.main.temp),
    sensation: kelvinToCelsius(data.main.feels_like),
    textWeather: data.weather[0].description,
  };

  return weather;
};
