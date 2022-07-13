const express = require("express");
const next = require("next");

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (dev) {
    require("./routes/mocks/weather")(server);
  } else {
    require("./routes/weather")(server);
  }

  server.get("*/*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
