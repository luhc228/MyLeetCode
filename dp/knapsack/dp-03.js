/**
 * dp
 * @param {*} weights 
 * @param {*} values 
 * @param {*} n 
 * @param {*} w 
 */
function knapsack3(weights, values, n, w) {
  let states = []
  for (let i = 0; i < n; i++) {
    states.push([])
    for (let j = 0; j < w + 1; j++) {
      states[i][j] = -1
    }
  }
  states[0][0] = 0
  if (weights[0] <= w) {
    states[0][weights[0]] = values[0]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < w + 1; j++) { // 不选择第i个物品
      if (states[i - 1][j] >= 0) {
        states[i][j] = states[i - 1][j]
      }
    }
    for (let j = 0; j < w - weights[i]; j++) { // 选择第i个物品
      if (states[i - 1][j] >= 0) {
        let v = states[i - 1][j] + values[i]
        if (v > states[i][j + weights[i]]) {
          states[i][j + weights[i]] = v
        }
      }
    }
  }

  let maxValue = -1
  for (let j = 0; j <= w; j++) {
    if (states[n - 1][j] > maxValue) {
      maxValue = states[n - 1][j]
    }
  }
  return maxValue
}

const result = knapsack3([2, 2, 4, 6, 3], [3, 4, 8, 9, 6], 5, 9)
console.log(result)