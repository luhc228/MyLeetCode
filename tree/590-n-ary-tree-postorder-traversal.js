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
  const WHITE = 0
  const GRAY = 1

  let stack = [[WHITE, root]]
  let res = []

  while (stack.length) {
    const [color, node] = stack.pop()
    if (node) {
      if (color === WHITE) {
        if (node.children) {
          stack.push([GRAY, node])
          for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push([WHITE, node.children[i]])
          }
        }
      } else {
        res.push(node.val)
      }
    }
  }

  return res
};

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
  if (root == null) {
    return []
  }

  let res = []
  let stack = [root]

  while (stack.length) {
    node = stack.pop()
    if (node) {
      res.push(node.val)
    }
    for (let c of node.children) {
      stack.push(c)
    }
  }

  res.reverse()
  return res
};