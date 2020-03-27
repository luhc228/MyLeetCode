/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num == 0) {
    return "0"
  }
  let res = [];

  if (num >= 0) {
    return go(num)
  } else {
    return '-' + go(Math.abs(num))
  }
  function go(num) {
    while (num >= 7) {
      res.unshift(num % 7);
      num = Math.floor(num / 7)
    }

    res.unshift(num)
    return res.join('')
  }
};