import api from "../lib/axios-instance-local";

export const GetWeatherToday = async (lat, lon) => {
  const params = { lat, lon };
  return api.get("/weather/today", { params });
};

export const GetWeatherTomorrow = async (lat, lon) => {
  const params = { lat, lon };
  return api.get("/weather/tomorrow", { params });
};

export const GetWeatherWeek = async (lat, lon) => {
  const params = { lat, lon };
  return api.get("/weather/week", { params });
};

export const GetWeatherCity = async (lat, lon) => {
  const params = { lat, lon };
  return api.get("/weather/city", { params });
};
