/**
 * 回溯算法的实现
*/

// 结果值存放
let maxW = Number.MIN_SAFE_INTEGER
// 物体重量
let weight = [2, 2, 4, 6, 3]
// 物体个数
let n = 5
// 背包承受的最大重量
let w = 9

// i 代表将要决策第几个物品是否装入背包  cw 代表目前的总重量
function f(i, cw) {
  if (cw === w || i === n) {
    if (cw > maxW) {
      maxW = cw
    }
    return
  }

  f(i + 1, cw) // 选择不装第i个物品

  if (cw + weight[i] <= w) {
    f(i + 1, cw + weight[i]) // 选择装第i个物品
  }
}

f(0, 0)

console.log(maxW)