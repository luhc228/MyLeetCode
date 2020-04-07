function minDist(matrix, n) {
  let states = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += matrix[i][0]
    states[i] = [sum]
  }
  sum = 0
  for (let j = 0; j < n; j++) {
    sum += matrix[0][j]
    states[0][j] = sum
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      states[i][j] = Math.min(states[i - 1][j], states[i][j - 1]) + matrix[i][j]
    }
  }

  return states[n - 1][n - 1]
}

let matrix = [[1, 3, 5, 9], [2, 1, 3, 4], [5, 2, 6, 7], [6, 8, 4, 3]]
console.log(minDist(matrix, 4))