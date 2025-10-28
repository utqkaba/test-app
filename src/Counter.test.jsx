import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.jsx";

test("initial count is 0!", () => {
  render(<Counter />);
  const count = screen.getByText(/count: 0/i);
  expect(count).toBeInTheDocument;
});

test('increase count when "increase button clicked"', async () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /increase/i });
  await userEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument;
});

test('decrease count when "decrease button clicked"', async () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /decrease/i });
  await userEvent.click(button);
  expect(screen.getByText(/count: -1/i)).toBeInTheDocument;
});

test('reset count when "reset button clicked"', async () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /reset/i });
  await userEvent.click(button);
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument;
});
