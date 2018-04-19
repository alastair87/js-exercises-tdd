// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

// using tail call elimination as suggested here - http://www.thinkingincrowd.me/2016/06/06/How-to-avoid-Stack-overflow-error-on-recursive/

function factorial(int) {
  function innerFactorial(int, result) {
    if (int == 0) return result;
    else return innerFactorial(int - 1, int * result);
  }
  return innerFactorial(int, 1);
}

module.exports = factorial;
