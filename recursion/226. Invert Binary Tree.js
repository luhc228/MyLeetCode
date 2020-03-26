/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 使用递归
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // terminal
  if (!root) {
    return null
  }
  // process 左右子树交换
  let temp = root.left
  root.left = root.right
  root.right = temp
  // drill down 下一层递归
  invertTree(root.left)
  invertTree(root.right)
  // reverse

  return root
};

var invertTree = function (root) {
  if (root === null) {
    return null
  }

  invertTree(root.left)
  var temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  return root
}

// 使用BFS 广度优先遍历 用队列维护
var invertTree = function (root) {
  if (!root) {
    return null
  }
  let queue = [root]

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()
      let temp = node.left
      node.left = node.right
      node.right = temp
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  return root
};

// 使用栈代替递归
var invertTree = function (root) {
  if (!root) {
    return null
  }
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    let temp = node.left
    node.left = node.right
    node.right = temp
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return root
};