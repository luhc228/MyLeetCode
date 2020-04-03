/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // parseInt 把字符串转换成数字类型 如果被解析参数的第一个字符无法被转化成数值类型，则返回NaN
  const number = parseInt(str, 10);

  if (isNaN(number)) {  // 如果是NaN 返回0
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) { // 如果超过最大值或最小值的范围 返回最大值或者最小值
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return number;
  }
};