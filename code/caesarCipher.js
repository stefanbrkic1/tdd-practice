// Define alphabet letters
const alphabet = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const alphabetString = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shiftFactor) {
  if (shiftFactor === 0) return string;

  return string
    .split("")
    .map((char) => {
      const isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      if (alphabet[char] !== undefined) {
        const shiftNum = (alphabet[char] + shiftFactor) % 26;
        isUpperCase
          ? (char = alphabetString.charAt(shiftNum).toUpperCase())
          : (char = alphabetString.charAt(shiftNum));
      }
      return char;
    })
    .join("");
}

module.exports = caesarCipher;
