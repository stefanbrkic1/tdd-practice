const calculator = require("../code/calculator.js");

test("add function should add 1 + 2 to be 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract function should subtract 3 - 2 to be 1", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("divide function should divide 6 / 2 to be 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("multiply function should multiply 3 * 2 to be 6", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
