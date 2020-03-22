/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * solution1：使用递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalSolution1 = function (root) {
  let res = [];
  helper(root, res)
  return res;
};

function helper(root, res) {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, res)
    }
    res.push(root.val)
    if (root.right !== null) {
      helper(root.right, res)
    }
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
 * solution2 使用栈的方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = []
  let stack = []
  let current = root
  while (current !== null || !!stack.length) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    res.push(current.val)
    current = current.right
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
 * 颜色标记法
 * ref: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/yan-se-biao-ji-fa-yi-chong-tong-yong-qie-jian-ming/
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const WHITE = 0
  const GRAY = 1
  let res = []
  let stack = [[WHITE, root]]
  while (stack.length) {
    [color, node] = stack.pop()
    if (node) {
      if (color === WHITE) {
        stack.push([WHITE, node.right])
        stack.push([GRAY, node])
        stack.push([WHITE, node.left])
      } else {
        res.push(node.val)
      }
    }
  }

  return res
};