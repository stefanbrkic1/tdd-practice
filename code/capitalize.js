function capitalize(string) {
  const [firstChar, ...rest] = string;
  return `${firstChar.toUpperCase()}${rest.join("")}`;
}

module.exports = capitalize;
