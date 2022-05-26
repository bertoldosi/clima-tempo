const axios = require("axios");

const APPID = process.env.REACT_APP_APPID;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: APPID,
  },
});

module.exports = api;
