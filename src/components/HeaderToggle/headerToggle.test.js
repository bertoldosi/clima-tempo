import React from "react";
import { render, screen } from "@testing-library/react";

import HeaderToggle from ".";

var mockWrapperType = "TODAY";

jest.mock("../../hooks/AppContextProvider", () => ({
  UseAppContext: () => ({
    wrapperType: mockWrapperType,
    setWrapperType: jest.fn(),
  }),
}));

describe("HeaderToggle test", () => {
  it("should render the component", () => {
    render(<HeaderToggle />);

    expect(screen.getByRole("button", { name: "Hoje" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Amanhã" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Semana" })).toBeInTheDocument();
  });
});
