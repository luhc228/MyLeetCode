/**
 * 方法一：二分查找法
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 0 || num === 1) {
    return num
  }

  let left = 1
  let right = Math.ceil(num / 2)
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid > num) {
      right = mid - 1
    } else if (mid * mid < num) {
      left = mid + 1
    } else {
      return true
    }
  }

  return false
};

/**
 * 方法二：牛顿迭代法
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let r = num
  while (r * r > num) {
    r = (r + num / r) / 2 | 0
  }
  return r * r === num
};

/**
 * 方法3：利用数学定理(1 + 3 + 5 + ... + (2n - 1) = n ^ 2)
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num === 0
};