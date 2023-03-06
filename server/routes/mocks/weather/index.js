require("dotenv").config();
const express = require("express");
const router = express.Router();

const mockToday = require("./today.json");
const mockTomorrow = require("./tomorrow.json");
const mockWeek = require("./week.json");
const mockCity = require("./city.json");

router.get("/", async (req, res) => {
  res.status(200).send("Hello api!");
});

router.get("/today", async (req, res) => {
  res.status(200).send(mockToday);
});

router.get("/tomorrow", async (req, res) => {
  res.status(200).send(mockTomorrow);
});

router.get("/week", async (req, res) => {
  res.status(200).send(mockWeek);
});

router.get("/city", async (req, res) => {
  res.status(200).send(mockCity);
});

module.exports = (app) => app.use("/weather", router);
