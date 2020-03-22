/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  A.sort((a, b) => a - b)
  let res = 0
  for (let i = 0, len = A.length; i < len; i++) {
    if (A[i] <= A[i - 1]) {
      n = A[i - 1] - A[i] + 1
      A[i] += n
      res += n
    }
  }

  return res
};