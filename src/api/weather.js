import apiGateway from "../lib/axios-instance-local";

export const GetWeatherToday = async (lat, lon) => {
  const params = { lat, lon };

  return apiGateway.get("/weather/today", { params });
};
