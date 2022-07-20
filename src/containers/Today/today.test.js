import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockWeather = {
  tempDay: 19,
  tempNight: 16,
  temp: 19,
  sensation: 18,
  textWeather: "céu limpo",
  icon: "http://openweathermap.org/img/wn/01d@4x.png",
  date: "sexta, 01 de jul de   2022",
};

let mockCity = "";
let mockUseValidationCurrentPosition = {
  coords: {
    latitude: "34434343",
    longitude: "3434343",
  },
};

jest.mock("../../hooks/AppContextProvider", () => ({
  UseAppContext: () => ({
    city: mockCity,
  }),
}));

jest.mock("../../hooks/useValidationCurrentPosition", () => ({
  //   useValidationCurrentPosition: () => ({
  //     position: mockUseValidationCurrentPosition,
  //   }),

  useValidationCurrentPosition: () => [
    () => ({
      position: mockUseValidationCurrentPosition,
    }),
  ],
}));

import Today from ".";

describe("Temperatura", () => {
  test("should return a screen with loading and empty input", async () => {
    render(<Today />);

    expect(screen.getByTestId("loading-skeleton")).toBeVisible();

    const input = screen.getByLabelText("search-input");
    expect(input.value).toBe("");
  });

  test.only("should return a screen with the temperature and the city", async () => {
    render(<Today />);

    screen.debug();
  });
});
