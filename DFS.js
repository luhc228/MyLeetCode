// 递归
viseted = new Set()

const dfs = (node, visited) => {
  visited.push(node);

  node.children().map((next_node) => {
    if (!visited.has(next_node)) {
      dfs(next_node, visited)
    }
  })
}