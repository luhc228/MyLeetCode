let visited = new Set()

function bfs(graph, start, end) {
  let queue = []
  queue.append([start])
  visited.add(start)

  while (!!queue.length) {
    node = queue.pop()
    visited.add(node)

    process(node)
    nodes = generateRelatedNodes(node)
    queue.push(nodes)
  }
}