import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

  test("clicking the serch button", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const button = screen.queryByTestId("search-btn");
    const input = screen.getByTestId("value_movie");
    fireEvent.click(button);
    expect(input).toBeInTheDocument;
  });

  test("Input search handler", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const input = screen.getByTestId("value_movie");
    fireEvent.change(input);
    expect(input).toBeInTheDocument;
  });

  test("on Show Modal", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const button = screen.getByTestId("add_movie");
    fireEvent.click(button);
    const modal = screen.getByTestId("modal_add_movie");
    expect(modal).toBeInTheDocument;
  });
});
