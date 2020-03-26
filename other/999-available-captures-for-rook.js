/**
 * @param {character[][]} board
 * @return {number}
 */
// R:代表车  B代表象  p代表卒
// 大写表示白棋
// 小写表示黑棋

var numRookCaptures = function (board) {
  let res = 0
  let Rx = 0
  let Ry = 0
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  // 找出R的位置
  for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      if (board[i][j] === 'R') {
        Rx = i
        Ry = j
        break
      }
    }
  }

  // 向四个方向走
  for (let i = 0; i < 4; ++i) {
    for (let step = 0; ; step++) {
      const tx = Rx + step * dx[i]
      const ty = Ry + step * dy[i]
      if (tx < 0 || tx >= 8 || ty < 0 || ty >= 8 || board[tx][ty] === 'B') {
        break
      }
      if (board[tx][ty] === 'p') {
        res++;
        break;
      }
    }
  }

  return res
};