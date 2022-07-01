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

let mockIsLoggedIn = "";

jest.mock("../../hooks/AppContextProvider", () => ({
  UseAppContext: () => ({
    city: mockIsLoggedIn,
  }),
}));

import Temperature from ".";

describe("Temperatura", () => {
  test("should ", async () => {
    render(<Temperature weather={mockWeather} isResponse={true} />);

    screen.debug();

    // expect(container).toMatchSnapshot();
  });
});
