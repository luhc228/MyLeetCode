/**
 * 只关注最小胃口值的小孩是否能满足
 * 
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let total = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const gLen = g.length
  const sLen = s.length
  let i = 0, j = 0;
  while (i < gLen && j < sLen) {
    if (s[j] >= g[i]) {
      total += 1
      i += 1
      j += 1
    } else {
      j += 1
    }
  }

  return total
};