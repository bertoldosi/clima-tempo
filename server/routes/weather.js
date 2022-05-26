require("dotenv").config();
const express = require("express");
const api = require("../utils/axios-instances-external");
const router = express.Router();

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

module.exports = (app) => app.use("/weather", router);
