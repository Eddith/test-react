import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
  console.log("Before Each");
});

test('Header render correctly', () => {
  const headerElement = screen.getByText(/coding with edith/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Coding With Edith');
});

test('Disabled Button test', () => {
  const buttonEl = screen.getByTestId("btnDisabled")
  expect(buttonEl).toHaveTextContent("Disabled");
  expect(buttonEl).toBeDisabled();
});

test('Enabled Button test', () => {
  const buttonEl = screen.getByTestId("btnEnabled")
  expect(buttonEl).toHaveTextContent("Enabled");
  expect(buttonEl).toBeEnabled();
});

test('Green Element Renders Corretly', () => {  
  const greenElement = screen.getByText(/benim rengim yeşil/i);
  expect(greenElement).toBeInTheDocument();
  expect(greenElement).toHaveTextContent("Benim rengim yeşil");
  expect(greenElement).toHaveClass('green');
});
