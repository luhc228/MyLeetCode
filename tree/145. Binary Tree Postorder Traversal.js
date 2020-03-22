/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：使用递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  var res = []
  helper(res, root)
  return res
};

function helper(res, root) {
  if (root !== null) {
    if (root.left !== null) {
      helper(res, root.left)
    }

    if (root.right !== null) {
      helper(res, root.right)
    }

    res.push(root.val)
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
var postorderTraversal = function (root) {
  const WHITE = 0
  const GRAY = 1
  let stack = [[WHITE, root]]
  let res = []
  while (stack.length) {
    [color, node] = stack.pop()
    if (node !== null) {
      if (color === WHITE) {
        stack.push([GRAY, node])
        stack.push([WHITE, node.right])
        stack.push([WHITE, node.left])
      } else {
        res.push(node.val)
      }
    }
  }

  return res
};