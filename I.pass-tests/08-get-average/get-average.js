// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = elements => {
  let numbers = elements.filter(element => typeof element === "number");
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

module.exports = average;
