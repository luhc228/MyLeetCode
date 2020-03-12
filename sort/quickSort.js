// 快排
function quickSort(arr, left, right) {
  const len = arr.length
  let partitionIndex
  let left = typeof left !== 'number' ? 0 : left;
  let right = typeof right !== 'number' ? 0 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
}

function partition(arr, left, right) {
  let pivot = right;
  let counter = left;
  for (let i = left; i < right; i++) {
    if (a[i] < a[pivot]) {
      // 交换
      counter++
    }
  }

  // 交换 pivot 和  counter的元素

  return counter;
}

