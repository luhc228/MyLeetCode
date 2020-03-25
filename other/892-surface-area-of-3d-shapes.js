/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let len = grid.length;
  let area = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let v = grid[i][j]
      if (v > 0) {
        // 一个柱体中：2个底面 + 所有的正方体都贡献了4个侧面面积
        area += (v << 2) + 2
        // 减掉 i 与 i - 1相贴的两份表面积
        area -= i > 0 ? Math.min(v, grid[i - 1][j]) << 1 : 0;
        // 减掉 j 与 j - 1 相贴的两份表面积
        area -= j > 0 ? Math.min(v, grid[i][j - 1]) << 1 : 0;
      }
    }
  }

  return area
};