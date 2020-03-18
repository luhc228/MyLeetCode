var moveZeroes = function (nums) {
  // 记录非0元素的下标
  let j = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }

  for (let i = j, len = nums.length; i < len; i++) {
    nums[i] = 0
  }
}

var moveZeroes = function (nums) {
  // 记录非0元素的下标
  let j = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (i !== j) {
        nums[i] = 0
      }
      j += 1
    }
  }
}