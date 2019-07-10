/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (board === null || board.length === 0) {
    return false;
  }
  
  return solve(board);  
};

var solve = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') {
        for (c = 1; c <= 9; c++) {
          c = c.toString();
          if (isValid(board, i, j, c)) {
            board[i][j] = c;
            // 递归
            if(solve(board)) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }

        return false;
      }
    }
  }
  
  return true;
}

var isValid = function(board, row, col, c) {
  // 行循环
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== '.' && board[i][col] === c) {
      return false;
    }
    if (board[row][i] !== '.' && board[row][i] === c) {
      return false;
    }
    
    if (board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + parseInt(i % 3)] !== '.' && board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + parseInt(i % 3)] === c) {
      return false;
    }
  }
  
  return true;
}
