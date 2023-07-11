import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../src/Button/Button";

test("loads and displays greeting", () => {
  // ARRANGE
  render(<Button text="hi" />);

  // ACT

  // ASSERT
  expect(screen.getByRole("button")).toHaveTextContent('h')
});
