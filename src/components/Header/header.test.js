import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Card", () => {
  it("renders appropriately", () => {
    render(<Header />);
    expect(screen.findAllByDisplayValue("FIND YOUR MOVIE"));
  });
});
