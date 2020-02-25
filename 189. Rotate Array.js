// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function(nums, k) {
// // 遍历k % n次
//     for (let i = 0; i < k % n; i++) {
//         const popNum = nums.pop()
//         nums.unshift(popNum)
//     }

//     return nums
// };

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function(nums, k) {
//     // 切片+插入
//     k %= nums.length
//     const removedNums = nums.splice(-k, k);
//     const result = nums.unshift(...removedNums)
//     return result
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 三次反转方法  循环左移  循环右移的做法分别是？
  k %= nums.length
  // 反转所有数字后
  nums.reverse()
  // 反转前 k 个数字后
  nums.splice(0, k, ...(nums.slice(0, k).reverse()))
  console.log(nums)
  // 反转后 n-k 个数字后
  nums.splice(k, nums.length - k, ...(nums.slice(k, nums.length).reverse()))

  return nums
};