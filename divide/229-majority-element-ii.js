/**
 * hashMap
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map()
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  let res = []
  map.forEach((value, key) => {
    if (value > Math.floor(nums.length / 3)) {
      res.push(key)
    }
  })
  return res
};
// 摩尔投票法
// 如果至多选一个代表，那他的票数至少要超过一半（⌊ 1/2 ⌋）的票数；
// 如果至多选两个代表，那他们的票数至少要超过⌊ 1/3 ⌋的票数；
// 如果至多选m个代表，那他们的票数至少要超过⌊ 1/(m+1) ⌋的票数。
// 1、如果投A（当前元素等于A），则A的票数++;
// 2、如果投B（当前元素等于B），B的票数++；
// 3、如果A,B都不投（即当前与A，B都不相等）,那么检查此时A或B的票数是否减为0，如果为0,则当前元素成为新的候选人；如果A,B两个人的票数都不为0，那么A,B两个候选人的票数均减一。
var majorityElement = function (nums) {
  let res = []
  let candNum1 = nums[0], count1 = 0
  let candNum2 = nums[0], count2 = 0
  // 投票过程
  for (let num of nums) {
    if (candNum1 === num) {
      count1++
      continue
    }
    if (candNum2 === num) {
      count2++
      continue
    }
    if (count1 === 0) {
      count1 = 1
      candNum1 = num
      continue
    }
    if (count2 === 0) {
      count2 = 1
      candNum2 = num
      continue
    }
    count1--
    count2--
  }
  // 校验过程（计数过程）
  // 找到了两个候选人之后，需要确定票数是否满足大于 N/3
  count1 = 0
  count2 = 0
  for (let num of nums) {
    if (num === candNum1) {
      count1++
    } else if (num === candNum2) {  // 这里需要使用else if 避免在结果中出现多个重复元素，例如[1, 1,]这些
      count2++
    }
  }
  const len = nums.length;
  if (count1 > Math.floor(len / 3)) {
    res.push(candNum1)
  }
  if (count2 > Math.floor(len / 3)) {
    res.push(candNum2)
  }
  return res
};