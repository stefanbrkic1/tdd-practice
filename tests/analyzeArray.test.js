const analyzeArray = require("../code/analyzeArray.js");

test("analyzeArray function returns an object with analyzed properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
