/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * solution1 使用递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  helper(root, res)
  return res;
};

function helper(root, res) {
  if (root === null) {
    return;
  }
  res.push(root.val)
  if (root.left !== null) {
    helper(root.left, res)
  }

  if (root.right !== null) {
    helper(root.right, res)
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 颜色标记法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const WHITE = 0
  const GRAY = 1
  let stack = [[WHITE, root]]
  let res = []
  while (stack.length) {
    [color, node] = stack.pop()
    if (node) {
      if (color === WHITE) {
        stack.push([WHITE, node.right])
        stack.push([WHITE, node.left])
        stack.push([GRAY, node])
      } else {
        res.push(node.val)
      }
    }
  }

  return res
};
