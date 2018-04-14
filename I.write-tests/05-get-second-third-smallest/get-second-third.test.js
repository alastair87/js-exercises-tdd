// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

var getSecondThird = require("./get-second-third");

test("returns 2nd and 3rd largest number and that array is unchanged", () => {
  var input = [90, 5, 11, 8, 6];
  var inputCopy = input.slice();
  var expected = [6, 8];
  var output = getSecondThird(input);

  expect(output).toEqual(expected);
  expect(input).toEqual(inputCopy);
});
