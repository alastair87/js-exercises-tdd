const removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  const input = "samuel", expected = "s_m__l";
  // Act
  const result = removeVowels(input);
  // Assert
  expect(result).toBe(expected);
});
