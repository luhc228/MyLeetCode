/**
 * 使用数学定理--裴蜀定理
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x + y < z) {
    return false
  }

  if (z === 0) {
    return true
  }

  if (x === 0) {
    return y === z
  }

  if (y === 0) {
    return x === z
  }

  function gcd(a, b) {
    let min = Math.min(a, b)
    while (min) {
      if (a % min === 0 && b % min === 0) {
        return min
      }
      min--
    }

    return 1
  }

  return z % gcd(x, y) === 0
};