/**
 * 
 * @param {number[]} items 商品价格
 * @param {number} n 商品个数
 * @param {number} w 满减条件
 */
function double11advance(items, n, w) {
  let states = []
  for (let i = 0; i < n; i++) {
    states.push([])
  }
  states[0][0] = true
  if (items[0] <= 3 * w) { // 超过3*w就没有价值了
    states[0][items[0]] = true
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w * 3; j++) { // 不买第i商品
      if (states[i - 1][j]) {
        states[i][j] = true
      }
    }
    for (let j = 0; j <= w * 3 - items[i]; j++) { //买第i个商品
      if (states[i - 1][j]) {
        states[i][j + items[i]] = true
      }
    }
  }
  let j;
  for (j = w; j < 3 * w + 1; ++j) {
    if (states[n - 1][j]) {
      break; // 输出结果大于等于w的最小值
    }
  }
  if (j === 3 * w + 1) {
    return; // 没有解
  }
  for (let i = n - 1; i >= 1; i--) { // i 表示行 即商品的个数 j代表列
    if (j - items[i] >= 0 && states[i - 1][j - items[i]]) {
      console.log(items[i] + " ")
      j = j - items[i]
    }
  }
  if (j != 0) {
    console.log(items[0])
  }
}

double11advance([100, 200, 300, 400], 4, 500)