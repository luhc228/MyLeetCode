/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x
  }
  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return right
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let r = x
  while (r * r > x) {
    r = (r + x / r) / 2 | 0
  }
  return r
};