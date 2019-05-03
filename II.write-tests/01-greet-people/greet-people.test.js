const greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  const names = ["Alastair", "Irina", "Etza"];
  const expected = "Hello AlastairIrinaEtza";
  // Act
  const result = greetPeople(names);
  // Assert
  expect(result).toEqual(expected);
});
