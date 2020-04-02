/**
 * 方法一：复制一个board进行生命游戏模拟
 * 时间复杂度：O(m*n*8)
 * 空间复杂度 O(m*n)
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const neighbors = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
  ]
  const rows = board.length;
  const cols = board[0].length;
  // 复制一份board
  let copyBoard = []
  for (let i = 0; i < rows; i++) {
    let temp = []
    for (let j = 0; j < cols; j++) {
      temp.push(board[i][j])
    }
    copyBoard.push(temp)
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 统计活细胞的个数
      let liveNeighbors = 0;
      for (let neighbor of neighbors) {
        const r = row + neighbor[0]
        const c = col + neighbor[1]
        if ((r < rows && r >= 0) && (c < cols && c >= 0) && (copyBoard[r][c] === 1)) {
          liveNeighbors++
        }
      }
      // 规则1 & 规则3
      if ((copyBoard[row][col] === 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = 0
      }
      // 规则4
      if (copyBoard[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 1
      }
    }
  }
};

var gameOfLife = function (board) {
  const neighbors = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
  ]
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 统计活细胞的个数
      let liveNeighbors = 0;
      for (let neighbor of neighbors) {
        const r = row + neighbor[0]
        const c = col + neighbor[1]
        if ((r < rows && r >= 0) && (c < cols && c >= 0) && (Math.abs(board[r][c]) === 1)) {
          liveNeighbors++
        }
      }
      // 规则1 & 规则3
      if ((board[row][col] === 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
        // -1代表该细胞过去是活的，现在是死的
        board[row][col] = -1
      }
      // 规则4
      if (board[row][col] === 0 && liveNeighbors === 3) {
        // 2代表该细胞过去是死的，现在是活的
        board[row][col] = 2
      }
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] > 0) {
        board[row][col] = 1
      } else {
        board[row][col] = 0
      }
    }
  }
};