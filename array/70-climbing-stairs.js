/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n
  }

  let l1 = 1
  let l2 = 2
  let l3 = 3
  let i = 3
  while (i <= n) {
    l3 = l1 + l2
    l1 = l2
    l2 = l3
    i++
  }

  return l3
};