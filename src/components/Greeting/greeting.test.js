import React from "react";
import { render, screen } from "@testing-library/react";
import { UseAppContext } from "../../hooks/AppContextProvider";
import { mockCity } from "./mock";

import Greeting from ".";

jest.mock("../../hooks/AppContextProvider");

describe("Greeting", () => {
  it("should render the component correctly", () => {
    jest.useFakeTimers().setSystemTime(new Date("October 14, 2022 06:00:00"));

    UseAppContext.mockReturnValueOnce(mockCity);

    render(<Greeting date="terça, 28 de jun de 2022" />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "terça, 28 de jun de 2022"
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Cascavel - Paraná"
    );

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Bom dia!"
    );
  });

  it("should show good afternoon message", () => {
    jest.useFakeTimers().setSystemTime(new Date("October 14, 2022 12:00:00"));
    UseAppContext.mockReturnValueOnce(mockCity);

    render(<Greeting date="terça, 28 de jun de 2022" />);

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Boa tarde!"
    );
  });

  it("must show good night message", () => {
    jest.useFakeTimers().setSystemTime(new Date("October 14, 2022 18:00:00"));
    UseAppContext.mockReturnValueOnce(mockCity);

    render(<Greeting date="terça, 28 de jun de 2022" />);

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Boa noite!"
    );
  });

  it("should show good morning message", () => {
    jest.useFakeTimers().setSystemTime(new Date("October 14, 2022 00:00:00"));
    UseAppContext.mockReturnValueOnce(mockCity);

    render(<Greeting date="terça, 28 de jun de 2022" />);

    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Boa madrugada!"
    );
  });
});
