const axios = require("axios");

const APPID = process.env.REACT_APP_APPID;

const apiWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: APPID,
  },
});

const apiGeo = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0",
  params: {
    appid: APPID,
  },
});

module.exports = { apiWeather, apiGeo };
