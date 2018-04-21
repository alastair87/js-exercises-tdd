module.exports = fizzbuzz;

function fizzbuzz(n) {
  var fb = "1";
  for (var i = 2; i < n + 1; i++) {
    fb += ", " + fizzbuzzHelper(i);
  }
  return fb;
  function fizzbuzzHelper(n) {
    if (n % 3 == 0) return "Fizz";
    if (n % 5 == 0) return "Buzz";
    return n;
  }
}
