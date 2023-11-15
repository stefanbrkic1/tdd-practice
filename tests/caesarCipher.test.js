const caesarCipher = require("../code/caesarCipher.js");

test("caesarCipher function should return string with each character shifted for 1 letter", () => {
  expect(caesarCipher("airplane", 1)).toBe("bjsqmbof");
});

test("caesarCipher function should return string with each character shifted for 1 letter", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("caesarCipher function should return string with same characters if shift key is 0", () => {
  expect(caesarCipher("airplane", 0)).toBe("airplane");
});

test("caesarCipher function returned string should have punctuation", () => {
  expect(caesarCipher("Hello, world! How are you today?", 1)).toBe(
    "Ifmmp, xpsme! Ipx bsf zpv upebz?"
  );
});

test("caesarCipher function should return string with each character shifted even if the key is out of range", () => {
  expect(caesarCipher("airplane", 35)).toBe("jrayujwn");
});
