import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./index";
import { MemoryRouter } from "react-router-dom";
import * as Snackbar from "react-simple-snackbar";

describe("Card", () => {
  const openSnackbarMock = jest.fn();
  const closeSnackbarMock = jest.fn();
  jest
    .spyOn(Snackbar, "useSnackbar")
    .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);
  it("renders appropriately", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.findAllByDisplayValue("FIND YOUR MOVIE"));
  });
});
