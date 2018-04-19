function addNumbers(numbers) {
  var total = 0;
  numbers.forEach(number => (total += number));
  return total;
}
module.exports = addNumbers;
