require("dotenv").config();
const express = require("express");
const api = require("../utils/axios-instances-external");
const router = express.Router();

const APPID = process.env.REACT_APP_APPID;

const mock = [
  {
    dt: 1653580800,
    sunrise: 1653561625,
    sunset: 1653603382,
    moonrise: 1653550200,
    moonset: 1653594120,
    moon_phase: 0.88,
    temp: {
      day: 304.34,
      min: 295.6,
      max: 305.2,
      night: 297,
      eve: 299.24,
      morn: 295.71,
    },
    feels_like: {
      day: 307.18,
      night: 297.74,
      eve: 299.24,
      morn: 295.82,
    },
    pressure: 1014,
    humidity: 55,
    dew_point: 294.25,
    wind_speed: 1.82,
    wind_deg: 73,
    wind_gust: 2.81,
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "nublado",
        icon: "04d",
      },
    ],
    clouds: 93,
    pop: 0,
    uvi: 9.84,
  },
  {
    dt: 1653667200,
    sunrise: 1653648040,
    sunset: 1653689781,
    moonrise: 1653639480,
    moonset: 1653682920,
    moon_phase: 0.91,
    temp: {
      day: 304.65,
      min: 294.96,
      max: 305.32,
      night: 297.38,
      eve: 299.93,
      morn: 294.96,
    },
    feels_like: {
      day: 308.03,
      night: 297.82,
      eve: 301.36,
      morn: 295.52,
    },
    pressure: 1014,
    humidity: 56,
    dew_point: 294.8,
    wind_speed: 2.02,
    wind_deg: 153,
    wind_gust: 4.38,
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "nuvens dispersas",
        icon: "03d",
      },
    ],
    clouds: 29,
    pop: 0.39,
    uvi: 9.7,
  },
  {
    dt: 1653753600,
    sunrise: 1653734455,
    sunset: 1653776181,
    moonrise: 1653728700,
    moonset: 1653771720,
    moon_phase: 0.95,
    temp: {
      day: 305.6,
      min: 295.04,
      max: 306.27,
      night: 299.2,
      eve: 300.67,
      morn: 295.04,
    },
    feels_like: {
      day: 308.1,
      night: 299.2,
      eve: 302.4,
      morn: 295.61,
    },
    pressure: 1012,
    humidity: 49,
    dew_point: 293.49,
    wind_speed: 1.61,
    wind_deg: 7,
    wind_gust: 3.4,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "chuva leve",
        icon: "10d",
      },
    ],
    clouds: 45,
    pop: 0.28,
    rain: 0.21,
    uvi: 8.47,
  },
  {
    dt: 1653840000,
    sunrise: 1653820870,
    sunset: 1653862581,
    moonrise: 1653818040,
    moonset: 1653860700,
    moon_phase: 0.98,
    temp: {
      day: 305.64,
      min: 295.51,
      max: 306.96,
      night: 298.68,
      eve: 301.54,
      morn: 296.37,
    },
    feels_like: {
      day: 307.92,
      night: 299.06,
      eve: 303.86,
      morn: 296.78,
    },
    pressure: 1011,
    humidity: 48,
    dew_point: 293.27,
    wind_speed: 1.61,
    wind_deg: 350,
    wind_gust: 2.83,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "céu limpo",
        icon: "01d",
      },
    ],
    clouds: 6,
    pop: 0,
    uvi: 8.39,
  },
  {
    dt: 1653926400,
    sunrise: 1653907286,
    sunset: 1653948982,
    moonrise: 1653907440,
    moonset: 1653949800,
    moon_phase: 0,
    temp: {
      day: 304.27,
      min: 295.57,
      max: 305.9,
      night: 298.98,
      eve: 301.83,
      morn: 295.57,
    },
    feels_like: {
      day: 306.82,
      night: 299.47,
      eve: 304.7,
      morn: 296.09,
    },
    pressure: 1012,
    humidity: 54,
    dew_point: 293.74,
    wind_speed: 1.77,
    wind_deg: 320,
    wind_gust: 4.14,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "céu limpo",
        icon: "01d",
      },
    ],
    clouds: 5,
    pop: 0,
    uvi: 8.42,
  },
  {
    dt: 1654012800,
    sunrise: 1653993701,
    sunset: 1654035383,
    moonrise: 1653996900,
    moonset: 1654039080,
    moon_phase: 0.04,
    temp: {
      day: 303.26,
      min: 296.03,
      max: 305.16,
      night: 296.64,
      eve: 301.84,
      morn: 296.03,
    },
    feels_like: {
      day: 305.99,
      night: 297.32,
      eve: 304.88,
      morn: 296.62,
    },
    pressure: 1012,
    humidity: 59,
    dew_point: 294.26,
    wind_speed: 2.8,
    wind_deg: 327,
    wind_gust: 5.68,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "chuva leve",
        icon: "10d",
      },
    ],
    clouds: 97,
    pop: 0.32,
    rain: 0.11,
    uvi: 0.63,
  },
  {
    dt: 1654099200,
    sunrise: 1654080117,
    sunset: 1654121786,
    moonrise: 1654086420,
    moonset: 1654128540,
    moon_phase: 0.07,
    temp: {
      day: 303.01,
      min: 294.63,
      max: 306.12,
      night: 296.47,
      eve: 301.37,
      morn: 294.63,
    },
    feels_like: {
      day: 305.72,
      night: 297.26,
      eve: 304.54,
      morn: 295.37,
    },
    pressure: 1012,
    humidity: 60,
    dew_point: 294.5,
    wind_speed: 2.08,
    wind_deg: 341,
    wind_gust: 4.1,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "chuva leve",
        icon: "10d",
      },
    ],
    clouds: 44,
    pop: 0.69,
    rain: 2.63,
    uvi: 1,
  },
  {
    dt: 1654185600,
    sunrise: 1654166532,
    sunset: 1654208189,
    moonrise: 1654175820,
    moonset: 1654218000,
    moon_phase: 0.1,
    temp: {
      day: 302.66,
      min: 295.27,
      max: 305.96,
      night: 298.92,
      eve: 303.17,
      morn: 295.27,
    },
    feels_like: {
      day: 305.43,
      night: 299.48,
      eve: 306.64,
      morn: 295.97,
    },
    pressure: 1012,
    humidity: 62,
    dew_point: 294.57,
    wind_speed: 1.8,
    wind_deg: 340,
    wind_gust: 5.01,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "chuva leve",
        icon: "10d",
      },
    ],
    clouds: 98,
    pop: 0.38,
    rain: 0.12,
    uvi: 1,
  },
];

const mockToday = {
  dt: 1653667200,
  sunrise: 1653648041,
  sunset: 1653689781,
  moonrise: 1653639480,
  moonset: 1653682920,
  moon_phase: 0.91,
  temp: {
    day: 300.71,
    min: 294.28,
    max: 302.51,
    night: 296.03,
    eve: 297.47,
    morn: 294.28,
  },
  feels_like: {
    day: 304.57,
    night: 296.7,
    eve: 298.36,
    morn: 294.96,
  },
  pressure: 1014,
  humidity: 83,
  dew_point: 297.41,
  wind_speed: 2.16,
  wind_deg: 138,
  wind_gust: 2.57,
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "chuva moderada",
      icon: "10d",
    },
  ],
  clouds: 17,
  pop: 0.96,
  rain: 5.25,
  uvi: 9.44,
};

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

    const data = {
      daily: response.data.daily[0],
      current: response.data.current,
    };

    // res.status(200).send(mockToday);
    res.status(200).send(data);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/tomorrow", async (req, res) => {
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

    res.status(200).send(response.data.daily[1]);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/week", async (req, res) => {
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

    // res.status(200).send(mock);
    res.status(200).send(response.data.daily);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

module.exports = (app) => app.use("/weather", router);
