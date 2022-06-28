require("dotenv").config();

module.exports = {
  compiler: {
    styledComponents: true,
  },
  env: {
    API_SCREEN: process.env.API_SCREEN,
  },
};
