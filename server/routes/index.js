require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());

const APPID = process.env.APPID;

if (APPID) {
  console.log("prod", APPID);
  require("./weather")(app);
} else {
  require("./mocks/weather")(app);
}

require("./weather")(app);

app.listen(3333);
