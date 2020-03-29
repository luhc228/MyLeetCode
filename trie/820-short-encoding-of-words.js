/**
 * 方法一：保留所有不是其他单词后缀的单词
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let good = new Set(words)
  for (word of words) {
    for (let i = 1, len = word.length; i < len; i++) {
      const breakWord = word.substring(i)
      if (good.has(breakWord)) {
        good.delete(breakWord)
      }
    }
  }
  const res = Array.from(good.values())
  return res.length + res.join('').length
};