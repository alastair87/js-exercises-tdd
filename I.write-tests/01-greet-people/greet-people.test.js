var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  var mentors = ["irina", "ashleigh", "etza"];
  // Act
  var result = greetPeople(mentors);
  // Assert
  expect(result).toEqual("Hello irinaashleighetza");
});

test("prints people name", function() {
  var people = ["lesley", "hiwot"];
  var result = greetPeople(people);
  expect(result).toEqual("Hello lesleyhiwot");
});

test("hello with numbers", () => {
  var numbers = [1, 2, 3];
  var result = greetPeople(numbers);
  expect(result).toEqual("Hello 123");
});
