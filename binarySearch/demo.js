// 已经排好序的数组
const arr = []
let target
let left = 0
let right = arr.length - 1
while (left <= right) {
  let mid = left + ((right - left) >> 1)

  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] > target) {
    right = mid - 1
  } else {
    left = mid + 1
  }
}