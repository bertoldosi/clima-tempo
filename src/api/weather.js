import apiGateway from "../lib/axios-instance-local";

export const GetWeatherToDay = async (lat, lon) => {
  const params = { lat, lon };

  return apiGateway.get("/weather/one-day", { params });
};
