import React from "react";
import { render, screen } from "@testing-library/react";

import Greeting from ".";

jest.mock("../../hooks/AppContextProvider", () => ({
  UseAppContext: () => ({
    city: {
      nome: "Cascavel",
      uf: {
        uf: "Paraná",
        nome: "Paraná",
      },
    },
  }),
}));

jest.useFakeTimers().setSystemTime(new Date("October 14, 2022 12:00:00"));

describe("Greeting", () => {
  it("should render the component correctly", () => {
    render(<Greeting date="terça, 28 de jun de 2022" />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "terça, 28 de jun de 2022"
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Cascavel - Paraná"
    );

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Boa tarde!"
    );
  });
});
