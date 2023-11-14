const capitalize = require("../code/capitalize.js");

test("capitalize should capitalize the first character of a string", () => {
  expect(capitalize("airplane")).toBe("Airplane");
});
