/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归法：注意的是只有一个叶子节点的情况，最小的树深度是2
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  return (left && right) ? Math.min(left, right) + 1 : 1 + left + right
};