import React from "react";
import { render, screen } from "@testing-library/react";
import listWeather from "./mock/listWeather";

import List from ".";

describe("List test", () => {
  it("should render the component correctly", () => {
    render(<List listWeather={listWeather} isResponse={true} />);

    expect(screen.getByText(/Hoje/i)).toBeInTheDocument();
    expect(screen.getByText(/quarta, 29 de jun de 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/quinta, 30 de jun de 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/sexta, 01 de jul de 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/sábado, 02 de jul de 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/domingo, 03 de jul de 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/segunda, 04 de jul de 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/terça, 05 de jul de 2022/i)).toBeInTheDocument();
  });

  it("should render the skeleton correctly", () => {
    render(<List listWeather={listWeather} isResponse={false} />);

    expect(screen.getByTestId("skeleton-element")).toBeVisible();
  });
});
