/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 1) {
    return [];
  }
  
  let result = [];
  
  var cols = new Set(), pie = new Set(), na = new Set();
  DFS(n, 0, [], cols, pie, na, result);
  
  return formatResult(result, n);
};

var DFS = function(n, row, currentState, cols, pie, na, result) {
  if (row === n) {
    console.log('currentState', currentState);
    result.push(currentState);
    return;
  }
  
  for (let col = 0; col < n; col++) {
    if (cols.has(col) || pie.has(row - col) || na.has(row + col)) {
      continue;
    } 
    cols.add(col);
    console.log('add Col', col, row)
    pie.add(row - col);
    na.add(row + col);

    DFS(n, row + 1, currentState.concat(col), cols, pie, na, result);

    console.log(cols, col);
    cols.delete(col);
    pie.delete(row - col);
    na.delete(row + col);
    }
  
}

var formatResult = function(result, n) {
  let formatResult = [];
  
  result.forEach((item) => {
    let list = [];

    item.forEach((ele) => {
      let initResult = new Array(n).fill('.');
      initResult[ele] = 'Q';
      list.push(initResult.join(''));
    })
    
    formatResult.push(list);
  })
  
  return formatResult;
}