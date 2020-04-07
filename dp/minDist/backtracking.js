let minDist = Number.MIN_SAFE_INTEGER;

/**
 * 使用回溯算法解决：时间复杂度(2^n)
 * @param {*} i 行数
 * @param {*} j 列数
 * @param {*} dist 当前距离
 * @param {number[][]} w 格点数
 * @param {*} n 总行数or总列数
 */
function f(i, j, dist, w, n) {
  // terminator
  if (i === n && j === n) {
    if (dist < minDist) {
      minDist = dist
    }
    return
  }
  if (i < n) { // 往下走 dist加上当前格点的步数
    f(i + 1, j, dist + w[i][j], w, n)
  }
  if (j < n) { // 往右走 dist加上当前格点的步数
    f(i, j + 1, dist + w[i][j], w, n)
  }
}

let w = []
f(0, 0, 0, w, n)
