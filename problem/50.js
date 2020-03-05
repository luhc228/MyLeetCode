/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
      n = -n;
      x = 1 / x;
  }
  
  let pow = 1;
  while (n) {
      if (!!(n & 1)) {
          pow *= x;
      }
      n >>= 1;
      x *= x;
  }
  return pow;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
      return 1;
  }
  
  if (n < 0) {
      n = -n;
      x = 1 / x;
  }
  
  if (n % 2 === 1) {
      return x * myPow(x, n - 1);
  }
  
  return myPow(x*x, n / 2);
};
