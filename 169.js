/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let numMap = new Map(), majority = 0, sum = 0;
  
  const length = nums.length;
  for (let i = 0; i < length; i++) {
      let currentNum = nums[i];
      
      if (numMap.has(currentNum)) {
          numMap.set(currentNum, numMap.get(currentNum) + 1);
      } else {
          numMap.set(currentNum, 1);
      }
  }
  
  numMap.forEach((value, key) => {
      if (sum < value) {
          majority = key;
          sum = value;
      }
  })
  
  return majority;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0, maj = 0;
  nums.forEach((num) => {
      if (count === 0) {
          maj = num;
      }
      if (maj === num) {
          count += 1;
      } else {
          count -= 1;
      }
  })
  return maj;
};
