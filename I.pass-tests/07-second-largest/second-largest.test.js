var secondLargest = require("./second-largest");

/*test("Second largest", function() {
  var numbers = [2, 0, 23, 0, 57, 1, 230];

  var output = secondLargest(numbers);

  expect(output).toEqual(57);
});*/

test("Second largest - big", () => {
  let numbers = [];
  for (let i = 1; i < 100000; i++) numbers.unshift(i);

  let output = secondLargest(numbers);

  expect(output).toEqual(99998);
});
