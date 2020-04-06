/**
 * 回溯算法 + “备忘录”
 */

let maxW = 0// 结果值，默认为Number.MIN_SAFE_INTEGER
let weight = [2, 2, 4, 6, 3] // 物体重量
let n = 5 // 物品个数
let w = 9 // 背包承受的最大重量
let mem = []
// 记录计算好了的f(i, cw)
for (let i = 0; i < n; i++) {
  mem.push([])
}
// i表示当前决策第几个物品是否装入背包 cw表示当前背包中物品的总重量
function f(i, cw) {
  if (i === n || cw === w) {
    if (cw > maxW) {
      maxW = cw
    }
    return;
  }
  if (mem[i][cw]) return; // 已经计算过了的，就不再计算了
  mem[i][cw] = true;
  f(i + 1, cw) // 选择不装第i个物品
  if (cw + weight[i] <= w) {
    f(i + 1, weight[i] + cw) // 选择装第i个物品
  }
}

f(0, 0)
console.log(maxW)