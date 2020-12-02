import { render, screen, waitFor, within } from "@testing-library/react";
import App from "./App";

test("renders empty right panel", () => {
  render(<App />);
  const linkElement = screen.getByText(/no selected employees/i);
  expect(linkElement).toBeInTheDocument();
});
