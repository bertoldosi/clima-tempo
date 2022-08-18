import React from "react";
import { render, screen } from "@testing-library/react";
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

  // it("must change the value", () => {
  //   render(<Search />);

  //   const input = screen.getByLabelText(/search-city/i);
  //   userEvent.type(input, "Rio branco");

  //   expect(input.value).toBe("Rio branco");

  //   screen.debug();
  // });
});
