/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 广度优先 时间复杂度O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
      return 0;
  }
  
  let depth = 0;
  // 建立队列
  let queue = [];
  queue.push(root);
  
  while (!!queue.length) {
      let levelSize = queue.length;
      
      for (i = 0; i < levelSize; i++) {
          node = queue.shift();
          if (node.left !== null) {
              queue.push(node.left)
          };
           if (node.right !== null) {
              queue.push(node.right)
          }
      }
      depth += 1;
  }

  return depth;
};

/**
 * 深度优先 时间复杂度O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  };
  