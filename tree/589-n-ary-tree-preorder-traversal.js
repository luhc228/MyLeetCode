/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * 方法一：递归
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = []

  helper(root, res)
  return res
};

function helper(root, res) {
  if (root == null) {
    return
  }

  if (root) {
    res.push(root.val)

    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        helper(root.children[i], res)
      }
    }
  }
}

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) {
    return []
  }

  let res = []
  let stack = [root]

  while (stack.length) {
    let node = stack.pop()
    if (node) {
      res.push(node.val)
    }

    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i])
    }
  }

  return res
};