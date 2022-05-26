require("dotenv").config();
const express = require("express");
const api = require("../utils/axios-instances-external");
const router = express.Router();

const mockResponse = {
  dt: 1653667200,
  sunrise: 1653648040,
  sunset: 1653689781,
  moonrise: 1653639480,
  moonset: 1653682920,
  moon_phase: 0.91,
  temp: {
    day: 304.89,
    min: 295.23,
    max: 305.72,
    night: 297.05,
    eve: 301.3,
    morn: 295.31,
  },
  feels_like: {
    day: 308,
    night: 297.58,
    eve: 303.31,
    morn: 295.8,
  },
  pressure: 1013,
  humidity: 54,
  dew_point: 294.31,
  wind_speed: 1.94,
  wind_deg: 174,
  wind_gust: 3.41,
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "nublado",
      icon: "04d",
    },
  ],
  clouds: 55,
  pop: 0.11,
  uvi: 9.7,
};

const APPID = process.env.REACT_APP_APPID;

router.get("/today", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await api.get("/onecall", {
      params: {
        lat,
        lon,
        appid: APPID,
        lang: "pt_br",
      },
    });

    res.status(200).send(response.data.daily[0]);
    // res.status(200).send(mockResponse);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/tomorrow", async (req, res) => {
  // const { lat, lon } = req.query;

  try {
    // const response = await api.get("/onecall", {
    //   params: {
    //     lat,
    //     lon,
    //     appid: APPID,
    //     lang: "pt_br",
    //   },
    // });

    // res.status(200).send(response.data.daily[1]);
    res.status(200).send(mockResponse);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

module.exports = (app) => app.use("/weather", router);
