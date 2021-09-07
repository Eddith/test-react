import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter/Counter";

beforeEach(() => {
  render(<Counter />);
});

// INPUT TEST

it('Test Secret Message Is Initially Empty', () => {
  const inputEl = screen.getByLabelText(/secret/i);
  
  expect(inputEl).toHaveValue("");
});


it('Test Input Change', () => {
  const inputEl = screen.getByLabelText(/secret/i);
  
  expect(inputEl).toHaveValue("");
  userEvent.type(inputEl, 'Bu bir sır:D');

  expect(inputEl).toHaveValue("Bu bir sır:D");
});


// CHECKBOX TEST


test('Initally Checkbox is not checked', () => {
  const checkEl = screen.getByRole('checkbox');

  expect(checkEl).not.toBeChecked();
});


test('Checkbox work correctly', () => {
  const checkEl = screen.getByRole('checkbox');

  expect(checkEl).not.toBeChecked();
  userEvent.click(checkEl);
  
  expect(checkEl).toBeChecked();
});


// BUTTON TEST

test('Counter is initially 0', () => {
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(0);
});

test('Increment button wroks correctly', () => {
  const counterEl = screen.getByTestId("counter");
  const incrementBtn = screen.getByRole('button', {
    name: /increment/i
  });
  expect(counterEl).toHaveTextContent(0);
  
  // Click on increment button
  userEvent.click(incrementBtn);
  userEvent.click(incrementBtn);

  expect(counterEl).toHaveTextContent(2);
});


test('Decrement button wroks correctly', () => {
  const counterEl = screen.getByTestId("counter");
  const decrementBtn = screen.getByRole('button', {
    name: /decrement/i
  });
  expect(counterEl).toHaveTextContent(0);
  
  // Click on decrement button
  userEvent.click(decrementBtn);
  userEvent.click(decrementBtn);

  expect(counterEl).toHaveTextContent(-2);
});