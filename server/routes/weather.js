require("dotenv").config();
const express = require("express");
const api = require("../utils/axios-instances-external");
const router = express.Router();

const mockResponse = {
  coord: {
    lon: -67.7937,
    lat: -10.0008,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "céu limpo",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 297.46,
    feels_like: 298.24,
    temp_min: 297.46,
    temp_max: 297.46,
    pressure: 1014,
    humidity: 88,
  },
  visibility: 10000,
  wind: {
    speed: 1.03,
    deg: 180,
  },
  clouds: {
    all: 0,
  },
  dt: 1653531653,
  sys: {
    type: 1,
    id: 8425,
    country: "BR",
    sunrise: 1653475210,
    sunset: 1653516984,
  },
  timezone: -18000,
  id: 3662574,
  name: "Rio Branco",
  cod: 200,
};

const APPID = process.env.REACT_APP_APPID;

router.get("/one-day", async (req, res) => {
  // const { lat, lon } = req.query;

  try {
    // const response = await api.get("/weather", {
    //   params: {
    //     lat,
    //     lon,
    //     appid: APPID,
    //     lang: "pt_br",
    //   },
    // });

    // res.status(200).send(response.data);
    res.status(200).send(mockResponse);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

module.exports = (app) => app.use("/weather", router);
