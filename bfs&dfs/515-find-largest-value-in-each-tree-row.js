/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：广度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]

  while (queue.length) {
    let max
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()
      if (max == null) {
        max = node.val
      } else {
        max = Math.max(node.val, max)
      }
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    res.push(max)
  }

  return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法二：深度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return []
  }
  let res = []
  helper(1, res, root)
  return res
};

function helper(level, res, node) {
  // 增加递归的终止条件
  if (!node) {
    return
  }
  if (res[level - 1] != null) {
    res[level - 1] = Math.max(res[level - 1], node.val)
  } else {
    res[level - 1] = node.val
  }
  if (node.left) {
    helper(level + 1, res, node.left)
  }

  if (node.right) {
    helper(level + 1, res, node.right)
  }
}