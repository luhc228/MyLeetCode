// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length;
  let temp

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

const arr = [6, 5, 4, 1, 9]
console.log(bubbleSort(arr))