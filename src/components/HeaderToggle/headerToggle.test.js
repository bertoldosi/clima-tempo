import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HeaderToggle from ".";
import { UseAppContext } from "../../hooks/AppContextProvider";

jest.mock("../../hooks/AppContextProvider");

describe("HeaderToggle test", () => {
  it("should render the component", () => {
    UseAppContext.mockReturnValueOnce({
      wrapperType: "TODAY",
      setWrapperType: jest.fn(),
    });

    render(<HeaderToggle />);

    expect(screen.getByRole("button", { name: "Hoje" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Amanhã" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Semana" })).toBeInTheDocument();
  });
});
