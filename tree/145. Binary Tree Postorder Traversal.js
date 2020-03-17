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