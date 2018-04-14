// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

var getLargestNumber = require("./largest-number");

test("number is largest and input array is unchanged", () => {
  var input = [3, 21, 88, 4, 36];
  var expected = 88;
  var inputCopy = input.slice();
  var output = getLargestNumber(input);

  expect(output).toEqual(expected);
  expect(input).toEqual(inputCopy);
});
