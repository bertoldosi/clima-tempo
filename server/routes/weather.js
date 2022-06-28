require("dotenv").config();
const express = require("express");
const { apiWeather, apiGeo } = require("../utils/axios-instances-external");
const router = express.Router();

const mockToday = require("./mocks/today.json");
const mockTomorrow = require("./mocks/tomorrow.json");
const mockWeek = require("./mocks/week.json");
const mockCity = require("./mocks/city.json");

const APPID = process.env.REACT_APP_APPID;

router.get("/today", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    // const response = await apiWeather.get("/onecall", {
    //   params: {
    //     lat,
    //     lon,
    //     appid: APPID,
    //     lang: "pt_br",
    //   },
    // });

    // const data = {
    //   daily: response.data.daily[0],
    //   current: response.data.current,
    // };

    // res.status(200).send(data);
    res.status(200).send(mockToday);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/tomorrow", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await apiWeather.get("/onecall", {
      params: {
        lat,
        lon,
        appid: APPID,
        lang: "pt_br",
      },
    });

    // res.status(200).send(response.data.daily[1]);
    res.status(200).send(mockTomorrow);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/week", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    // const response = await apiWeather.get("/onecall", {
    //   params: {
    //     lat,
    //     lon,
    //     appid: APPID,
    //     lang: "pt_br",
    //   },
    // });

    // res.status(200).send(response.data.daily);
    res.status(200).send(mockWeek);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/city", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    // const response = await apiGeo.get("/reverse", {
    //   params: {
    //     lat,
    //     lon,
    //     appid: APPID,
    //   },
    // });

    // const city = {
    //   nome: response.data[0].name,
    //   latitude: response.data[0].lat,
    //   longitude: response.data[0].lon,
    //   uf: {
    //     uf: response.data[0].state,
    //     nome: response.data[0].state,
    //   },
    // };

    // res.status(200).send(city);
    res.status(200).send(mockCity);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

module.exports = (app) => app.use("/weather", router);
