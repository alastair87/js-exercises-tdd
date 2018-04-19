// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = average;

function average(array) {
  var sum = 0,
    count = 0;
  array.forEach(element => {
    if (typeof element == "number") {
      sum += element;
      count++;
    }
  });
  return sum / count;
}
