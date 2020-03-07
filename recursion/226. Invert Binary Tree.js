/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) {
    return null
  }

  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.right = left
  root.left = right

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