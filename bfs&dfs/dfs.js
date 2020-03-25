// 递归写法
visited = new Set()

function dfs(node, visited) {
  if (visited.has(nextNode)) {
    return
  }
  visited.add(node)

  for (let nextNode of node.children) {
    if (!visited.has(nextNode)) {
      dfs(nextNode, visited)
    }
  }
}