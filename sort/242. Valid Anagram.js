/**
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
