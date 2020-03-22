/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  helper(root, res)
  return res
};

function helper(root, res, level) {
  if (root == null) {
    return
  }

  level = typeof level === 'number' ? level : 0

  if (root) {
    if (res[level]) {
      let temp = res[level];
      temp.push(root.val)
      res[level] = temp
    } else {
      res[level] = [root.val]
    }

    level += 1
    for (let i = 0; i < root.children.length; i++) {
      helper(root.children[i], res, level)
    }
  }
}