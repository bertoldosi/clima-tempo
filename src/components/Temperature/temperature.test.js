import React from "react";
import { render, screen } from "@testing-library/react";

import { mockCity, weather } from "./mock";
import { UseAppContext } from "../../hooks/AppContextProvider";

import Temperature from ".";

jest.mock("../../hooks/AppContextProvider");

describe("Temperature test", () => {
  it("should render the component correctly", () => {
    UseAppContext.mockReturnValueOnce(mockCity);

    render(<Temperature weather={weather} isResponse={true} />);

    expect(screen.getByText(/^15$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Dia 19°$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Noite 14°$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Sensação 15°$/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/^céu limpo$/i)).toBeInTheDocument();
    expect(screen.getByText(/^terça, 28 de jun de 2022$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Cascavel - Paraná$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Boa tarde!$/i)).toBeInTheDocument();
  });
});
