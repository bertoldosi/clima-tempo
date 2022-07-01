const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, "."),
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/jest-setup.js"],

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/.jest/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/.jest/fileMock.js",
  },
};
