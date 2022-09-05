import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UseAppContext } from "../../hooks/AppContextProvider";

import { mockCity } from "./mock";

import Search from ".";

jest.mock("../../hooks/AppContextProvider");

describe("Search test", () => {
  UseAppContext.mockReturnValue(mockCity);

  it("should render component correctly", () => {
    render(<Search />);

    expect(screen.getByLabelText("search-city")).toHaveValue(
      "Cascavel - Paraná"
    );
  });

  it("must show searched city", async () => {
    render(<Search />);

    const input = await screen.getByLabelText(/search-city/i);
    fireEvent.change(input, { target: { value: "Rio" } });

    expect(input.value).toBe("Rio");
  });

  it("should show result and change input value after click ", async () => {
    render(<Search />);

    const input = screen.getByLabelText(/search-city/i);
    fireEvent.change(input, { target: { value: "Rio Branco" } });

    const searchCity = await screen.findByText("Rio Branco - Acre");
    fireEvent.click(searchCity);

    expect(input.value).toBe("Rio Branco - Acre");
  });
});
