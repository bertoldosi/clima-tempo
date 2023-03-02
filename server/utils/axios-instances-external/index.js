const axios = require("axios");

const APPID = process.env.APPID;

const serviceData = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: APPID,
  },
});

const serviceGeo = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0",
  params: {
    appid: APPID,
  },
});

module.exports = {
  serviceData,
  serviceGeo,
};
