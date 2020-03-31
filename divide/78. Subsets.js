/**
 * 方法一：递归
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]]
  for (let num of nums) {
    let curLen = res.length;
    for (let i = 0; i < curLen; i++) {
      res.push([...res[i], num])
    }
  }
  return res
};

/**
 * 方法二：分治
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  let len = nums.length
  function backtrack(curSol, index, nums) {
    // termintor
    if (index === len) {
      res.push(curSol)
      return
    }
    // process and drill down
    backtrack([...curSol, nums[index]], index + 1, nums)
    backtrack([...curSol], index + 1, nums)
  }
  backtrack([], 0, nums, res)
  return res
};

