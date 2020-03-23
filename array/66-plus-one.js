/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] = digits[i] % 10
    if (digits[i] !== 0) {
      return digits
    }
  }
  // 循环加到第一位，这时候数组的元素全为0
  digits.unshift(1)
  return digits
};