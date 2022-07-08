require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = 3001;
const config = {
  origin: "*",
};
const corsInstance = cors(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(corsInstance);

require("./routes/weather")(app);

app.listen(port, () => {
  console.log("Server start!, port:", port);
});
