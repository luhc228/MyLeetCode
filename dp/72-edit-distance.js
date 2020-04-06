/**
 * 方法一：动态规划
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (!word1) {
    return word2.length
  }
  if (!word2) {
    return word1.length
  }
  if (!word1 && !word2) {
    return 0
  }
  const m = word1.length;
  const n = word2.length;
  let dp = []
  for (let i = 0; i < m + 1; i++) {
    dp.push([])
  }

  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 增加 dp[i-1][j]
        // 删除 dp[i][j - 1]
        // 替换 dp[i-1][j-1]
        dp[i][j] = 1 + Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1])
      }
    }
  }

  return dp[m][n]
};