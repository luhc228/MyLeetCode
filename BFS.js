const BFS = (graph, start, end) => {
  let queue = [];
  queue.push([start])
  // 标记 visited 是一个set
  visited.add(start)

  while (!!queue.length) {
    node = queue.pop()
    visited.add(node)
    // 对node 进行处理
    process(node)
    // 找子节点
    nodes = generateRelatedNodes(node);
    queue.push(nodes);
  }
}