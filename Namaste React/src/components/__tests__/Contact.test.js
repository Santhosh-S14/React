import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button in contact us component", () => {
  render(<Contact />);
  // const button = screen.getByRole("button");
  const buttonText = screen.getByText("Submit");
  expect(buttonText).toBeInTheDocument();
});

test("Should load input boxes in contact us component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
