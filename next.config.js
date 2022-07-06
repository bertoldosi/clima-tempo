require("dotenv").config();

module.exports = {
  compiler: {
    styledComponents: true,
  },
  env: {
    APPID: process.env.APPID,
  },
};
