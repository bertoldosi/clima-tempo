import React from "react";
import { render, screen } from "@testing-library/react";

import usePosition from "../../hooks/usePosition";
import { UseAppContext } from "../../hooks/AppContextProvider";
import { GetWeatherCity, GetWeatherTomorrow } from "../../api/weather";

import {
  mockCity,
  mockGetWeatherCity,
  mockGetWeatherTomorrow,
  mockPosition,
} from "./mock";

import Tomorrow from ".";

jest.mock("../../api/weather");
jest.mock("../../hooks/AppContextProvider");
jest.mock("../../hooks/usePosition");

describe("Tomorrow test", () => {
  it("should render the component correctly", async () => {
    usePosition.mockResolvedValue({
      currentPosition: jest.fn().mockResolvedValue(mockPosition),
    });

    UseAppContext.mockReturnValue(mockCity);
    GetWeatherCity.mockReturnValue(mockGetWeatherCity);
    GetWeatherTomorrow.mockReturnValue(mockGetWeatherTomorrow);

    render(<Tomorrow />);

    expect(screen.getByLabelText("search-city")).toHaveValue(
      "Cascavel - Paraná"
    );

    // expect(await screen.findByText(/^15$/i)).toBeInTheDocument();
    // expect(await screen.findByText(/^Dia 19°$/i)).toBeInTheDocument();
    // expect(await screen.findByText(/^Noite 14°$/i)).toBeInTheDocument();
    // expect(await screen.findByText(/^Sensação 15°$/i)).toBeInTheDocument();
    // expect(screen.getByRole("img")).toBeInTheDocument();
    // expect(await screen.findByText(/^céu limpo$/i)).toBeInTheDocument();
    // expect(
    //   await screen.findByText(/^terça, 28 de jun de 2022$/i)
    // ).toBeInTheDocument();
    // expect(await screen.findByText(/^Cascavel - Paraná$/i)).toBeInTheDocument();
    // expect(await screen.findByText(/^Boa tarde!$/i)).toBeInTheDocument();
  });
});
