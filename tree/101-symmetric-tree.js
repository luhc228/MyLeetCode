/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：dfs 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return isMirror(root.left, root.right)
};

function isMirror(r1, r2) {
  if (!r1 && !r2) {
    return true
  }
  if (!r1 || !r2) {
    return false
  }
  if (r1.val !== r2.val) {
    return false
  }
  return isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
}

// bfs 队列
var isSymmetric = function (root) {

  let queue = [root, root]

  while (queue.length) {
    const n1 = queue.shift()
    const n2 = queue.shift()
    if (n1 === null && n2 === null) {
      continue
    }
    if (n1 === null || n2 === null) {
      return false
    }
    if (n1.val !== n2.val) {
      return false
    }

    queue.push(n1.left)
    queue.push(n2.right)
    queue.push(n1.right)
    queue.push(n2.left)
  }

  return true
};

