var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  var name = "alastair";
  // Act
  var result = removeVowels(name);
  // Assert
  expect(result).toEqual("lstr");
});
