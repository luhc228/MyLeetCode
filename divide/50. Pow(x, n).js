/**
 * 分治法
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  console.log(n)
  if (n === 0) return 1
  if (n === 1) return x

  if (n < 0) return myPow(1 / x, -n)

  let half = myPow(x, Math.floor(n / 2))
  if (n % 2 === 0) {
    return half * half
  } else {
    return half * half * x
  }
};