require("dotenv").config();
const express = require("express");
const { apiWeather, apiGeo } = require("../utils/axios-instances-external");
const router = express.Router();

const APPID = process.env.REACT_APP_APPID;

router.get("/today", async (req, res) => {
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

    const data = {
      daily: response.data.daily[0],
      current: response.data.current,
    };

    res.status(200).send(data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
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

    res.status(200).send(response.data.daily[1]);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

router.get("/week", async (req, res) => {
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

    res.status(200).send(response.data.daily);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

router.get("/city", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await apiGeo.get("/reverse", {
      params: {
        lat,
        lon,
        appid: APPID,
      },
    });

    const city = {
      nome: response.data[0].name,
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
      uf: {
        uf: response.data[0].state,
        nome: response.data[0].state,
      },
    };

    res.status(200).send(city);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

module.exports = (app) => app.use("/weather", router);
