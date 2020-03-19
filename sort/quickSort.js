/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums)
  return nums
};

function quickSort(arr, left, right) {
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;
  if (left < right) {
    const pviot = partition(arr, left, right)
    quickSort(arr, left, pviot - 1)
    quickSort(arr, pviot + 1, right)
  }
}

function partition(arr, begin, end) {
  let pviot = end
  let counter = begin
  for (let i = begin; i < end; i++) {
    if (arr[i] < arr[pviot]) {
      const temp = arr[counter]
      arr[counter] = arr[i]
      arr[i] = temp
      counter++
    }
  }

  const temp = arr[pviot]
  arr[pviot] = arr[counter]
  arr[counter] = temp
  return counter
}