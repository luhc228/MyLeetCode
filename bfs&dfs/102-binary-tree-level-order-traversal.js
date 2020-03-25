/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：bfs 维护一个队列
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }

  let res = []
  // 维护一个队列
  let queue = [root]

  while (queue.length) {
    let tmp = []
    for (let i = 0, len = queue.length; i < len; i++) {
      // 从队列的头部取出节点
      const curNode = queue.shift()
      tmp.push(curNode.val)
      if (curNode.left) {
        // 将节点添加到队列的尾部
        queue.push(curNode.left)
      }
      if (curNode.right) {
        // 将节点添加到队列的尾部
        queue.push(curNode.right)
      }
    }
    res.push(tmp)
  }

  return res
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法二：dfs 使用递归
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }

  let res = []
  dfs(1, root, res)

  return res
};

function dfs(level, node, res) {
  if (res.length < level) {
    res.push([])
  }

  res[level - 1].push(node.val)
  if (node.left) {
    dfs(level + 1, node.left, res)
  }

  if (node.right) {
    dfs(level + 1, node.right, res)
  }
}