const secondLargest = numbers => {
  let first = numbers[0],
    second = numbers[0];
  numbers.forEach(number => {
    if (number > first) {
      second = first;
      first = number;
    }
    if (first > number > second) {
      second = number;
    }
  });
  //   let second_largest = numbers[0];
  //   numbers.forEach(number => {
  //     if (number !== largest && number >= second_largest) second_largest = number;
  //   });
  return second;
};

module.exports = secondLargest;

/* numbers
  .slice()
  .sort((a, b) => b - a)
  .slice(1, 2)[0]; */
