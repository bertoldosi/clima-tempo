import React from "react";
import { ThemeProvider } from "styled-components";

let hour = new Date().getHours();
const isNigth = hour >= 6;

const common = {
  backgroundColorWhite: "white",
  backgroundColorSecundary: "#2E2B2B",

  textFontFamilyDefault: "Kadwa, serif",
  textFontFamilyTime: "clockicons, sans-serif",
  textColorPrimary: "#FFFFFF",
  textColorSecundary: "#2E2B2B",
  textColorSecundaryOpacity: "#B0AFAF",
};

export const lightTheme = {
  ...common,
  backgroundColorPrimary:
    "linear-gradient(180deg, #0E5E8B 0%, rgba(19, 103, 151, 0.855911) 46.52%, rgba(24, 114, 165, 0.672688) 99.53%, rgba(28, 121, 173, 0.572576) 103.84%, rgba(33, 131, 187, 0.401042) 103.85%, rgba(45, 156, 219, 0) 103.86%, rgba(43, 152, 214, 0.0605227) 103.86%) no-repeat;",
};

export const darkTheme = {
  ...common,
  backgroundColorPrimary:
    "linear-gradient(180deg, #0E398B 0%, rgba(24, 114, 165, 0.672688) 99.53%, rgba(19, 103, 151, 0.855911) 103.83%, rgba(28, 121, 173, 0.572576) 103.84%, rgba(33, 131, 187, 0.401042) 103.85%, rgba(45, 156, 219, 0) 103.86%, rgba(43, 152, 214, 0.0605227) 103.86%) no-repeat;",
};

const theme = isNigth ? darkTheme : lightTheme;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
