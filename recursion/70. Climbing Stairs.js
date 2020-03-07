/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }

  let f1 = 1;
  let f2 = 2;
  let f3 = 3;
  let i = 3;
  while (i < n) {
    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
    i++;
  }

  return f3;
};
