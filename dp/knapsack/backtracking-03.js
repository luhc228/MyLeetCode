/**
 * 对于一组不同重量、不同价值、不可分割的物品，
 * 我们选择将某些物品装入背包，在满足背包最大重量限制的前提下，
 * 使得背包中可装入物品的总价值最大
 */
let maxV = Number.MIN_SAFE_INTEGER // 结果存在maxV中
let maxVList = [];
let weights = [2, 2, 4, 6, 3] // 物体的重量
let values = [3, 4, 8, 9, 6] // 物体的价值
let n = 5; // 物体的个数
let w = 9; // 背包承受的最大重量

/**
 * 
 * @param {number} i 当前统计的物体个数 
 * @param {number} cw 当前背包的总重量
 * @param {*} cv 当前总的价值
 */
function f(i, cw, cv) {
  // terminator
  if (i === n || cw === w) {
    if (cv > maxV) {
      maxVList.push(cv)
      maxV = cv
    }
    return
  }

  f(i + 1, cw, cv)  // 不装第i个物品

  if (cw + weights[i] <= w) {
    f(i + 1, cw + weights[i], cv + values[i]) // 装第i个物品
  }
}

f(0, 0, 0)
console.log(maxV)
console.log(maxVList)