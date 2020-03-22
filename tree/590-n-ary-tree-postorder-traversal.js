/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = []
  helper(root, res)
  return res
};

function helper(node, res) {
  if (node == null) {
    return
  }
  if (node.children) {
    for (let child of node.children) {
      helper(child, res)
    }
  }

  res.push(node.val)
}