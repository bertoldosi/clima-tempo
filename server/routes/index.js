const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const config = {
  origin: ["http://localhost:3000"],
  exposedHeaders: "Origin, Content-Type",
};

const corsInstance = cors(config);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(corsInstance);

require("./weather")(app);

app.listen(3333);
