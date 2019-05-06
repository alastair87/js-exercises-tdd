var removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  let result = words.map(function(word) {
    return removeVowels(word);
  });

  result = result.map(removeUnderscores);
  return result;
}

const removeUnderscores = word => {
  var result = [], characters = word.split("");
  characters.forEach(character => {if (character !== "_") result.push(character);})
  return result.join(""); 
}
module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
