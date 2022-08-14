import React from "react";
import { render, screen } from "@testing-library/react";
import { mockNavigatorGeolocation } from "../../ test-utils";

import { GetWeatherCity, GetWeatherToday } from "../../api/weather";

const mockWeather = {
  data: {
    daily: {
      dt: 1656428400,
      sunrise: 1656411546,
      sunset: 1656449690,
      moonrise: 1656410280,
      moonset: 1656448200,
      temp: {
        day: 292.53,
        min: 284.45,
        max: 293.39,
        night: 287.48,
        eve: 288.48,
        morn: 285.02,
      },
      feels_like: {
        day: 292.43,
        night: 287.45,
        eve: 288.47,
        morn: 284.61,
      },
      pressure: 1018,
      humidity: 73,
      dew_point: 287.99,
      wind_speed: 4.58,
      wind_deg: 4,
      wind_gust: 9.2,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "chuva leve",
          icon: "10d",
        },
      ],
      clouds: 9,
      pop: 0.2,
      rain: 0.11,
      uvi: 4.96,
    },
    current: {
      dt: 1656458599,
      sunrise: 1656411546,
      sunset: 1656449690,
      temp: 288.07,
      feels_like: 288.05,
      pressure: 1017,
      humidity: 93,
      dew_point: 286.95,
      uvi: 0,
      clouds: 4,
      visibility: 10000,
      wind_speed: 1.89,
      wind_deg: 10,
      wind_gust: 3.82,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "céu limpo",
          icon: "01n",
        },
      ],
    },
  },
};

const mockCity = {
  data: {
    nome: "Cascavel",
    latitude: -24.9554996,
    longitude: -53.4560544,
    uf: {
      uf: "Paraná",
      nome: "Paraná",
    },
  },
};

let mockIsLoggedIn = "";

jest.mock("../../api/weather");

jest.mock("../../hooks/AppContextProvider", () => ({
  UseAppContext: () => ({
    city: mockIsLoggedIn,
  }),
}));

import Today from ".";

describe("Today", () => {
  test("seach ", async () => {
    render(<Today />);

    const { getCurrentPositionMock } = mockNavigatorGeolocation();
    getCurrentPositionMock.mockImplementation((success, rejected) =>
      success({
        coords: {
          latitude: "4444",
          longitude: "4444",
        },
      })
    );

    GetWeatherToday.mockResolvedValue(mockWeather);

    GetWeatherCity.mockResolvedValue(mockCity);

    // screen.debug();
  });
});
