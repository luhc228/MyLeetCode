/**
 * 方法一：排序+取中间值
 * 题目说：多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 也就是一个有序的数组，相同元素总是相邻的，中间的那个元素一定为众数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  const mid = Math.floor(nums.length / 2)
  return nums[mid]
};

// 方法二：摩尔投票法
// 候选人（candNum）初始值为nums[0], 票数count初始化为1
// 当遇到与candNum相同的数，则票数count加一，否则，票数减一
// 当票数为0，更换候选人（candNum），并重置票数count为1
// 遍历完数组后，candNum就是最后的答案
var majorityElement = function (nums) {
  let candNum = nums[0];
  let count = 1
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] === candNum) {
      count++
    } else {
      if (--count === 0) {
        count = 1
        candNum = nums[i]
      }
    }
  }
  return candNum
};