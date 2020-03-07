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