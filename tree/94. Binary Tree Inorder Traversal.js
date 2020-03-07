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