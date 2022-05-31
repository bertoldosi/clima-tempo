const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());

require("./weather")(app);

app.listen(3333);
