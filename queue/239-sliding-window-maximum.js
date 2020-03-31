/**
 * 方法一：暴力法 
 *        每组循环 时间复杂度：O(n*k) 空间复杂度：O(n-k+1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  for (let i = 0, len = nums.length; i < len - k + 1; i++) {
    const temp = nums.slice(i, i + k)
    temp.sort((a, b) => b - a)
    res.push(temp[0])
  }
  return res
};

// 方法二：单调队列 
var maxSlidingWindow = function (nums, k) {
  if (!nums) {
    return []
  }
  // window数组用来保存各个需要保留的元素下标值
  let window = []
  // res数组保存结果
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    // 如果队伍头的值不在窗口范围内，直接删除该值得下标
    if (i >= window[0] + k) {
      window.shift()
    }
    // 如果当前元素的值大于window中的下标值对应的元素的值，将其pop出去
    while (window.length !== 0 && nums[window[window.length - 1]] < nums[i]) {
      window.pop()
    }
    // 把新元素的下标保存到窗口数组中
    window.push(i)
    // 保证新元素进来后，窗口数组的第一个是当前窗口中最大的值
    if (i >= k - 1) {
      res.push(nums[window[0]])
    }
  }

  return res
};