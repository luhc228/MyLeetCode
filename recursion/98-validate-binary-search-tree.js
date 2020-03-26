/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 使用中序遍历的思想+栈
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) {
    return true
  }
  let WHITE = 0
  let YELLOW = 1
  let prev = null
  let stack = [[WHITE, root]]
  while (stack.length) {
    const [color, node] = stack.pop()
    if (color == WHITE) {
      if (node.right) {
        stack.push([WHITE, node.right])
      }
      stack.push([YELLOW, node])
      if (node.left) {
        stack.push([WHITE, node.left])
      }
    } else {
      if (prev !== null) {
        if (prev < node.val) {
          prev = node.val
        } else {
          return false
        }
      } else {
        prev = node.val
      }
    }
  }

  return true
};

// 使用递归
var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity)
};

function validate(node, min, max) {
  if (node == null) {
    return true
  }
  if (node.val <= min || node.val >= max) {
    return false
  }
  // 利用二叉搜索树的特点
  return validate(node.left, min, node.val) && validate(node.right, node.val, max)
}