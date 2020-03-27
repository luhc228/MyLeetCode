/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }
  let res = []
  helper(1, root, res)
  return res
};

function helper(level, node, res) {
  if (!node) {
    return;
  }
  if (res.length < level) {
    res.unshift([])
  }
  res[res.length - level].push(node.val)

  if (node.left) {
    helper(level + 1, node.left, res)
  }

  if (node.right) {
    helper(level + 1, node.right, res)
  }
}