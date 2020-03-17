/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  let x = 0, y = 0, di = 0
  let ans = 0

  let obstacleSet = new Set()

  if (obstacles.length) {
    obstacles.forEach(item => {
      obstacleSet.add(`${item[0]}-${item[1]}`)
    })
  }

  commands.forEach(item => {
    if (item === -2) {
      di = (di + 3) % 4
    } else if (item === -1) {
      di = (di + 1) % 4
    } else {
      for (let i = 0; i < item; i++) {
        if (!obstacleSet.has(`${x + dx[di]}-${y + dy[di]}`)) {
          x += dx[di]
          y += dy[di]
          ans = Math.max(ans, x * x + y * y)
        }
      }
    }
  })
  return ans
};