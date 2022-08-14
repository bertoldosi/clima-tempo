import React from "react";
import { render, screen } from "@testing-library/react";

import ErrorMessage from ".";

describe("Error Message", () => {
  it("should render the component correctly", () => {
    render(<ErrorMessage text="Text error test" />);

    expect(screen.getByText(/^Text error test$/)).toBeInTheDocument();
  });
});
