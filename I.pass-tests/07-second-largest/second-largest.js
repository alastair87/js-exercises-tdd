const secondLargest = numbers => {
  //   let first = Number.MIN_SAFE_INTEGER;
  //   second = Number.MIN_SAFE_INTEGER;
  //   numbers.forEach(number => {
  //     if (number > first) {
  //       second = first;
  //       first = number;
  //     }
  //     if (first > number && number > second) {
  //       second = number;
  //     }
  //   });

  //   return second;
  return numbers
    .slice()
    .sort((a, b) => b - a)
    .slice(1, 2)[0];
  //   return Math.max(...numbers);
};

module.exports = secondLargest;

/*  */
