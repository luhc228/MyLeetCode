/**
 * 动态规划实现0-1背包问题 
 * 与上一个解决办法不一样的是，这里只需要一个大小为w+1的一维数组即可解决
 */

function knapsack(weight, n, w) {
  let states = []
  states[0] = true
  if (weight[0] <= w) {
    states[weight[0]] = true
  }

  for (let i = 1; i < n; ++i) { // 动态规划状态转移
    for (let j = 0; j <= w - weight[i]; ++j) { // 把第i个物品放入背包
      if (states[j] === true) {
        states[j + weight[i]] = true
      }
    }
  }

  for (let i = w; i >= 0; --i) {
    if (states[i]) {
      return i
    }
  }
  // 默认返回0
  return 0
}

const result = knapsack([2, 2, 4, 6, 3], 5, 9)
console.log(result)