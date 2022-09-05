import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import HeaderToggle from ".";
import { UseAppContext } from "../../hooks/AppContextProvider";

jest.mock("../../hooks/AppContextProvider");

const setWrapperTypeFn = jest.fn();

describe("HeaderToggle test", () => {
  it("should render the component", () => {
    UseAppContext.mockReturnValueOnce({
      wrapperType: "TODAY",
      setWrapperType: setWrapperTypeFn,
    });

    render(<HeaderToggle />);

    expect(screen.getByRole("button", { name: "Hoje" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Amanhã" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Semana" })).toBeInTheDocument();
  });

  it("should ", () => {
    UseAppContext.mockReturnValueOnce({
      wrapperType: "TODAY",
      setWrapperType: setWrapperTypeFn,
    });

    render(<HeaderToggle />);

    const buttonToday = screen.getByRole("button", { name: "Hoje" });
    fireEvent.click(buttonToday);
    expect(setWrapperTypeFn).toHaveBeenCalledWith("TODAY");

    const buttonTomorrow = screen.getByRole("button", { name: "Amanhã" });
    fireEvent.click(buttonTomorrow);
    expect(setWrapperTypeFn).toHaveBeenCalledWith("TOMORROW");

    const buttonWeek = screen.getByRole("button", { name: "Semana" });
    fireEvent.click(buttonWeek);
    expect(setWrapperTypeFn).toHaveBeenCalledWith("WEEK");
  });
});
