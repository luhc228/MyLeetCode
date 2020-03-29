/**
 * bfs 
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let N = grid.length
  let queue = []
  // 将所有陆地的格子位置放进队列中
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }
  // 如果地图上只有陆地或者海洋 返回-1
  if (queue.length === 0 || queue.length === N * N) {
    return -1
  }

  let distance = -1
  while (queue.length) {
    // 遍历的层数就是大陆和海洋的距离
    distance++
    // 取出每一层的所有节点
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      const [i, j] = node
      if (i - 1 >= 0 && grid[i - 1][j] === 0) {
        // 已访问过的节点记作2
        grid[i - 1][j] = 2
        queue.push([i - 1, j])
      }
      if (i + 1 < N && grid[i + 1][j] === 0) {
        // 已访问过的节点记作2
        grid[i + 1][j] = 2
        queue.push([i + 1, j])
      }
      if (j - 1 >= 0 && grid[i][j - 1] === 0) {
        // 已访问过的节点记作2
        grid[i][j - 1] = 2
        queue.push([i, j - 1])
      }
      if (j + 1 < N && grid[i][j + 1] === 0) {
        // 已访问过的节点记作2
        grid[i][j + 1] = 2
        queue.push([i, j + 1])
      }
    }
  }
  return distance
};