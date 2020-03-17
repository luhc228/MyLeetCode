/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (!bills.length) {
    return true
  }

  // 5美元钞票的个数
  let five_nums = 0
  // 10美元钞票的个数
  let ten_nums = 0
  // 20美元钞票的个数
  let twenty_nums = 0

  for (let i = 0, len = bills.length; i < len; i++) {
    if (bills[i] === 5) {
      five_nums += 1
    } else if (bills[i] === 10) {
      ten_nums += 1
      if (five_nums > 0) {
        five_nums--
      } else {
        return false
      }
    } else {
      twenty_nums += 1
      if (ten_nums > 0 && five_nums > 0) {
        ten_nums--
        five_nums--
      } else if (five_nums > 4) {
        five_nums -= 3
      } else {
        return false
      }
    }
  }

  return true
};