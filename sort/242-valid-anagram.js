/**
 * 方法一
 * 先分别对两个字符串进行排序，然后比较他们是否一样
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sArr = s.split(''), tArr = t.split('')
  sArr.sort()
  tArr.sort()
  return sArr.toString() === tArr.toString()
};

/**
 * 使用hash + 计数排序
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const sArr = (new Array(26)).fill(0)
  for (let i = 0, len = s.length; i < len; i++) {
    sArr[s.charAt(i).charCodeAt() - 97]++
    sArr[t.charAt(i).charCodeAt() - 97]--
  }
  return !sArr.some(item => item !== 0)
};
