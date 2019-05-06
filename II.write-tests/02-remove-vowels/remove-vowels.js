function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    let lowerCharacter = character.toLowerCase();
    if (
      !(lowerCharacter === "a" ||
      lowerCharacter === "o" ||
      lowerCharacter === "i" ||
      lowerCharacter === "e" ||
      lowerCharacter === "u")
    ) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
