import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormAddMovie } from "./index";
import { MemoryRouter } from "react-router-dom";
import * as Snackbar from "react-simple-snackbar";

describe("Form Add Movie", () => {
  const openSnackbarMock = jest.fn();
  const closeSnackbarMock = jest.fn();
  jest
    .spyOn(Snackbar, "useSnackbar")
    .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);
  it("renders appropriately", () => {
    render(
      <MemoryRouter>
        <FormAddMovie />
      </MemoryRouter>
    );
    expect(screen.findAllByDisplayValue("Submit"));
  });

  it("show the sended message", () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <FormAddMovie onSubmit={onSubmit} />
    );
    const inputValue = "12";

    fireEvent.change(getByLabelText(/title/i), {
      target: { value: inputValue },
    });
    fireEvent.click(screen.getByTestId("submit-btn"));

    expect(onSubmit).toBeTrue;
  });
});
