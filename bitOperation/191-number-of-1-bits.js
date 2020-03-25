/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
    n = n & (n - 1)
    count++
  }
  return count
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  for (let i = 31; i >= 0; i--) {
    // 循环32遍，判断当前位置是否为1
    count += (n >> (31 - i) & 1) === 1 ? 1 : 0
  }

  return count
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  for (let i = 31; i >= 0; i--) {
    // 循环32遍，判断当前位置是否为1
    if (n & 1 === 1) {
      count++
    }
    n = n >> 1
  }

  return count
};