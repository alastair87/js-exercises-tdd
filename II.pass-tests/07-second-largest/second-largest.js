module.exports = secondLargest;

function secondLargest(numbers) {
  numbers.splice(numbers.indexOf(getMaxOfArray(numbers), 1));
  return numbers[numbers.indexOf(getMaxOfArray(numbers))];
  function getMaxOfArray(array) {
    return array.reduce((a, b) => Math.max(a, b));
  }
}
