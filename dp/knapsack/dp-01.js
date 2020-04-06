/**
 * 使用动态规划实现 0-1背包问题
 * @param {number[]} weight 物体重量
 * @param {number} n 物品个数
 * @param {number} w 背包可承载的重量
 */
function knapsack(weight, n, w) {
  let states = []
  for (let i = 0; i < n; i++) {
    states.push([])
  }
  states[0][0] = true
  if (weight[0] <= w) {
    states[0][weight[0]] = true
  }
  for (let i = 1; i < n; ++i) { // 动态规划状态转移
    for (let j = 0; j <= w; ++j) { // 不把第i个物品放入背包
      if (states[i - 1][j] === true) {
        states[i][j] = true
      }
    }
    for (let j = 0; j <= w - weight[i]; ++j) { // 把第i个物品放入背包
      if (states[i - 1][j] === true) {
        states[i][j + weight[i]] = true
      }
    }

  }
  for (let i = w; i >= 0; --i) {
    if (states[n - 1][i]) {
      return i
    }
  }
  // 默认返回0
  return 0
}

const result = knapsack([2, 2, 4, 6, 3], 5, 9)
console.log(result)