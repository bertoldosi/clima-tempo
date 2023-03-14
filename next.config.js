require("dotenv").config();

module.exports = {
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    APPID: process.env.APPID,
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
};
