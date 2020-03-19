/**
 * 基于计数排序算法
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // 1. 创建一个数组用来记录给定的字符串中每个字母出现的次数
  let countArr = (new Array(52)).fill(0)

  for (let i = 0, len = s.length; i < len; i++) {
    const charCode = s.charAt(i).charCodeAt()
    if (charCode < 97) {
      countArr[charCode - 65]++
    } else {
      countArr[charCode - 97 + 26]++
    }
  }

  let res = 0
  // 出现奇数个字母的个数
  let odd = 0
  for (let i = 0; i < 52; i++) {
    res += countArr[i]
    if (countArr[i] % 2 === 1) {
      odd += 1
    }
  }

  return odd === 0 ? res : res - odd + 1
};